const NAV = [['home','Home','e24 Home.html'],['shop','Shop','e24 Shop.html'],['card','WellPlus','e24 Card.html'],['profile','Profile','e24 Profile.html']];

const NAV_GLYPH_PATHS = {
  home: ['M4.94 8.4125C4.35524 8.77798 4 9.41892 4 10.1085V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V10.1085C20 9.41892 19.6448 8.77798 19.06 8.4125L13.06 4.6625C12.4115 4.25716 11.5885 4.25716 10.94 4.6625L4.94 8.4125Z','M12 10.5V15.5','M9.5 13H14.5'],
  shop: ['M20 12V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V12','M9.5002 4H14.5002M9.5002 4L8.93432 8.52703C8.70381 10.3711 10.1417 12 12.0002 12C13.8587 12 15.2966 10.3711 15.0661 8.52703L14.5002 4M9.5002 4H5.97058C5.09581 4 4.32255 4.5685 4.06162 5.40345L3.17593 8.23768C2.59278 10.1038 3.98689 12 5.94195 12C7.40345 12 8.63624 10.9117 8.81751 9.46151L9.5002 4ZM14.5002 4H18.0298C18.9046 4 19.6779 4.5685 19.9388 5.40345L20.8245 8.23768C21.4076 10.1038 20.0135 12 18.0585 12C16.597 12 15.3642 10.9117 15.1829 9.46151L14.5002 4Z'],
  card: ['M14 14V16H16M18 14H20M20 18H18V20M14 19.99V20M16 10H18C19.1046 10 20 9.10457 20 8V6C20 4.89543 19.1046 4 18 4H16C14.8954 4 14 4.89543 14 6V8C14 9.10457 14.8954 10 16 10ZM6 20H8C9.10457 20 10 19.1046 10 18V16C10 14.8954 9.10457 14 8 14H6C4.89543 14 4 14.8954 4 16V18C4 19.1046 4.89543 20 6 20ZM6 10H8C9.10457 10 10 9.10457 10 8V6C10 4.89543 9.10457 4 8 4H6C4.89543 4 4 4.89543 4 6V8C4 9.10457 4.89543 10 6 10Z'],
  points: ['M19 5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V21L7.33333 19L9.66667 21L12 19L14.3333 21L16.6667 19L19 21V5Z','M15.25 7.75L8.75 14.25','M9 8H9.01M9.25 8C9.25 8.13807 9.13807 8.25 9 8.25C8.86193 8.25 8.75 8.13807 8.75 8C8.75 7.86193 8.86193 7.75 9 7.75C9.13807 7.75 9.25 7.86193 9.25 8Z','M15 14H15.01M15.25 14C15.25 14.1381 15.1381 14.25 15 14.25C14.8619 14.25 14.75 14.1381 14.75 14C14.75 13.8619 14.8619 13.75 15 13.75C15.1381 13.75 15.25 13.8619 15.25 14Z'],
  profile: ['M17.8841 18.8103C16.5544 17.0943 14.4995 16 12 16C9.50054 16 7.44562 17.0943 6.11594 18.8103M17.8841 18.8103C19.7925 17.16 21 14.721 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 14.721 4.20753 17.16 6.11594 18.8103M17.8841 18.8103C16.3063 20.1747 14.2495 21 12 21C9.75046 21 7.69368 20.1747 6.11594 18.8103','M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10Z']
};

const NavGlyph = ({ name }) => (
  <svg viewBox="0 0 24 24" width="23" height="23" fill="none" aria-hidden="true">
    {NAV_GLYPH_PATHS[name].map((d,i)=><path key={i} d={d} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />)}
  </svg>
);

function StatusBar() {
  return <div className="statusbar"><span>9:41</span><span style={{display:'flex',gap:6,alignItems:'center',color:'var(--text-secondary)'}}><i className="ti ti-antenna-bars-5"></i><i className="ti ti-wifi"></i><i className="ti ti-battery-3"></i></span></div>;
}

const NavCtx = React.createContext(null);
const useNav = () => React.useContext(NavCtx) || { go:()=>{}, back:()=>{}, tab:()=>{} };

function Nav({ active }) {
  const nav = React.useContext(NavCtx);
  return (
    <nav className="nav">
      {NAV.map(([icon,label,href])=>(
        <a key={icon} href={nav?undefined:href} aria-label={label} onClick={nav?(e=>{e.preventDefault();nav.tab(icon);}):undefined} aria-current={(String(active||'').toLowerCase()===icon||String(active||'').toLowerCase()===label.toLowerCase())?'page':undefined}><span className="glyph"><NavGlyph name={icon} /></span><span className="nlabel">{label}</span></a>
      ))}
    </nav>
  );
}

