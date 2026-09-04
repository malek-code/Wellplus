const CARDS = [
  { id:'visa4417', brand:'Visa', num:'•••• 4417', exp:'08/28', name:'Iva Jurašin', icon:'brand-visa' },
  { id:'mc9032', brand:'Mastercard', num:'•••• 9032', exp:'11/27', name:'Iva Jurašin', icon:'brand-mastercard' }
];
const BANK = { iban:'HR61 2340 0091 1100 0001 9', bank:'Privredna banka Zagreb', model:'HR00', payee:'ZU Ljekarne Švaljek, Kralja Tomislava 24, 49246 Marija Bistrica' };

function CopyRow({ label, value, mono = true }) {
  const [done, setDone] = React.useState(false);
  const copy = () => { try { navigator.clipboard.writeText(value); } catch (e) {} setDone(true); setTimeout(()=>setDone(false), 1600); };
  return (
    <div className="copyrow">
      <span className="l">{label}</span>
      <span className="v" style={mono ? {fontFamily:'var(--font-label)'} : undefined}>{value}</span>
      <button onClick={copy} aria-label={'Copy ' + label}><i className={'ti ti-' + (done ? 'check' : 'copy')}></i></button>
    </div>
  );
}

function CardWallet({ cards, value, onChange, onAdd, onBack, onDone, modal }) {
  return (
    <Shell title="Pay by card" modal={modal} onBack={onBack} footer={<Footer cta="Done" onClick={onDone} disabled={!value} />}>
      <SecLabel aside={cards.length + ' saved'}>Your cards</SecLabel>
      <div style={{display:'flex',flexDirection:'column',gap:10}}>
        {cards.map(c=>(
          <button className="opt" key={c.id} role="radio" aria-checked={value===c.id} onClick={()=>onChange(c.id)}>
            <span className="dot"></span>
            <span style={{textAlign:'left',minWidth:0}}>
              <span className="t" style={{display:'flex',alignItems:'center',gap:8}}><i className={'ti ti-' + c.icon} style={{fontSize:18,color:'var(--sage-500)'}}></i>{c.brand} {c.num}</span>
              <span className="s" style={{display:'block'}}>Expires {c.exp} · {c.name}</span>
            </span>
          </button>
        ))}
      </div>
      <button className="ghostbtn" onClick={onAdd}><i className="ti ti-plus" style={{fontSize:16}}></i>Add a card</button>
      <Mechanic items={[
        ['lock','Cards are stored by the bank, tokenised. e24 never sees the full number.'],
        ['shield-check','Every payment is confirmed with your bank before the order is sent to the pharmacy.']
      ]} />
    </Shell>
  );
}

function CardForm({ onCancel, onSave, modal }) {
  const [num, setNum] = React.useState('');
  const [exp, setExp] = React.useState('');
  const [cvc, setCvc] = React.useState('');
  const [name, setName] = React.useState('');
  const [save, setSave] = React.useState(true);
  const digits = num.replace(/\D/g,'');
  const fmt = digits.replace(/(.{4})/g,'$1 ').trim();
  const ready = digits.length >= 15 && exp.length >= 4 && cvc.length >= 3 && name.trim();
  const brand = digits.startsWith('5') ? 'Mastercard' : 'Visa';
  return (
    <Shell title="Add a card" modal={modal} onBack={onCancel} footer={<Footer cta="Save card" onClick={()=>onSave({ id:'c'+Date.now(), brand, num:'•••• ' + digits.slice(-4), exp, name, icon: brand === 'Visa' ? 'brand-visa' : 'brand-mastercard' })} disabled={!ready} />}>
      <div className="afield">
        <label>Card number</label>
        <div className="wrap"><i className="ti ti-credit-card"></i><input inputMode="numeric" value={fmt} placeholder="0000 0000 0000 0000" onChange={e=>setNum(e.target.value.slice(0,23))} /></div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
        <div className="afield">
          <label>Expires</label>
          <div className="wrap"><input inputMode="numeric" value={exp} placeholder="MM/YY" onChange={e=>setExp(e.target.value.slice(0,5))} /></div>
        </div>
        <div className="afield">
          <label>CVC</label>
          <div className="wrap"><input inputMode="numeric" value={cvc} placeholder="123" onChange={e=>setCvc(e.target.value.replace(/\D/g,'').slice(0,4))} /></div>
        </div>
      </div>
      <div className="afield">
        <label>Name on card</label>
        <div className="wrap"><input value={name} placeholder="Iva Jurašin" onChange={e=>setName(e.target.value)} /></div>
      </div>
      <div className="switchrow" style={{background:'var(--surface-card)',border:'1px solid var(--border-hairline)'}}>
        <div style={{flex:1,minWidth:0}}>
          <div className="t" style={{color:'var(--text-body)'}}>Save this card</div>
          <div className="s" style={{color:'var(--text-secondary)'}}>Stored by the bank for your next order.</div>
        </div>
        <button className="sw" role="switch" aria-checked={save} aria-label="Save this card" onClick={()=>setSave(!save)}></button>
      </div>
      <Mechanic items={[['lock','The number is sent straight to the bank over an encrypted connection.']]} />
    </Shell>
  );
}

