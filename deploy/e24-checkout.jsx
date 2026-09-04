const { StepIndicator, ListRow, StatusBadge } = window.E24WellPlusDesignSystem_54c90b;
const STEPS = ['Address','Delivery','Payment','Review'];
const stepsFor = () => STEPS;
const isLocker = d => d === 'box' || d === 'gls';
const BALANCE = 1247, CREDIT = 12.47;
const eur = n => '€' + n.toFixed(2).replace('.', ',');
const pts = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

/* Real client catalogue — records in products.js (eljekarna24.hr, ljekarnaonline.hr,
   centarzdravihrjesenja.hr; fetched 3 Sep 2026). Names, pack sizes, prices and the
   Croatian descriptions are verbatim from the shops. */
const CATALOG = {
  esterc: { img:'https://ljekarnaonline.hr/upload/catalog/product/29021/thumb/supradyn-imuno-boost-vitamin-c-vitamin-d-cink-sume_616942bc7df8b_580x580r.jpg', name:'Supradyn® Imuno Boost', size:'20 šumećih tableta', price:19.83, brand:'Supradyn',
    desc:'Supradyn Imuno Boost - dodatak prehrani temeljen na vitaminima C i D i cinku, koji pridonose normalnom funkcioniranju imunološke tablete. S ugodnim okusom naranče.',
    shots:['assets/products/supradyn-imuno-lifestyle-1.jpg','assets/products/supradyn-imuno-lifestyle-2.jpg'],
    stock:'In stock — ships within one working day.' },
  calmag: { img:'https://ljekarnaonline.hr/upload/catalog/product/1274/thumb/supradyn-energija-30-tableta_64f068b65820e_580x580r.jpg', name:'Supradyn® Energija', size:'30 filmom obloženih tableta', price:21.62, brand:'Supradyn',
    desc:'Supradyn® Energija je multivitaminski pripravak s mineralima i koenzimom Q10, koji služi kao dodatak prehrani tijekom cijeloga dana.',
    stock:'In stock — ships within one working day.' },
  d3: { prime:true, img:'https://ljekarnaonline.hr/upload/catalog/product/29022/thumb/kids-imuno-boost_64f06aebc337e_580x580r.jpg', name:'Supradyn Kids Imuno Boost', size:'100 žele bombona', price:27.53, brand:'Supradyn',
    desc:'Supradyn Kids Imuno Boost sadrži vitamine C i D i cink koji igraju ulogu u normalnom funkcioniranju imunološkog sustava.',
    stock:'In stock — ships within one working day.' },
  selenium: { img:'https://ljekarnaonline.hr/upload/catalog/product/19247/thumb/multi_5bd17d6e5fc8d_580x580r.jpg', name:'Apipharma Apivit Multi sirup', size:'100 ml', price:9.99, brand:'Apipharma',
    desc:'Apivit® tekući dodatak prehrani s medom i vitaminima za djecu i odrasle preporučujemo kao vitaminsku dopunu prehrani, osobito u zimi i proljeće, kod djece sa smanjenim apetitom, kod premorene školske djece slabe koncentracije i pojačanog umora.',
    stock:'In stock — ships within one working day.' },
  betacarotene: { img:'https://ljekarnaonline.hr/upload/catalog/product/34586/thumb/collagentime-beauty-500ml-21-e1677668144451_642ab74cb10e5_580x580r.png', name:'Hamapharm Collagen Time Beauty', size:'3 × 500 ml (2+1)', price:79.80, brand:'Hamapharm',
    desc:'Akcijsko pakiranje 2+1 tekućeg kolagena Collagen Time Beauty, 500 ml po bočici.',
    stock:'In stock — ships within one working day.' },
  omega3: { prime:true, img:'https://ljekarnaonline.hr/upload/catalog/product/29747/thumb/almagea-shine-on-2022_6284bbc48b52d_580x580r.jpg', name:'Almagea® SHINE ON+', size:'45 kapsula', price:26.46, brand:'Almagea',
    desc:'Dodatak prehrani za zdravlje i ljepotu kose, kože i noktiju.',
    stock:'In stock — ships within one working day.' },
  magcitrate: { img:'https://cdn11.bigcommerce.com/s-zmgdyj2jxr/images/stencil/500x659/products/475/947/Vital_Proteins_Collagen_Peptidi_A10__04096__98490.1766046839.386.513__07607.1768299249.jpg?c=1', name:'Vital Proteins Collagen Peptides', size:'10 vrećica po 10 g · bez okusa', price:21.99, brand:'Vital Proteins',
    desc:'Ove praktične Vital Proteins Collagen Peptidi vrećice omogućuju jednostavan, bioraspoloživ unos goveđeg kolagena u prahu bilo kada i bilo gdje, podržavajući prirodne razine kolagena u tijelu.',
    stock:'In stock — ships within one working day.' },
  salvusept: { img:'https://cdn11.bigcommerce.com/s-2xoeaz93e6/images/stencil/500x659/products/4624/30355/C041723__1__62136.1776692820.jpg?c=1', name:'Mikrozid Sensitive otopina', size:'1 litra', price:9.66, brand:'Mikrozid',
    desc:'Sredstvo bez alkohola za brzu dezinfekciju medicinskih uređaja i površina, na osnovi kvaternih amonijevih spojeva.',
    stock:'In stock — ships within one working day.' },
  vitalcollagen: { img:'https://cdn11.bigcommerce.com/s-2xoeaz93e6/images/stencil/500x659/products/4636/4746/mikrozidr-sensitive-maramice-punjenje-a-200-1_62260a487bfd2__05980.1743155814.jpg?c=1', name:'Mikrozid Sensitive maramice, punjenje', size:'200 maramica', price:11.38, brand:'Mikrozid',
    desc:'Bezalkoholne maramice za čišćenje i dezinfekciju medicinskih proizvoda i svih vrsta površina.',
    stock:'In stock — ships within one working day.' },
  klompe: { img:'https://cdn11.bigcommerce.com/s-zmgdyj2jxr/images/stencil/500x659/products/470/941/YUWELL_TOALETNA_KOLICA_H032B__59976__76996.1766046794.386.513__76665.1768299242.jpg?c=1', name:'Yuwell toaletna kolica', size:'Model H032B', price:174.30, brand:'Yuwell',
    desc:'Kombinacija invalidskih kolica i toaletnog stolca. Sigurni kotači s pojedinačnim kočnicama, podesivi oslonci za noge i praktičnost za kućnu njegu ili domove za starije.',
    stock:'In stock — ships within one working day.' },
  multiroyal: { img:'https://cdn11.bigcommerce.com/s-2xoeaz93e6/images/stencil/500x659/products/6077/37893/D100664__1__47265.1776770215.jpg?c=1', name:'Manusal rukavice latex bez pudera', size:'100 komada · S–XL', price:9.28, brand:'Manusal',
    desc:'Rukavice latex bez pudera, elastične i otporne na klizanje, pružaju sigurnu zaštitu za ruke. Pakiranje sadrži 100 komada – profesionalno i praktično!',
    stock:'In stock — ships within one working day.' },
  zinc: { img:'https://cdn11.bigcommerce.com/s-2xoeaz93e6/images/stencil/500x659/products/12149/39788/schulke-mikrozid-af-maramice_220__93135.1779276716.jpg?c=1', name:'Mikrozid maramice za dezinfekciju površina', size:'220 komada', price:22.40, brand:'Mikrozid',
    desc:'Maramice impregnirane alkoholnom otopinom za dezinfekciju medicinskih uređaja i površina.',
    stock:'In stock — ships within one working day.' },
  biotin: { img:'https://cdn11.bigcommerce.com/s-zmgdyj2jxr/images/stencil/500x659/products/467/938/YUWELL_STAP_ZA_HODANJE_NA_SKLAPANJE_YU838__35023__78783.1766046856.386.513__30580.1768299237.jpg?c=1', name:'Yuwell sklopivi štap za hodanje', size:'Model YU838', price:11.25, brand:'Yuwell',
    desc:'Lagan i sklopivi štap, idealan za putovanja i svakodnevnu upotrebu. Protuklizna baza i ergonomska drška za sigurnost i udobnost.',
    stock:'In stock — ships within one working day.' }
};