function CartGlyph({ size = 23 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{display:'block'}}>
      <path d="M8.24884 3.75L6.24884 8.75H17.7488L15.7488 3.75M21.0451 9.92134L19.5371 18.5927C19.3705 19.5507 18.539 20.25 17.5666 20.25H6.43104C5.45868 20.25 4.62722 19.5507 4.46061 18.5927L2.95255 9.92134C2.84619 9.30973 3.31697 8.75 3.93777 8.75H20.0599C20.6807 8.75 21.1515 9.30973 21.0451 9.92134Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SearchGlyph({ size = 23 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{display:'block'}}>
      <path d="M20.25 20.25L16.1265 16.1265M16.1265 16.1265C17.4385 14.8145 18.25 13.002 18.25 11C18.25 6.99594 15.0041 3.75 11 3.75C6.99594 3.75 3.75 6.99594 3.75 11C3.75 15.0041 6.99594 18.25 11 18.25C13.002 18.25 14.8145 17.4385 16.1265 16.1265Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CartIcon({ count = 2 }) {
  return (
    <span style={{position:'relative',display:'flex',color:'var(--text-body)'}}>
      <CartGlyph />
      {count?<span style={{position:'absolute',top:-4,right:-6,minWidth:16,height:16,padding:'0 4px',borderRadius:999,background:'var(--sage-500)',color:'#fff',fontFamily:'var(--font-label)',fontSize:10,display:'flex',alignItems:'center',justifyContent:'center'}}>{count}</span>:null}
    </span>
  );
}

function AppIcon({ icon, label, onClick, badge, on, dot }) {
  return (
    <button className="iconbtn" aria-label={label} data-on={on ? 'true' : undefined} onClick={onClick}>
      {icon === 'shopping-cart' ? <CartGlyph /> : icon === 'search' ? <SearchGlyph /> : <i className={'ti ti-' + icon}></i>}
      {badge ? <span className="cbadge">{badge}</span> : null}
      {dot ? <span className="dotmark"></span> : null}
    </button>
  );
}

function AppActions({ children }) {
  return <span className="appactions">{children}</span>;
}

function Tendril() {
  return (
    <svg className="tendril" viewBox="0 0 360 200" preserveAspectRatio="none" aria-hidden="true">
      <path d="M-10 168 C 70 168 96 120 132 92 C 172 60 226 56 268 26 C 296 6 312 -12 322 -32" fill="none" stroke="var(--sage-300)" strokeWidth="1.1" strokeLinecap="round" opacity=".32" />
      <path d="M132 92 C 128 74 138 62 156 58" fill="none" stroke="var(--sage-300)" strokeWidth="1.1" strokeLinecap="round" opacity=".26" />
      <path d="M226 55 C 232 40 248 36 262 40" fill="none" stroke="var(--sage-300)" strokeWidth="1.1" strokeLinecap="round" opacity=".22" />
    </svg>
  );
}

function Badge({ kind = 'new', icon, children }) {
  return <span className="badge" data-kind={kind}>{icon ? <i className={'ti ti-' + icon}></i> : null}{children}</span>;
}

function MicroLabel({ children, as: As = 'div', style }) {
  return <As className="microlabel" style={style}>{children}</As>;
}

function Stepper({ value, onChange, min = 1, max = 9, size = 'lg', onStop }) {
  const tap = (e, v) => { if (onStop) e.stopPropagation(); onChange(v); };
  return (
    <span className={size === 'lg' ? 'step-stepper' : 'mini'}>
      <button onClick={e=>tap(e, Math.max(min, value-1))} aria-label="Less"><i className="ti ti-minus"></i></button>
      <span>{value}</span>
      <button onClick={e=>tap(e, Math.min(max, value+1))} aria-label="More"><i className="ti ti-plus"></i></button>
    </span>
  );
}

function Mechanic({ items }) {
  return (
    <div className="quiet">
      <ul className="mechanic">
        {items.map(([icon, text])=><li key={text}><i className={'ti ti-' + icon}></i><span>{text}</span></li>)}
      </ul>
    </div>
  );
}

