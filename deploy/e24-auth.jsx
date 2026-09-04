const ONBOARDING = [
  { eyebrow:'The pharmacy, in your pocket', title:'Everything from 21 pharmacies, ordered from here', body:'Browse the full e24 range, check what is in stock near you, and choose delivery to your door or to a parcel locker.', art:'assets/splash-products.jpg' },
  { eyebrow:'WellPlus', title:'One point for every euro,\nin every channel', body:'Earn on the app, both webshops and at the register. Points never expire, and 100 points are worth €1 off your next order.', art:'assets/splash-products.jpg' },
  { eyebrow:'Your card', title:'Leave the plastic card at home', body:'Show the QR code at the till and your points are added on the spot. The same balance, the same discount, no card to carry.', art:'assets/splash-products.jpg' }
];
const SLIDE_MS = 4200;

const LangStore = { lang:'en', subs:new Set(),
  set(v){ this.lang = v; this.subs.forEach(f=>f()); },
  sub(f){ this.subs.add(f); return ()=>this.subs.delete(f); } };
function useLang(){
  const [, force] = React.useState(0);
  React.useEffect(()=>LangStore.sub(()=>force(v=>v+1)), []);
  return LangStore.lang;
}
function LangToggle({ compact }) {
  const lang = useLang();
  return (
    <span className="langtoggle" data-compact={compact ? 'true' : undefined}>
      {[['en','EN'],['hr','HR']].map(([v,l])=>(
        <button key={v} data-on={lang === v ? 'true' : undefined} onClick={()=>LangStore.set(v)} aria-pressed={lang === v}>{l}</button>
      ))}
    </span>
  );
}

function AuthShell({ children }) {
  return <div className="phone"><StatusBar /><div className="authpage">{children}</div></div>;
}

function AuthTop({ onBack, onSkip }) {
  return (
    <div className="authtop">
      {onBack ? <button onClick={onBack} aria-label="Back"><i className="ti ti-chevron-left"></i></button> : <span></span>}
      {onSkip ? <button className="skip" onClick={onSkip}>Skip</button> : <span></span>}
    </div>
  );
}

function Field({ label, type = 'text', value, onChange, placeholder, icon, help, error, autoFocus }) {
  const [show, setShow] = React.useState(false);
  const pw = type === 'password';
  return (
    <div className="afield" data-invalid={error ? 'true' : undefined}>
      <label>{label}</label>
      <div className="wrap">
        {icon ? <i className={'ti ti-' + icon}></i> : null}
        <input type={pw && !show ? 'password' : 'text'} value={value} placeholder={placeholder} autoFocus={autoFocus}
          onChange={e=>onChange(e.target.value)} />
        {pw ? <button className="reveal" type="button" onClick={()=>setShow(s=>!s)} aria-label={show ? 'Hide password' : 'Show password'}><i className={'ti ti-' + (show ? 'eye-off' : 'eye')}></i></button> : null}
      </div>
      {error ? <span className="err">{error}</span> : help ? <span className="help">{help}</span> : null}
    </div>
  );
}

function SplashScreen({ onDone }) {
  const [p, setP] = React.useState(0);
  React.useEffect(() => {
    const t0 = Date.now();
    const id = setInterval(() => {
      const v = Math.min(1, (Date.now() - t0) / 1600);
      setP(v);
      if (v >= 1) { clearInterval(id); onDone(); }
    }, 60);
    return () => clearInterval(id);
  }, []);
  return (
    <AuthShell>
      <div className="splash">
        <Tendril />
        <div className="marks">
          <img className="splashlogo" src="assets/wellplus-logo.png" alt="WellPlus" />
        </div>
        <span className="sub">Ljekarne Švaljek</span>
        <div className="loadrange"><span style={{width:(p*100)+'%'}}></span></div>
      </div>
    </AuthShell>
  );
}

