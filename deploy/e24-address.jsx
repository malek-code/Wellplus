const { ListRow, Field, TextInput, Switch, Banner, StatusBadge, Checkbox } = window.E24WellPlusDesignSystem_54c90b;

const LABELS = ['Home', 'Work', 'Other'];

const PHARMACIES = [
  { id:'ilica191', name:'Ljekarna Švaljek — Ilica 191', addr:'Ilica 191, 10000 Zagreb', dist:'0,4 km', hours:'07:00–21:00', free:'Ready today after 16:00', x:36, y:40 },
  { id:'kvatric', name:'Ljekarna Švaljek — Kvaternikov trg', addr:'Kvaternikov trg 12, 10000 Zagreb', dist:'1,8 km', hours:'07:00–20:00', free:'Ready today after 18:00', x:62, y:32 },
  { id:'dubrava', name:'Ljekarna Švaljek — Dubrava', addr:'Avenija Dubrava 47, 10040 Zagreb', dist:'4,6 km', hours:'08:00–20:00', free:'Ready tomorrow morning', x:56, y:70 },
  { id:'sesvete', name:'Ljekarna Švaljek — Sesvete', addr:'Ninska 1, 10360 Sesvete', dist:'11,2 km', hours:'07:30–20:00', free:'Ready tomorrow morning', x:20, y:62 }
];

const LOCKERS = [
  { id:'ilica', name:'Ilica 191', op:'Parcel locker', addr:'Ilica 191, 10000 Zagreb', dist:'0,4 km', hours:'Open 24 h', free:'Parcel locker', x:34, y:42 },
  { id:'vrbani', name:'Tommy Vrbani', op:'Pickup shop', addr:'Horvaćanska cesta 88, 10000 Zagreb', dist:'1,2 km', hours:'07:00–22:00', free:'Hand over at the counter', x:63, y:28 },
  { id:'arena', name:'Arena Centar', op:'Parcel locker', addr:'Vice Vukova 6, 10000 Zagreb', dist:'2,8 km', hours:'Open 24 h', free:'Parcel locker', x:54, y:69 },
  { id:'savska', name:'INA Savska', op:'Pickup shop', addr:'Savska cesta 144, 10000 Zagreb', dist:'3,1 km', hours:'Open 24 h', free:'Hand over at the counter', x:20, y:64 }
];

/* ---------- new / edit address ---------- */

const EMPTY = { label:'Home', name:'', street:'', extra:'', postcode:'', city:'', phone:'', note:'', def:true };

function AddressForm({ title, initial, onCancel, onSave, cta = 'Save address', first, modal }) {
  const [f, setF] = React.useState({ ...EMPTY, ...(initial || {}) });
  const [touched, setTouched] = React.useState(false);
  const set = k => e => setF({ ...f, [k]: e.target.value });
  const required = ['name', 'street', 'postcode', 'city', 'phone'];
  const missing = required.filter(k => !f[k].trim());
  const save = () => { if (missing.length) { setTouched(true); return; } onSave(f); };
  const err = k => touched && !f[k].trim();
  return (
    <Shell title={title} modal={modal} onBack={onCancel} footer={
      <div className="footer">
        {touched && missing.length ? <p className="tiny" style={{margin:0,color:'var(--text-negative,#C9694F)'}}>Fill in the {missing.length === 1 ? 'highlighted field' : 'highlighted fields'} to continue.</p> : null}
        <button className="cta" onClick={save}>{cta}<i className="ti ti-check" style={{fontSize:18}}></i></button>
      </div>
    }>
      {first ? <Banner tone="quiet">The name on this address becomes the name on your WellPlus card.</Banner> : null}
      <SecLabel>Label</SecLabel>
      <div className="chiprow">
        {LABELS.map(l => <button key={l} className="fchip" aria-pressed={f.label === l} onClick={() => setF({ ...f, label:l })}>{l}</button>)}
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:18}}>
        <Field label="Recipient" hint="Who the courier asks for."><TextInput placeholder="Name and surname" value={f.name} onChange={set('name')} aria-invalid={err('name')} className={err('name') ? 'invalid' : ''} /></Field>
        <Field label="Street and number"><TextInput placeholder="Ilica 128" value={f.street} onChange={set('street')} aria-invalid={err('street')} className={err('street') ? 'invalid' : ''} /></Field>
        <Field label="Floor, flat, entrance" hint="Optional. Helps the courier find you."><TextInput placeholder="3rd floor, flat 14" value={f.extra} onChange={set('extra')} /></Field>
        <div className="fieldrow">
          <Field label="Postcode"><TextInput placeholder="10000" inputMode="numeric" value={f.postcode} onChange={set('postcode')} aria-invalid={err('postcode')} className={err('postcode') ? 'invalid' : ''} /></Field>
          <Field label="City"><TextInput placeholder="Zagreb" value={f.city} onChange={set('city')} aria-invalid={err('city')} className={err('city') ? 'invalid' : ''} /></Field>
        </div>
        <Field label="Phone" hint="Used for delivery only."><TextInput type="tel" placeholder="+385 91 234 5678" value={f.phone} onChange={set('phone')} aria-invalid={err('phone')} className={err('phone') ? 'invalid' : ''} /></Field>
        <Field label="Note for the courier" hint="Optional."><TextInput placeholder="Ring the bell marked Zeljko" value={f.note} onChange={set('note')} /></Field>
      </div>
      <div className="card" style={{display:'flex',alignItems:'center',gap:14,padding:'14px 20px'}}>
        <span style={{flex:1,minWidth:0}}>
          <span style={{display:'block',fontSize:14,fontWeight:600,color:'var(--text-body)'}}>Use as my default address</span>
          <span style={{display:'block',fontSize:12,lineHeight:1.5,color:'var(--text-faint)',marginTop:3}}>Preselected at every checkout. You can still change it per order.</span>
        </span>
        <Switch checked={f.def} label="Default address" onChange={v => setF({ ...f, def:v })} />
      </div>
      <p className="tiny">Croatia only. We deliver to addresses and parcel lockers anywhere in the country.</p>
    </Shell>
  );
}

