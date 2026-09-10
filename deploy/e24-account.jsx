const { Banner: ABanner, Switch: ASwitch, Field: AField, TextInput: ATextInput } = window.E24WellPlusDesignSystem_54c90b;

function SecurityScreen() {
  const nav = useNav();
  const [bio, setBio] = React.useState(true);
  const [pw, setPw] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const [form, setForm] = React.useState({ current:'', next:'', again:'' });
  const [del, setDel] = React.useState(false);
  const set = (k,v) => setForm(f=>({...f,[k]:v}));
  return (
    <Shell title="Security & sign-in" onBack={nav.back}>
      <SecLabel>Password</SecLabel>
      {pw ? (
        <div className="card" style={{display:'flex',flexDirection:'column',gap:12}}>
          <AField label="Current password"><ATextInput type="password" value={form.current} onChange={v=>set('current',v)} placeholder="••••••••" /></AField>
          <AField label="New password" hint="At least 8 characters, including one number."><ATextInput type="password" value={form.next} onChange={v=>set('next',v)} placeholder="••••••••" /></AField>
          <AField label="Repeat new password"><ATextInput type="password" value={form.again} onChange={v=>set('again',v)} placeholder="••••••••" /></AField>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:2}}>
            <button className="ghostbtn" onClick={()=>{setPw(false);setForm({current:'',next:'',again:''});}}>Cancel</button>
            <button className="ghostbtn" style={{borderColor:'var(--sage-500)',color:'var(--sage-600)'}} onClick={()=>{setPw(false);setSaved(true);setForm({current:'',next:'',again:''});}}>Save password</button>
          </div>
        </div>
      ) : (
        <div className="rowlist">
          <a href="#" onClick={e=>{e.preventDefault();setSaved(false);setPw(true);}}><span style={{display:'flex',alignItems:'center',gap:12}}><i className="ti ti-lock"></i>Change password</span><i className="ti ti-chevron-right"></i></a>
        </div>
      )}
      {saved ? <ABanner tone="info" icon="check">Password updated. You stay signed in on this device; other devices will ask for the new password.</ABanner> : null}

      <SecLabel>Signing in</SecLabel>
      <div className="card" style={{display:'flex',flexDirection:'column',gap:0}}>
        <div className="secrow last">
          <span>
            <span className="t">Face ID unlock</span>
            <span className="s">Open the app and your QR card without typing a password.</span>
          </span>
          <ASwitch checked={bio} label="Face ID unlock" onChange={setBio} />
        </div>
      </div>

      <hr className="rule" />
      <div className="dangerblock">
        <div className="t">Delete account</div>
        <p className="s">Deleting removes your profile, addresses and payment methods, and closes your WellPlus membership — 1.247 unspent points are lost and cannot be restored. Invoices for past orders are kept for as long as Croatian law requires.</p>
        <button className="dangerbtn" onClick={()=>setDel(true)}>Delete my account</button>
      </div>

      {del ? (
        <Modal icon="alert-triangle" title="Delete your account?" lead="This cannot be undone. Spend your points before you go — 1.247 points are worth €12,47." onClose={()=>setDel(false)} cta="Keep my account">
          <ul className="mechanic">
            <li><i className="ti ti-user-off"></i><span>Profile, addresses and saved cards are deleted.</span></li>
            <li><i className="ti ti-rosette-discount-off"></i><span>WellPlus membership closes and unspent points are lost.</span></li>
            <li><i className="ti ti-file-invoice"></i><span>Invoices are kept for the statutory retention period.</span></li>
          </ul>
          <button className="dangerbtn" onClick={()=>setDel(false)}>Yes, delete my account</button>
        </Modal>
      ) : null}
    </Shell>
  );
}

function AboutScreen() {
  const nav = useNav();
  return (
    <Shell title="About" onBack={nav.back}>
      <div className="card" style={{padding:20,display:'flex',flexDirection:'column',alignItems:'center',gap:6,textAlign:'center'}}>
        <span style={{fontFamily:'var(--font-serif-display)',fontSize:30,fontWeight:500,color:'var(--text-body)',lineHeight:1}}>e24</span>
        <span className="tiny">by Ljekarne Švaljek</span>
        <span className="microlabel" style={{marginTop:8}}>Version 1.0 (build 104)</span>
      </div>

      <SecLabel>The app</SecLabel>
      <div className="quiet">
        <p className="body" style={{margin:0}}>e24 is the app of Ljekarne Švaljek: the full pharmacy webshop, and WellPlus — the loyalty programme that turns every €1 you spend into 1 point across 21 pharmacies, eljekarna24.hr, Centar zdravih rješenja and this app.</p>
      </div>
      <div className="card" style={{display:'flex',flexDirection:'column',gap:0}}>
        <div className="kvrow"><span>Points earned per €1</span><b>1</b></div>
        <div className="kvrow"><span>Value of 100 points</span><b>€1</b></div>
        <div className="kvrow last"><span>Points expiry</span><b>Never</b></div>
      </div>

      <SecLabel>Legal</SecLabel>
      <div className="rowlist">
        {[['Terms of use','file-text','terms'],['Privacy policy','shield-lock','privacy'],['Open source licences','license','licences']].map(([label,icon,route])=>(
          <a key={label} href="#" onClick={e=>{e.preventDefault();nav.go(route);}}><span style={{display:'flex',alignItems:'center',gap:12}}><i className={'ti ti-'+icon}></i>{label}</span><i className="ti ti-chevron-right"></i></a>
        ))}
      </div>

      <SecLabel>Company</SecLabel>
      <div className="card" style={{display:'flex',flexDirection:'column',gap:0}}>
        <div className="kvrow"><span>Registered name</span><b>Ljekarne Švaljek</b></div>
        <div className="kvrow"><span>Seat</span><b>Marija Bistrica, Croatia</b></div>
        <div className="kvrow"><span>Pharmacies</span><b>21</b></div>
        <div className="kvrow last"><span>Group</span><b>Salvus Health</b></div>
      </div>
      <button className="ghostbtn" onClick={()=>nav.go('contact')}><i className="ti ti-message" style={{fontSize:17}}></i>Contact us</button>
      <p className="tiny" style={{textAlign:'center',margin:'2px 0 0'}}>Food supplements are not a substitute for a varied diet. For medicines, ask your pharmacist.</p>
    </Shell>
  );
}

Object.assign(window, { SecurityScreen, AboutScreen });