const ADDRESSES = [
  { id:'home', t:'Home · Iva Jurašin', s:'Ilica 128, 10000 Zagreb\n+385 91 234 5678', def:true,
    form:{ label:'Home', name:'Iva Jurašin', street:'Ilica 128', extra:'', postcode:'10000', city:'Zagreb', phone:'+385 91 234 5678', note:'', def:true } },
  { id:'work', t:'Work', s:'Radnička cesta 52, 10000 Zagreb\n+385 91 234 5678',
    form:{ label:'Work', name:'Iva Jurašin', street:'Radnička cesta 52', extra:'4th floor, reception', postcode:'10000', city:'Zagreb', phone:'+385 91 234 5678', note:'', def:false } }
];
const DELIVERY = [
  { id:'courier', t:'DPD to my address', s:'1–2 working days', price:4.30, icon:'truck-delivery' },
  { id:'box', t:'DPD parcel locker', s:'Collect any time within 3 days', price:4.30, icon:'package' },
  { id:'gls', t:'GLS parcel locker', s:'Collect any time within 5 days', price:4.30, icon:'package' }
];
const PAYMENT = [
  { id:'card', t:'Card', s:'Entered and confirmed here in the app', icon:'credit-card' },
  { id:'gpay', t:'Google Pay', s:'', icon:'brand-google' },
  { id:'keks', t:'KEKS Pay', s:'Hands off to the KEKS Pay app, then returns here', icon:'device-mobile' },
  { id:'aircash', t:'Aircash', s:'4-minute window to confirm in the Aircash app', icon:'wallet' },
  { id:'paycek', t:'PayCek', s:'', icon:'qrcode' },
  { id:'bank', t:'Bank transfer', s:'Pay by IBAN in your banking app', icon:'building-bank' },
  { id:'cod', t:'Cash on delivery', s:'', icon:'cash' }
];
const WALLET_METHODS = PAYMENT.filter(m => ['gpay','keks','aircash','paycek'].includes(m.id));
const isProviderPay = id => ['gpay','keks','aircash','paycek'].includes(id);

function StepPills({ steps, current }) {
  return (
    <div className="steppills">
      {steps.map((s,i)=>(
        <span key={s} className="steppill" data-state={i === current ? 'on' : i < current ? 'done' : 'todo'}>
          {i < current ? <i className="ti ti-check"></i> : null}{s}
        </span>
      ))}
    </div>
  );
}

