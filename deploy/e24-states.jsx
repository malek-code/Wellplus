/* Review items B-01 (A5, A6, unverified state), B-02 (E4 + push template), M-01/02/03 (loading, toast, errors), M-04 (S1, S2, offline card). */

const AccountStore = { verified:true, subs:new Set(),
  set(v){ this.verified = v; this.subs.forEach(f=>f()); },
  sub(f){ this.subs.add(f); return ()=>this.subs.delete(f); } };
function useVerified(){
  const [, force] = React.useState(0);
  React.useEffect(()=>AccountStore.sub(()=>force(v=>v+1)), []);
  return AccountStore.verified;
}

function StateBanner({ tone = 'attention', icon = 'mail-exclamation', title, children, action, onAction }) {
  return (
    <div className="sbanner" data-tone={tone}>
      <i className={'ti ti-' + icon}></i>
      <div className="sb-txt">
        {title ? <b>{title}</b> : null}
        <span>{children}</span>
        {action ? <button onClick={onAction}>{action}</button> : null}
      </div>
    </div>
  );
}

function UnverifiedBanner({ onVerify }) {
  return (
    <StateBanner title="Confirm your email address" action="Send the link again" onAction={onVerify}>
      WellPlus is on hold until you open the link we sent to ana.horvat@primjer.hr. Shopping works normally.
    </StateBanner>
  );
}

/* ---------- A5 email verification ---------- */

function VerifyEmailScreen({ email = 'ana.horvat@primjer.hr', onVerified, onSkip, onChange }) {
  const [left, setLeft] = React.useState(0);
  const [sent, setSent] = React.useState(false);
  React.useEffect(()=>{ if (left <= 0) return; const t = setTimeout(()=>setLeft(left-1), 1000); return ()=>clearTimeout(t); }, [left]);
  const resend = () => { setLeft(45); setSent(true); };
  return (
    <AuthShell>
      <AuthTop onBack={onChange} />
      <div className="authbody">
        <div className="sent">
          <span className="glyph"><i className="ti ti-mail-check"></i></span>
          <h1>Confirm your email</h1>
          <p>We sent a confirmation link to <span className="addr">{email}</span>. Open it and your account is complete.</p>
        </div>
        <div className="quiet" style={{marginTop:6}}>
          <ul className="mechanic">
            <li><i className="ti ti-rosette-discount"></i><span>WellPlus stays on hold until the address is confirmed — no points, no QR card.</span></li>
            <li><i className="ti ti-shopping-bag"></i><span>You can browse and order in the meantime.</span></li>
          </ul>
        </div>
        {sent ? <p className="tiny" style={{color:'var(--sage-600)'}}>Link sent again just now.</p> : null}
      </div>
      <div className="authfoot">
        <button className="abtn" onClick={onVerified}>Open the link</button>
        <button className="abtn" data-variant="ghost" onClick={resend} disabled={left > 0}>{left > 0 ? `Send again in ${left}s` : 'Send the link again'}</button>
        <div style={{display:'flex',justifyContent:'center',gap:18,paddingTop:2}}>
          <button className="alink" onClick={onChange}>Change email</button>
          <button className="alink" onClick={onSkip}>Later</button>
        </div>
      </div>
    </AuthShell>
  );
}

/* ---------- A6 registration confirmed + welcome bonus ---------- */

function WelcomeBonusScreen({ onDone }) {
  return (
    <AuthShell>
      <div className="authbody" style={{justifyContent:'center'}}>
        <div className="sent">
          <span className="glyph" style={{width:74,height:74}}><i className="ti ti-rosette-discount-check" style={{fontSize:32}}></i></span>
          <h1>Your account is ready</h1>
          <p>Welcome to WellPlus, Ana. Your balance starts at</p>
          <div className="bonusfig">
            <b>50</b>
            <MicroLabel>welcome points<span className="tbd">placeholder — amount to confirm</span></MicroLabel>
          </div>
          <p>One point for every euro spent, in the app, on both webshops and at the register. 100 points are worth €1, from 100 points upward.</p>
        </div>
      </div>
      <div className="authfoot">
        <button className="abtn" onClick={onDone}>Start shopping</button>
      </div>
    </AuthShell>
  );
}

