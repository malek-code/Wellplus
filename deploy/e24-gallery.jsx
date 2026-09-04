/* M-13 guest flow, plus the three showcase galleries (push, states, guest). */

const GUEST_PICKS = ['esterc','d3','calmag','selenium'];

function GuestShop({ overlay }) {
  const nav = useNav();
  return (
    <Screen active="shop" title="Shop" overlay={overlay}
      action={<AppIcon icon="shopping-cart" label="Cart" onClick={()=>nav.go('guest')} />}>
      <SecLabel aside="248 products">Vitamins &amp; minerals</SecLabel>
      <div className="skgrid">
        {GUEST_PICKS.map(k=>{
          const p = CATALOG[k];
          return <ProductCard key={k} image={p.img} name={p.name} price={eur(p.price)} prime={p.prime} onClick={()=>{}} />;
        })}
      </div>
      <div className="quiet">
        <ul className="mechanic">
          <li><i className="ti ti-user-plus"></i><span>Browsing needs no account. A cart, WellPlus points and My card do.</span></li>
        </ul>
      </div>
    </Screen>
  );
}

function GuestPdp({ overlay }) {
  const p = CATALOG.esterc;
  const nav = useNav();
  return (
    <Screen active="shop" title="" onBack={()=>nav.back()} overlay={overlay} tight>
      <div style={{display:'flex',flexDirection:'column',gap:14,padding:'6px 0 0'}}>
        <div className="card" style={{padding:18,display:'flex',justifyContent:'center'}}>
          <img src={p.img} alt={p.name} style={{width:'72%',height:180,objectFit:'contain'}} />
        </div>
        <div>
          <MicroLabel>{p.brand}</MicroLabel>
          <h2 style={{fontFamily:'var(--font-serif-display)',fontSize:21,fontWeight:500,margin:'6px 0 0',lineHeight:1.2}}>{p.name}</h2>
          <p className="tiny" style={{marginTop:6}}>{p.size}</p>
        </div>
        <div style={{display:'flex',alignItems:'baseline',gap:10}}>
          <b style={{fontFamily:'var(--font-numeric,var(--font-ui))',fontSize:26,fontWeight:600}}>{eur(p.price)}</b>
          <span className="tiny">{p.stock}</span>
        </div>
        <p className="body" style={{margin:0}}>{p.desc}</p>
        <div className="quiet">
          <ul className="mechanic">
            <li><i className="ti ti-rosette-discount"></i><span>WellPlus members earn {Math.round(p.price)} points on this product. Sign in to collect them.</span></li>
          </ul>
        </div>
        <button className="abtn" onClick={()=>{}}>Add to cart</button>
      </div>
    </Screen>
  );
}

function AuthPromptSheet({ what = 'a cart', onClose }) {
  const nav = useNav();
  return (
    <div className="scrim bottom" onClick={onClose}>
      <div className="gsheet" onClick={e=>e.stopPropagation()} role="dialog" aria-modal="true" aria-label="Account needed">
        <span className="grab"></span>
        <button className="close" onClick={onClose} aria-label="Close"><i className="ti ti-x"></i></button>
        <div style={{display:'flex',flexDirection:'column',gap:14,padding:'4px 0 0'}}>
          <div>
            <h3 style={{fontFamily:'var(--font-serif-display)',fontSize:21,fontWeight:500,margin:0}}>An account is needed for {what}</h3>
            <p className="body" style={{margin:'8px 0 0'}}>Create one in under a minute, or log in. You come straight back to this product, and anything you picked stays in the cart.</p>
          </div>
          <div className="quiet">
            <ul className="mechanic">
              <li><i className="ti ti-rosette-discount"></i><span>50 welcome points, and one point for every euro after that.</span></li>
              <li><i className="ti ti-qrcode"></i><span>The QR card replaces the plastic one at the register.</span></li>
            </ul>
          </div>
          <button className="abtn" onClick={()=>nav.go('signup')}>Create an account</button>
          <button className="abtn" data-variant="ghost" onClick={()=>nav.go('login')}>Log in</button>
          <button className="alink" style={{alignSelf:'center'}} onClick={onClose}>Keep browsing</button>
        </div>
      </div>
    </div>
  );
}

