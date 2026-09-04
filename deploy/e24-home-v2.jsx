const COLLECTIONS = [
  { id:'unwind', photo:'uploads/BG_WK5225_Wellness_Supplements.avif', fallback:[24,92,54], wash:'#1a5c37',
    title:'Hygiene and protection', desc:'Surface disinfection and gloves for the home medicine cabinet.',
    keys:['salvusept','vitalcollagen','zinc'] },
  { id:'skincare', photo:'2761-mtbo96vm-ld1y.jpg', fallback:[62,104,140], wash:'#34526a',
    title:'New in skincare', desc:'Recent additions for skin, hair and nails — all in stock.',
    keys:['magcitrate','omega3','betacarotene'] },
  { id:'immunity', photo:'2149080570-mtboeft4-ygty.jpg', fallback:[226,213,197], wash:'#655643',
    title:'Immunity essentials', desc:'The three our pharmacists reach for first when the cold months start.',
    keys:['esterc','d3','selenium'] }
];

const hexToRgb = h => { const s = h.replace('#',''); const n = parseInt(s.length===3 ? s.split('').map(c=>c+c).join('') : s, 16); return [(n>>16)&255,(n>>8)&255,n&255]; };
const rgbToHex = ([r,g,b]) => '#' + [r,g,b].map(v=>v.toString(16).padStart(2,'0')).join('');

const POINTS = 1247;
const fmtPts = n => n.toLocaleString('de-DE');
const pointsLine = n => n <= 0 ? 'No points yet — every €1 you spend earns 1 point.'
  : n < 100 ? 'You have ' + fmtPts(n) + ' points. ' + fmtPts(100 - n) + ' more to your first €1.'
  : 'You have ' + fmtPts(n) + ' points ready to spend.';

function useWash(src, fallback, override) {
  const [rgb, setRgb] = React.useState(fallback);
  React.useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const w = 24, h = 24, c = document.createElement('canvas');
        c.width = w; c.height = h;
        const ctx = c.getContext('2d', { willReadFrequently:true });
        ctx.drawImage(img, 0, 0, w, h);
        const y = Math.round(h * 0.62);
        const d = ctx.getImageData(0, y, w, h - y).data;
        let r = 0, g = 0, b = 0, n = 0;
        for (let i = 0; i < d.length; i += 4) { r += d[i]; g += d[i+1]; b += d[i+2]; n++; }
        if (n) setRgb([Math.round(r/n), Math.round(g/n), Math.round(b/n)]);
      } catch (e) {}
    };
    img.src = src;
  }, [src]);
  return override ? hexToRgb(override) : rgb;
}

const washVars = ([r,g,b]) => {
  const dark = (0.2126*r + 0.7152*g + 0.0722*b) / 255 < 0.6;
  return {
    '--wash': 'rgb('+r+','+g+','+b+')',
    '--wash-0': 'rgba('+r+','+g+','+b+',0)',
    '--wash-12': 'rgba('+r+','+g+','+b+',.12)',
    '--wash-34': 'rgba('+r+','+g+','+b+',.34)',
    '--wash-62': 'rgba('+r+','+g+','+b+',.62)',
    '--wash-86': 'rgba('+r+','+g+','+b+',.86)',
    '--wash-sh': 'rgba('+Math.round(r*.45)+','+Math.round(g*.45)+','+Math.round(b*.45)+',.55)',
    '--wash-ink': dark ? '#FDFBF7' : '#232420',
    '--wash-ink-soft': dark ? 'rgba(253,251,247,.78)' : 'rgba(35,36,32,.66)'
  };
};

function CollectionCard({ data, onOpen, wash: washOverride }) {
  const items = (window.CATALOGUE || []).filter(p => data.keys.includes(p.key))
    .sort((a,b) => data.keys.indexOf(a.key) - data.keys.indexOf(b.key));
  const wash = useWash(data.photo, data.fallback, washOverride || data.wash);
  return (
    <button className="collcard" onClick={onOpen} style={washVars(wash)}>
      <span className="photo">
        <img src={data.photo} alt="" />
      </span>
      <span className="body">
        <span className="t">{data.title}</span>
        <span className="d">{data.desc}</span>
      </span>
      <span className="thumbs">
        {items.map(p => (
          <span className="collthumb" key={p.key}>
            <span className="sh"><img src={p.image} alt={p.name} /></span>
          </span>
        ))}
      </span>
    </button>
  );
}