const OverlayCtx = React.createContext(null);
function Shell({ title, stepIndex, steps, onBack, footer, children, pad = true, cartIcon = false, modal = false }) {
  const nav = useNav();
  const overlay = React.useContext(OverlayCtx);
  if (modal) return (
    <OverlayCtx.Provider value={null}><div className="drawerwrap">
      <div className="scrim" onClick={onBack}></div>
      <div className="drawer" role="dialog" aria-modal="true" aria-label={title}>
        <div className="grab"><span></span></div>
        <div className="scroll">
          <div className="appbar">
            <div style={{display:'flex',alignItems:'center',gap:6,minWidth:0}}>
              <span className="title" style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{title}</span>
            </div>
            <button className="back close" onClick={onBack} aria-label="Close"><i className="ti ti-x"></i></button>
          </div>
          <div style={pad ? {padding:'14px 20px 26px',display:'flex',flexDirection:'column',gap:14} : {display:'flex',flexDirection:'column',flex:1}}>{children}</div>
        </div>
        {footer}
      </div>
    </div></OverlayCtx.Provider>
  );
  return (
    <div className="phone">
      <StatusBar />
      <div className="scroll">
        <div className="appbar">
          <div style={{display:'flex',alignItems:'center',gap:6,minWidth:0}}>
            <button className="back" onClick={onBack}><i className="ti ti-chevron-left"></i></button>
            <span className="title" style={{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{title}</span>
          </div>
          {cartIcon ? <AppActions><CartAction onClick={()=>nav.go('cart')} /></AppActions> : null}
        </div>
        {stepIndex != null ? <StepPills steps={steps || STEPS} current={stepIndex} /> : null}
        <div style={pad ? {padding:'14px 20px 26px',display:'flex',flexDirection:'column',gap:14} : {display:'flex',flexDirection:'column',flex:1}}>{children}</div>
      </div>
      {footer}
      {overlay}
    </div>
  );
}

function Footer({ label, amount, cta, onClick, disabled, note, phase }) {
  const busy = phase === 'loading', done = phase === 'done';
  return (
    <div className="footer">
      {amount != null ? <div className="totals"><span className="lbl">{label}</span><span className="amt">{eur(amount)}</span></div> : null}
      {note ? <p className="tiny" style={{margin:0}}>{note}</p> : null}
      <button className="cta" onClick={onClick} disabled={disabled || busy || done} data-phase={phase || 'idle'}>
        {busy ? <><span className="spin"></span>Adding</> : done ? <>Added<i className="ti ti-check" style={{fontSize:18}}></i></> : <>{cta}<i className="ti ti-arrow-right" style={{fontSize:18}}></i></>}
      </button>
    </div>
  );
}

function Options({ items, value, onChange, priced }) {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:10}}>
      {items.map(o=>(
        <button className="opt" key={o.id} role="radio" aria-checked={value===o.id} onClick={()=>onChange(o.id)}>
          <span className="dot"></span>
          <span style={{textAlign:'left',minWidth:0}}>
            <span className="t" style={{display:'flex',alignItems:'center',gap:8}}>{o.icon?<i className={'ti ti-'+o.icon} style={{fontSize:16,color:'var(--sage-500)'}}></i>:null}{o.t}</span>
            <span className="s" style={{whiteSpace:'pre-line',display:'block'}}>{o.s}</span>
          </span>
          {priced ? <span className="price">{o.price ? eur(o.price) : 'Free'}</span> : null}
        </button>
      ))}
    </div>
  );
}

function Gallery({ p }) {
  const ref = React.useRef(null);
  const [i, setI] = React.useState(0);
  const frames = [null].concat(p.shots || []);
  const single = frames.length === 1;
  const onScroll = () => { const el = ref.current; if (el) setI(Math.round(el.scrollLeft / el.clientWidth)); };
  const goTo = n => { const el = ref.current; if (el) el.scrollTo({ left: n * el.clientWidth, behavior:'smooth' }); };
  return (
    <div className="gallery">
      <div className="track" ref={ref} onScroll={onScroll}>
        {frames.map((f,n)=>(
          <div className="gframe" key={n}>
            {f === null ? <img src={p.img} alt={p.name} /> : <img className="photo" src={f} alt={p.name} />}
          </div>
        ))}
      </div>
      {single ? null : (
        <div className="gdots">
          {frames.map((_,n)=><button key={n} aria-label={'Image '+(n+1)} aria-current={n===i} onClick={()=>goTo(n)}></button>)}
        </div>
      )}
    </div>
  );
}

/* ---------- steps ---------- */

