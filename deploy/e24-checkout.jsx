const { StepIndicator, ListRow, StatusBadge, FaqItem } = window.E24WellPlusDesignSystem_54c90b;
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
    nutrients:[['Vitamin C','1000 mg','1250 %'],['Vitamin D','10 µg','200 %'],['Zinc','10 mg','100 %']],
    info:[
      { q:'Why take it', a:'Vitamins C and D and zinc contribute to the normal function of the immune system. Zinc is also needed for a large number of enzymes to work properly and helps protect cells from oxidative stress. Intended as everyday immune support, particularly through the colder months.' },
      { q:'How to take it', a:'Adults and children over 14: one effervescent tablet a day. Dissolve the tablet in a glass of water (200 ml) and drink. Do not exceed the recommended daily dose.' },
      { q:'Ingredients', a:'L-ascorbic acid; acidity regulator: sodium carbonate; acid: citric acid; bulking agent: isomalt; acid: malic acid; colour: beta-carotene; orange flavouring; zinc citrate; sweeteners: acesulfame K, sucralose; sodium chloride; cholecalciferol.' },
      { q:'Warnings', a:'Not recommended for people with haemochromatosis, hypercalcaemia or kidney disease, or for women who are pregnant or breastfeeding. Contains sweeteners. If you take other vitamin D or zinc preparations, check your total daily intake with your pharmacist.' },
      { q:'Storage', a:'Keep in the original tube in a dry place below 25 °C, out of the reach of small children. A food supplement is not a substitute for a balanced, varied diet and a healthy lifestyle.' }
    ],
},
  calmag: { img:'https://ljekarnaonline.hr/upload/catalog/product/1274/thumb/supradyn-energija-30-tableta_64f068b65820e_580x580r.jpg', name:'Supradyn® Energija', size:'30 filmom obloženih tableta', price:21.62, brand:'Supradyn',
    desc:'Supradyn® Energija je multivitaminski pripravak s mineralima i koenzimom Q10, koji služi kao dodatak prehrani tijekom cijeloga dana.',
},
  d3: { prime:true, img:'https://ljekarnaonline.hr/upload/catalog/product/29022/thumb/kids-imuno-boost_64f06aebc337e_580x580r.jpg', name:'Supradyn Kids Imuno Boost', size:'100 žele bombona', price:27.53, brand:'Supradyn',
    desc:'Supradyn Kids Imuno Boost sadrži vitamine C i D i cink koji igraju ulogu u normalnom funkcioniranju imunološkog sustava.',
},
  selenium: { img:'https://ljekarnaonline.hr/upload/catalog/product/19247/thumb/multi_5bd17d6e5fc8d_580x580r.jpg', name:'Apipharma Apivit Multi sirup', size:'100 ml', price:9.99, was:12.49, brand:'Apipharma',
    desc:'Apivit® tekući dodatak prehrani s medom i vitaminima za djecu i odrasle preporučujemo kao vitaminsku dopunu prehrani, osobito u zimi i proljeće, kod djece sa smanjenim apetitom, kod premorene školske djece slabe koncentracije i pojačanog umora.',
},
  betacarotene: { img:'https://ljekarnaonline.hr/upload/catalog/product/34586/thumb/collagentime-beauty-500ml-21-e1677668144451_642ab74cb10e5_580x580r.png', name:'Hamapharm Collagen Time Beauty', size:'3 × 500 ml (2+1)', price:79.80, brand:'Hamapharm',
    desc:'Akcijsko pakiranje 2+1 tekućeg kolagena Collagen Time Beauty, 500 ml po bočici.',
},
  omega3: { prime:true, img:'https://ljekarnaonline.hr/upload/catalog/product/29747/thumb/almagea-shine-on-2022_6284bbc48b52d_580x580r.jpg', name:'Almagea® SHINE ON+', size:'45 kapsula', price:26.46, brand:'Almagea',
    desc:'Dodatak prehrani za zdravlje i ljepotu kose, kože i noktiju.',
},
  magcitrate: { img:'https://cdn11.bigcommerce.com/s-zmgdyj2jxr/images/stencil/500x659/products/475/947/Vital_Proteins_Collagen_Peptidi_A10__04096__98490.1766046839.386.513__07607.1768299249.jpg?c=1', name:'Vital Proteins Collagen Peptides', size:'10 vrećica po 10 g · bez okusa', price:21.99, was:26.99, brand:'Vital Proteins',
    desc:'Ove praktične Vital Proteins Collagen Peptidi vrećice omogućuju jednostavan, bioraspoloživ unos goveđeg kolagena u prahu bilo kada i bilo gdje, podržavajući prirodne razine kolagena u tijelu.',
},
  salvusept: { img:'https://cdn11.bigcommerce.com/s-2xoeaz93e6/images/stencil/500x659/products/4624/30355/C041723__1__62136.1776692820.jpg?c=1', name:'Mikrozid Sensitive otopina', size:'1 litra', price:9.66, brand:'Mikrozid',
    desc:'Sredstvo bez alkohola za brzu dezinfekciju medicinskih uređaja i površina, na osnovi kvaternih amonijevih spojeva.',
},
  vitalcollagen: { img:'https://cdn11.bigcommerce.com/s-2xoeaz93e6/images/stencil/500x659/products/4636/4746/mikrozidr-sensitive-maramice-punjenje-a-200-1_62260a487bfd2__05980.1743155814.jpg?c=1', name:'Mikrozid Sensitive maramice, punjenje', size:'200 maramica', price:11.38, was:13.99, brand:'Mikrozid',
    desc:'Bezalkoholne maramice za čišćenje i dezinfekciju medicinskih proizvoda i svih vrsta površina.',
},
  klompe: { img:'https://cdn11.bigcommerce.com/s-zmgdyj2jxr/images/stencil/500x659/products/470/941/YUWELL_TOALETNA_KOLICA_H032B__59976__76996.1766046794.386.513__76665.1768299242.jpg?c=1', name:'Yuwell toaletna kolica', size:'Model H032B', price:174.30, brand:'Yuwell',
    desc:'Kombinacija invalidskih kolica i toaletnog stolca. Sigurni kotači s pojedinačnim kočnicama, podesivi oslonci za noge i praktičnost za kućnu njegu ili domove za starije.',
},
  multiroyal: { img:'https://cdn11.bigcommerce.com/s-2xoeaz93e6/images/stencil/500x659/products/6077/37893/D100664__1__47265.1776770215.jpg?c=1', name:'Manusal rukavice latex bez pudera', size:'100 komada · S–XL', price:9.28, brand:'Manusal',
    desc:'Rukavice latex bez pudera, elastične i otporne na klizanje, pružaju sigurnu zaštitu za ruke. Pakiranje sadrži 100 komada – profesionalno i praktično!',
},
  zinc: { img:'https://cdn11.bigcommerce.com/s-2xoeaz93e6/images/stencil/500x659/products/12149/39788/schulke-mikrozid-af-maramice_220__93135.1779276716.jpg?c=1', name:'Mikrozid maramice za dezinfekciju površina', size:'220 komada', price:22.40, brand:'Mikrozid',
    desc:'Maramice impregnirane alkoholnom otopinom za dezinfekciju medicinskih uređaja i površina.',
},
  biotin: { img:'https://cdn11.bigcommerce.com/s-zmgdyj2jxr/images/stencil/500x659/products/467/938/YUWELL_STAP_ZA_HODANJE_NA_SKLAPANJE_YU838__35023__78783.1766046856.386.513__30580.1768299237.jpg?c=1', name:'Yuwell sklopivi štap za hodanje', size:'Model YU838', price:11.25, brand:'Yuwell',
    desc:'Lagan i sklopivi štap, idealan za putovanja i svakodnevnu upotrebu. Protuklizna baza i ergonomska drška za sigurnost i udobnost.',
}
};