function CollectionRail() {
  const nav = useNav();
  const ref = React.useRef(null);
  const [i, setI] = React.useState(0);
  const cardLeft = n => { const el = ref.current, c = el && el.children[n]; if (!c) return 0;
    const max = el.scrollWidth - el.clientWidth;
    return Math.max(0, Math.min(max, c.offsetLeft - el.offsetLeft - 20)); };
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    let last = el.scrollLeft;
    const sync = () => { let best = 0, d = Infinity;
      for (let n = 0; n < el.children.length; n++) { const x = Math.abs(cardLeft(n) - el.scrollLeft); if (x < d) { d = x; best = n; } }
      setI(best); };
    const poll = setInterval(() => { if (el.scrollLeft !== last) { last = el.scrollLeft; sync(); } }, 120);
    el.addEventListener('scroll', sync, { passive:true });
    return () => { clearInterval(poll); el.removeEventListener('scroll', sync); };
  }, []);
  const goTo = n => {
    const el = ref.current; if (!el) return;
    const t = Math.max(0, Math.min(COLLECTIONS.length - 1, n));
    const from = el.scrollLeft, to = cardLeft(t), t0 = performance.now(), dur = 420;
    setI(t);
    if (from === to) return;
    el.style.scrollSnapType = 'none';
    const tick = now => {
      const k = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.scrollLeft = from + (to - from) * e;
      if (k < 1) requestAnimationFrame(tick);
      else { el.scrollLeft = to; el.style.scrollSnapType = ''; }
    };
    requestAnimationFrame(tick);
  };
  return (
    <div className="collwrap">
      <button className="collarrow" data-dir="prev" aria-label="Previous collection" disabled={i===0} onClick={()=>goTo(i-1)}><i className="ti ti-chevron-left"></i></button>
      <button className="collarrow" data-dir="next" aria-label="Next collection" disabled={i>=COLLECTIONS.length-1} onClick={()=>goTo(i+1)}><i className="ti ti-chevron-right"></i></button>
      <div className="collrail" ref={ref}>
        {COLLECTIONS.map(c => <CollectionCard key={c.id} data={c} onOpen={()=>nav.go('group:'+(c.id==='immunity'?'immunity':c.id==='skincare'?'beauty':'essentials'))} />)}
      </div>
    </div>
  );
}

const AGAIN_SHORT = { esterc:'Imuno Boost', d3:'Kids Imuno', omega3:'SHINE ON+', calmag:'Energija', selenium:'Apivit', magcitrate:'Collagen' };
const AGAIN_SETS = [
  { id:'again-1', date:'12 Aug', keys:['esterc'] },
  { id:'again-2', date:'4 Aug', keys:['omega3','d3'] },
  { id:'again-3', date:'19 Jul', keys:['esterc','d3','omega3'], gone:['omega3'] }
];
const priceOf = s => parseFloat(String(s).replace('€','').replace('.','').replace(',','.'));
const eurStr = n => '€' + n.toFixed(2).replace('.', ',');

const againItems = s => s.keys.map(k => (window.CATALOGUE || []).find(p => p.key === k)).filter(Boolean);
const againAvailable = s => againItems(s).filter(p => !(s.gone || []).includes(p.key));
const againTotal = s => againAvailable(s).reduce((t,p)=>t+priceOf(p.price), 0);
const againFullLabel = items => items.length === 1 ? items[0].name : items.map(p => AGAIN_SHORT[p.key] || p.name).join(' + ');

function BuyAgainSheet({ set, onClose, onAdd }) {
  const nav = useNav();
  const items = againItems(set);
  const avail = againAvailable(set);
  return (
    <div className="scrim" onClick={onClose}>
      <div className="agsheet" role="dialog" aria-modal="true" aria-label={againFullLabel(items)} onClick={e=>e.stopPropagation()}>
        <span className="aghandle"></span>
        <button className="close" onClick={onClose} aria-label="Close"><i className="ti ti-x"></i></button>
        <h3>{againFullLabel(items)}</h3>
        <p className="agdate">Ordered {set.date}</p>
        <div className="clines">
          {items.map((p,i,a)=>{
            const gone = (set.gone || []).includes(p.key);
            return (
              <div className={'cline' + (gone ? '' : ' tap')} key={p.key} data-last={i === a.length-1 ? 'true' : undefined}
                role={gone ? undefined : 'button'} tabIndex={gone ? undefined : 0}
                onClick={gone ? undefined : ()=>{onClose();nav.go('shopflow:'+p.key);}}>
                <span className="cthumb"><img src={p.image} alt="" /></span>
                <span className="cinfo">
                  <span className="nm">{p.name}</span>
                  <span className="sz">{p.size}</span>
                </span>
                <span className={gone ? 'agunavail' : 'agrowpr'}>{gone ? 'No longer available' : p.price}</span>
              </div>
            );
          })}
        </div>
        <div className="agtotal"><span>Total</span><b>{eurStr(againTotal(set))}</b></div>
        <button className="cta" onClick={()=>{onAdd(avail);onClose();}}>{avail.length === 1 ? 'Add item to cart' : 'Add all ' + avail.length + ' items to cart'}</button>
      </div>
    </div>
  );
}