function Dots({ count, index, onSelect, label = 'Item' }) {
  return (
    <React.Fragment>
      {Array.from({length:count}).map((_,n)=>(
        <button key={n} aria-label={label + ' ' + (n+1)} aria-current={n===index} onClick={()=>onSelect(n)}></button>
      ))}
    </React.Fragment>
  );
}

const CartStore = { qty:{ 'Supradyn® Imuno Boost':1, 'Supradyn® Energija':1 }, subs:new Set(),
  add(name, n = 1){ if(!name) return; this.qty[name] = (this.qty[name]||0) + n; this.subs.forEach(f=>f()); },
  replace(pairs){ this.qty = {}; (pairs||[]).forEach(([name,n])=>{ if(name && n > 0) this.qty[name] = n; }); this.subs.forEach(f=>f()); },
  get(name){ return this.qty[name] || 0; },
  sub(f){ this.subs.add(f); return ()=>this.subs.delete(f); } };
function useCartQty(name){
  const [, force] = React.useState(0);
  React.useEffect(()=>CartStore.sub(()=>force(v=>v+1)), []);
  return CartStore.get(name);
}
function useCartCount(){
  const [, force] = React.useState(0);
  React.useEffect(()=>CartStore.sub(()=>force(v=>v+1)), []);
  return Object.values(CartStore.qty).reduce((a,b)=>a+b, 0);
}
function CartAction({ onClick }){
  const n = useCartCount();
  return <AppIcon icon="shopping-cart" label={n ? n + ' in your cart' : 'Cart'} badge={n || null} onClick={onClick} />;
}

function SwitchList({ items, values, onToggle, disabled }) {
  return (
    <div className="card swlist">
      {items.map((it,i)=>(
        <div className="swrow" key={it.id} data-last={i===items.length-1?'true':undefined} data-off={disabled||it.locked?'true':undefined}>
          <span className="txt">
            <span className="t">{it.t}</span>
            <span className="s">{it.s}</span>
          </span>
          <Switch checked={!!values[it.id]} label={it.t} disabled={disabled||it.locked} onChange={v=>onToggle(it,v)} />
        </div>
      ))}
    </div>
  );
}

function ProductCard({ image, name, price, was, tag, prime, onClick }) {
  const inCart = useCartQty(name);
  return (
    <button className="pcard" onClick={onClick}>
      <span className="shot">
        {tag ? <Badge kind="discount">{tag}</Badge> : null}
        {prime ? <span className="primetag">PRIME</span> : null}
        {inCart ? <span className="qtybadge" aria-label={inCart + ' in your cart'}>{inCart}</span> : null}
        <img src={image} alt={name} />
      </span>
      <span className="nm">{name}</span>
      <span className="pr">{was ? <span className="was">{was}</span> : null}{price}</span>
    </button>
  );
}

function SecLabel({ children, aside, style }) {
  return <h2 className="seclabel" style={style}>{children}{aside?<span className="aside">{aside}</span>:null}</h2>;
}

function Screen({ active, title, action, overlay, onBack, tight, children }) {
  return (
    <div className="phone hasnav">
      <StatusBar />
      <div className="scroll">
        <div className="appbar">
          <span style={{display:'flex',alignItems:'center',gap:6,minWidth:0}}>
            {onBack ? <button className="iconbtn" aria-label="Back" onClick={onBack} style={{marginLeft:-7}}><i className="ti ti-chevron-left"></i></button> : null}
            <span className="title">{title}</span>
          </span>
          <AppActions>{action}</AppActions>
        </div>
        <div style={{padding:(tight ? '4px' : '14px') + ' 20px 28px',display:'flex',flexDirection:'column',gap:14}}>{children}</div>
      </div>
      <Nav active={active} />
      {overlay}
    </div>
  );
}

function Modal({ icon, title, lead, onClose, cta = 'Got it', children }) {
  return (
    <div className="scrim" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={title} onClick={e=>e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close"><i className="ti ti-x"></i></button>
        <span className="glyph"><i className={'ti ti-' + icon}></i></span>
        <h3>{title}</h3>
        <p className="lead">{lead}</p>
        {children}
        <button className="cta" onClick={onClose}>{cta}</button>
      </div>
    </div>
  );
}

Object.assign(window, { SwitchList, CartStore, useCartQty, useCartCount, CartAction, CartGlyph, SearchGlyph, StatusBar, Nav, CartIcon, NavGlyph, AppIcon, AppActions, Tendril, SecLabel, ProductCard, Screen, Modal, Badge, MicroLabel, Stepper, Mechanic, Dots, NAV, NavCtx, useNav });