/* ---------- E4 notification settings ---------- */

const PUSH_CATEGORIES = [
  { id:'points', t:'Points and redemptions', s:'Points earned in a pharmacy or on a webshop, and points spent. The only channel that reports them.', on:true,
    confirm:['Points notifications are on','Points notifications are off'] },
  { id:'campaigns', t:'Offers and WellPlus news', s:'Campaigns and pharmacist advice. Follows your marketing consent.', on:false,
    confirm:['Offers and news notifications are on','Offers and news notifications are off'] },
  { id:'system', t:'System', s:'Service notices about the app: maintenance, outages and changes to the programme.', on:true,
    confirm:['System notifications are on','System notifications are off'] }
];

function NotificationSettingsScreen({ denied = false, onToast }) {
  const nav = useNav();
  const [on, setOn] = React.useState(()=>Object.fromEntries(PUSH_CATEGORIES.map(c=>[c.id, c.on])));
  const [toast, showToast] = useToast();
  const flip = (c, v) => {
    if (c.locked || denied) return;
    setOn({ ...on, [c.id]: v });
    const text = c.confirm[v ? 0 : 1];
    if (onToast) onToast(text); else showToast(text);
  };
  return (
    <OverlayCtx.Provider value={toast}>
    <Shell title="Notifications" onBack={()=>nav.back()}>
      {denied
        ? <StateBanner icon="bell-off" title="Push is switched off for e24" action="Open system settings">Croatia's pharmacy points arrive by push only — there is no message inbox in the app. Turn notifications back on for e24 in your phone settings.</StateBanner>
        : <p className="body" style={{margin:0}}>Push is the only place points are announced. Choose what you want to hear about.</p>}
      <SwitchList items={PUSH_CATEGORIES} values={on} disabled={denied} onToggle={flip} />
      <p className="tiny">Notifications are delivered by the operating system. e24 cannot send them if push is switched off for the app in your phone settings.</p>
    </Shell>
    </OverlayCtx.Provider>
  );
}

/* ---------- push lock-screen template ---------- */

const PUSH_SAMPLES = [
  { cat:'Points and redemptions', title:'+26 points', body:'Ljekarna Švaljek — Ilica 191. Balance 1.273 points.' },
  { cat:'System', title:'WellPlus is briefly unavailable', body:'Points earned tonight are added once the maintenance finishes.' },
  { cat:'Offers and WellPlus news', title:'Vitamin D season', body:'Pharmacist advice on dosing through winter, plus 20% off Supradyn Kids Imuno Boost.' }
];

function PushLockScreen({ index = 0 }) {
  const s = PUSH_SAMPLES[index] || PUSH_SAMPLES[0];
  return (
    <div className="phone">
      <div className="lockscr">
        <div className="lockclock">
          <span className="lday">Thursday 3 September</span>
          <span className="ltime">08:14</span>
        </div>
        <div className="pushcard">
          <span className="pico"><img src="assets/wellplus-mark.png" alt="" /></span>
          <div className="ptxt">
            <div className="phead"><b>e24</b><span>now</span></div>
            <div className="ptitle">{s.title}</div>
            <div className="pbody">{s.body}</div>
          </div>
        </div>
        <span className="lockcat">{s.cat}</span>
      </div>
    </div>
  );
}

/* ---------- M-01 skeletons ---------- */

function Sk({ w, h = 12, r = 6, style }) {
  return <span className="sk" style={{width:w,height:h,borderRadius:r,...style}}></span>;
}

function SkeletonShop() {
  return (
    <Screen active="shop" title="Shop">
      <Sk w="46%" h={11} />
      <div className="skgrid">
        {Array.from({length:4}).map((_,i)=>(
          <div className="card skcard" key={i}>
            <Sk w="100%" h={104} r={14} />
            <Sk w="86%" />
            <Sk w="44%" />
          </div>
        ))}
      </div>
    </Screen>
  );
}

function PartialBalanceCard() {
  return (
    <div className="card">
      <div className="rows">
        <div className="switchrow">
          <div style={{flex:1,minWidth:0}}>
            <div className="t">WellPlus</div>
            <div className="s">Refreshing your balance…</div>
          </div>
          <Sk w={64} h={22} r={999} />
        </div>
      </div>
    </div>
  );
}

