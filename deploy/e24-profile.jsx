const { ListRow, StatusBadge, Banner, Field, TextInput, Switch, FaqItem, EmptyState } = window.E24WellPlusDesignSystem_54c90b;

const ORDERS = [
  { id:'WP-20826-441', date:'21 Aug 2026', total:'€33,28', status:'On the way', tone:'wait', items:2, points:'0', track:2 },
  { id:'WP-20812-208', date:'12 Aug 2026', total:'€24,90', status:'Delivered', tone:'ok', items:1, points:'+24', track:3 },
  { id:'WP-20804-119', date:'4 Aug 2026', total:'€128,40', status:'Delivered', tone:'ok', items:5, points:'+128', track:3 },
  { id:'WP-20729-076', date:'29 Jul 2026', total:'€18,20', status:'Refunded', tone:'negative', items:1, points:'−18', track:3 }
];
const TRACK = ['Order placed','Confirmed by pharmacy','On the way','Delivered'];
function recordOrder(o) { if (!ORDERS.some(x => x.id === o.id)) ORDERS.unshift(o); return o.id; }

function ProfileScreen() {
  const nav = useNav();
  const verified = useVerified();
  const [confirm, setConfirm] = React.useState(false);
  const groups = [
    { title:'Orders & details', rows:[['My orders','package','orders'],['Personal details','user','personal'],['Delivery addresses','map-pin','addresses'],['Payment methods','credit-card','cards'],['Preferred parcel locker','package','locker'],['Notifications','bell','notifications'],['Consents','checkbox','consents']] },
    { title:'Support', rows:[['FAQ','help','faq'],['Contact us','message','contact'],['Terms of use','file-text','terms'],['Privacy policy','shield-lock','privacy']] }
  ];
  return (
    <Screen active="Profile" title="Profile" action={<React.Fragment>
      <AppIcon icon="search" label="Search" onClick={()=>nav.go('search')} />
      <CartAction onClick={()=>nav.go('cart')} />
    </React.Fragment>}>
      {!verified ? <UnverifiedBanner onVerify={()=>nav.go('verify')} /> : null}
      <div className="card" style={{padding:18}}>
        <div style={{display:'flex',alignItems:'center',gap:14}}>
          <span style={{width:52,height:52,borderRadius:'50%',background:'var(--surface-brand-quiet)',display:'flex',alignItems:'center',justifyContent:'center',flex:'none'}}>
            <i className="ti ti-user" style={{fontSize:24,color:'var(--sage-500)'}}></i>
          </span>
          <div style={{minWidth:0}}>
            <div style={{fontFamily:'var(--font-serif-display)',fontSize:19,fontWeight:500,color:'var(--text-body)'}}>Iva Jurašin</div>
            <div className="tiny" style={{marginTop:2}}>iva.jurasin@primjer.hr</div>
          </div>
        </div>
      </div>
      {groups.map(g=>(
        <React.Fragment key={g.title}>
          <SecLabel>{g.title}</SecLabel>
          <div className="rowlist">
            {g.rows.map(([label,icon,route])=>(
              <a key={label} href="#" onClick={e=>{e.preventDefault();nav.go(route);}}><span style={{display:'flex',alignItems:'center',gap:12}}><i className={'ti ti-'+icon}></i>{label}</span><i className="ti ti-chevron-right"></i></a>
            ))}
          </div>
        </React.Fragment>
      ))}
      <SecLabel>Account</SecLabel>
      <div className="rowlist">
        <a href="#" onClick={e=>{e.preventDefault();nav.go('security');}}><span style={{display:'flex',alignItems:'center',gap:12}}><i className="ti ti-lock"></i>Security &amp; sign-in</span><i className="ti ti-chevron-right"></i></a>
        <a href="#" onClick={e=>{e.preventDefault();nav.go('about');}}><span style={{display:'flex',alignItems:'center',gap:12}}><i className="ti ti-info-circle"></i>About</span><i className="ti ti-chevron-right"></i></a>
      </div>
      {confirm ? (
        <div className="card" style={{display:'flex',flexDirection:'column',gap:12}}>
          <div>
            <div style={{fontSize:14,fontWeight:600,color:'var(--text-body)'}}>Sign out of e24?</div>
            <p className="tiny" style={{marginTop:4}}>Your points and orders stay on your account. You will need your email and password to sign back in.</p>
          </div>
          <div style={{display:'flex',gap:8}}>
            <button className="fchip" onClick={()=>setConfirm(false)}>Stay signed in</button>
            <button className="fchip" aria-pressed="true" onClick={()=>{setConfirm(false);nav.set(['onboarding']);}}>Sign out</button>
          </div>
        </div>
      ) : <button className="ghostbtn" style={{marginTop:4}} onClick={()=>setConfirm(true)}>Sign out</button>}
      <p className="tiny" style={{textAlign:'center'}}>e24 by Ljekarne Švaljek · 21 pharmacies · Version 1.0</p>
    </Screen>
  );
}

