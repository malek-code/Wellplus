const { Banner: ABanner, Switch: ASwitch, Field: AField, TextInput: ATextInput } = window.E24WellPlusDesignSystem_54c90b;

/* E5 — change password and biometrics only (E-04). */
function SecurityScreen() {
  const nav = useNav();
  const [bio, setBio] = React.useState(true);
  const [pw, setPw] = React.useState(false);
  const [saved, setSaved] = React.useState(false);
  const [form, setForm] = React.useState({ current:'', next:'', again:'' });
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
      {saved ? <ABanner tone="info" icon="check">Password updated. You stay signed in on this device.</ABanner> : null}
      <SecLabel>Biometrics</SecLabel>
      <div className="card" style={{display:'flex',flexDirection:'column',gap:0}}>
        <div className="secrow last">
          <span>
            <span className="t">Face ID unlock</span>
            <span className="s">Open the app and your QR card without typing a password.</span>
          </span>
          <ASwitch checked={bio} label="Face ID unlock" onChange={setBio} />
        </div>
      </div>
    </Shell>
  );
}

/* E7 — sign out and account deletion. Deletion and data export are requests (E-05). */
function AccountScreen() {
  const nav = useNav();
  const [del, setDel] = React.useState(false);
  const [delSent, setDelSent] = React.useState(false);
  const [exportSent, setExportSent] = React.useState(false);
  return (
    <Shell title="Sign out and delete account" onBack={nav.back}>
      <SecLabel>Sign out</SecLabel>
      <button className="ghostbtn" onClick={()=>{ localStorage.removeItem('e24-session'); nav.set(['onboarding']); }}><i className="ti ti-logout" style={{fontSize:17}}></i>Sign out</button>
      <SecLabel>My data</SecLabel>
      {exportSent
        ? <ABanner tone="info" icon="check">Your request for a copy of your data has been received and will be processed. The copy is sent to iva.jurasin@primjer.hr.</ABanner>
        : <button className="ghostbtn" onClick={()=>setExportSent(true)}>Request a copy of my data</button>}
      <hr className="rule" />
      {delSent ? (
        <ABanner tone="info" icon="check">Your request to delete the account has been received and will be processed. We will confirm by email to iva.jurasin@primjer.hr.</ABanner>
      ) : (
        <div className="dangerblock">
          <div className="t">Delete account</div>
          <p className="s">{`Deleting removes your profile and addresses and closes your ${PROGRAMME} membership. Unspent points are lost and cannot be restored.`}</p>
          <button className="dangerbtn" onClick={()=>setDel(true)}>Request account deletion</button>
        </div>
      )}
      {del ? (
        <Modal icon="alert-triangle" title="Delete your account?" lead="The request cannot be undone once it is processed. Spend your points before you go." onClose={()=>setDel(false)} cta="Keep my account">
          <ul className="mechanic">
            <li><i className="ti ti-user-off"></i><span>Profile and addresses are deleted.</span></li>
            <li><i className="ti ti-rosette-discount-off"></i><span>{`${PROGRAMME} membership closes and unspent points are lost.`}</span></li>
          </ul>
          <button className="dangerbtn" onClick={()=>{ setDel(false); setDelSent(true); }}>Send deletion request</button>
        </Modal>
      ) : null}
    </Shell>
  );
}

Object.assign(window, { SecurityScreen, AccountScreen });
