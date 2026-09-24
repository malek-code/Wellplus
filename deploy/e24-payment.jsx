/* C-10: no saved-cards manager in the app; saving a card happens on the WSPay page. */
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
        ['lock','This screen is your bank\u2019s, shown inside the app. The app never sees the code.']
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
        ['coin','Points are credited when the payment is confirmed.'],
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

Object.assign(window, { BANK, ThreeDS, BankDetails, CopyRow });