function OrdersScreen() {
  const nav = useNav();
  const [tab, setTab] = React.useState('open');
  const open = ORDERS.filter(o=>o.track < 3);
  const past = ORDERS.filter(o=>o.track >= 3);
  const rows = tab === 'open' ? open : past;
  return (
    <Shell title="My orders" onBack={nav.back}>
      <div className="chiprow">
        <button className="fchip" aria-pressed={tab==='open'} onClick={()=>setTab('open')}>In progress ({open.length})</button>
        <button className="fchip" aria-pressed={tab==='past'} onClick={()=>setTab('past')}>Completed ({past.length})</button>
      </div>
      {rows.length ? (
        <div className="card">
          {rows.map((o,i,a)=>(
            <ListRow key={o.id} title={o.id} subtitle={`${o.date} · ${o.items} ${o.items===1?'item':'items'}`} divider={i < a.length-1} chevron
              onClick={()=>nav.go('order:'+o.id)}
              trailing={<span style={{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:6}}><span className="amt">{o.total}</span><StatusBadge tone={o.tone}>{o.status}</StatusBadge></span>} />
          ))}
        </div>
      ) : (
        <EmptyState icon="package" title="No orders here" description="Orders you place in the app appear in this list, with the points they earned." />
      )}
      <p className="tiny">A purchase made in a pharmacy has no order — only its points appear in the app.</p>
    </Shell>
  );
}