function StepProduct({ qty, setQty, main, go, back }) {
  const p = main;
  const [phase, setPhase] = React.useState('idle');
  const timers = React.useRef([]);
  React.useEffect(()=>()=>timers.current.forEach(clearTimeout), []);
  const add = () => {
    window.CartStore.add(p.name, qty);
    setPhase('loading');
    timers.current.push(setTimeout(()=>setPhase('done'), 750));
    timers.current.push(setTimeout(()=>setPhase('idle'), 2000));
  };
  return (
    <Shell title="Product" cartIcon onBack={back} footer={<Footer label="Price" amount={p.price*qty} cta="Add to cart" onClick={add} phase={phase} note={`Earns ${Math.floor(p.price*qty)} WellPlus points`} />}>
      <Gallery p={p} />
      <div>
        <div style={{display:'flex',alignItems:'center',gap:8}}><span style={{fontFamily:'var(--font-label)',fontSize:11,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--text-faint)'}}>{p.brand}</span>{p.prime ? <span className="primetag" data-inline="true">PRIME</span> : null}</div>
        <h1 style={{fontFamily:'var(--font-serif-display)',fontSize:27,fontWeight:500,letterSpacing:'.005em',lineHeight:1.15,color:'var(--text-body)',margin:'8px 0 0',textWrap:'pretty'}}>{p.name}</h1>
        <div className="tiny" style={{marginTop:6}}>{p.size}</div>
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
        <div>
          <div style={{fontFamily:'var(--font-numeric)',fontSize:30,fontWeight:500,letterSpacing:'.01em',fontVariantNumeric:'tabular-nums',color:'var(--text-body)'}}>{eur(p.price)}</div>
          <span className="pill" style={{marginTop:8}}>+{Math.floor(p.price*qty)} points</span>
        </div>
        <div className="step-stepper">
          <button onClick={()=>setQty(Math.max(1,qty-1))} aria-label="Less"><i className="ti ti-minus"></i></button>
          <span>{qty}</span>
          <button onClick={()=>setQty(Math.min(9,qty+1))} aria-label="More"><i className="ti ti-plus"></i></button>
        </div>
      </div>
      <hr className="rule" />
      <p className="body">{p.desc}</p>
      <div className="quiet">
        <ul className="mechanic">
          <li><i className="ti ti-truck-delivery"></i><span>{p.stock}</span></li>
          <li><i className="ti ti-file-check"></i><span>Food supplement. Not a substitute for a varied diet.</span></li>
        </ul>
      </div>
    </Shell>
  );
}

function StepCart({ qty, setQty, magQty, setMagQty, main, steps, go, back }) {
  const nav = useNav();
  const second = main === CATALOG.calmag ? CATALOG.esterc : CATALOG.calmag;
  const sub = main.price*qty + second.price*magQty;
  const rows = [[main,qty,setQty],[second,magQty,setMagQty]].filter(([,q])=>q>0);
  return (
    <Shell title="Cart" steps={steps} onBack={back} footer={<Footer label="Subtotal" amount={sub} cta="Checkout" onClick={go} disabled={!qty && !magQty} />}>
      <div className="card">
        <div className="clines">
          {rows.map(([p,q,set],i)=>(
            <div className="cline" key={p.name} data-last={i === rows.length-1 ? 'true' : undefined}>
              <span className="cthumb"><img src={p.img} alt="" /></span>
              <span className="cinfo">
                <span className="nm">{p.name}</span>
                <span className="sz">{p.size}</span>
              </span>
              <span className="cright">
                <span className="amt">{eur(p.price*q)}</span>
                <span className="mini">
                  <button onClick={()=>set(Math.max(0,q-1))} aria-label="Less"><i className="ti ti-minus"></i></button>
                  <span>{q}</span>
                  <button onClick={()=>set(Math.min(9,q+1))} aria-label="More"><i className="ti ti-plus"></i></button>
                </span>
              </span>
            </div>
          ))}
        </div>
        {!qty && !magQty ? <p className="body" style={{textAlign:'center',padding:'18px 0'}}>Your cart is empty.</p> : null}
      </div>
      <div className="earnnote">
        <div>
          <div className="t">{pts(Math.floor(sub))} points on this order</div>
          <div className="s">You have {pts(BALANCE)} points ({eur(CREDIT)}) available to spend at review.</div>
        </div>
      </div>
      <SecLabel>Add to order</SecLabel>
      <div className="card">
        <div className="clines">
          {[['https://ljekarnaonline.hr/upload/catalog/product/19247/thumb/multi_5bd17d6e5fc8d_580x580r.jpg','Apipharma Apivit Multi sirup','100 ml','€9,99','shopflow:selenium'],
            ['https://ljekarnaonline.hr/upload/catalog/product/1274/thumb/supradyn-energija-30-tableta_64f068b65820e_580x580r.jpg','Supradyn® Energija','30 tableta','€21,62','shopflow:calmag']].map(([img,name,size,price,route],i,a)=>(
            <button className="cline tap" key={name} data-last={i === a.length-1 ? 'true' : undefined} onClick={()=>nav.go(route)}>
              <span className="cthumb"><img src={img} alt="" /></span>
              <span className="cinfo">
                <span className="nm">{name}</span>
                <span className="sz">{size} · {price}</span>
              </span>
              <i className="ti ti-chevron-right"></i>
            </button>
          ))}
        </div>
      </div>
    </Shell>
  );
}

function StepDelivery({ value, onChange, address, addresses, locker, onPickLocker, go, back }) {
  const sel = DELIVERY.find(d => d.id === value);
  const addr = (addresses || ADDRESSES).find(a => a.id === address);
  const needsLocker = isLocker(value) && !locker;
  if (!addr) return (
    <Shell title="Delivery" stepIndex={1} steps={STEPS} onBack={back} footer={<Footer cta="Enter an address" onClick={back} />}>
      <div className="quiet" style={{textAlign:'center'}}>
        <p className="body">Enter your delivery address to see delivery options and prices.</p>
      </div>
    </Shell>
  );
  return (
    <Shell title="Delivery" stepIndex={1} steps={STEPS} onBack={back} footer={<Footer label="Delivery" amount={sel.price} cta={needsLocker ? 'Choose a locker' : 'Continue to payment'} onClick={needsLocker ? onPickLocker : go} />}>
      <SecLabel>How would you like to receive it</SecLabel>
      <p className="tiny" style={{marginTop:-4}}>Prices are for {addr.s.split('\n')[0]}.</p>
      <Options items={DELIVERY} value={value} onChange={onChange} priced />
      {isLocker(value) && locker ? (
        <div className="card" style={{display:'flex',flexDirection:'column',gap:8}}>
          <div style={{fontFamily:'var(--font-label)',fontSize:11,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--text-faint)'}}>{value === 'box' ? 'DPD' : 'GLS'} location</div>
          <div>
            <div style={{fontWeight:500}}>{locker.name}</div>
            <p className="body" style={{marginTop:2}}>{locker.addr}</p>
            <p className="tiny" style={{marginTop:4}}>{locker.hours === 'Open 24 h' ? 'Open around the clock, every day' : 'Mon–Fri ' + locker.hours + ' · Sat 08:00–14:00 · Sun closed'}</p>
          </div>
          <button className="ghostbtn" onClick={onPickLocker}><i className="ti ti-map-pin" style={{fontSize:16}}></i>Change location</button>
        </div>
      ) : null}
    </Shell>
  );
}

function StepAddress({ address, addresses, onAddress, onAdd, go, back }) {
  return (
    <Shell title="Address" stepIndex={0} steps={STEPS} onBack={back} footer={<Footer cta="Continue to delivery" onClick={go} disabled={!address} />}>
      <SecLabel>Deliver to</SecLabel>
      <Options items={addresses} value={address} onChange={onAddress} />
      <button className="ghostbtn" onClick={onAdd}><i className="ti ti-plus" style={{fontSize:16}}></i>Add a new address</button>
      <p className="tiny">Delivery prices are calculated from this address. Your name on the WellPlus card comes from it too.</p>
    </Shell>
  );
}

function StepPayment({ value, onChange, wallet, onWallet, redeem, setRedeem, card, onCards, go, back }) {
  const pick = id => { onChange(id); if (id === 'bank') setRedeem(false); };
  return (
    <Shell title="Payment" stepIndex={2} steps={STEPS} onBack={back} footer={<Footer cta="Review order" onClick={go} disabled={value === 'card' && !card} />}>
      <SecLabel>Payment method</SecLabel>
      <div className="paylist">
        {PAYMENT.map(m=>{
          const on = value === m.id;
          return (
            <div className="paywrap" key={m.id} data-on={on ? 'true' : undefined}>
              <button className="payrow" role="radio" aria-checked={on} onClick={()=>pick(m.id)}>
                <span className="dot"></span>
                <span className="txt"><span className="t">{m.t}</span></span>
                <span className="brandmark">
                  {m.id === 'card'
                    ? ['visa','mastercard','amex'].map(b=><img key={b} src={'assets/pay-' + b + '.svg'} alt="" />)
                    : m.id === 'keks'
                      ? <img className="sq" src="assets/pay-keks.png" alt="" />
                      : m.id === 'gpay'
                        ? <img src="assets/pay-gpay.png" alt="" />
                        : m.id === 'aircash'
                          ? <span className="glyph"><i className="ti ti-wallet"></i></span>
                          : null}
                </span>
              </button>
              {on ? (
                <div className="paydetail">
                  {m.id === 'card' ? (
                    <div className="paysel">
                      <i className={'ti ti-' + (card ? card.icon : 'credit-card') + ' lead'}></i>
                      <span className="txt">
                        <span className="t">{card ? card.brand + ' ' + card.num : 'No card selected'}</span>
                        <span className="s">{card ? 'Expires ' + card.exp + ' · ' + card.name : 'Choose or add a card to continue'}</span>
                      </span>
                      <button className="chg" onClick={onCards}>{card ? 'Change' : 'Add'}</button>
                    </div>
                  ) : null}
                  <p className="paynote">
                    {m.id === 'card' ? 'Card details are handled by the bank. You confirm with 3-D Secure without leaving the app.'
                      : m.id === 'bank' ? 'You get the payee, IBAN, model, reference and amount on the confirmation screen and in the email. WellPlus points cannot be used with bank transfer' + (redeem ? ' — the discount on your order has been removed.' : '.')
                      : m.id === 'cod' ? 'You pay the courier on delivery. Points are credited once the pharmacy closes the order.'
                      : m.s ? m.s + '. Your cart is kept if you back out.'
                      : 'You are redirected to ' + m.t + ' to complete the payment, then returned here.'}
                  </p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </Shell>
  );
}

function StepReview({ qty, magQty, main, delivery, redeem, setRedeem, address, addresses, locker, pharmacy, payment, wallet, balance, redeemDropped, go, back, goStep }) {
  const second = main === CATALOG.calmag ? CATALOG.esterc : CATALOG.calmag;
  const sub = main.price*qty + second.price*magQty;
  const ship = DELIVERY.find(d=>d.id===delivery).price;
  const bal = balance == null ? BALANCE : balance;
  const worth = bal/100;
  const credit = redeem ? Math.min(worth, sub + ship) : 0;
  const total = sub + ship - credit;
  const earned = Math.floor(sub - credit);
  const blocked = payment === 'bank' || bal < 100;
  const blockedWhy = payment === 'bank'
    ? 'Not available with bank transfer. Switch to card or a wallet to redeem.'
    : bal < 100 ? `${pts(bal)} points so far. Redemption starts at 100 points — ${pts(100 - bal)} to go.` : null;
  const usedPts = Math.round(credit*100);
  const capped = redeem && !blocked && usedPts < bal;
  const [terms, setTerms] = React.useState(false);
  const [coupon, setCoupon] = React.useState(false);
  const [code, setCode] = React.useState('');
  const nothingToPay = total <= 0.001;
  return (
    <Shell title="Review" stepIndex={3} steps={STEPS} onBack={back} footer={<Footer label="Total" amount={total} cta={nothingToPay ? 'Confirm order' : 'Place order'} onClick={go} disabled={!terms} note={!terms ? 'Accept the terms of use to continue' : nothingToPay ? 'Covered by points — nothing to charge' : redeem ? `${pts(usedPts)} points used · this order earns none` : `You'll earn ${earned} points`} />}>
      {redeemDropped ? <StateBanner icon="alert-circle" title="Your points were taken off this order">Bank transfer cannot be combined with a redemption, so the €{'\u00A0'}discount was removed when you changed the payment method. Switch back to card or a wallet to use the points again.</StateBanner> : null}
      <div className="switchrow" data-off={blocked ? 'true' : undefined}>
        <div style={{position:'relative',flex:1,minWidth:0}}>
          <div className="t">Use my points</div>
          <div className="s">{blockedWhy || (redeem
            ? capped ? `${pts(bal)} points → ${pts(usedPts)} spent, ${pts(bal - usedPts)} remaining — ${eur(credit)} off` : `${pts(usedPts)} points used — ${eur(credit)} off`
            : `${pts(bal)} points → ${eur(worth)} off`)}</div>
        </div>
        <button className="sw" role="switch" aria-checked={redeem && !blocked} disabled={blocked} aria-label="Use my points" onClick={()=>{ if(!blocked) setRedeem(!redeem); }}></button>
      </div>
      {redeem && !blocked ? <p className="tiny">A purchase paid for with points does not earn new points.{nothingToPay ? ' Your points cover the whole order, so there is nothing left to charge — no card is used.' : ''}</p> : null}
      <div className="coupon">
        <button className="chead" onClick={()=>setCoupon(v=>!v)} aria-expanded={coupon}>
          <span>Coupon or gift card</span><i className={'ti ti-chevron-' + (coupon ? 'up' : 'down')}></i>
        </button>
        {coupon ? (
          <div className="cbody">
            <input value={code} onChange={e=>setCode(e.target.value.toUpperCase())} placeholder="Enter the code" aria-label="Coupon or gift card code" />
            <button className="capply" disabled={code.length < 4}>Apply</button>
          </div>
        ) : null}
        {coupon ? <p className="tiny" style={{padding:'0 2px 2px'}}>WellPlus points are not a code — use the switch above.</p> : null}
      </div>
      <div className="card">
        <div className="sum">
          <div className="r"><span>Items ({qty+magQty})</span><b>{eur(sub)}</b></div>
          <div className="r"><span>{DELIVERY.find(d=>d.id===delivery).t}{isLocker(delivery)&&locker?' · '+locker.name:''}</span><b>{ship ? eur(ship) : 'Free'}</b></div>
          {redeem ? <div className="r credit"><span>WellPlus points</span><b>−{eur(credit)}</b></div> : null}
          <div className="r total"><span>To pay</span><b>{nothingToPay ? eur(0) : eur(total)}</b></div>
        </div>
      </div>
      <div className="card">
        <div>
          {[[main,qty],[second,magQty]].filter(([,q])=>q>0).map(([p,q],i,a)=>(
            <ListRow key={p.name} thumb={p.img} title={p.name} subtitle={`${q} × ${eur(p.price)}`} trailing={eur(p.price*q)} divider={i < a.length-1} />
          ))}
        </div>
        <hr className="rule" />
        <div style={{display:'flex',flexDirection:'column',gap:12}}>
          {delivery === 'courier' ? (
            <div>
              <div className="sumhead"><span>Address</span><button onClick={()=>goStep && goStep(2)}>Edit</button></div>
              <p className="body" style={{marginTop:4,whiteSpace:'pre-line'}}>{(addresses||ADDRESSES).find(a=>a.id===address).s}</p>
            </div>
          ) : null}
          {isLocker(delivery) && locker ? (
            <div>
              <div className="sumhead"><span>{delivery === 'box' ? 'DPD' : 'GLS'} location</span><button onClick={()=>goStep && goStep(3)}>Edit</button></div>
              <p className="body" style={{marginTop:4}}>{locker.name}<br />{locker.addr}<br />{locker.hours === 'Open 24 h' ? 'Open around the clock, every day' : 'Mon–Fri ' + locker.hours}</p>
            </div>
          ) : null}
          <div>
            <div className="sumhead"><span>Payment</span><button onClick={()=>goStep && goStep(4)}>Edit</button></div>
            <p className="body" style={{marginTop:4}}>{PAYMENT.find(p=>p.id===payment).t}{PAYMENT.find(p=>p.id===payment).s ? ' · ' + PAYMENT.find(p=>p.id===payment).s : ''}</p>
          </div>
        </div>
      </div>
      <label className="consent" style={{padding:'2px 2px 0'}}>
        <input type="checkbox" checked={terms} onChange={e=>setTerms(e.target.checked)} />
        <span>I confirm I have read the <a href="#terms" onClick={e=>{e.preventDefault();}}>terms of use</a> and wish to continue with the order.</span>
      </label>
      <p className="tiny">Points from this order appear once the pharmacy confirms it.</p>
    </Shell>
  );
}

function StepDone({ qty, magQty, main, delivery, redeem, back, restart, onTrack, payment, total, id = 'WP-20826-441' }) {
  const second = main === CATALOG.calmag ? CATALOG.esterc : CATALOG.calmag;
  const sub = main.price*qty + second.price*magQty;
  const credit = redeem ? Math.min(CREDIT, sub) : 0;
  const earned = Math.floor(sub - credit);
  return (
    <div className="phone">
      <StatusBar />
      <div className="scroll" style={{display:'flex',flexDirection:'column'}}>
        <div className="done">
          <span className="mark"><i className="ti ti-check"></i></span>
          <h3>{payment === 'bank' ? 'Order reserved' : 'Order placed'}</h3>
          <p className="body" style={{margin:0}}>Order <b style={{fontFamily:'var(--font-numeric)',fontWeight:500}}>{id}</b>. {payment === 'bank' ? 'It goes to the pharmacy as soon as your transfer arrives. The details are below and in the confirmation email.' : "We'll email a confirmation and let you know when it's on the way."}</p>
          <div className="switchrow pale" style={{width:'100%',textAlign:'left',flexDirection:'column',alignItems:'flex-start',gap:10}}>
            <div style={{position:'relative'}}>
              <div className="t">{payment === 'bank' ? 'Points once the order is closed' : redeem ? `${pts(Math.round(credit*100))} points used` : '+' + earned + ' points on the way'}</div>
              <div className="s">{payment === 'bank'
                ? `We'll credit ${earned} points once your transfer arrives and the order is closed.`
                : redeem
                  ? `${eur(credit)} saved on this order. A purchase paid for with points earns no new points.`
                  : 'Pending until the pharmacy confirms the order — usually a few hours.'}</div>
            </div>
            <div style={{position:'relative',display:'flex',alignItems:'baseline',gap:8}}>
              <span className="num" style={{fontFamily:'var(--font-numeric)',fontSize:34,fontWeight:500,fontVariantNumeric:'tabular-nums'}}>{pts(BALANCE - Math.round(credit*100))}</span>
              <span className="unit">points now</span>
            </div>
          </div>
          <StatusBadge tone="wait"><i className="ti ti-clock" style={{fontSize:13}}></i>{payment === 'bank' ? 'Awaiting transfer' : redeem ? 'No points earned' : 'Pending · ' + earned + ' pts'}</StatusBadge>
        </div>
        <div style={{padding:'0 20px 22px',display:'flex',flexDirection:'column',gap:10}}>
          {payment === 'bank' ? (
            <div style={{display:'flex',flexDirection:'column',gap:12,marginBottom:4}}>
              <SecLabel>Transfer these details</SecLabel>
              <BankDetails inline amount={total} reference={id.replace(/\D/g,'')} />
            </div>
          ) : null}
          <button className="cta" onClick={onTrack || restart}>Track this order<i className="ti ti-arrow-right" style={{fontSize:18}}></i></button>
          <button className="ghostbtn" onClick={back}>Continue shopping</button>
        </div>
      </div>
    </div>
  );
}

/* ---------- flow controller ---------- */

function CheckoutFlow({ start = 0, fixed, initial = {}, product, balance, dropped, onExit }) {
  const nav = useNav();
  const [i, setI] = React.useState(start);
  const [qty, setQty] = React.useState(initial.qty ?? 1);
  const [magQty, setMagQty] = React.useState(initial.magQty ?? 1);
  const [address, setAddress] = React.useState(initial.address ?? 'home');
  const [delivery, setDelivery] = React.useState(initial.delivery ?? 'courier');
  const [payment, setPayment] = React.useState(initial.payment ?? 'card');
  const [wallet, setWallet] = React.useState(initial.wallet ?? null);
  const [redeem, setRedeem] = React.useState(initial.redeem ?? false);
  const [addresses, setAddresses] = React.useState(ADDRESSES);
  const [lockerId, setLockerId] = React.useState(initial.locker ?? null);
  const [pharmacyId, setPharmacyId] = React.useState(initial.pharmacy ?? 'ilica191');
  const [sub, setSub] = React.useState(null);
  const [cards, setCards] = React.useState(() => window.CARDS || []);
  const [cardId, setCardId] = React.useState(() => (window.CARDS || [{}])[0].id || null);
  const card = cards.find(c => c.id === cardId) || null;
  const locker = (window.LOCKERS || []).find(l => l.id === lockerId) || null;
  const pharmacy = (window.PHARMACIES || []).find(p => p.id === pharmacyId) || null;
  const step = fixed ?? i;
  const go = () => setI(Math.min(6, step+1));
  const back = () => { if (step === start && onExit) onExit(); else setI(Math.max(start, step-1)); };
  const main = CATALOG[product] || CATALOG[initial.product] || CATALOG.esterc;
  const placed = React.useRef(null);
  const [redeemDropped, setRedeemDropped] = React.useState(!!dropped);
  const goStep = n => { setRedeemDropped(false); setI(n); };
  const common = { qty, setQty, magQty, setMagQty, main, steps: stepsFor(delivery), go, back, goStep };

  const totals = () => {
    const second = main === CATALOG.calmag ? CATALOG.esterc : CATALOG.calmag;
    const items = main.price*qty + second.price*magQty;
    const ship = DELIVERY.find(d=>d.id===delivery).price;
    const credit = redeem ? Math.min(CREDIT, items) : 0;
    return { second, items, ship, credit, total: items + ship - credit };
  };

  const commit = () => {
    const second = main === CATALOG.calmag ? CATALOG.esterc : CATALOG.calmag;
    const sub = main.price*qty + second.price*magQty;
    const ship = DELIVERY.find(d=>d.id===delivery).price;
    const credit = redeem ? Math.min(CREDIT, sub) : 0;
    const total = sub + ship - credit;
    const earned = Math.floor(sub - credit);
    const dest = isLocker(delivery) && locker ? `${delivery === 'box' ? 'DPD' : 'GLS'} · ${locker.name}\n${locker.addr}`
      : (addresses.find(a=>a.id===address) || {}).s;
    placed.current = {
      id: 'WP-20826-' + (500 + Math.floor(Math.random()*400)),
      date: '26 Aug 2026', total: eur(total), status:'Order placed', tone:'wait',
      items: qty + magQty, points: '+' + earned + ' pending', track: 0,
      lines: [[main,qty],[second,magQty]].filter(([,q])=>q>0).map(([p,q])=>({ img:p.img, name:p.name, sub:`${q} × ${eur(p.price)}`, amt:eur(p.price*q) })),
      sum: { items:eur(sub), shipLabel:DELIVERY.find(d=>d.id===delivery).t, ship:ship?eur(ship):'Free', credit:credit?'−'+eur(credit):null },
      earned, credit, dest,
      courier: delivery === 'courier' ? 'DPD · tracking assigned when it ships' : delivery === 'box' ? 'DPD · collection code sent by SMS on arrival' : 'GLS · collection code sent by SMS on arrival'
    };
    placed.current.payment = payment;
    if (window.recordOrder) window.recordOrder(placed.current);
  };

  const place = () => {
    if (payment === 'card') { setSub('3ds'); return; }
    if (isProviderPay(payment)) { setSub('provider'); return; }
    commit();
    go();
  };
  const stepScreen = () => {
    if (step === 0) return <StepProduct {...common} />;
    if (step === 1) return <StepCart {...common} />;
    if (step === 2) return <StepAddress address={address} addresses={addresses} onAddress={setAddress} onAdd={()=>setSub('newaddress')} go={go} back={back} />;
    if (step === 3) return <StepDelivery value={delivery} onChange={id=>{ setDelivery(id); if (!isLocker(id)) setLockerId(null); }} address={address} addresses={addresses} locker={locker} onPickLocker={()=>setSub('locker')} go={go} back={back} />;
    if (step === 4) return <StepPayment value={payment} onChange={id=>{ setPayment(id); if (id === 'bank' && redeem) { setRedeem(false); setRedeemDropped(true); } }} wallet={wallet} onWallet={setWallet} redeem={redeem} setRedeem={setRedeem} card={card} onCards={()=>setSub('cards')} go={go} back={back} />;
    if (step === 5) return <StepReview {...common} balance={balance} redeemDropped={redeemDropped} go={place} address={address} addresses={addresses} locker={locker} pharmacy={pharmacy} delivery={delivery} payment={payment} wallet={wallet} redeem={redeem} setRedeem={setRedeem} />;
    return <StepDone qty={qty} magQty={magQty} main={main} delivery={delivery} redeem={redeem} payment={payment} total={totals().total} id={placed.current ? placed.current.id : undefined} onTrack={()=>nav.set && placed.current ? nav.set(['profile','orders','order:'+placed.current.id]) : null} back={()=>{ if (nav.tab) nav.tab('shop'); else if (onExit) onExit(); else setI(0); }} restart={()=>onExit?onExit():setI(0)} />;
  };
  const overlay = () => {
    if (sub === 'newaddress') return (
    <AddressForm modal title="New address" onCancel={()=>setSub(null)} onSave={f=>{
      const id = 'a' + Date.now();
      setAddresses(l => [...l, { id, t: f.label + ' · ' + f.name, s: window.fmtAddress(f), form:f, def:f.def }]);
      setAddress(id); setSub(null);
    }} />
    );
    if (sub === 'cards') return (
      <CardWallet modal cards={cards} value={cardId} onChange={setCardId} onAdd={()=>setSub('newcard')} onBack={()=>setSub(null)} onDone={()=>setSub(null)} />
    );
    if (sub === 'newcard') return (
      <CardForm modal onCancel={()=>setSub('cards')} onSave={c=>{ setCards(l=>[...l,c]); setCardId(c.id); setSub('cards'); }} />
    );
    if (sub === '3ds') return (
      <ThreeDS modal amount={totals().total} card={card} onCancel={()=>setSub(null)} onDone={()=>{ commit(); setSub(null); go(); }} />
    );
    if (sub === 'locker') return (
      <LockerPicker modal value={lockerId} onChange={setLockerId} onBack={()=>setSub(null)} onConfirm={()=>setSub(null)} />
    );
    if (sub === 'provider') return <ProviderPage method={PAYMENT.find(w=>w.id===payment)} amount={totals().total} onCancel={()=>setSub(null)} onDone={()=>setSub('awaiting')} />;
    if (sub === 'awaiting') return <AwaitingPayment method={PAYMENT.find(w=>w.id===payment)} onDone={()=>{ commit(); setSub(null); go(); }} onCancel={()=>setSub(null)} />;
    return null;
  };
  return <OverlayCtx.Provider value={overlay()}>{stepScreen()}</OverlayCtx.Provider>;
}

function ProviderPage({ method, amount, onCancel, onDone }) {
  return (
    <Shell modal title={method ? method.t : 'Payment'} onBack={onCancel} footer={
      <div className="footer">
        <button className="cta" onClick={onDone}>Continue in {method ? method.t : 'the app'}</button>
        <button className="ghostbtn" onClick={onCancel}>Cancel payment</button>
      </div>
    }>
      <React.Fragment>
          <div className="quiet" style={{display:'flex',alignItems:'center',gap:10}}>
            <i className="ti ti-lock" style={{fontSize:17,color:'var(--sage-500)'}}></i>
            <span className="tiny">Secure page from the payment provider, shown inside e24. You can cancel at any time.</span>
          </div>
          <div className="card" style={{display:'flex',flexDirection:'column',gap:10,alignItems:'center',textAlign:'center'}}>
            <i className={'ti ti-' + (method ? method.icon : 'wallet')} style={{fontSize:34,color:'var(--sage-500)'}}></i>
            <div style={{fontFamily:'var(--font-numeric)',fontSize:30,fontWeight:500,fontVariantNumeric:'tabular-nums'}}>{eur(amount)}</div>
            <p className="body" style={{margin:0}}>{method ? method.s : ''}</p>
          </div>
      </React.Fragment>
    </Shell>
  );
}

function AwaitingPayment({ method, onDone, onCancel }) {
  const [left, setLeft] = React.useState(238);
  React.useEffect(()=>{ const t = setInterval(()=>setLeft(v=>Math.max(0, v-1)), 1000); return ()=>clearInterval(t); }, []);
  const mm = String(Math.floor(left/60)), ss = String(left%60).padStart(2,'0');
  return (
    <Shell modal title="Waiting for confirmation" onBack={onCancel} footer={
      <div className="footer">
        <button className="cta" onClick={onDone}>Payment confirmed</button>
        <button className="ghostbtn" onClick={onCancel}>Cancel and choose another method</button>
      </div>
    }>
          <div className="card" style={{display:'flex',flexDirection:'column',gap:12,alignItems:'center',textAlign:'center'}}>
            <span className="spin" style={{width:22,height:22,borderColor:'rgba(3,92,103,.25)',borderTopColor:'var(--sage-500)'}}></span>
            <div style={{fontWeight:500}}>Confirming your payment with {method ? method.t : 'the provider'}</div>
            <p className="body" style={{margin:0}}>You can close the app — the order completes on its own and you will get an email either way.</p>
            <div className="tiny" style={{fontVariantNumeric:'tabular-nums'}}>Time left to confirm: {mm}:{ss}</div>
          </div>
    </Shell>
  );
}

Object.assign(window, { OverlayCtx, CheckoutFlow, isProviderPay, STEPS, stepsFor, isLocker, eur, pts, CATALOG, DELIVERY, ADDRESSES, PAYMENT, WALLET_METHODS, Shell, Footer, Options, BALANCE, CREDIT });