const fmt = f => [f.name, [f.street, f.extra].filter(Boolean).join(', '), `${f.postcode} ${f.city}`.trim(), f.phone].filter(Boolean).join('\n');

/* ---------- saved addresses (profile) ---------- */

function AddressesScreen() {
  const nav = useNav();
  const [list, setList] = React.useState(ADDRESSES);
  const [editing, setEditing] = React.useState(null);
  const [flash, setFlash] = React.useState('');

  if (editing) return (
    <AddressForm
      title={editing.id ? 'Edit address' : 'New address'}
      initial={editing.form}
      cta={editing.id ? 'Save changes' : 'Save address'}
      onCancel={() => setEditing(null)}
      onSave={f => {
        const entry = { id: editing.id || 'a' + Date.now(), t: f.label + (f.def ? ' · ' + f.name : ''), s: fmt(f), form:f, def:f.def };
        setList(l => {
          const next = editing.id ? l.map(a => a.id === editing.id ? entry : a) : [...l, entry];
          return f.def ? next.map(a => a.id === entry.id ? a : { ...a, def:false }) : next;
        });
        setFlash(editing.id ? 'Address updated.' : 'Address saved.');
        setEditing(null);
      }} />
  );

  return (
    <Shell title="Delivery addresses" onBack={nav.back} footer={
      <div className="footer"><button className="cta" onClick={() => setEditing({ form:null })}><i className="ti ti-plus" style={{fontSize:18}}></i>Add a new address</button></div>
    }>
      {flash ? <Banner tone="info" icon="check">{flash}</Banner> : null}
      <SecLabel aside={list.length + ' saved'}>Addresses</SecLabel>
      <div style={{display:'flex',flexDirection:'column',gap:10}}>
        {list.map(a => (
          <div className="addrcard" key={a.id}>
            <div className="hd">
              <span className="lbl">{(a.form && a.form.label) || a.t.split(' · ')[0]}</span>
              {a.def ? <StatusBadge tone="ok">Default</StatusBadge> : null}
            </div>
            <p className="body" style={{whiteSpace:'pre-line',margin:'8px 0 0'}}>{a.s}</p>
            {a.form && a.form.note ? <p className="tiny" style={{marginTop:6}}>Note: {a.form.note}</p> : null}
            <div className="acts">
              <button onClick={() => setEditing({ id:a.id, form: a.form || { ...EMPTY, label:a.t.split(' · ')[0], name:a.t.split(' · ')[1] || '', street:a.s.split('\n')[0].split(', ')[0], postcode:'10000', city:'Zagreb', phone:a.s.split('\n').pop(), def:!!a.def } })}><i className="ti ti-pencil"></i>Edit</button>
              {!a.def ? <button onClick={() => setList(l => l.map(x => ({ ...x, def:x.id === a.id })))}><i className="ti ti-star"></i>Make default</button> : null}
              {list.length > 1 ? <button className="rm" onClick={() => { setList(l => l.filter(x => x.id !== a.id)); setFlash('Address removed.'); }}><i className="ti ti-trash"></i>Remove</button> : null}
            </div>
          </div>
        ))}
      </div>
      <p className="tiny">The name on your default address is the name printed on your WellPlus card.</p>
    </Shell>
  );
}

/* ---------- place pickers (locker / pharmacy) ---------- */