function OnboardingScreen({ onLogin, onSignup, onSkip }) {
  const [i, setI] = React.useState(0);
  const [p, setP] = React.useState(0);
  const paused = React.useRef(false);
  React.useEffect(() => {
    const t0 = Date.now();
    const id = setInterval(() => {
      if (paused.current) return;
      const v = Math.min(1, (Date.now() - t0) / SLIDE_MS);
      setP(v);
      if (v >= 1) { clearInterval(id); setI((i+1) % ONBOARDING.length); setP(0); }
    }, 80);
    return () => clearInterval(id);
  }, [i]);
  const s = ONBOARDING[i];
  const jump = n => { setI(n); setP(0); };
  return (
    <AuthShell>
      <div className="authtop"><span></span><LangToggle /></div>
      <div className="obar">
        {ONBOARDING.map((_,n)=>(
          <i key={n} onClick={()=>jump(n)} style={{cursor:'pointer'}}><b style={{width:(n < i ? 100 : n === i ? p*100 : 0)+'%'}}></b></i>
        ))}
      </div>
      <div className="authbody obody" onPointerDown={()=>{paused.current=true;}} onPointerUp={()=>{paused.current=false;}}>
        <div className="oslide">
          <h2 style={{textAlign:'left',whiteSpace:'pre-line'}}>{s.title}</h2>
          <p style={{textAlign:'left'}}>{s.body}</p>
        </div>
        <div className="oart"><img src="uploads/splashimg.jpg" alt="" /><div className="ofade"></div></div>
      </div>
      <div className="authfoot ofoot">
        <button className="abtn" onClick={onSignup} style={{background:'var(--sage-500)'}}>Get started</button>
        <button className="abtn" data-variant="ghost" onClick={onLogin}>Log in</button>
        <button className="alink" style={{alignSelf:'center',marginTop:10}} onClick={onSkip}>Skip for now</button>
      </div>
    </AuthShell>
  );
}

function LoginScreen({ onBack, onForgot, onSignup, onDone }) {
  const [email, setEmail] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [err, setErr] = React.useState('');
  const submit = () => {
    if (!email.includes('@')) return setErr('Enter the email address you registered with.');
    if (pw.length < 4) return setErr('');
    onDone();
  };
  return (
    <AuthShell>
      <AuthTop onBack={onBack} />
      <div className="authbody">
        <div className="ahead">
          <h1>Welcome back</h1>
          <p>Log in to see your WellPlus balance, your orders and your saved addresses.</p>
        </div>
        <Field label="Email" icon="mail" value={email} onChange={v=>{setEmail(v);setErr('');}} placeholder="ime@primjer.hr" error={err} autoFocus />
        <Field label="Password" type="password" icon="lock" value={pw} onChange={setPw} placeholder="••••••••" />
        <button className="alink" style={{alignSelf:'flex-start'}} onClick={onForgot}>Forgotten your password?</button>
      </div>
      <div className="authfoot" data-lift="true">
        <button className="abtn" onClick={submit} disabled={!email || !pw}>Log in</button>
        <span className="aswitch">New to e24? <button className="alink" onClick={onSignup}>Create an account</button></span>
      </div>
    </AuthShell>
  );
}

function SignupScreen({ onBack, onLogin, onDone, onLegal }) {
  const [email, setEmail] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [terms, setTerms] = React.useState(false);
  const [privacy, setPrivacy] = React.useState(false);
  const [marketing, setMarketing] = React.useState(false);
  const rules = [
    { label:'At least 8 characters', ok: pw.length >= 8 },
    { label:'One number', ok: /\d/.test(pw) }
  ];
  const ready = email.includes('@') && rules.every(r=>r.ok) && terms && privacy;
  return (
    <AuthShell>
      <AuthTop onBack={onBack} />
      <div className="authbody">
        <div className="ahead">
          <h1>Create your account</h1>
          <p>Your WellPlus membership starts with the account — points from the register are added to the same balance.</p>
        </div>
        <Field label="Email" icon="mail" value={email} onChange={setEmail} placeholder="ime@primjer.hr" autoFocus />
        <Field label="Password" type="password" icon="lock" value={pw} onChange={setPw} placeholder="Choose a password" />
        <div className="pwrules">
          {rules.map(r=>(
            <span key={r.label} data-ok={r.ok}><i className={'ti ti-' + (r.ok ? 'circle-check' : 'circle')}></i>{r.label}</span>
          ))}
        </div>
        <MicroLabel style={{marginTop:4}}>required</MicroLabel>
        <label className="consent"><input type="checkbox" checked={terms} onChange={e=>setTerms(e.target.checked)} /><span>I accept the <a href="#terms" onClick={e=>{e.preventDefault();onLegal&&onLegal('terms');}}>terms of use</a> and the WellPlus programme rules.</span></label>
        <label className="consent"><input type="checkbox" checked={privacy} onChange={e=>setPrivacy(e.target.checked)} /><span>I have read the <a href="#privacy" onClick={e=>{e.preventDefault();onLegal&&onLegal('privacy');}}>privacy policy</a> and agree to my data being processed as described in it.</span></label>
        <MicroLabel style={{marginTop:6}}>optional</MicroLabel>
        <label className="consent"><input type="checkbox" checked={marketing} onChange={e=>setMarketing(e.target.checked)} /><span>Send me pharmacist advice and WellPlus news, by email and push. You can turn this off at any time in <a href="#notifications" onClick={e=>{e.preventDefault();onLegal&&onLegal('notifications');}}>notification settings</a>.</span></label>
      </div>
      <div className="authfoot" data-lift="true">
        <button className="abtn" onClick={onDone} disabled={!ready}>Create account</button>
        <span className="aswitch">Already have an account? <button className="alink" onClick={onLogin}>Log in</button></span>
      </div>
    </AuthShell>
  );
}