function ThreeDS({ amount, card, onCancel, onDone, modal }) {
  const [code, setCode] = React.useState('123456');
  const [left, setLeft] = React.useState(120);
  const [busy, setBusy] = React.useState(false);
  const [err, setErr] = React.useState('');
  React.useEffect(() => {
    const id = setInterval(()=>setLeft(l => l > 0 ? l-1 : 0), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(left/60)).padStart(2,'0') + ':' + String(left%60).padStart(2,'0');
  const confirm = () => {
    setBusy(true);
    setTimeout(onDone, 1400);
  };
  return (
    <Shell title="Bank authentication" modal={modal} onBack={onCancel} footer={
      <div className="footer">
        <button className="cta" onClick={confirm} disabled={busy}>{busy ? 'Confirming…' : 'Confirm payment'}{busy ? null : <i className="ti ti-lock" style={{fontSize:18}}></i>}</button>
        <button className="ghostbtn" onClick={onCancel} disabled={busy}>Cancel payment</button>
      </div>
    }>
      <div className="bankhead">
        <span className="glyph"><i className="ti ti-building-bank"></i></span>
        <div>
          <MicroLabel>{BANK.bank}</MicroLabel>
          <div className="amt3ds">{eur(amount)}</div>
          <p className="tiny" style={{margin:'4px 0 0'}}>{card ? card.brand + ' ' + card.num : 'Card'} · Ljekarne Švaljek</p>
        </div>
      </div>
      <p className="body">We sent a six-digit code to +385 91 ••• 5678. It is filled in for you in this prototype — confirm to continue.</p>
      <div className="codeboxes" data-invalid={err ? 'true' : undefined}>
        {Array.from({length:6}).map((_,n)=><span key={n} data-filled={n < code.length}>{code[n] || ''}</span>)}
        <input inputMode="numeric" autoFocus value={code} onChange={e=>{setCode(e.target.value.replace(/\D/g,'').slice(0,6));setErr('');}} aria-label="Authentication code" />
      </div>
      {err ? <p className="tiny" style={{color:'var(--status-negative)',margin:0}}>{err}</p> : null}
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
        <span className="tiny">Code expires in <b style={{fontFamily:'var(--font-label)'}}>{mm}</b></span>
        <button className="alink" onClick={()=>{setLeft(120);setCode('123456');}}>Send a new code</button>
      </div>
      <Mechanic items={[
        ['lock','This screen is your bank\u2019s, shown inside the app. e24 never sees the code.'],
        ['coin','WellPlus points are added once the payment clears.']
      ]} />
    </Shell>
  );
}

function BankDetails({ amount, reference, onBack, onDone, inline }) {
  const body = (
    <React.Fragment>
      <div className="card" style={{display:'flex',flexDirection:'column',gap:2}}>
        <CopyRow label="Payee" value={BANK.payee} mono={false} />
        <CopyRow label="IBAN" value={BANK.iban} />
        <CopyRow label="Model" value={BANK.model} />
        <CopyRow label="Reference" value={reference} />
        <CopyRow label="Amount" value={eur(amount)} />
      </div>
      <Mechanic items={[
        ['coin','Points for this order are pending until the transfer clears.'],
        ['file-text','A payment slip with these details is also in the confirmation email.']
      ]} />
    </React.Fragment>
  );
  if (inline) return body;
  return (
    <Shell title="Bank transfer" onBack={onBack} footer={<Footer cta="Done" onClick={onDone} />}>
      <div className="ahead" style={{padding:0}}>
        <h1 style={{fontSize:24}}>Transfer the amount to complete the order</h1>
        <p>Use these details in your banking app. Quote the reference exactly — it is how the payment is matched to your order.</p>
      </div>
      {body}
    </Shell>
  );
}

function PaymentMethodsScreen() {
  const nav = useNav();
  const [cards, setCards] = React.useState(CARDS);
  const [value, setValue] = React.useState(CARDS[0].id);
  const [adding, setAdding] = React.useState(false);
  if (adding) return <CardForm onCancel={()=>setAdding(false)} onSave={c=>{ setCards(l=>[...l,c]); setValue(c.id); setAdding(false); }} />;
  return (
    <Shell title="Payment methods" onBack={nav.back} footer={<Footer cta="Save as default" onClick={nav.back} />}>
      <SecLabel aside={cards.length + ' saved'}>Your cards</SecLabel>
      <div style={{display:'flex',flexDirection:'column',gap:10}}>
        {cards.map(c=>(
          <button className="opt" key={c.id} role="radio" aria-checked={value===c.id} onClick={()=>setValue(c.id)}>
            <span className="dot"></span>
            <span style={{textAlign:'left',minWidth:0}}>
              <span className="t" style={{display:'flex',alignItems:'center',gap:8}}><i className={'ti ti-' + c.icon} style={{fontSize:18,color:'var(--sage-500)'}}></i>{c.brand} {c.num}</span>
              <span className="s" style={{display:'block'}}>Expires {c.exp} · {c.name}</span>
            </span>
            {value===c.id ? <span className="badge" data-kind="quiet" style={{marginLeft:'auto'}}>Default</span> : null}
          </button>
        ))}
      </div>
      <button className="ghostbtn" onClick={()=>setAdding(true)}><i className="ti ti-plus" style={{fontSize:16}}></i>Add a card</button>
      <SecLabel>Bank transfer</SecLabel>
      <div className="card" style={{display:'flex',flexDirection:'column',gap:2}}>
        <CopyRow label="Payee" value={BANK.payee} mono={false} />
        <CopyRow label="IBAN" value={BANK.iban} />
      </div>
      <Mechanic items={[
        ['lock','Cards are stored by the bank, tokenised. e24 never sees the full number.'],
        ['building-bank','Use the IBAN above with the reference from each order — never without it.']
      ]} />
    </Shell>
  );
}

Object.assign(window, { CARDS, BANK, CardWallet, CardForm, ThreeDS, BankDetails, CopyRow, PaymentMethodsScreen });