function PlaceMap({ items, value, onPick, glyph }) {
  return (
    <div className="lockmap">
      <span className="street" style={{top:'34%'}}></span>
      <span className="street" style={{top:'72%'}}></span>
      <span className="street v" style={{left:'28%'}}></span>
      <span className="street v" style={{left:'66%'}}></span>
      <span className="me" style={{left:'46%',top:'52%'}}><i className="ti ti-current-location"></i></span>
      {items.map(l => (
        <button key={l.id} className="pin" aria-pressed={value === l.id} disabled={l.full} style={{left:l.x + '%',top:l.y + '%'}} onClick={() => onPick(l.id)} title={l.name}>
          <i className={'ti ti-' + glyph}></i>
        </button>
      ))}
      <span className="scale">1 km</span>
    </div>
  );
}

function PlacePicker({ title, items, value, onChange, onConfirm, onBack, cta, stepIndex, steps, amount, label, secLabel, aside, placeholder, glyph, mechanics, fullNote, modal }) {
  const [q, setQ] = React.useState('');
  const list = items.filter(l => (l.name + ' ' + l.addr).toLowerCase().includes(q.toLowerCase()));
  const sel = items.find(l => l.id === value);
  return (
    <Shell title={title} modal={modal} stepIndex={stepIndex} steps={steps} onBack={onBack} footer={
      <Footer label={sel ? (label ? label + ' · ' : '') + sel.name : null} amount={sel && amount != null ? amount : null} cta={cta} onClick={onConfirm} disabled={!sel} note={sel ? null : 'Choose a location to continue.'} />
    }>
      <div className="search">
        <i className="ti ti-search"></i>
        <input value={q} onChange={e => setQ(e.target.value)} placeholder={placeholder} aria-label={placeholder} />
        {q ? <button className="clear" onClick={() => setQ('')} aria-label="Clear"><i className="ti ti-x"></i></button> : null}
      </div>
      <PlaceMap items={list} value={value} onPick={onChange} glyph={glyph} />
      <SecLabel aside={aside ? list.length + ' ' + aside : null}>{secLabel}</SecLabel>
      <div style={{display:'flex',flexDirection:'column',gap:10}}>
        {list.map(l => (
          <button className="opt" key={l.id} role="radio" aria-checked={value === l.id} disabled={l.full} onClick={() => onChange(l.id)} style={l.full ? {opacity:.5,cursor:'default'} : null}>
            <span className="dot"></span>
            <span style={{textAlign:'left',minWidth:0,flex:1}}>
              <span className="t">{l.name}</span>
              <span className="s" style={{display:'block'}}>{l.addr}</span>
              <span className="lockmeta">
                <span><i className="ti ti-clock"></i>{l.hours}</span>
                <span className={l.full ? 'bad' : 'ok'}><i className={'ti ti-' + glyph}></i>{l.free}</span>
              </span>
            </span>
            <span className="dist">{l.dist}</span>
          </button>
        ))}
        {!list.length ? <div className="quiet"><p className="body" style={{margin:0}}>Nothing matches “{q}”. Try a street or a district.</p></div> : null}
      </div>
      {fullNote ? <p className="tiny">{fullNote}</p> : null}
      <div className="quiet">
        <ul className="mechanic">
          {mechanics.map(([icon, text]) => <li key={text}><i className={'ti ti-' + icon}></i><span>{text}</span></li>)}
        </ul>
      </div>
    </Shell>
  );
}

function LockerPicker(p) {
  return <PlacePicker {...p}
    title="Parcel locker" items={LOCKERS} glyph="package" label={p.carrier || 'DPD'}
    secLabel={(p.carrier || 'DPD') + ' collection points'} aside="near you" placeholder="Search by street or place"
    amount={p.showPrice === false ? null : 4.30}
    fullNote="A full locker cannot be chosen. Availability is checked again when the parcel is sent."
    mechanics={[['package','Lockers and counter hand-over points in other shops are both in this list — the type is shown on each location.'],['clock','Delivery is €4,30 for every option.']]}
    cta={p.cta || 'Use this locker'} />;
}

function PharmacyPicker(p) {
  return <PlacePicker {...p}
    title="Pick-up pharmacy" items={PHARMACIES} glyph="building-store"
    secLabel="Ljekarne Švaljek" aside="pharmacies" placeholder="Search by street or district"
    mechanics={[['bell','We notify you as soon as the order is ready to collect.'],['calendar','The order waits 5 days at the counter.'],['rosette-discount','Show your WellPlus QR at the register to use points instead.']]}
    cta={p.cta || 'Use this pharmacy'} />;
}

function LockerScreen() {
  const nav = useNav();
  const [sel, setSel] = React.useState('ilica');
  return <LockerPicker value={sel} onChange={setSel} onBack={nav.back} onConfirm={nav.back} cta="Save as my locker" showPrice={false} />;
}

Object.assign(window, { AddressesScreen, AddressForm, PlacePicker, LockerPicker, PharmacyPicker, LockerScreen, LOCKERS, PHARMACIES, LABELS, EMPTY_ADDRESS: EMPTY, fmtAddress: fmt });