/* Regulatory notice and points eligibility are catalogue data, per product.
   A product with no notice shows no row; a product that earns no points shows a note. */
const NOTICES = {
  supplement:'Food supplement. Not a substitute for a varied and balanced diet and a healthy lifestyle. Keep out of the reach of small children.',
  biocide:'Biocidal product. Use safely. Always read the label and the product information before use.',
  device:'Medical device. Read the instructions for use before first use.'
};
const NOTICE_BY_KEY = { esterc:'supplement', calmag:'supplement', d3:'supplement', selenium:'supplement', betacarotene:'supplement', omega3:'supplement', magcitrate:'supplement', zinc:'biocide', salvusept:'biocide', vitalcollagen:'biocide', multiroyal:'device' };
/* Which products earn no or limited points comes from the client; these two are example data. */
const NO_EARN = { klompe:'device', biotin:'device' };
Object.keys(CATALOG).forEach(k => { const p = CATALOG[k]; p.key = k; p.notice = NOTICES[NOTICE_BY_KEY[k]] || null; p.earn = NO_EARN[k] || null;
  p.promo = PROMOTIONS[PROMO_BY_KEY[k]] || null; p.oos = OUT_OF_STOCK.includes(k); });

/* G-05: one formula, used by C5, C9, C10 and the order record.
   Points are computed once on the cart total after all discounts, excluding items that earn
   no points, then rounded down. Delivery is not included. Paying with points earns nothing. */
const r2 = n => Math.round(n * 100) / 100;
function orderTotals({ rows, ship = 0, redeem = false, balance = BALANCE, loyaltyDown = false }) {
  const items = rows.reduce((a,[p,q]) => a + p.price*q, 0);
  const promoOf = (p,q) => p.promo ? r2(p.price*q*p.promo.pct/100) : 0;
  const promo = rows.reduce((a,[p,q]) => a + promoOf(p,q), 0);
  const afterDiscounts = r2(items - promo);
  const canRedeem = !loyaltyDown && balance >= 100;
  const credit = redeem && canRedeem ? Math.min(balance/100, r2(afterDiscounts + ship)) : 0;
  const total = r2(afterDiscounts + ship - credit);
  const earnBase = rows.filter(([p]) => !p.earn).reduce((a,[p,q]) => a + p.price*q - promoOf(p,q), 0);
  const points = redeem && credit > 0 ? 0 : Math.floor(r2(earnBase) + 1e-9);
  const mixed = rows.some(([p]) => p.earn);
  const promoNames = Array.from(new Set(rows.filter(([p]) => p.promo).map(([p]) => p.promo.name)));
  return { items, promo, promoNames, afterDiscounts, ship, credit, total, points, mixed, canRedeem };
}
const earnLine = n => 'Complete this order to earn ' + pts(n) + ' points';
const NO_EARN_WITH_POINTS = 'A purchase paid for with points does not earn new points.';
const MIXED_NOTE = 'Some items earn no points or a limited number of points.';