function OrderDetailScreen({ id }) {
  const nav = useNav();
  const [invoice, setInvoice] = React.useState(false);
  const o = ORDERS.find(x=>x.id===id) || ORDERS[0];
  const lines = o.lines || [
    { img:'https://ljekarnaonline.hr/upload/catalog/product/29021/thumb/supradyn-imuno-boost-vitamin-c-vitamin-d-cink-sume_616942bc7df8b_580x580r.jpg', name:'Supradyn® Imuno Boost', sub:'1 × €19,83', amt:'€19,83' },
    { img:'https://ljekarnaonline.hr/upload/catalog/product/1274/thumb/supradyn-energija-30-tableta_64f068b65820e_580x580r.jpg', name:'Supradyn® Energija', sub:'1 × €21,62', amt:'€21,62' }
  ];
  const sum = o.sum || { items:'€41,45', shipLabel:'DPD to my address', ship:'€4,30', credit:'−€12,47' };
  return (
    <Shell title={o.id} onBack={nav.back} footer={
      <div className="footer">
        <button className="ghostbtn" onClick={()=>setInvoice(true)}><i className={'ti ti-'+(invoice?'check':'receipt')} style={{fontSize:17}}></i>{invoice ? 'Invoice downloaded' : 'Download invoice'}</button>
        <button className="cta" onClick={()=>nav.tab('home')}><i className="ti ti-home" style={{fontSize:18}}></i>Back to home</button>
      </div>
    }>
      {invoice ? <Banner tone="info" icon="check">Invoice {o.id}.pdf saved to your device.</Banner> : null}
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12}}>
        <div>
          <div style={{fontFamily:'var(--font-label)',fontSize:11,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--text-faint)'}}>{o.date}</div>
          <div style={{fontFamily:'var(--font-numeric)',fontSize:30,fontWeight:500,letterSpacing:'.01em',fontVariantNumeric:'tabular-nums',color:'var(--text-body)',marginTop:6}}>{o.total}</div>
        </div>
        <StatusBadge tone={o.tone}>{o.status}</StatusBadge>
      </div>
      <div className="card">
        <div style={{display:'flex',flexDirection:'column',gap:0}}>
          {TRACK.map((t,i)=>(
            <div key={t} style={{display:'flex',gap:12,alignItems:'flex-start'}}>
              <span style={{display:'flex',flexDirection:'column',alignItems:'center',flex:'none'}}>
                <span style={{width:16,height:16,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',background:i<=o.track?'var(--sage-500)':'transparent',border:'1.5px solid '+(i<=o.track?'var(--sage-500)':'var(--border-strong)'),color:'#fff',fontSize:9}}>{i<o.track?<i className="ti ti-check"></i>:null}</span>
                {i < TRACK.length-1 ? <span style={{width:1,height:26,background:i<o.track?'var(--sage-500)':'var(--border-hairline)'}}></span> : null}
              </span>
              <span style={{fontSize:13,lineHeight:1.3,paddingBottom:i<TRACK.length-1?14:0,color:i<=o.track?'var(--text-body)':'var(--text-faint)',fontWeight:i===o.track?600:400}}>{t}</span>
            </div>
          ))}
        </div>
      </div>
      <SecLabel>Items</SecLabel>
      <div className="card">
        {lines.map((l,i,a)=><ListRow key={l.name} thumb={l.img} title={l.name} subtitle={l.sub} trailing={l.amt} divider={i<a.length-1} />)}
      </div>
      <div className="card">
        <div className="sum">
          <div className="r"><span>Items</span><b>{sum.items}</b></div>
          <div className="r"><span>{sum.shipLabel}</span><b>{sum.ship}</b></div>
          {sum.credit ? <div className="r credit"><span>WellPlus points</span><b>{sum.credit}</b></div> : null}
          <div className="r total"><span>{o.tone==='negative' ? 'Refunded' : /transfer|awaiting/i.test(o.status) ? 'To pay' : 'Paid'}</span><b>{o.total}</b></div>
        </div>
      </div>
      <div className="switchrow">
        <Tendril />
        <div style={{position:'relative'}}>
          <div className="t">{sum.credit ? 'No points earned' : o.points + ' points'}</div>
          <div className="s">{o.tone==='negative' ? 'Points earned on this order were removed when the refund was processed.' : sum.credit ? 'Points were used on this order, so it earns no new points.' : 'Earned points are pending until the pharmacy confirms it.'}</div>
        </div>
      </div>
      <SecLabel>Delivery</SecLabel>
      <div className="quiet">
        <p className="body" style={{whiteSpace:'pre-line'}}>{o.dest || 'Iva Jurašin\nIlica 128, 10000 Zagreb\n+385 91 234 5678'}</p>
        <hr className="rule" />
        <p className="tiny">{o.courier || 'Overseas Express · tracking 4109 8823 71'}</p>
      </div>
      <button className="ghostbtn" onClick={()=>nav.go('contact')}><i className="ti ti-message" style={{fontSize:17}}></i>Something wrong with this order?</button>
    </Shell>
  );
}

function PersonalDetailsScreen() {
  const nav = useNav();
  const [form, setForm] = React.useState({ name:'Iva Jurašin', email:'iva.jurasin@primjer.hr', phone:'+385 91 234 5678', dob:'' });
  const [saved, setSaved] = React.useState(false);
  const set = k => e => { setForm({...form, [k]:e.target.value}); setSaved(false); };
  return (
    <Shell title="Personal details" onBack={nav.back} footer={<div className="footer"><button className="cta" onClick={()=>setSaved(true)}>Save changes</button></div>}>
      {saved ? <Banner tone="info" icon="check">Your details are saved.</Banner> : null}
      <div className="card" style={{display:'flex',flexDirection:'column',gap:14}}>
        <Field label="Name" hint="Taken from your first delivery address. It also appears on your WellPlus card."><TextInput value={form.name} onChange={set('name')} /></Field>
        <Field label="Email"><TextInput type="email" value={form.email} onChange={set('email')} /></Field>
        <Field label="Phone"><TextInput type="tel" value={form.phone} onChange={set('phone')} /></Field>
        <Field label="Date of birth" hint="Optional. Used only for age-restricted products."><TextInput placeholder="DD.MM.YYYY." value={form.dob} onChange={set('dob')} /></Field>
      </div>
      <SecLabel>Membership</SecLabel>
      <div className="card">
        <ListRow title="WellPlus number" subtitle="Shown on your card" trailing="WP-4820-1176" />
        <ListRow title="Member since" subtitle="First purchase on e24" trailing="2024" divider={false} />
      </div>
      <p className="tiny">Changing your email changes the address order confirmations are sent to. Your points balance is not affected.</p>
    </Shell>
  );
}

function ConsentsScreen() {
  const nav = useNav();
  const [on, setOn] = React.useState({ email:true, offers:true });
  const [req, setReq] = React.useState(false);
  const [toast, showToast] = useToast();
  const rows = [
    { id:'email', t:'Email about my orders', s:'Confirmations, delivery updates and invoices. Cannot be turned off for orders in progress.' },
    { id:'offers', t:'Personalised offers', s:'Product suggestions based on what you have bought. Never medical advice.' }
  ];
  const CONFIRM = {
    email: ['Order emails are on', 'Order emails are off — emails for orders in progress still arrive'],
    offers: ['Personalised offers are on', 'Personalised offers are off']
  };
  const toggle = (k, v) => { setOn({ ...on, [k]: v }); showToast(CONFIRM[k][v ? 0 : 1]); };
  return (
    <OverlayCtx.Provider value={toast}>
    <Shell title="Consents" onBack={nav.back}>
      <SwitchList items={rows} values={on} onToggle={(it,v)=>toggle(it.id,v)} />
      <Banner tone="quiet">Withdrawing a consent takes effect immediately. It does not affect your WellPlus membership or your points.</Banner>
      <button className="ghostbtn" onClick={()=>setReq(true)}>Download my data</button>
      {req ? <Banner tone="info" icon="check">We will email a copy of your data to iva.jurasin@primjer.hr within 24 hours.</Banner> : null}
    </Shell>
    </OverlayCtx.Provider>
  );
}

function FaqScreen() {
  const nav = useNav();
  return (
    <Shell title="FAQ" onBack={nav.back}>
      <SecLabel>WellPlus</SecLabel>
      <div className="card">
        <FaqItem question="How do I earn points?" defaultOpen>Every €1 you spend earns 1 point. Points are earned in all 21 pharmacies, on eljekarna24.hr, at Centar zdravih rješenja and in this app. Show your QR card at the register so an in-store purchase counts.</FaqItem>
        <FaqItem question="What are my points worth?">100 points = €1. You can redeem from 100 points upward, and there is no upper limit beyond the value of your order.</FaqItem>
        <FaqItem question="How do I spend them?">In the app, turn on the WellPlus switch at the review step — it applies your whole balance, capped at the order total. In a pharmacy, tell the cashier you would like to use your points.</FaqItem>
        <FaqItem question="Do points expire?">No. Points never expire, and there is nothing to keep active.</FaqItem>
        <FaqItem question="Why has my balance not gone up yet?">In-store purchases settle within a few hours. Until then the points show as processing in your activity list.</FaqItem>
        <FaqItem question="Does a purchase paid with points earn points?" style={{borderBottom:0}}>No. A purchase paid for using points does not earn new points.</FaqItem>
      </div>
      <SecLabel>Orders</SecLabel>
      <div className="card">
        <FaqItem question="Which prescriptions can I order?">Prescription medicines and co-payments are settled in the pharmacy and cannot be paid for in the app.</FaqItem>
        <FaqItem question="How do I return something?">Contact us within 14 days. Points earned on a returned item are removed when the refund is processed.</FaqItem>
        <FaqItem question="Where do you deliver?" style={{borderBottom:0}}>Anywhere in Croatia, by courier to your address or to a parcel locker.</FaqItem>
      </div>
      <button className="ghostbtn" onClick={()=>nav.go('contact')}><i className="ti ti-message" style={{fontSize:17}}></i>Still stuck? Contact us</button>
    </Shell>
  );
}

function SimpleScreen({ title, icon, body }) {
  const nav = useNav();
  return (
    <Shell title={title} onBack={nav.back}>
      <EmptyState icon={icon} title={title} description={body} />
    </Shell>
  );
}

Object.assign(window, { recordOrder, ProfileScreen, OrdersScreen, OrderDetailScreen, PersonalDetailsScreen, ConsentsScreen, FaqScreen, SimpleScreen, ORDERS });