/* ---------- M-02 toast ---------- */

function Toast({ text, action, onAction }) {
  return (
    <div className="etoast" role="status">
      <span>{text}</span>
      {action ? <button onClick={onAction}>{action}</button> : null}
    </div>
  );
}

function useToast() {
  const [t, setT] = React.useState(null);
  const show = (text, icon) => { setT({ text, icon }); clearTimeout(show._id); show._id = setTimeout(()=>setT(null), 3000); };
  return [t ? <Toast {...t} /> : null, show];
}

/* ---------- M-03 / M-04 error and connection states ---------- */

function FullState({ icon, title, body, cta, onCta, ghost, onGhost, active = 'home', appTitle }) {
  const nav = useNav();
  return (
    <Screen active={active} title={appTitle || ''} onBack={appTitle ? ()=>nav.back() : undefined}>
      <div className="fstate">
        <span className="tile"><i className={'ti ti-' + icon}></i></span>
        <h3>{title}</h3>
        <p>{body}</p>
        {cta ? <button className="abtn" style={{maxWidth:220}} onClick={onCta}>{cta}</button> : null}
        {ghost ? <button className="alink" onClick={onGhost}>{ghost}</button> : null}
      </div>
    </Screen>
  );
}

function NoConnectionScreen({ onRetry }) {
  return <FullState icon="wifi-off" title="No connection" onCta={onRetry} cta="Try again"
    body="We cannot reach e24 right now. My card still works without a connection — the QR code is stored on this phone." />;
}

function MaintenanceScreen() {
  return <FullState icon="tool" title="e24 is being updated" active="home"
    body="Ordering is unavailable for a short while. Points earned in a pharmacy during this time are added as soon as the service is back." />;
}

function ListErrorCard({ onRetry }) {
  return (
    <div className="quiet" style={{textAlign:'center',display:'flex',flexDirection:'column',gap:10,alignItems:'center'}}>
      <i className="ti ti-cloud-off" style={{fontSize:22,color:'var(--text-faint)'}}></i>
      <p className="body" style={{margin:0}}>These products did not load.</p>
      <button className="alink" onClick={onRetry}>Try again</button>
    </div>
  );
}

/* ---------- M-04 My card offline / first generation ---------- */

function CardStateScreen({ mode = 'offline' }) {
  const first = mode === 'first', pending = mode === 'pending';
  return (
    <Screen active="card" title="My card">
      {mode === 'offline' ? <StateBanner icon="wifi-off" tone="quiet" title="Offline">The code below works at the till. The balance is the last value this phone received.</StateBanner> : null}
      {pending ? <StateBanner icon="clock" tone="quiet" title="A redemption at the till is still settling">The cashier's discount is applied. Your balance here updates as soon as the pharmacy's till reports it.</StateBanner> : null}
      <div className="card qrcard">
        <div className="qrname">Ana Horvat</div>
        <div className={'qrbox' + (first ? ' gen' : '')}>
          {first ? <div className="genwrap"><Sk w={132} h={132} r={12} /><span>Creating your code…</span></div>
            : <div className="qrfallback" role="img" aria-label="Your WellPlus QR code"><i className="ti ti-qrcode"></i></div>}
        </div>
        <div className="qrbal">
          <MicroLabel>{mode === 'offline' ? 'last known balance' : pending ? 'balance refreshing' : 'wellplus points'}</MicroLabel>
          <b>{first ? '—' : '1.247'}</b>
          <span>{mode === 'offline' ? 'Updated at 07:52, before the connection dropped.' : pending ? '+41 points from a recent purchase is still processing.' : 'Worth €12,47 at checkout or at the till.'}</span>
        </div>
        <div className="qrbright"><i className="ti ti-sun"></i><span>Screen brightness is raised while the code is open.</span></div>
      </div>
    </Screen>
  );
}

Object.assign(window, { AccountStore, useVerified, StateBanner, UnverifiedBanner, VerifyEmailScreen, WelcomeBonusScreen, NotificationSettingsScreen, PushLockScreen, PUSH_SAMPLES, Sk, SkeletonShop, PartialBalanceCard, Toast, useToast, FullState, NoConnectionScreen, MaintenanceScreen, ListErrorCard, CardStateScreen });