const ADDRESSES = [
  { id:'home', t:'Home · Iva Jurašin', s:'Ilica 128, 10000 Zagreb\n+385 91 234 5678', def:true,
    form:{ label:'Home', name:'Iva Jurašin', street:'Ilica 128', extra:'', postcode:'10000', city:'Zagreb', phone:'+385 91 234 5678', note:'', def:true } },
  { id:'work', t:'Work', s:'Radnička cesta 52, 10000 Zagreb\n+385 91 234 5678',
    form:{ label:'Work', name:'Iva Jurašin', street:'Radnička cesta 52', extra:'4th floor, reception', postcode:'10000', city:'Zagreb', phone:'+385 91 234 5678', note:'', def:false } }
];
/* C-09: three options, all 4,30 €. Delivery times are not confirmed by the client, so none are shown. */
const DELIVERY = [
  { id:'courier', t:'DPD to my address', price:4.30 },
  { id:'box', t:'DPD parcel locker', price:4.30 },
  { id:'gls', t:'GLS parcel locker', price:4.30 }
];
/* C-10: exactly three options, as on the website. No Amex, no cash on delivery, no saved-card manager. */
const PAYMENT = [
  { id:'wspay', t:'Google Pay, KEKS Pay, Aircash, PayCek, card payment', s:'On the secure WSPay page', icon:'wallet' },
  { id:'card', t:'Card', s:'Card details entered here in the app', icon:'credit-card' },
  { id:'bank', t:'Bank transfer', s:'Pay by IBAN in your banking app', icon:'building-bank', deferred:true }
];
const WSPAY_METHODS = [
  { id:'gpay', t:'Google Pay' }, { id:'keks', t:'KEKS Pay' }, { id:'aircash', t:'Aircash', countdown:true },
  { id:'paycek', t:'PayCek', countdown:true }, { id:'wscard', t:'Card payment' }
];
const CARD_BRANDS = ['Visa','Mastercard','Diners','Discover','Maestro'];
const WALLET_METHODS = WSPAY_METHODS;
const isDeferred = id => ((PAYMENT.find(m => m.id === id) || {}).deferred === true);
const isProviderPay = id => id === 'wspay';

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
function Shell({ title, stepIndex, steps, onBack, footer, children, pad = true, cartIcon = false, modal = false, wishKey }) {
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
          {cartIcon || wishKey ? <AppActions>{wishKey ? <HeartButton pkey={wishKey} className="iconbtn heartic" stop={false} /> : null}{cartIcon ? <CartAction onClick={()=>nav.go('cart')} /> : null}</AppActions> : null}
        </div>
        {stepIndex != null ? <StepPills steps={steps || STEPS} current={stepIndex} /> : null}
        <div style={pad ? {padding:'14px 20px 26px',display:'flex',flexDirection:'column',gap:14} : {display:'flex',flexDirection:'column',flex:1}}>{children}</div>
      </div>
      {footer}
      <WishToast />
      {overlay}
    </div>
  );
}

function Footer({ label, amount, cta, onClick, disabled, note, phase }) {
  const busy = phase === 'loading', done = phase === 'done';
  return (
    <div className="footer">
      {note ? <p className="tiny" style={{margin:0}}>{note}</p> : null}
      <div className="footrow">
        {amount != null ? <div className="totals"><span className="lbl">{label}</span><span className="amt">{eur(amount)}</span></div> : null}
        <button className="cta" onClick={onClick} disabled={disabled || busy || done} data-phase={phase || 'idle'}>
          {busy ? <><span className="spin"></span>Adding</> : done ? <>Added<i className="ti ti-check" style={{fontSize:18}}></i></> : <>{cta}<i className="ti ti-arrow-right" style={{fontSize:18}}></i></>}
        </button>
      </div>
    </div>
  );
}