function GuestCartKept() {
  const nav = useNav();
  return (
    <Screen active="shop" title="Cart" onBack={()=>nav.back()}>
      <StateBanner icon="check" tone="quiet" title="Your cart survived registration">The two products you picked before creating the account are still here.</StateBanner>
      <div className="card">
        <div className="clines">
          {[['esterc',1],['magcitrate',1]].map(([k,q])=>{
            const p = CATALOG[k];
            return (
              <div className="cline" key={k}>
                <img src={p.img} alt="" />
                <div className="ct">
                  <div className="n">{p.name}</div>
                  <div className="s">{q} × {eur(p.price)}</div>
                </div>
                <b>{eur(p.price*q)}</b>
              </div>
            );
          })}
        </div>
      </div>
      <div className="quiet">
        <ul className="mechanic">
          <li><i className="ti ti-rosette-discount"></i><span>+24 points on this order, added once the pharmacy confirms it.</span></li>
        </ul>
      </div>
    </Screen>
  );
}

/* ---------- galleries ---------- */

function GalleryView({ title, lead, items }) {
  return (
    <div className="gwrap">
      <div className="ghead">
        <h1>{title}</h1>
        <p>{lead}</p>
      </div>
      <div className="gcards">
        {items.map((it,i)=>(
          <figure key={i}>
            {it.node}
            <figcaption><b>{it.label}</b>{it.caption}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function PushGallery() {
  const [toast, showToast] = useToast();
  return <GalleryView title="Notifications — E4 and the push template"
    lead="Push is the only loyalty feedback channel in v1: there is no message inbox, so a missed push is only recoverable from the points history. Four categories, one of them locked while an order is open."
    items={[
      { label:'E4 — notification settings', caption:'A toggle per push category. Orders and payments cannot be turned off while an order is in progress; offers follow the marketing consent from A4.', node:<div style={{position:'relative'}}><NotificationSettingsScreen onToast={showToast} />{toast}</div> },
      { label:'E4 — push denied at OS level', caption:'When the operating system permission is refused, the categories are inert and the screen routes to system settings instead of pretending the toggles work.', node:<NotificationSettingsScreen denied /> },
      { label:'Push template — points', caption:'Lock-screen template: app name, one-line title carrying the figure, body with the pharmacy and the new balance.', node:<PushLockScreen index={0} /> },
      { label:'Push template — order', caption:'Transactional push. Same template, no emoji, no urgency, order number in the title.', node:<PushLockScreen index={1} /> },
      { label:'Push template — campaign', caption:'Campaign push, sent only with marketing consent. Advice first, discount second.', node:<PushLockScreen index={2} /> }
    ]} />;
}

function StatesGallery() {
  const [toast, showToast] = useToast();
  React.useEffect(()=>{ showToast('Added to your cart'); }, []);
  return <GalleryView title="Loading, toasts and errors"
    lead="One skeleton pattern, one toast pattern, one error pattern — applied to every list, form and save in the app. Design spec §4 treats these as global states rather than per-screen extras."
    items={[
      { label:'M-01 — skeleton while a list loads', caption:'Shimmering placeholders at the real tile geometry, 1.3s, no spinner. Used on the catalogue, PDP, orders and points history.', node:<SkeletonShop /> },
      { label:'M-02 — one toast pattern', caption:'Short confirmations: added to cart, removed, saved, copied. Sits above the tab bar, 2.6s, never blocks a control.', node:<div style={{position:'relative'}}><SkeletonShop />{toast}</div> },
      { label:'M-03 — inline validation', caption:'The field that is wrong is the field that is marked, with the reason under it. The old form-level "fill in the highlighted fields" without a highlight is gone.', node:<ErrorFormDemo /> },
      { label:'M-03 — a list that failed to load', caption:'Fetch failure inside the screen that owns it, with a retry. The rest of the screen stays usable.', node:<ListErrorDemo /> },
      { label:'S1 — no connection', caption:'P0 screen. Says what still works: My card is cached on the phone and valid at the till.', node:<NoConnectionScreen onRetry={()=>{}} /> },
      { label:'S2 — service unavailable', caption:'P1 screen. Explains what happens to points earned in a pharmacy while the service is down.', node:<MaintenanceScreen /> },
      { label:'D1 — offline but usable', caption:'The QR still scans; the balance is labelled as the last known value with the time it was read, never as current.', node:<CardStateScreen mode="offline" /> },
      { label:'D1 — first generation', caption:'The code is being created and cached. Balance shows an em dash rather than a zero.', node:<CardStateScreen mode="first" /> },
      { label:'D1 — till redemption still settling', caption:'The cashier already applied the discount; the app balance is refreshing and the confirmation arrives by push.', node:<CardStateScreen mode="pending" /> }
    ]} />;
}

function ErrorFormDemo() {
  const nav = useNav();
  return (
    <Screen active="profile" title="New address" onBack={()=>nav.back()}>
      <div className="afield" data-invalid="true">
        <label>Street and number</label>
        <div className="wrap"><input value="Ilica" onChange={()=>{}} /></div>
        <span className="err">Add the house number — couriers cannot deliver without it.</span>
      </div>
      <div className="afield">
        <label>Postcode</label>
        <div className="wrap"><input value="10000" onChange={()=>{}} /></div>
      </div>
      <div className="afield" data-invalid="true">
        <label>Phone</label>
        <div className="wrap"><input value="+385 1 234" onChange={()=>{}} /></div>
        <span className="err">A Croatian mobile number has nine digits after +385.</span>
      </div>
      <StateBanner icon="alert-triangle" title="Two fields need attention">Both are marked below. Nothing else on the form was lost.</StateBanner>
    </Screen>
  );
}

function ListErrorDemo() {
  const nav = useNav();
  return (
    <Screen active="profile" title="My orders" onBack={()=>nav.back()}>
      <ListErrorCard onRetry={()=>{}} />
      <p className="tiny">Orders already downloaded stay visible. Only the refresh failed.</p>
    </Screen>
  );
}

function ReviewGallery() {
  return <GalleryView title="Review — the three redemption states, the coupon and per-step editing"
    lead="C9 carries one decision about points, but three different balances change what it may say. The terms checkbox now blocks the order, each step summary has an edit link, and the coupon field is back."
    items={[
      { label:'Below the threshold — visible, inactive', caption:'The switch stays on screen with its own reason: 60 points so far, redemption starts at 100. Worded differently from the bank-transfer block, because it is a different problem.', node:<CheckoutFlow fixed={5} balance={60} initial={{payment:'card'}} /> },
      { label:'Points worth more than the order', caption:'Only the part that fits is spent and the remainder is stated, so the total falls to €0,00 and the CTA becomes Confirm order — no card is charged.', node:<CheckoutFlow fixed={5} balance={6000} initial={{payment:'card',redeem:true}} /> },
      { label:'Redemption removed on the way back', caption:'Switching to bank transfer on C8 turns the redemption off. The discount never disappears silently — Review says so on return.', node:<CheckoutFlow fixed={5} balance={6000} dropped initial={{payment:'bank'}} /> },
      { label:'Terms, coupon and edit links', caption:'B-07: the order cannot be placed until the terms box is ticked. The coupon field is collapsed by default, and Address, Delivery and Payment each link back to their step.', node:<CheckoutFlow fixed={5} initial={{payment:'card'}} /> }
    ]} />;
}

function GuestGallery() {
  const [sheet, setSheet] = React.useState(true);
  return <GalleryView title="Guest — browsing without an account"
    lead="An unauthenticated visitor reaches the Shop, the catalogue and the PDP. Cart, checkout, My card, Points and Profile are gated, and the prompt returns the visitor to where they were with the cart intact."
    items={[
      { label:'Guest shop', caption:'The catalogue is fully browsable. The cart icon is present but the action is gated, so nothing is hidden from the visitor.', node:<GuestShop /> },
      { label:'Guest PDP', caption:'Full product page, including what WellPlus would have earned on it — the one place the programme is sold to a non-member.', node:<GuestPdp /> },
      { label:'Authentication required', caption:'Raised by any protected action: add to cart, My card, Points, Profile. Two routes out, plus "Keep browsing" so the prompt is never a dead end.', node:<GuestPdp overlay={sheet ? <AuthPromptSheet what="a cart" onClose={()=>setSheet(false)} /> : null} /> },
      { label:'Cart survived registration', caption:'After A3 → A5 → A6 the visitor lands back on the cart with the same two products, and the order now earns points.', node:<GuestCartKept /> }
    ]} />;
}

Object.assign(window, { ReviewGallery, GuestShop, GuestPdp, AuthPromptSheet, GuestCartKept, GalleryView, PushGallery, StatesGallery, GuestGallery, ErrorFormDemo, ListErrorDemo });
