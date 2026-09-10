const { Banner: CtBanner } = window.E24WellPlusDesignSystem_54c90b;

const CONTACT_TOPICS = ['An order','A product','WellPlus points','My account','Something else'];
const CONTACT_MAX = 600;

function CtField({ label, children, error, help, invalid }) {
  return (
    <div className="afield" data-invalid={(error || invalid) ? 'true' : undefined}>
      <label>{label}</label>
      {children}
      {error ? <span className="err">{error}</span> : help ? <span className="help">{help}</span> : null}
    </div>
  );
}

function ContactScreen() {
  const nav = useNav();
  const [topic, setTopic] = React.useState('');
  const [order, setOrder] = React.useState('');
  const [email, setEmail] = React.useState('iva.jurasin@primjer.hr');
  const [message, setMessage] = React.useState('');
  const [err, setErr] = React.useState({});
  const [phase, setPhase] = React.useState('idle');

  const validate = () => {
    const e = {};
    if (!topic) e.topic = 'Pick what your message is about.';
    if (!email.trim()) e.email = 'We need an email address to answer you.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) e.email = 'That does not look like an email address. Check for a typo.';
    if (topic === 'An order' && order.trim() && !/^WP-\d{5}-\d{3}$/i.test(order.trim())) e.order = 'Order numbers look like WP-20826-441.';
    if (!message.trim()) e.message = 'Write your message before sending.';
    else if (message.trim().length < 20) e.message = 'A little more detail helps — at least 20 characters.';
    return e;
  };
  const clear = k => setErr(p => { if (!p[k]) return p; const n = { ...p }; delete n[k]; return n; });
  const submit = () => {
    const e = validate();
    setErr(e);
    if (Object.keys(e).length) return;
    setPhase('loading');
    setTimeout(()=>nav.set(['profile','contact-sent']), 900);
  };
  return (
    <Shell title="Contact us" onBack={nav.back} footer={
      <div className="footer">
        <button className="cta" onClick={submit} disabled={phase!=='idle'} data-phase={phase}>
          {phase === 'loading' ? <><span className="spin"></span>Sending</> : <>Send message<i className="ti ti-arrow-right" style={{fontSize:18}}></i></>}
        </button>
      </div>
    }>
      <SecLabel>Send a message</SecLabel>
      <div style={{display:'flex',flexDirection:'column',gap:20}}>
        <CtField label="What is it about?" error={err.topic}>
          <div className="topics" data-invalid={err.topic ? 'true' : undefined}>
            {CONTACT_TOPICS.map(t=>(
              <button key={t} className="topicchip" aria-pressed={topic===t} onClick={()=>{setTopic(t);clear('topic');}}>{t}</button>
            ))}
          </div>
        </CtField>

        {topic === 'An order' ? (
          <CtField label="Order number" error={err.order} help="Optional. You will find it on your confirmation email, or under My orders.">
            <div className="wrap">
              <i className="ti ti-package"></i>
              <input value={order} onChange={e=>{setOrder(e.target.value);clear('order');}} placeholder="WP-20826-441" />
            </div>
          </CtField>
        ) : null}

        <CtField label="Email for the reply" error={err.email}>
          <div className="wrap">
            <i className="ti ti-mail"></i>
            <input type="email" value={email} onChange={e=>{setEmail(e.target.value);clear('email');}} placeholder="ime@primjer.hr" />
          </div>
        </CtField>

        <CtField label="Message" error={err.message}>
          <div className="wrap multiline">
            <textarea value={message} maxLength={CONTACT_MAX} onChange={e=>{setMessage(e.target.value);clear('message');}} placeholder="Describe what you need. If it is about a product, the name helps." />
          </div>
          <div className="counter">
            <span>{message.trim().length < 20 ? 'Min 20 characters' : 'Looks good'}</span>
            <span>{message.length} / {CONTACT_MAX}</span>
          </div>
        </CtField>
      </div>

      <p className="tiny">Support cannot give medical advice or change a prescription. For questions about a medicine, speak to a pharmacist in any of the 21 pharmacies.</p>
    </Shell>
  );
}

function ContactSentScreen() {
  const nav = useNav();
  return (
    <Shell title="Message sent" onBack={()=>nav.set(['profile'])}>
      <div className="sentwrap">
        <span className="sentmark"><i className="ti ti-mail-check"></i></span>
        <h3>Your message is with support</h3>
        <p>We reply within one working day, to iva.jurasin@primjer.hr.</p>
        <span className="ticket">Reference SUP-20831-118</span>
      </div>
      <button className="ghostbtn" onClick={()=>nav.set(['profile','faq'])}><i className="ti ti-help" style={{fontSize:17}}></i>Read the FAQ</button>
      <button className="ghostbtn" onClick={()=>nav.set(['profile'])}><i className="ti ti-user" style={{fontSize:17}}></i>Back to profile</button>
    </Shell>
  );
}

Object.assign(window, { ContactScreen, ContactSentScreen });