function Options({ items, value, onChange, priced, onEdit }) {
  return (
    <div style={{display:'flex',flexDirection:'column',gap:10}}>
      {items.map(o=>(
        <div key={o.id} style={{position:'relative'}}>
          <button className="opt" role="radio" aria-checked={value===o.id} onClick={()=>onChange(o.id)} style={onEdit ? {paddingRight:64,width:'100%'} : {width:'100%'}}>
            <span className="dot"></span>
            <span style={{textAlign:'left',minWidth:0}}>
              <span className="t" style={{display:'flex',alignItems:'center',gap:8}}>{o.icon?<i className={'ti ti-'+o.icon} style={{fontSize:16,color:'var(--sage-500)'}}></i>:null}{o.t}</span>
              {o.s ? <span className="s" style={{whiteSpace:'pre-line',display:'block'}}>{o.s}</span> : null}
            </span>
            {priced ? <span className="price">{o.price ? eur(o.price) : 'Free'}</span> : null}
          </button>
          {onEdit ? <button className="optedit" onClick={()=>onEdit(o.id)}>Edit</button> : null}
        </div>
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

const pctOff = p => p.was ? '\u2212' + Math.round((1 - p.price / p.was) * 100) + ' %' : null;

/* C4 — product page. No points (G-04, C-03); availability is in stock / out of stock only (C-04). */
function StepProduct({ qty, setQty, main, go, back }) {
  const nav = useNav();
  const p = main;
  const [phase, setPhase] = React.useState('idle');
  const timers = React.useRef([]);
  React.useEffect(()=>()=>timers.current.forEach(clearTimeout), []);
  const doAdd = () => {
    window.CartStore.add(p.name, qty);
    setPhase('loading');
    timers.current.push(setTimeout(()=>setPhase('done'), 750));
    timers.current.push(setTimeout(()=>setPhase('idle'), 2000));
  };
  const add = () => { if (Session.isGuest()) { nav.requireAuth && nav.requireAuth(()=>window.CartStore.add(p.name, qty)); return; } doAdd(); };
  const showPromo = p.promo && LoyaltyStatus.up;
  return (
    <Shell title="Product" cartIcon wishKey={p.key} onBack={back} footer={<Footer label="Price" amount={p.price*qty} cta={p.oos ? 'Out of stock' : 'Add to cart'} onClick={add} disabled={p.oos} phase={phase} />}>
      <Gallery p={p} />
      <div>
        {p.prime || p.was ? <div style={{display:'flex',alignItems:'center',gap:6,flexWrap:'wrap'}}>
          {p.was ? <ProductLabel kind="sale">{pctOff(p)}</ProductLabel> : null}
          {p.prime ? <ProductLabel kind="prime">PRIME</ProductLabel> : null}
        </div> : null}
        <h1 style={{fontFamily:'var(--font-serif-display)',fontSize:27,fontWeight:500,letterSpacing:'.005em',lineHeight:1.15,color:'var(--text-body)',margin:'8px 0 0',textWrap:'pretty'}}>{p.name}</h1>
        <div className="tiny" style={{marginTop:6}}>{p.size}</div>
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
        <div style={{minWidth:0}}>
          <div style={{display:'flex',alignItems:'baseline',gap:10,flexWrap:'wrap'}}>
            <div style={{fontFamily:'var(--font-numeric)',fontSize:30,fontWeight:500,letterSpacing:'.01em',fontVariantNumeric:'tabular-nums',color:'var(--text-body)'}}>{eur(p.price)}</div>
            {p.was ? <span style={{fontFamily:'var(--font-numeric)',fontSize:15,color:'var(--text-faint)',textDecoration:'line-through'}}>{eur(p.was)}</span> : null}
          </div>
          {showPromo ? <div style={{marginTop:8,display:'flex'}}><ProductLabel kind="promo">{promoText(p.promo)}</ProductLabel></div> : null}
        </div>
        {p.oos ? null : (
          <div className="step-stepper">
            <button onClick={()=>setQty(Math.max(1,qty-1))} aria-label="Less"><i className="ti ti-minus"></i></button>
            <span>{qty}</span>
            <button onClick={()=>setQty(Math.min(9,qty+1))} aria-label="More"><i className="ti ti-plus"></i></button>
          </div>
        )}
      </div>
      <hr className="rule" />
      <p className="body">{p.desc}</p>
      <div className="quiet">
        <ul className="mechanic">
          <li><i className={'ti ti-' + (p.oos ? 'circle-x' : 'circle-check')}></i><span>{p.oos ? 'Out of stock' : 'In stock'}</span></li>
        </ul>
      </div>
      {p.notice ? (
        <div className="card">
          <span className="microlabel">Product notice</span>
          <p className="body" style={{marginTop:6}}>{p.notice}</p>
        </div>
      ) : null}
      {p.nutrients ? (
        <React.Fragment>
          <SecLabel aside="Per tablet">Micronutrients</SecLabel>
          <div className="card">
            <div className="sum">
              {p.nutrients.map(([n,amt,rda])=>(
                <div className="r" key={n}><span>{n}</span><b>{amt} · {rda} RDA</b></div>
              ))}
            </div>
          </div>
        </React.Fragment>
      ) : null}
      {p.info ? (
        <React.Fragment>
          <SecLabel>Product details</SecLabel>
          <div className="card">
            {p.info.map((it,i)=>(
              <FaqItem key={it.q} question={it.q} defaultOpen={i===0} style={i===p.info.length-1?{borderBottom:0}:undefined}>{it.a}</FaqItem>
            ))}
          </div>
        </React.Fragment>
      ) : null}
    </Shell>
  );
}

/* C5 — points in the cart are conditional and computed once (G-05, C-05, C-06). No cross-sell (C-07). */
function PointsLine({ t, loyaltyDown, redeem }) {
  if (loyaltyDown) return (
    <div className="earnnote" data-off="true">
      <div>
        <div className="t">Points are temporarily unavailable</div>
        <div className="s">Your order is not affected. Points for it are added once the service is back.</div>
      </div>
    </div>
  );
  return (
    <div className="earnnote">
      <div>
        <div className="t">{redeem && t.credit > 0 ? NO_EARN_WITH_POINTS : earnLine(t.points)}</div>
        {t.mixed && !(redeem && t.credit > 0) ? <div className="s">{MIXED_NOTE}</div> : null}
      </div>
    </div>
  );
}

function StepCart({ qty, setQty, magQty, setMagQty, main, steps, total, redeem, loyaltyDown, go, back }) {
  const second = main === CATALOG.calmag ? CATALOG.esterc : CATALOG.calmag;
  const rows = [[main,qty,setQty],[second,magQty,setMagQty]].filter(([,q])=>q>0);
  const t = orderTotals({ rows, redeem, loyaltyDown });
  React.useEffect(()=>{ if (window.CartStore) window.CartStore.replace(rows.map(([p,q])=>[p.name,q])); }, [qty, magQty, main]);
  const empty = !qty && !magQty;
  return (
    <Shell title="Cart" steps={steps} onBack={back} footer={<Footer label="Total" amount={t.total} cta="Checkout" onClick={go} disabled={empty} />}>
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
        {empty ? <p className="body" style={{textAlign:'center',padding:'18px 0'}}>Your cart is empty.</p> : null}
      </div>
      {empty ? null : (
        <div className="card">
          <div className="sum">
            <div className="r"><span>Items</span><b>{eur(t.items)}</b></div>
            {t.promo ? <div className="r credit"><span>{'Promotion: ' + t.promoNames.join(', ')}</span><b>{'\u2212' + eur(t.promo)}</b></div> : null}
            <div className="r total"><span>Subtotal</span><b>{eur(t.afterDiscounts)}</b></div>
          </div>
        </div>
      )}
      {empty ? null : <PointsLine t={t} loyaltyDown={loyaltyDown} redeem={redeem} />}
      {empty || loyaltyDown ? null : <p className="tiny" style={{marginTop:-4}}>{'You have ' + pts(BALANCE) + ' points (' + eur(CREDIT) + ') to use at review.'}</p>}
    </Shell>
  );
}

function StepDelivery({ value, onChange, address, addresses, locker, onPickLocker, total, go, back }) {
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
    <Shell title="Delivery" stepIndex={1} steps={STEPS} onBack={back} footer={<Footer label="Total" amount={total} cta={needsLocker ? 'Choose a locker' : 'Continue'} onClick={needsLocker ? onPickLocker : go} />}>
      <SecLabel>How would you like to receive it</SecLabel>
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
      <p className="tiny">Parcel lockers and pick-up points belong to DPD and GLS and are located in other shops, never in Švaljek pharmacies.</p>
    </Shell>
  );
}

/* C6 — the address book stays; Edit opens the existing address (C-08). */
function StepAddress({ address, addresses, onAddress, onAdd, onEdit, total, go, back }) {
  return (
    <Shell title="Address" stepIndex={0} steps={STEPS} onBack={back} footer={<Footer label="Total" amount={total} cta="Continue" onClick={go} disabled={!address} />}>
      <SecLabel>Deliver to</SecLabel>
      <Options items={addresses} value={address} onChange={onAddress} onEdit={onEdit} />
      <button className="ghostbtn" onClick={onAdd}><i className="ti ti-plus" style={{fontSize:16}}></i>Add a new address</button>
      <p className="tiny">{`Delivery prices are calculated from this address. The name on your ${PROGRAMME} card comes from it too.`}</p>
    </Shell>
  );
}

/* C8 — three options. Card goes through Stripe with native fields here in the app. */
function CardFields({ value, onChange }) {
  const set = k => e => onChange({ ...value, [k]: e.target.value });
  return (
    <div style={{display:'flex',flexDirection:'column',gap:10}}>
      <div className="afield">
        <label>Card number</label>
        <div className="wrap"><i className="ti ti-credit-card"></i><input inputMode="numeric" value={value.num} placeholder="0000 0000 0000 0000" onChange={set('num')} /></div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10}}>
        <div className="afield"><label>Expires</label><div className="wrap"><input inputMode="numeric" value={value.exp} placeholder="MM/YY" onChange={set('exp')} /></div></div>
        <div className="afield"><label>CVC</label><div className="wrap"><input inputMode="numeric" value={value.cvc} placeholder="123" onChange={set('cvc')} /></div></div>
      </div>
    </div>
  );
}
const cardReady = c => c && c.num.replace(/\D/g,'').length >= 15 && c.exp.length >= 4 && c.cvc.length >= 3;

function BrandMarks({ id }) {
  if (id === 'card') return (
    <span className="brandmark">
      <img src="assets/pay-visa.svg" alt="Visa" />
      <img src="assets/pay-mastercard.svg" alt="Mastercard" />
      {['Diners','Discover','Maestro'].map(b=><span key={b} className="brandtxt">{b}</span>)}
    </span>
  );
  if (id === 'wspay') return (
    <span className="brandmark">
      <img src="assets/pay-gpay.png" alt="Google Pay" />
      <img className="sq" src="assets/pay-keks.png" alt="KEKS Pay" />
    </span>
  );
  return null;
}

function StepPayment({ value, onChange, redeem, setRedeem, cardData, setCardData, total, go, back }) {
  const pick = id => { onChange(id); if (isDeferred(id)) setRedeem(false); };
  return (
    <Shell title="Payment" stepIndex={2} steps={STEPS} onBack={back} footer={<Footer label="Total" amount={total} cta="Continue" onClick={go} disabled={value === 'card' && !cardReady(cardData)} />}>
      <SecLabel>Payment method</SecLabel>
      <div className="paylist">
        {PAYMENT.map(m=>{
          const on = value === m.id;
          return (
            <div className="paywrap" key={m.id} data-on={on ? 'true' : undefined}>
              <button className="payrow" role="radio" aria-checked={on} onClick={()=>pick(m.id)}>
                <span className="dot"></span>
                <span className="txt"><span className="t">{m.t}</span></span>
                {m.id === 'wspay' ? null : <BrandMarks id={m.id} />}
              </button>
              {on ? (
                <div className="paydetail">
                  {m.id === 'card' ? <BrandMarks id="card" /> : null}
                  {m.id === 'card' ? <CardFields value={cardData} onChange={setCardData} /> : null}
                  <p className="paynote">
                    {m.id === 'card' ? 'Card details go straight to Stripe over an encrypted connection. Your bank may ask you to confirm the payment.'
                      : m.id === 'bank' ? `You get the payee, IBAN, model, reference and amount on the confirmation screen and in the email. ${PROGRAMME} points cannot be used with bank transfer` + (redeem ? '. The discount on your order has been removed.' : '.')
                      : 'You choose how to pay on the secure WSPay page, then return here. A card can be saved on the WSPay page for next time.'}
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

/* C9 — review. Switch states: below 100, worth more than the order, fully covered, bank transfer,
   and loyalty service unavailable (C-12, S-02). */
function StepReview({ qty, magQty, main, delivery, redeem, setRedeem, address, addresses, locker, payment, balance, redeemDropped, loyaltyDown, go, back, goStep }) {
  const second = main === CATALOG.calmag ? CATALOG.esterc : CATALOG.calmag;
  const rows = [[main,qty],[second,magQty]].filter(([,q])=>q>0);
  const ship = DELIVERY.find(d=>d.id===delivery).price;
  const bal = balance == null ? BALANCE : balance;
  const worth = bal/100;
  const deferred = isDeferred(payment);
  const blocked = loyaltyDown || deferred || bal < 100;
  const t = orderTotals({ rows, ship, redeem: redeem && !blocked, balance: bal, loyaltyDown });
  const credit = t.credit, total = t.total;
  const blockedWhy = loyaltyDown
    ? 'Points cannot be used right now because the service is temporarily unavailable. You can still place the order.'
    : deferred
      ? 'Not available with bank transfer, because the payment is settled later. Switch to card or WSPay to use your points.'
      : bal < 100 ? `${pts(bal)} points so far. Points can be used from 100 points upward, ${pts(100 - bal)} to go.` : null;
  const usedPts = Math.round(credit*100);
  const on = redeem && !blocked;
  const capped = on && usedPts < bal;
  const [terms, setTerms] = React.useState(false);
  const [coupon, setCoupon] = React.useState(false);
  const [code, setCode] = React.useState('');
  const nothingToPay = total <= 0.001;
  const pay = PAYMENT.find(p=>p.id===payment);
  return (
    <Shell title="Review" stepIndex={3} steps={STEPS} onBack={back} footer={<Footer label="Total" amount={total} cta={nothingToPay ? 'Confirm order' : 'Place order'} onClick={go} disabled={!terms} />}>
      {redeemDropped ? <StateBanner icon="alert-circle" title="Your points were taken off this order">A payment settled later cannot be combined with points, so the discount was removed when you changed the payment method. Switch back to card or WSPay to use the points again.</StateBanner> : null}
      <div className="switchrow" data-off={blocked ? 'true' : undefined}>
        <div style={{position:'relative',flex:1,minWidth:0}}>
          <div className="t">Use my points</div>
          {/* COPY REVIEW: whether redemption spends the full balance or whole euros only is still open (brief §7). */}
          <div className="s">{blockedWhy || (on
            ? capped ? `${pts(usedPts)} points used, ${eur(credit)} off. ${pts(bal - usedPts)} points stay on your balance.` : `${pts(usedPts)} points used, ${eur(credit)} off.`
            : `${pts(bal)} points, ${eur(worth)} off.`)}</div>
        </div>
        <button className="sw" role="switch" aria-checked={on} disabled={blocked} aria-label="Use my points" onClick={()=>{ if(!blocked) setRedeem(!redeem); }}></button>
      </div>
      {on && nothingToPay ? <p className="tiny">Your points cover the whole order. There is nothing left to pay.</p> : null}
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
        {coupon ? <p className="tiny" style={{padding:'0 2px 2px'}}>{`${PROGRAMME} points are not a code. Use the switch above.`}</p> : null}
      </div>
      <div className="card">
        <div className="sum">
          <div className="r"><span>Items ({qty+magQty})</span><b>{eur(t.items)}</b></div>
          {t.promo ? <div className="r credit"><span>{'Promotion: ' + t.promoNames.join(', ')}</span><b>{'\u2212' + eur(t.promo)}</b></div> : null}
          <div className="r"><span>{DELIVERY.find(d=>d.id===delivery).t}{isLocker(delivery)&&locker?' · '+locker.name:''}</span><b>{ship ? eur(ship) : 'Free'}</b></div>
          {credit ? <div className="r credit"><span>{`${PROGRAMME} points`}</span><b>{'\u2212' + eur(credit)}</b></div> : null}
          <div className="r total"><span>To pay</span><b>{nothingToPay ? eur(0) : eur(total)}</b></div>
        </div>
      </div>
      <PointsLine t={t} loyaltyDown={loyaltyDown} redeem={on} />
      <div className="card">
        <div>
          {rows.map(([p,q],i,a)=>(
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
            <p className="body" style={{marginTop:4}}>{pay.t}</p>
          </div>
        </div>
      </div>
      <label className="consent" style={{padding:'2px 2px 0'}}>
        <input type="checkbox" checked={terms} onChange={e=>setTerms(e.target.checked)} />
        <span>I confirm I have read the <a href="#terms" onClick={e=>{e.preventDefault();}}>terms of use</a> and wish to continue with the order.</span>
      </label>
    </Shell>
  );
}

/* C10 — confirmation. Bank transfer: points are credited when the payment is confirmed (C-13). */
function StepDone({ totals, redeem, back, onTrack, payment, id = 'WP-20826-441' }) {
  const t = totals;
  const used = Math.round(t.credit*100);
  const bank = payment === 'bank';
  return (
    <div className="phone">
      <StatusBar />
      <div className="scroll" style={{display:'flex',flexDirection:'column'}}>
        <div className="done">
          <span className="mark"><i className="ti ti-check"></i></span>
          <h3>{bank ? 'Order reserved' : 'Order placed'}</h3>
          <p className="body" style={{margin:0}}>Order <b style={{fontFamily:'var(--font-numeric)',fontWeight:500}}>{id}</b>. {bank ? 'It is processed as soon as your transfer arrives. The details are below and in the confirmation email.' : "We'll email a confirmation and let you know when it's on the way."}</p>
          <div className="switchrow pale" style={{width:'100%',textAlign:'left',flexDirection:'column',alignItems:'flex-start',gap:10}}>
            <div style={{position:'relative'}}>
              <div className="t">{used ? `${pts(used)} points used` : '+' + pts(t.points) + ' points'}</div>
              <div className="s">{bank
                ? 'Points are credited when the payment is confirmed.'
                : used
                  ? `${eur(t.credit)} saved on this order. ${NO_EARN_WITH_POINTS}`
                  : 'Points are credited once the order is completed.'}</div>
            </div>
          </div>
        </div>
        <div style={{padding:'0 20px 22px',display:'flex',flexDirection:'column',gap:10}}>
          {bank ? (
            <div style={{display:'flex',flexDirection:'column',gap:12,marginBottom:4}}>
              <SecLabel>Transfer these details</SecLabel>
              <BankDetails inline amount={t.total} reference={id.replace(/\D/g,'')} />
            </div>
          ) : null}
          <button className="cta" onClick={onTrack}>View this order<i className="ti ti-arrow-right" style={{fontSize:18}}></i></button>
          <button className="ghostbtn" onClick={back}>Continue shopping</button>
        </div>
      </div>
    </div>
  );
}

/* ---------- flow controller ---------- */

function CheckoutFlow({ start = 0, fixed, initial = {}, product, balance, dropped, loyaltyDown, onExit }) {
  const nav = useNav();
  const [i, setI] = React.useState(start);
  const [qty, setQty] = React.useState(initial.qty ?? 1);
  const [magQty, setMagQty] = React.useState(initial.magQty ?? 1);
  const [address, setAddress] = React.useState(initial.address ?? 'home');
  const [delivery, setDelivery] = React.useState(initial.delivery ?? 'courier');
  const [payment, setPayment] = React.useState(initial.payment ?? 'wspay');
  const [redeem, setRedeem] = React.useState(initial.redeem ?? false);
  const [addresses, setAddresses] = React.useState(ADDRESSES);
  const [lockerId, setLockerId] = React.useState(initial.locker ?? null);
  const [editId, setEditId] = React.useState(null);
  const [sub, setSub] = React.useState(initial.sub ?? null);
  const [wsMethod, setWsMethod] = React.useState(initial.wsMethod ?? null);
  const [cardData, setCardData] = React.useState({ num:'4242 4242 4242 4242', exp:'08/28', cvc:'123' });
  const locker = (window.LOCKERS || []).find(l => l.id === lockerId) || null;
  const step = fixed ?? i;
  React.useEffect(()=>{ LoyaltyStatus.up = !loyaltyDown; return ()=>{ LoyaltyStatus.up = true; }; }, [loyaltyDown]);
  const go = () => setI(Math.min(6, step+1));
  const back = () => { if (step === start && onExit) onExit(); else setI(Math.max(start, step-1)); };
  const main = CATALOG[product] || CATALOG[initial.product] || CATALOG.esterc;
  const placed = React.useRef(null);
  const [redeemDropped, setRedeemDropped] = React.useState(!!dropped);
  const goStep = n => { setRedeemDropped(false); setI(n); };
  const second = main === CATALOG.calmag ? CATALOG.esterc : CATALOG.calmag;
  const rows = [[main,qty],[second,magQty]].filter(([,q])=>q>0);
  const totals = () => {
    const ship = DELIVERY.find(d=>d.id===delivery).price;
    const bal = balance == null ? BALANCE : balance;
    return orderTotals({ rows, ship, redeem: redeem && !isDeferred(payment), balance: bal, loyaltyDown });
  };

  const common = { qty, setQty, magQty, setMagQty, main, redeem, loyaltyDown, steps: stepsFor(delivery), go, back, goStep, total: totals().total };

  const commit = () => {
    const t = totals();
    const dest = isLocker(delivery) && locker ? `${delivery === 'box' ? 'DPD' : 'GLS'} · ${locker.name}\n${locker.addr}`
      : (addresses.find(a=>a.id===address) || {}).s;
    placed.current = {
      id: 'WP-20826-' + (500 + Math.floor(Math.random()*400)),
      date: '26 Aug 2026', total: eur(t.total), status: payment === 'bank' ? 'Awaiting payment' : 'Received', tone:'wait',
      items: qty + magQty, points: t.points ? '+' + t.points : '0', track: 0, payment, bankTotal: t.total,
      lines: rows.map(([p,q])=>({ img:p.img, name:p.name, sub:`${q} × ${eur(p.price)}`, amt:eur(p.price*q) })),
      sum: { items:eur(t.items), promo: t.promo ? '\u2212' + eur(t.promo) : null, promoLabel: 'Promotion: ' + t.promoNames.join(', '), shipLabel:DELIVERY.find(d=>d.id===delivery).t, ship:t.ship?eur(t.ship):'Free', credit:t.credit?'\u2212'+eur(t.credit):null },
      earned: t.points, credit: t.credit, dest
    };
    if (window.recordOrder) window.recordOrder(placed.current);
  };

  const place = () => {
    if (totals().total <= 0.001) { commit(); go(); return; }
    if (payment === 'card') { setSub('3ds'); return; }
    if (isProviderPay(payment)) { setSub('provider'); return; }
    commit();
    go();
  };
  const stepScreen = () => {
    if (step === 0) return <StepProduct {...common} />;
    if (step === 1) return <StepCart {...common} />;
    if (step === 2) return <StepAddress total={totals().total} address={address} addresses={addresses} onAddress={setAddress} onAdd={()=>setSub('newaddress')} onEdit={id=>{ setEditId(id); setSub('editaddress'); }} go={go} back={back} />;
    if (step === 3) return <StepDelivery total={totals().total} value={delivery} onChange={id=>{ setDelivery(id); if (!isLocker(id)) setLockerId(null); }} address={address} addresses={addresses} locker={locker} onPickLocker={()=>setSub('locker')} go={go} back={back} />;
    if (step === 4) return <StepPayment total={totals().total} value={payment} onChange={id=>{ setPayment(id); if (isDeferred(id) && redeem) { setRedeem(false); setRedeemDropped(true); } }} redeem={redeem} setRedeem={setRedeem} cardData={cardData} setCardData={setCardData} go={go} back={back} />;
    if (step === 5) return <StepReview {...common} balance={balance} redeemDropped={redeemDropped} go={place} address={address} addresses={addresses} locker={locker} delivery={delivery} payment={payment} redeem={redeem} setRedeem={setRedeem} />;
    return <StepDone totals={totals()} redeem={redeem} payment={payment} id={placed.current ? placed.current.id : undefined} onTrack={()=>nav.set && placed.current ? nav.set(['profile','orders','order:'+placed.current.id]) : null} back={()=>{ if (nav.tab) nav.tab('shop'); else if (onExit) onExit(); else setI(0); }} />;
  };
  const cardShown = { brand: /^5/.test(cardData.num) ? 'Mastercard' : 'Visa', num: '•••• ' + cardData.num.replace(/\D/g,'').slice(-4) };
  const overlay = () => {
    if (sub === 'newaddress') return (
    <AddressForm modal title="New address" onCancel={()=>setSub(null)} onSave={f=>{
      const id = 'a' + Date.now();
      setAddresses(l => [...l, { id, t: f.label + ' · ' + f.name, s: window.fmtAddress(f), form:f, def:f.def }]);
      setAddress(id); setSub(null);
    }} />
    );
    if (sub === 'editaddress') { const a = addresses.find(x=>x.id===editId); return (
      <AddressForm modal title="Edit address" cta="Save changes" initial={a && a.form} onCancel={()=>setSub(null)} onSave={f=>{
        setAddresses(l => l.map(x => x.id === editId ? { ...x, t: f.label + ' · ' + f.name, s: window.fmtAddress(f), form:f, def:f.def } : x));
        setSub(null);
      }} />
    ); }
    if (sub === '3ds') return (
      <ThreeDS modal amount={totals().total} card={cardShown} onCancel={()=>setSub(null)} onDone={()=>{ commit(); setSub(null); go(); }} />
    );
    if (sub === 'locker') return (
      <LockerPicker modal carrier={delivery === 'gls' ? 'GLS' : 'DPD'} value={lockerId} onChange={setLockerId} onBack={()=>setSub(null)} onConfirm={()=>setSub(null)} />
    );
    if (sub === 'provider') return <ProviderPage amount={totals().total} onCancel={()=>setSub(null)} onPick={m=>{ setWsMethod(m); setSub('awaiting'); }} />;
    if (sub === 'awaiting') return <AwaitingPayment method={WSPAY_METHODS.find(w=>w.id===wsMethod)} onDone={()=>{ commit(); setSub(null); go(); }} onCancel={()=>setSub(null)} onFail={()=>setSub('failed')} />;
    if (sub === 'failed') return <PaymentFailed onRetry={()=>setSub('provider')} onOther={()=>{ setSub(null); goStep(4); }} />;
    return null;
  };
  return <OverlayCtx.Provider value={overlay()}>{stepScreen()}</OverlayCtx.Provider>;
}

/* C-11: WSPay runs in our own webview with our header and a cancel button. */
function ProviderPage({ amount, onCancel, onPick }) {
  const [m, setM] = React.useState(null);
  return (
    <Shell modal title="WSPay" onBack={onCancel} footer={
      <div className="footer">
        <button className="cta" disabled={!m} onClick={()=>onPick(m)}>Pay {eur(amount)}</button>
        <button className="ghostbtn" onClick={onCancel}>Cancel payment</button>
      </div>
    }>
      <div className="quiet" style={{display:'flex',alignItems:'center',gap:10}}>
        <i className="ti ti-lock" style={{fontSize:17,color:'var(--sage-500)'}}></i>
        <span className="tiny">{`Secure WSPay page, shown inside ${PROGRAMME}. You can cancel at any time.`}</span>
      </div>
      <div style={{fontFamily:'var(--font-numeric)',fontSize:30,fontWeight:500,fontVariantNumeric:'tabular-nums',textAlign:'center'}}>{eur(amount)}</div>
      <Options items={WSPAY_METHODS} value={m} onChange={setM} />
    </Shell>
  );
}

function AwaitingPayment({ method, onDone, onCancel, onFail }) {
  const [left, setLeft] = React.useState(238);
  React.useEffect(()=>{ if (!method || !method.countdown) return; const t = setInterval(()=>setLeft(v=>Math.max(0, v-1)), 1000); return ()=>clearInterval(t); }, []);
  const mm = String(Math.floor(left/60)), ss = String(left%60).padStart(2,'0');
  return (
    <Shell modal title="Waiting for confirmation" onBack={onCancel} footer={
      <div className="footer">
        <button className="cta" onClick={onDone}>Payment confirmed</button>
        <button className="ghostbtn" onClick={onCancel}>Cancel and choose another method</button>
        {onFail ? <button className="alink" style={{alignSelf:'center'}} onClick={onFail}>Prototype: show a declined payment</button> : null}
      </div>
    }>
      <div className="card" style={{display:'flex',flexDirection:'column',gap:12,alignItems:'center',textAlign:'center'}}>
        <span className="spin" style={{width:22,height:22,borderColor:'rgba(3,92,103,.25)',borderTopColor:'var(--sage-500)'}}></span>
        <div style={{fontWeight:500}}>Waiting for payment confirmation</div>
        <p className="body" style={{margin:0}}>{method ? method.t : 'WSPay'}</p>
        {method && method.countdown ? <div className="tiny" style={{fontVariantNumeric:'tabular-nums'}}>Time left to confirm: {mm}:{ss}</div> : null}
      </div>
    </Shell>
  );
}

/* C-11: processor error in our own screen, in Croatian, with retry and another method. */
function PaymentFailed({ onRetry, onOther }) {
  return (
    <Shell modal title="Payment" onBack={onOther} footer={
      <div className="footer">
        <button className="cta" onClick={onRetry}>Try again</button>
        <button className="ghostbtn" onClick={onOther}>Choose another method</button>
      </div>
    }>
      <div className="fstate" style={{paddingTop:24}}>
        <span className="tile"><i className="ti ti-credit-card-off"></i></span>
        <h3>The payment did not go through</h3>
        <p>The payment was declined. Nothing was charged and your order is unchanged.</p>
      </div>
    </Shell>
  );
}

Object.assign(window, { OverlayCtx, CheckoutFlow, isProviderPay, STEPS, stepsFor, isLocker, eur, pts, CATALOG, DELIVERY, ADDRESSES, PAYMENT, WSPAY_METHODS, WALLET_METHODS, CARD_BRANDS, Shell, Footer, Options, BALANCE, CREDIT, orderTotals, earnLine, NO_EARN_WITH_POINTS, MIXED_NOTE, PointsLine, PaymentFailed, AwaitingPayment, ProviderPage });