function ForgotScreen({ onBack, onSent }) {
  const [email, setEmail] = React.useState('');
  return (
    <AuthShell>
      <AuthTop onBack={onBack} />
      <div className="authbody">
        <div className="ahead">
          <h1>Reset your password</h1>
          <p>Enter the email address on your account and we will send a link to set a new password. The link is valid for 24 hours.</p>
        </div>
        <Field label="Email" icon="mail" value={email} onChange={setEmail} placeholder="ime@primjer.hr" autoFocus />
      </div>
      <div className="authfoot">
        <button className="abtn" onClick={()=>onSent(email)} disabled={!email.includes('@')}>Send the link</button>
      </div>
    </AuthShell>
  );
}

function ResetSentScreen({ email, onBack, onOpen }) {
  return (
    <AuthShell>
      <AuthTop onBack={onBack} />
      <div className="authbody">
        <div className="sent">
          <span className="glyph"><i className="ti ti-mail-fast"></i></span>
          <h1>Check your inbox</h1>
          <p>If an account exists for <span className="addr">{email || 'that address'}</span>, a reset link is on its way. It expires in 24 hours.</p>
          <p>Nothing after a few minutes? Look in spam, or try again with another address.</p>
        </div>
      </div>
      <div className="authfoot">
        <button className="abtn" onClick={onOpen}>Open the link</button>
        <button className="abtn" data-variant="ghost" onClick={onBack}>Use another address</button>
      </div>
    </AuthShell>
  );
}

function NewPasswordScreen({ onBack, onDone }) {
  const [pw, setPw] = React.useState('');
  const [pw2, setPw2] = React.useState('');
  const rules = [
    { label:'At least 8 characters', ok: pw.length >= 8 },
    { label:'One number', ok: /\d/.test(pw) }
  ];
  const mismatch = pw2 && pw !== pw2;
  return (
    <AuthShell>
      <AuthTop onBack={onBack} />
      <div className="authbody">
        <div className="ahead">
          <h1>Set a new password</h1>
          <p>Choose a password you have not used on e24 before. You stay logged in on this device afterwards.</p>
        </div>
        <Field label="New password" type="password" icon="lock" value={pw} onChange={setPw} placeholder="New password" autoFocus />
        <div className="pwrules">
          {rules.map(r=>(
            <span key={r.label} data-ok={r.ok}><i className={'ti ti-' + (r.ok ? 'circle-check' : 'circle')}></i>{r.label}</span>
          ))}
        </div>
        <Field label="Repeat password" type="password" icon="lock-check" value={pw2} onChange={setPw2} placeholder="Repeat password" error={mismatch ? 'The two passwords do not match.' : ''} />
      </div>
      <div className="authfoot">
        <button className="abtn" onClick={onDone} disabled={!rules.every(r=>r.ok) || pw !== pw2}>Save and log in</button>
      </div>
    </AuthShell>
  );
}

Object.assign(window, { LangStore, useLang, LangToggle, SplashScreen, OnboardingScreen, LoginScreen, SignupScreen, ForgotScreen, ResetSentScreen, NewPasswordScreen });