function BuyAgainRail({ onOpen }) {
  const nav = useNav();
  const railRef = React.useRef(null);
  const [atEnd, setAtEnd] = React.useState(false);
  const onScroll = () => { const el = railRef.current; if (el) setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4); };
  const nudge = () => { const el = railRef.current; if (el) el.scrollBy({ left: atEnd ? -el.scrollWidth : 168, behavior:'smooth' }); };
  const find = k => (window.CATALOGUE || []).find(p => p.key === k);
  const sets = AGAIN_SETS.map(s => ({ ...s, items: s.keys.map(find).filter(Boolean) })).filter(s => s.items.length === s.keys.length);
  const totalOf = s => s.items.filter(p => !(s.gone || []).includes(p.key)).reduce((t,p)=>t+priceOf(p.price), 0);
  if (!sets.length) return null;
  const labelFor = items => {
    if (items.length === 1) return items[0].name;
    const joined = items.map(p => AGAIN_SHORT[p.key] || p.name).join(' + ');
    return joined.length > 21 ? items.length + ' products' : joined;
  };
  return (
    <React.Fragment>
      <SecLabel>Buy again</SecLabel>
      <div className="againwrap">
      <button className="collarrow" data-dir="next" aria-label={atEnd ? 'Back to start' : 'More to buy again'} onClick={nudge}><i className={'ti ti-chevron-' + (atEnd ? 'left' : 'right')}></i></button>
      <div className="againrail" ref={railRef} onScroll={onScroll}>
        {sets.map(s=>(
          <div className="againcard" key={s.id}>
            <button className="agtap" onClick={()=>onOpen(s.id)} aria-label={'Buy again: ' + labelFor(s.items)}>
              <span className="agmosaic" data-n={s.items.length}>
                {s.items.map(p=><span className="agcell" key={p.key}><img src={p.image} alt="" /></span>)}
              </span>
              <span className="agtext">
                <span className="agnm">{labelFor(s.items)}</span>
                <span className="agpr">{eurStr(totalOf(s))}{s.items.length > 1 ? <span className="agcount">{s.items.length} items</span> : null}</span>
              </span>
            </button>
          </div>
        ))}
      </div>
      </div>
    </React.Fragment>
  );
}

function HomeScreenV2() {
  const nav = useNav();
  const cartCount = useCartCount();
  const [toast, setToast] = React.useState(null);
  const [openSet, setOpenSet] = React.useState(null);
  const toastTimer = React.useRef(null);
  React.useEffect(()=>()=>clearTimeout(toastTimer.current), []);
  const addToCart = items => {
    items.forEach(it => window.CartStore.add(typeof it === 'string' ? it : (it.name || 'Item')));
    setToast(items.length === 1 ? '1 item added to your cart' : items.length + ' items added to your cart');
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(()=>setToast(null), 3000);
  };
  const G = window.GROUPS, byKeys = ks => ks.map(k => window.CATALOGUE.find(p => p.key === k)).filter(Boolean);
  const shelf = (title, items, extraTop) => (
    <React.Fragment>
      <SecLabel style={extraTop ? {marginTop:14} : undefined}>{title}</SecLabel>
      <div className="shelf">
        {items.map(p=><ProductCard key={p.key} {...p} onClick={()=>nav.go('shopflow:'+p.key)} />)}
      </div>
    </React.Fragment>
  );
  return (
    <div className="phone hasnav">
      <StatusBar />
      <div className="scroll" style={{position:'relative',background:'#FFFFFF'}}>
        <div className="appbar" style={{justifyContent:'flex-end'}}>
          <AppActions>
            <AppIcon icon="search" label="Search" onClick={()=>nav.go('search')} />
            <span className="cartbump" data-bump={toast ? 'true' : undefined}><AppIcon icon="shopping-cart" label="Cart" badge={cartCount} onClick={()=>nav.go('cart')} /></span>
          </AppActions>
        </div>
        <div style={{position:'relative',padding:'2px 20px 28px',display:'flex',flexDirection:'column',gap:14}}>
          <div className="greetblock">
            <span className="greeting">Good day, Iva</span>
            <span className="greetsub">{pointsLine(POINTS)}</span>
          </div>
          <CollectionRail />
          <BuyAgainRail onOpen={setOpenSet} />
          {shelf('Everyday essentials', byKeys(G.essentials.keys), true)}
          {shelf('For mom and baby', byKeys(G.family.keys))}
          {shelf('Autumn immunity', byKeys(G.immunity.keys))}
          {shelf('Skin, hair and nails', byKeys(G.skin.keys))}
        </div>
      </div>
      {openSet ? <BuyAgainSheet set={AGAIN_SETS.find(s=>s.id===openSet)} onClose={()=>setOpenSet(null)} onAdd={addToCart} /> : null}
      {toast ? <div className="hometoast">{toast}</div> : null}
      <Nav active="Home" />
    </div>
  );
}

Object.assign(window, { COLLECTIONS, CollectionCard, CollectionRail, BuyAgainRail, BuyAgainSheet, HomeScreenV2, useWash, washVars, hexToRgb, rgbToHex, POINTS, pointsLine });
