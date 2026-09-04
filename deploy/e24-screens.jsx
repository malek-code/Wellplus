const { PointsRange, SegmentedControl, PointsHistoryRow, Banner, Sheet } = window.E24WellPlusDesignSystem_54c90b;

const CATEGORIES_OLD_PHOTOS = [
  { photo:'uploads/Frame 8.png', id:'cat-vitamins', label:'Vitamins & minerals', hint:'Supplement shelf photo', tint:'#F5A800' },
  { photo:'uploads/Frame 12.png', id:'cat-face', label:'Face & body care', hint:'Skincare photo', tint:'#9B2C63' },
  { photo:'uploads/Frame 13.png', id:'cat-baby', label:'Mom & baby', hint:'Mother & baby photo', tint:'#4CB963' },
  { photo:'uploads/Frame 14.png', id:'cat-otc', label:'First aid essentials', hint:'Pharmacy counter photo', tint:'#7FB0C9' }
];
const CATEGORIES_BLOCK = [
  { photo:'assets/categories/cat-vitamins.png', id:'cat-vitamins', label:'Vitamins\n& minerals', route:'Vitamins & minerals', tint:'#F8DFA4' },
  { photo:'assets/categories/cat-face.png', id:'cat-face', label:'Face &\nbody care', route:'Face & body care', tint:'#F5CFE0' },
  { photo:'assets/categories/cat-baby.png', id:'cat-baby', label:'Mom\n& baby', route:'Mom & baby', tint:'#D5E3D2' },
  { photo:'assets/categories/cat-otc.png', id:'cat-otc', label:'First aid\nessentials', route:'First aid essentials', tint:'#C9E1EF' }
];
const CATEGORIES = [
  { icon:'pill', id:'cat-vitamins', label:'Vitamins & minerals', short:'Vitamins' },
  { icon:'droplet', id:'cat-face', label:'Face & body care', short:'Face & body' },
  { icon:'baby-carriage', id:'cat-baby', label:'Mom & baby', short:'Mom &\nbaby' },
  { icon:'circle-plus', id:'cat-otc', label:'First aid', short:'First aid', tone:'coral' },
  { icon:'bandage', id:'cat-firstaid', label:'First aid', short:'First aid' },
  { icon:'dental', id:'cat-oral', label:'Oral care', short:'Oral care' }
];
/* Real client catalogue — see products.js for the source records (eljekarna24.hr,
   ljekarnaonline.hr, centarzdravihrjesenja.hr; fetched 3 Sep 2026). Names, pack sizes
   and prices are verbatim from the shops; keys are the prototype's own route ids. */
const CATALOGUE = [
  { key:'esterc', image:'https://ljekarnaonline.hr/upload/catalog/product/29021/thumb/supradyn-imuno-boost-vitamin-c-vitamin-d-cink-sume_616942bc7df8b_580x580r.jpg', name:'Supradyn® Imuno Boost', size:'20 šumećih tableta', price:'€19,83', cat:'Vitamins & minerals' },
  { key:'calmag', image:'https://ljekarnaonline.hr/upload/catalog/product/1274/thumb/supradyn-energija-30-tableta_64f068b65820e_580x580r.jpg', name:'Supradyn® Energija', size:'30 filmom obloženih tableta', price:'€21,62', cat:'Vitamins & minerals' },
  { key:'d3', image:'https://ljekarnaonline.hr/upload/catalog/product/29022/thumb/kids-imuno-boost_64f06aebc337e_580x580r.jpg', name:'Supradyn Kids Imuno Boost', size:'100 žele bombona', price:'€27,53', cat:'Mom & baby', prime:true },
  { key:'selenium', image:'https://ljekarnaonline.hr/upload/catalog/product/19247/thumb/multi_5bd17d6e5fc8d_580x580r.jpg', name:'Apipharma Apivit Multi sirup', size:'100 ml', price:'€9,99', cat:'Mom & baby' },
  { key:'betacarotene', image:'https://ljekarnaonline.hr/upload/catalog/product/34586/thumb/collagentime-beauty-500ml-21-e1677668144451_642ab74cb10e5_580x580r.png', name:'Hamapharm Collagen Time Beauty', size:'3 × 500 ml (2+1)', price:'€79,80', cat:'Face & body care' },
  { key:'omega3', image:'https://ljekarnaonline.hr/upload/catalog/product/29747/thumb/almagea-shine-on-2022_6284bbc48b52d_580x580r.jpg', name:'Almagea® SHINE ON+', size:'45 kapsula', price:'€26,46', cat:'Face & body care', prime:true },
  { key:'magcitrate', image:'https://cdn11.bigcommerce.com/s-zmgdyj2jxr/images/stencil/500x659/products/475/947/Vital_Proteins_Collagen_Peptidi_A10__04096__98490.1766046839.386.513__07607.1768299249.jpg?c=1', name:'Vital Proteins Collagen Peptides', size:'10 vrećica po 10 g', price:'€21,99', cat:'Face & body care' },
  { key:'zinc', image:'https://cdn11.bigcommerce.com/s-2xoeaz93e6/images/stencil/500x659/products/12149/39788/schulke-mikrozid-af-maramice_220__93135.1779276716.jpg?c=1', name:'Mikrozid maramice za dezinfekciju površina', size:'220 komada', price:'€22,40', cat:'First aid' },
  { key:'salvusept', image:'https://cdn11.bigcommerce.com/s-2xoeaz93e6/images/stencil/500x659/products/4624/30355/C041723__1__62136.1776692820.jpg?c=1', name:'Mikrozid Sensitive otopina', size:'1 litra', price:'€9,66', cat:'First aid' },
  { key:'vitalcollagen', image:'https://cdn11.bigcommerce.com/s-2xoeaz93e6/images/stencil/500x659/products/4636/4746/mikrozidr-sensitive-maramice-punjenje-a-200-1_62260a487bfd2__05980.1743155814.jpg?c=1', name:'Mikrozid Sensitive maramice, punjenje', size:'200 maramica', price:'€11,38', cat:'First aid' },
  { key:'klompe', image:'https://cdn11.bigcommerce.com/s-zmgdyj2jxr/images/stencil/500x659/products/470/941/YUWELL_TOALETNA_KOLICA_H032B__59976__76996.1766046794.386.513__76665.1768299242.jpg?c=1', name:'Yuwell toaletna kolica', size:'Model H032B', price:'€174,30', cat:'First aid' },
  { key:'multiroyal', image:'https://cdn11.bigcommerce.com/s-2xoeaz93e6/images/stencil/500x659/products/6077/37893/D100664__1__47265.1776770215.jpg?c=1', name:'Manusal rukavice latex bez pudera', size:'100 komada · S–XL', price:'€9,28', cat:'First aid' },
  { key:'biotin', image:'https://cdn11.bigcommerce.com/s-zmgdyj2jxr/images/stencil/500x659/products/467/938/YUWELL_STAP_ZA_HODANJE_NA_SKLAPANJE_YU838__35023__78783.1766046856.386.513__30580.1768299237.jpg?c=1', name:'Yuwell sklopivi štap za hodanje', size:'Model YU838', price:'€11,25', cat:'First aid' }
];
const PRICE_BANDS = [
  { label:'Under €10', test:v => v < 10 },
  { label:'€10 – €20', test:v => v >= 10 && v <= 20 },
  { label:'Over €20', test:v => v > 20 }
];
const SUBCATS = {
  'Vitamins & minerals': [
    { label:'Vitamin C', test:p=>/vitamin c|ester/i.test(p.name) },
    { label:'Minerals', test:p=>/magnesium|calcium|zinc|iron|selenium|boron/i.test(p.name) },
    { label:'Omega & fish oil', test:p=>/omega|fish oil/i.test(p.name) },
    { label:'Vitamin D', test:p=>/vitamin d|d3/i.test(p.name) }
  ],
  'Face & body care': [
    { label:'Skin', test:p=>/collagen|hyaluron|skin/i.test(p.name) },
    { label:'Hair & nails', test:p=>/biotin|hair|nail/i.test(p.name) },
    { label:'Sun care', test:p=>/spf|sun|carotene/i.test(p.name) }
  ],
  'Mom & baby': [
    { label:'Prenatal & folate', test:p=>/folate|folic|prenatal|b12/i.test(p.name) },
    { label:'Vitamin D', test:p=>/vitamin d|d3/i.test(p.name) },
    { label:'Iron', test:p=>/iron/i.test(p.name) }
  ]
};
const FEATURED_FOR = { 'Vitamins & minerals':'immunity', 'Face & body care':'skincare', 'Mom & baby':'unwind', 'First aid':'immunity' };
const FEATURED_LINE = { 'Vitamins & minerals':'Pharmacist picks for cold season', 'Face & body care':'Curated for skin, hair and nails', 'Mom & baby':'Gentle routines for the evening' };
const SORTS = ['Relevance', 'Newest', 'Price: low to high', 'Price: high to low'];
const formOf = p => /capsule|kapsul/i.test(p.size) ? 'Capsules' : /tablet/i.test(p.size) ? 'Tablets' : /softgel|bombon/i.test(p.size) ? 'Softgels' : /ml|litra|sirup/i.test(p.size) ? 'Liquid' : 'Other';
const FORMS = ['Capsules','Tablets','Softgels','Liquid'];
const inStockToday = p => p.key.charCodeAt(0) % 2 === 0;
const priceNum = s => parseFloat(s.replace('€','').replace('.','').replace(',','.'));
const GROUPS = {
  'new-arrivals': { title:'New arrivals', keys:['selenium','betacarotene'] },
  'beauty': { title:'Most bought this week', keys:['esterc','calmag','d3'] },
  'immunity': { title:'Autumn immunity', keys:['esterc','d3','selenium'] },
  'essentials': { title:'Hygiene and protection', keys:['salvusept','vitalcollagen','zinc','multiroyal'] },
  'skin': { title:'Skin, hair and nails', keys:['magcitrate','omega3','betacarotene'] },
  'family': { title:'For mom and baby', keys:['selenium','d3','calmag'] }
};
const PROMOS = [
  { group:'immunity', tone:'plum', wash:'#1C4C1B', eyebrow:'Autumn immunity', title:'Getting ready for the cold months', note:'Vitamin C, D3 and selenium — the three most asked for at the counter.', cta:'See immunity picks', art:'assets/campaign-capsule.jpg' },
  { group:'beauty', tone:'forest', wash:'#386284', eyebrow:'Top rated in beauty', title:'What our customers rate highest', note:'The three best-reviewed supplements for skin, hair and nails.', cta:'See the selection', art:'2761-mtbo96vm-ld1y.jpg' },
  { group:'new-arrivals', tone:'clay', wash:'#4A3326', eyebrow:'New arrivals', title:'Just landed on the shelf', note:'Two additions this month, in stock in 21 pharmacies.', cta:'See new arrivals', art:'2149080570-mtboeft4-ygty.jpg' }
];
const FILTERS = ['All', 'Vitamins & minerals', 'Face & body care', 'Mom & baby', 'First aid', 'Oral care'];

function CategoryPhotoTile({ id, label, short, hint, photo, tint, onClick, current }) {
  return (
    <button className="cattile" data-id={id} aria-current={current ? 'true' : undefined} onClick={onClick} style={tint ? {background:tint} : undefined}>
      <span className="catimg"><img src={photo || 'assets/cat-placeholder.jpg'} alt={label} /></span>
      <span className="catlabel">{label}</span>
    </button>
  );
}

function PromoBox() {
  const nav = useNav();
  const ref = React.useRef(null);
  const [i, setI] = React.useState(0);
  const onScroll = () => { const el = ref.current; if (el) setI(Math.round(el.scrollLeft / (el.scrollWidth / PROMOS.length))); };
  const goTo = n => { const el = ref.current; if (el) el.scrollTo({ left: n * (el.scrollWidth / PROMOS.length), behavior:'smooth' }); };
  return (
    <div className="promorail">
      <span className="promowash" aria-hidden="true">
        {PROMOS.map((p,n)=>(
          <span key={p.group} data-on={n===i} style={{background:'linear-gradient(180deg,'+p.wash+' 0%,'+p.wash+'00 100%)'}}></span>
        ))}
      </span>
      <div className="ptrack" ref={ref} onScroll={onScroll}>
        {PROMOS.map((p,n)=>(
          <button className="pcampaign" key={p.group} data-tone={p.tone} onClick={()=>nav.go('group:'+p.group)}>
            <span className="art" data-fit={p.art.endsWith('.png') ? 'pack' : 'cover'}><img src={p.art} alt="" /></span>
            <span className="copy">
              <span className="t">{p.title}</span>
              <span className="s">{p.note}</span>
            </span>
          </button>
        ))}
      </div>
      <div className="pdots">
        {PROMOS.map((p,n)=><button key={p.group} aria-label={'Campaign '+(n+1)} aria-current={n===i} onClick={()=>goTo(n)}></button>)}
      </div>
    </div>
  );
}

const byKeys = keys => keys.map(k => CATALOGUE.find(p => p.key === k)).filter(Boolean);

function HomeScreen() {
  const nav = useNav();
  const shelf = (title, items) => (
    <React.Fragment>
      <SecLabel>{title}</SecLabel>
      <div className="shelf">
        {items.map(p=><ProductCard key={p.key} {...p} onClick={()=>nav.go('shopflow:'+p.key)} />)}
      </div>
    </React.Fragment>
  );
  return (
    <div className="phone hasnav">
      <StatusBar />
      <div className="scroll" style={{position:'relative'}}>
        <span className="homewash"></span>
        <div className="appbar">
          <span className="greeting">Good day, Iva</span>
          <CartAction onClick={()=>nav.go('cart')} />
        </div>
        <div style={{position:'relative',padding:'14px 20px 28px',display:'flex',flexDirection:'column',gap:14}}>
          <PromoBox />
          {shelf('Top rated in beauty', byKeys(GROUPS.beauty.keys))}
          {shelf('New arrivals', byKeys(GROUPS['new-arrivals'].keys))}
          {shelf('Everyday essentials', byKeys(GROUPS.essentials.keys))}
          {shelf('Autumn immunity', byKeys(GROUPS.immunity.keys))}
          {shelf('Skin, hair and nails', byKeys(GROUPS.skin.keys))}
          {shelf('For mom and baby', byKeys(GROUPS.family.keys))}
        </div>
      </div>
      <Nav active="Home" />
    </div>
  );
}

const RECENT_KEY = 'e24-recent-searches';
const TRENDING = ['Vitamin D3', 'Magnesium', 'Sunscreen SPF 50', 'Probiotics', 'Iron', 'Hyaluronic serum'];

function SearchOverlay({ initial = '', onClose, onSubmit, onCategory }) {
  const [q, setQ] = React.useState(initial);
  const [recent, setRecent] = React.useState(() => {
    try { return JSON.parse(localStorage.getItem(RECENT_KEY)) || ['Vitamin C', 'Omega 3', 'Baby lotion']; } catch (e) { return ['Vitamin C', 'Omega 3', 'Baby lotion']; }
  });
  const inputRef = React.useRef(null);
  const [live, setLive] = React.useState(initial);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => { const t = setTimeout(() => inputRef.current && inputRef.current.focus(), 60); return () => clearTimeout(t); }, []);
  React.useEffect(() => {
    if (q.trim() === live.trim()) { setLoading(false); return; }
    setLoading(true);
    const t = setTimeout(() => { setLive(q); setLoading(false); }, 260);
    return () => clearTimeout(t);
  }, [q, live]);
  const save = list => { setRecent(list); try { localStorage.setItem(RECENT_KEY, JSON.stringify(list)); } catch (e) {} };
  const submit = term => {
    const t = (term || '').trim(); if (!t) return;
    save([t].concat(recent.filter(r => r.toLowerCase() !== t.toLowerCase())).slice(0, 6));
    onSubmit(t); onClose();
  };
  const term = live.trim().toLowerCase();
  const [facet, setFacet] = React.useState(null);
  const [offer, setOffer] = React.useState(false);
  React.useEffect(()=>{ setFacet(null); setOffer(false); }, [term]);
  const hits = term ? CATALOGUE.filter(p => (p.name + ' ' + p.cat).toLowerCase().includes(term)).slice(0, 12) : [];
  const facets = FILTERS.filter(f => f !== 'All' && hits.some(p => p.cat === f));
  const results = hits.filter(p => (!facet || p.cat === facet) && (!offer || p.was));
  return (
    <div className="searchover">
      <StatusBar />
      <div className="appbar">
        <button className="iconbtn" aria-label="Close search" onClick={onClose} style={{marginLeft:-7}}><i className="ti ti-chevron-left"></i></button>
        <form className="search" style={{flex:1}} onSubmit={e=>{e.preventDefault();submit(q);}}>
          <i className="ti ti-search" style={{fontSize:17,color:'var(--text-faint)'}}></i>
          <input ref={inputRef} value={q} onChange={e=>setQ(e.target.value)} placeholder="Search products, brands, symptoms" />
          {q ? <button type="button" className="sclear" aria-label="Clear" onClick={()=>setQ('')}><i className="ti ti-x"></i></button> : null}
        </form>
      </div>
      <div className="scroll" style={{padding:'6px 20px 28px',display:'flex',flexDirection:'column',gap:18}}>
        {q.trim() ? (
          <div className="sgroup">
            <span className="plabel">{loading ? 'Searching' : results.length ? results.length + (results.length === 1 ? ' result' : ' results') : 'No results'}</span>
            {!loading && hits.length ? (
              <div className="prow sfilters">
                <button className="fchip" data-on={!facet && !offer ? 'true' : undefined} onClick={()=>{setFacet(null);setOffer(false);}}>All</button>
                {facets.map(f=><button key={f} className="fchip" data-on={facet === f ? 'true' : undefined} onClick={()=>setFacet(facet === f ? null : f)}>{f}</button>)}
                {hits.some(p=>p.was) ? <button className="fchip" data-on={offer ? 'true' : undefined} onClick={()=>setOffer(v=>!v)}>On offer</button> : null}
              </div>
            ) : null}
            {loading ? (
              <div className="sgrid">
                {[0,1,2,3].map(n=><span className="sskel" key={n}><span className="sk-shot"></span><span className="sk-line"></span><span className="sk-line short"></span></span>)}
              </div>
            ) : results.length ? (
              <div className="sgrid">
                {results.map(p=><ProductCard key={p.key} {...p} onClick={()=>{submit(p.name);}} />)}
              </div>
            ) : (
              <div className="snoresult">
                <i className="ti ti-search-off"></i>
                <div className="t">Nothing matches “{live.trim()}”</div>
                <p className="s">Try a shorter word, or start from one of these.</p>
                <div className="prow" style={{justifyContent:'center'}}>
                  {TRENDING.slice(0,3).map(t=><button key={t} className="fchip" onClick={()=>{setQ(t);}}>{t}</button>)}
                </div>
                <div className="prow" style={{justifyContent:'center'}}>
                  {FILTERS.filter(f=>f!=='All').slice(0,3).map(f=><button key={f} className="fchip" onClick={()=>{onCategory(f);onClose();}}>{f}</button>)}
                </div>
              </div>
            )}
          </div>
        ) : (
          <React.Fragment>
            {recent.length ? (
              <div className="sgroup">
                <span className="plabel">Recent searches<button className="slink" onClick={()=>save([])}>Clear</button></span>
                {recent.map(r => (
                  <div key={r} className="srow" role="button" tabIndex={0} onClick={()=>submit(r)}>
                    <i className="ti ti-history"></i><span>{r}</span>
                    <button className="sx" aria-label={'Remove ' + r} onClick={e=>{e.stopPropagation();save(recent.filter(x=>x!==r));}}><i className="ti ti-x"></i></button>
                  </div>
                ))}
              </div>
            ) : null}
            <div className="sgroup">
              <span className="plabel">Trending in the pharmacy</span>
              <div className="prow">
                {TRENDING.map(t => <button key={t} className="fchip" onClick={()=>submit(t)}>{t}</button>)}
              </div>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

const CAT_FEATURED = {
  'Vitamins & minerals': [
    { id:'minerals', photo:'uploads/1797.jpg', fallback:[184,117,0], wash:'#b87500',
      title:'The mineral shelf', desc:'Multivitamins and immune support — the three asked for most at the counter.',
      keys:['calmag','esterc','selenium'] },
    { id:'cvitomega', photo:'2149080570-mtboeft4-ygty.jpg', fallback:[101,86,67], wash:'#655643',
      title:'For the whole family', desc:'Two shelves customers restock through the winter months.',
      keys:['d3','selenium','esterc'] }
  ],
  'Face & body care': [
    { id:'hair', photo:'uploads/pasted-1787930879244-0.png', fallback:[122,85,96], wash:'#7a5560',
      title:'Hair, skin and nails', desc:'Collagen and skin support for the routine that shows on the outside.',
      keys:['magcitrate','omega3','betacarotene'] }
  ],
  'Mom & baby': [
    { id:'prenatal', photo:'uploads/5705.jpg', fallback:[127,143,154], wash:'#6f7f8a',
      title:'Pregnancy and nursing', desc:'Vitamins for children and multivitamins — what pharmacists recommend most often.',
      keys:['selenium','d3','calmag'] }
  ],
  'First aid': [
    { id:'homekit', photo:'uploads/pasted-1787929943307-0.png', fallback:[74,122,146], wash:'#4a7a92',
      title:'The home first aid shelf', desc:'Disinfection, wipes and gloves to keep beside the plasters and the thermometer.',
      keys:['zinc','salvusept','multiroyal'] }
  ]
};
const findCollection = id => []
  .concat(window.COLLECTIONS || [])
  .concat(Object.keys(CAT_FEATURED).reduce((a,k)=>a.concat(CAT_FEATURED[k]), []))
  .find(c => c.id === id);
const groupOf = id => id === 'immunity' ? 'immunity' : id === 'skincare' ? 'beauty' : 'essentials';

function FeaturedRail({ featured, cat }) {
  const nav = useNav();
  const all = window.COLLECTIONS || [];
  const cards = CAT_FEATURED[cat] || [featured].concat(all.filter(c => c.id !== featured.id)).slice(0, 2);
  const Card = window.CollectionCard;
  if (!Card) return null;
  return (
    <div className="collrail featrail">
      {cards.map(c => <Card key={c.id} data={c} onOpen={()=>nav.go('coll:' + c.id)} />)}
    </div>
  );
}

function ShopScreen({ initialFilter, group, openSearch, category, initialQuery, subcategory, collection }) {
  const nav = useNav();
  const coll = collection ? findCollection(collection) : null;
  const g = GROUPS[group];
  const cat = FILTERS.includes(category) ? category : null;
  const [active, setActive] = React.useState(cat || (FILTERS.includes(initialFilter) ? initialFilter : 'All'));
  const [query, setQuery] = React.useState(initialQuery || '');
  const [bands, setBands] = React.useState([]);
  const [forms, setForms] = React.useState([]);
  const [stockOnly, setStockOnly] = React.useState(false);
  const [discountOnly, setDiscountOnly] = React.useState(false);
  const [sort, setSort] = React.useState('Relevance');
  const [sheet, setSheet] = React.useState(null);
  const [searching, setSearching] = React.useState(!!openSearch);
  const [sub, setSub] = React.useState(subcategory || null);
  const inCat = cat ? CATALOGUE.filter(p => p.cat === cat) : [];
  const subs = ((cat && SUBCATS[cat]) || []).filter(x => inCat.some(x.test));
  const featured = cat && (window.COLLECTIONS || []).find(c => c.id === FEATURED_FOR[cat]);
  const toggle = (set, l) => set(b => b.includes(l) ? b.filter(x => x !== l) : b.concat(l));
  const toggleBand = l => toggle(setBands, l);
  const activeCount = bands.length + forms.length + (stockOnly ? 1 : 0) + (discountOnly ? 1 : 0) + (active !== 'All' && !g && !cat ? 1 : 0);
  const clearAll = () => { setBands([]); setForms([]); setStockOnly(false); setDiscountOnly(false); if (!cat) setActive('All'); setSort('Relevance'); };
  const catOptions = cat ? subs.map(x=>x.label) : FILTERS;
  const catValue = cat ? (sub || 'All') : active;
  const setCatValue = v => cat ? setSub(v === 'All' ? null : v) : setActive(v);
  const hasCategoryFacet = cat ? subs.length > 0 : true;
  const valueOf = {
    sort,
    price: bands.length ? bands.join(', ') : 'Any',
    form: forms.length ? forms.join(', ') : 'Any',
    category: catValue,
    offer: discountOnly ? 'Only on offer' : 'Any',
    stock: stockOnly ? 'In stock today' : 'Any'
  };
  const facetRows = [
    ['sort','Sort by'],
    hasCategoryFacet ? ['category', cat ? 'Sub-category' : 'Category'] : null,
    ['price','Price'],
    ['form','Form'],
    ['offer','On offer'],
    ['stock','Availability']
  ].filter(Boolean);
  const FACET = {
    sort: { title:'Sort by', multi:false, options:SORTS, value:[sort], set:v=>setSort(v), reset:()=>setSort('Relevance') },
    category: { title: cat ? 'Sub-category' : 'Category', multi:false, options:Array.from(new Set(['All'].concat(catOptions))), value:[catValue], set:setCatValue, reset:()=>setCatValue('All') },
    price: { title:'Price', multi:true, options:PRICE_BANDS.map(b=>b.label), value:bands, set:l=>toggleBand(l), reset:()=>setBands([]) },
    form: { title:'Form', multi:true, options:FORMS, value:forms, set:l=>toggle(setForms, l), reset:()=>setForms([]) },
    offer: { title:'On offer', multi:false, options:['Any','Only on offer'], value:[discountOnly?'Only on offer':'Any'], set:v=>setDiscountOnly(v==='Only on offer'), reset:()=>setDiscountOnly(false) },
    stock: { title:'Availability', multi:false, options:['Any','In stock today'], value:[stockOnly?'In stock today':'Any'], set:v=>setStockOnly(v==='In stock today'), reset:()=>setStockOnly(false) }
  };
  let list = (coll ? byKeys(coll.keys) : g ? byKeys(g.keys) : cat ? CATALOGUE.filter(p => p.cat === cat) : CATALOGUE)
    .filter(p => coll || g || cat || active === 'All' || p.cat === active)
    .filter(p => !query || p.name.toLowerCase().includes(query.toLowerCase()))
    .filter(p => !bands.length || bands.some(l => PRICE_BANDS.find(b => b.label === l).test(priceNum(p.price))))
    .filter(p => !forms.length || forms.includes(formOf(p)))
    .filter(p => !stockOnly || inStockToday(p))
    .filter(p => !discountOnly || p.was)
    .filter(p => !sub || (subs.find(x => x.label === sub) || {test:()=>true}).test(p));
  if (sort === 'Price: low to high') list = list.slice().sort((a,b)=>priceNum(a.price)-priceNum(b.price));
  if (sort === 'Price: high to low') list = list.slice().sort((a,b)=>priceNum(b.price)-priceNum(a.price));
  if (sort === 'Newest') list = list.slice().reverse();
  return (
    <Screen active="Shop" title={cat || coll ? '' : g ? g.title : 'Shop'} onBack={cat || g || coll ? nav.back : undefined}
      overlay={searching ? <SearchOverlay initial={query} onClose={()=>setSearching(false)} onSubmit={t => (cat || g) ? nav.go('q:' + t) : setQuery(t)} onCategory={f=>nav.go('cat:'+f)} /> : null}
      action={<React.Fragment>
      <AppIcon icon="search" label="Search" onClick={()=>setSearching(true)} />
      <CartAction onClick={()=>nav.go('cart')} />
    </React.Fragment>}>
      {g || cat || coll || query.trim() ? null : (
        <div className="catgrid" data-style="baked">
          {CATEGORIES_BLOCK.map(c=>(
            <CategoryPhotoTile key={c.id} {...c} onClick={()=>nav.go('cat:'+c.route)} />
          ))}
        </div>
      )}
      {coll ? (
        <React.Fragment>
          <h1 className="cathead">{coll.title}</h1>
          <p className="collintro">{coll.desc}</p>
        </React.Fragment>
      ) : null}
      {cat ? (
        <React.Fragment>
          <h1 className="cathead">{sub || cat}</h1>
          {sub ? <p className="tiny" style={{marginTop:-6}}>In {cat}</p> : null}
          {subs.length && !sub ? null : null}
          {featured && !sub ? <FeaturedRail featured={featured} cat={cat} /> : null}
          {sub ? null : <SecLabel>All in this category</SecLabel>}
        </React.Fragment>
      ) : null}
      <Sheet open={!!sheet} onClose={()=>setSheet(null)} top="22%">
        {sheet === 'filter' ? (
          <div className="fsheet">
            <h3>Filter</h3>
            <div className="facetlist">
              {facetRows.map(([k,label])=>(
                <button key={k} className="facetrow" onClick={()=>setSheet(k)}>
                  <span className="fname">{label}</span>
                  <span className="fval" data-set={valueOf[k] !== 'Any' && valueOf[k] !== 'All' ? 'true' : undefined}>{valueOf[k]}<i className="ti ti-chevron-right"></i></span>
                </button>
              ))}
            </div>
            <div className="sheetfoot">
              <button className="ghostbtn" onClick={clearAll}>Clear all</button>
              <button className="cta" onClick={()=>setSheet(null)}>Done</button>
            </div>
          </div>
        ) : sheet ? (
          <div className="fsheet">
            <div className="sheethead">
              <button className="iconbtn" aria-label="Back to filters" onClick={()=>setSheet('filter')}><i className="ti ti-chevron-left"></i></button>
              <h3 style={{margin:0}}>{FACET[sheet].title}</h3>
            </div>
            <div className="optlist">
              {FACET[sheet].options.map(o=>{
                const on = FACET[sheet].value.includes(o);
                return (
                  <button key={o} className="optrow" aria-checked={on} role={FACET[sheet].multi ? 'checkbox' : 'radio'} onClick={()=>FACET[sheet].set(o)}>
                    <span>{o}</span>
                    <span className={'mark ' + (FACET[sheet].multi ? 'box' : 'dot')}>{on ? <i className="ti ti-check"></i> : null}</span>
                  </button>
                );
              })}
            </div>
            <div className="sheetfoot">
              <button className="ghostbtn" onClick={FACET[sheet].reset}>Reset</button>
              <button className="cta" onClick={()=>setSheet('filter')}>Done</button>
            </div>
          </div>
        ) : null}
      </Sheet>
      <div className="filterbar">
        <button className="fpill icon" aria-label="Filter" data-on={activeCount || sort !== 'Relevance' ? 'true' : undefined} onClick={()=>setSheet('filter')}>
          <i className="ti ti-adjustments-horizontal"></i>
        </button>
        <div className="fpills">
          <button className="fpill" data-on={sort !== 'Relevance' ? 'true' : undefined} onClick={()=>setSheet('sort')}>Sort by<i className="ti ti-chevron-down"></i></button>
          <button className="fpill" data-on={discountOnly ? 'true' : undefined} aria-pressed={discountOnly} onClick={()=>setDiscountOnly(v=>!v)}>On offer</button>
          {hasCategoryFacet ? <button className="fpill" data-on={catValue !== 'All' ? 'true' : undefined} onClick={()=>setSheet('category')}>{cat ? 'Sub-category' : 'Category'}<i className="ti ti-chevron-down"></i></button> : null}
          <button className="fpill" data-on={bands.length ? 'true' : undefined} onClick={()=>setSheet('price')}>Price<i className="ti ti-chevron-down"></i></button>
        </div>
      </div>
      {query || (!cat && !g && !coll) ? <SecLabel>{query ? 'Results' : g ? g.title : 'All products'}</SecLabel> : null}
      <div className="sgrid">
        {list.map(p=><ProductCard key={p.key} {...p} onClick={()=>nav.go('shopflow:'+p.key)} />)}
      </div>
      {!list.length ? (
        <div className="quiet" style={{textAlign:'center',padding:'28px 16px'}}>
          <i className="ti ti-search" style={{fontSize:22,color:'var(--sage-500)'}}></i>
          <div style={{fontFamily:'var(--font-serif-display)',fontSize:17,marginTop:8}}>{query ? 'Nothing matches that' : 'Nothing in this category yet'}</div>
          <p className="tiny" style={{marginTop:6}}>{query ? 'Try a shorter search, or browse a category.' : 'The demo catalogue carries a few products only. Tap All to see everything.'}</p>
          <button className="fchip" style={{marginTop:12}} onClick={()=>{setQuery('');setActive('All');setBands([]);setForms([]);setStockOnly(false);setDiscountOnly(false);setSub(null);}}>Show all products</button>
        </div>
      ) : null}
      <p className="tiny">Every €1 spent earns 1 point. Prescription medicines and co-payments earn no points.</p>
    </Screen>
  );
}

const QN = 21;
function qrCells(seed) {
  let h = 0; for (let i=0;i<seed.length;i++) h = (h*31 + seed.charCodeAt(i)) >>> 0;
  const out = []; for (let i=0;i<QN*QN;i++) { h = (h*1103515245 + 12345) >>> 0; out.push((h>>>16)%100 < 46); }
  return out;
}
const QGRID = qrCells('WP-4820-1176');
const isFinder = (r,c)=>(r<7&&c<7)||(r<7&&c>=QN-7)||(r>=QN-7&&c<7);

const ptsFmt = n => String(Math.abs(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
const ptsEur = n => (Math.abs(n)/100).toFixed(2).replace('.', ',');
function LedgerRow({ description, date, channel, delta = 0, pending, onClick, last }) {
  const positive = delta > 0;
  return (
    <button className="lrow" data-last={last ? 'true' : undefined} onClick={onClick}>
      <span className="lmain">
        <span className="what">{description}</span>
        <span className="meta"><span>{date}</span>{channel ? <span>{'\u00b7 ' + channel}</span> : null}</span>
      </span>
      <span className="lright">
        <span className={'delta' + (pending ? ' pending' : positive ? '' : ' neg')}>{(positive ? '+' : '\u2212') + ptsFmt(delta) + ' pts'}</span>
        {pending ? <span className="meta">Processing</span> : null}
      </span>
      <i className="ti ti-chevron-right"></i>
    </button>
  );
}
function MovementSheet({ item, onClose }) {
  const it = item || {};
  const positive = it.delta > 0;
  const note = it.pending
    ? 'This movement is still settling. In-store purchases can take a few hours to appear in your balance.'
    : positive
      ? 'Earned at 1 point for every €1 spent.'
      : it.description && /refund/i.test(it.description)
        ? 'A refund removes the points the purchase earned.'
        : 'Redeemed at 100 points = €1.';
  return (
    <Sheet open={!!item} onClose={onClose} top="30%">
      <div className="fsheet infosheet">
        <span className="bigglyph"><i className={'ti ti-' + (it.pending ? 'clock' : positive ? 'coin' : 'discount')}></i></span>
        <h3>{it.description}</h3>
        <div className="card" style={{padding:16,width:'100%'}}>
          <div className="kvrow"><span>Date</span><b>{it.date}</b></div>
          <div className="kvrow"><span>Where</span><b>{it.channel}</b></div>
          <div className="kvrow"><span>Points</span><b className="num">{(positive ? '+' : '\u2212') + ptsFmt(it.delta || 0)}</b></div>
          <div className="kvrow last"><span>Value</span><b>{'€' + ptsEur(it.delta || 0)}</b></div>
        </div>
        <p className="body">{note}</p>
        <div className="sheetfoot">
          <button className="cta" onClick={onClose}>Close</button>
        </div>
      </div>
    </Sheet>
  );
}

function CardScreen() {
  const nav = useNav();
  const verified = useVerified();
  const [wallet, setWallet] = React.useState(false);
  const [movement, setMovement] = React.useState(null);
  const [intro, setIntro] = React.useState(() => { try { return !localStorage.getItem(POINTS_INTRO_KEY); } catch (e) { return true; } });
  const closeIntro = () => { try { localStorage.setItem(POINTS_INTRO_KEY, '1'); } catch (e) {} setIntro(false); };
  const [focus, setFocus] = React.useState(false);
  const [focusIn, setFocusIn] = React.useState(false);
  const MEMBER_NAME = 'Iva Jurašin';
  const cardRef = React.useRef(null);
  const qrRef = React.useRef(null);
  const EASE = 'cubic-bezier(.2,.6,.25,1)';
  const zoomTransform = () => {
    const card = cardRef.current, qr = qrRef.current;
    const phone = card && card.closest('.phone');
    if (!card || !qr || !phone) return 'none';
    const C = card.getBoundingClientRect(), Q = qr.getBoundingClientRect(), P = phone.getBoundingClientRect();
    const k = (P.width * 0.86) / Q.width;
    const cx = C.left + C.width/2, cy = C.top + C.height/2;
    const qx = Q.left + Q.width/2, qy = Q.top + Q.height/2;
    const dx = (P.left + P.width/2) - cx - (qx - cx) * k;
    const dy = (P.top + P.height/2) - cy - (qy - cy) * k;
    return 'translate(' + dx + 'px,' + dy + 'px) scale(' + k + ')';
  };
  const openFocus = () => {
    const card = cardRef.current;
    if (!card) return;
    setFocus(true);
    requestAnimationFrame(()=>{
      setFocusIn(true);
      card.style.transform = zoomTransform();
    });
  };
  const closeFocus = () => {
    const card = cardRef.current;
    setFocusIn(false);
    if (card) card.style.transform = '';
    setTimeout(()=>setFocus(false), 380);
  };
  const qrCells = (
    <React.Fragment>
      {QGRID.map((on,i)=>{const r=Math.floor(i/QN),c=i%QN;return <span key={i} style={{background:isFinder(r,c)?'transparent':on?'var(--ink-900)':'transparent'}}></span>;})}
      <span className="finder" style={{top:0,left:0}}></span>
      <span className="finder" style={{top:0,right:0}}></span>
      <span className="finder" style={{bottom:0,left:0}}></span>
    </React.Fragment>
  );
  return (
    <Screen active="Card" title="WellPlus" tight
      overlay={<React.Fragment>
        {focus ? (
          <div className="qrfocus" data-on={focusIn ? 'true' : undefined} onClick={closeFocus}>
            <button className="qrexit" onClick={closeFocus} aria-label="Exit scanning mode"><i className="ti ti-x"></i><span>Close</span></button>
          </div>
        ) : null}
        <Sheet open={intro} onClose={closeIntro} top="16%">
          <div className="fsheet infosheet">
            <span className="bigglyph"><i className="ti ti-rosette-discount"></i></span>
            <h3>How WellPlus points work</h3>
            <p className="body">Every purchase at Ljekarne Švaljek turns into a discount you can use whenever you like.</p>
            <ul className="mechanic">
              {HOW_POINTS.map(([icon,text])=><li key={text}><i className={'ti ti-'+icon}></i><span>{text}</span></li>)}
            </ul>
            <div className="sheetfoot">
              <button className="cta" onClick={closeIntro}>Got it</button>
            </div>
          </div>
        </Sheet>
        <MovementSheet item={movement} onClose={()=>setMovement(null)} />
      </React.Fragment>}
      action={<React.Fragment>
      <button className="iconbtn" onClick={()=>setIntro(true)} aria-label="How points work"><i className="ti ti-info-circle"></i></button>
      <AppIcon icon="search" label="Search" onClick={()=>nav.go('search')} />
      <CartAction onClick={()=>nav.go('cart')} />
    </React.Fragment>}>
      {!verified ? <StateBanner icon="mail-exclamation" title="Your card is waiting on your email">The QR code works once you open the confirmation link we sent. Until then, points cannot be added at the register.</StateBanner> : null}
      <div className="hero memcard tilt" ref={cardRef} data-focus={focus ? 'true' : undefined} data-focusin={focusIn ? 'true' : undefined} style={{gap:18}}>
        <div className="cardfade" style={{position:'relative',display:'flex',alignItems:'baseline',justifyContent:'center'}}>
          <span className="club" style={{fontSize:16,fontFamily:'"Cooper Md BT", Georgia, serif'}}>WellPlus</span>
        </div>
        <div className="qrpanel qrtap" ref={qrRef} role="button" tabIndex={0} aria-label="Enlarge code for scanning" onClick={()=>{ if (focus) closeFocus(); else openFocus(); }} onKeyDown={e=>{if(e.key==='Enter'||e.key===' ')openFocus();}} style={{position:'relative'}}>
          <div className="qrgrid" style={{gridTemplateColumns:'repeat('+QN+',1fr)'}}>{qrCells}</div>
          <span className="memno">WP-4820-1176</span>
        </div>
        <div className="cardfade" style={{position:'relative',display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:12}}>
          <div>
            {MEMBER_NAME ? (
              <React.Fragment>
                <div className="memname">{MEMBER_NAME}</div>
                <div className="memsince">Member since 2024</div>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <div className="memsince" style={{marginTop:0}}>Member since 2024</div>
                <div className="memnamehint">Your name appears here after your first delivery address</div>
              </React.Fragment>
            )}
          </div>
          <div style={{textAlign:'right'}}>
            <div className="num" style={{fontSize:42}}>1.247</div>
            <div className="memsince">≈ €12,47 to spend</div>
          </div>
        </div>
      </div>
      <p className="body" style={{textAlign:'center',padding:'0 8px'}}>Show this code at the register in any of the 21 pharmacies. Points are added to your balance within a few hours.</p>
      <button className="ghostbtn" onClick={()=>setWallet(true)}><i className={'ti ti-'+(wallet?'check':'wallet')} style={{fontSize:17}}></i>{wallet ? 'Added to your wallet' : 'Add to Apple / Google Wallet'}</button>
      {wallet ? <Banner tone="info" icon="check">Your WellPlus card is in your wallet. The QR stays valid even if your balance changes.</Banner> : null}
      <SecLabel aside="Last 30 days">Recent activity</SecLabel>
      <div className="card">
        {LEDGER.slice(0,5).map((h,i,a)=><LedgerRow key={i} {...h} last={i===a.length-1} onClick={()=>setMovement(h)} />)}
      </div>
      <button className="ghostbtn" onClick={()=>nav.go('history')}><i className="ti ti-list" style={{fontSize:17}}></i>All movements</button>
      <p className="tiny">+41 pts from a recent purchase is still processing and will appear in your balance shortly. In-store purchases can take a few hours to settle.</p>
      <div className="quiet">
        <ul className="mechanic">
          <li><i className="ti ti-wifi-off"></i><span>Works offline — the code is stored on this device.</span></li>
          <li><i className="ti ti-discount"></i><span>100+ points? Tell the cashier you'd like to redeem — no step in the app needed.</span></li>
          <li><i className="ti ti-infinity"></i><span>Points never expire. 100 points = €1.</span></li>
        </ul>
      </div>
      <p className="tiny" style={{textAlign:'center'}}>Your name comes from your first delivery address. The card works normally without it.</p>
    </Screen>
  );
}

const LEDGER = [
  { description:'Purchase · Ljekarna Švaljek, Zagreb', date:'21 Aug 2026', channel:'Store', delta:41, pending:true },
  { description:'Purchase · e24 app', date:'18 Aug 2026', channel:'App', delta:63 },
  { description:'Redeemed at checkout', date:'12 Aug 2026', channel:'App', delta:-400 },
  { description:'Purchase · eljekarna24.hr', date:'4 Aug 2026', channel:'e24.hr', delta:128 },
  { description:'Purchase · Centar zdravih rješenja', date:'29 Jul 2026', channel:'CZR', delta:87 },
  { description:'Purchase · Ljekarna Švaljek, Varaždin', date:'17 Jul 2026', channel:'Store', delta:52 },
  { description:'Refund · returned item', date:'9 Jul 2026', channel:'Store', delta:-18 }
];

const POINTS_INTRO_KEY = 'e24-points-intro-seen';
const HOW_POINTS = [
  ['coin','€1 spent = 1 point — in all 21 pharmacies, on eljekarna24.hr, in this app and at Centar zdravih rješenja.'],
  ['discount','100 points = €1, redeemable from 100 points upward.'],
  ['toggle-right','In the app: one switch at checkout — no amount to type in.'],
  ['building-store','In store: just tell the cashier you\'d like to use your points.'],
  ['infinity','Points never expire.']
];

const PointsScreen = CardScreen; // merged: the card screen now carries the balance and activity

function PointsHistoryScreen() {
  const nav = useNav();
  const [movement, setMovement] = React.useState(null);
  const [filter, setFilter] = React.useState('all');
  const rows = LEDGER.filter(r=>filter==='all' || (filter==='earned' ? r.delta>0 : r.delta<0));
  return (
    <OverlayCtx.Provider value={<MovementSheet item={movement} onClose={()=>setMovement(null)} />}>
    <Shell title="All movements" onBack={nav.back}>
      <SegmentedControl value={filter} onChange={setFilter} options={[{value:'all',label:'All'},{value:'earned',label:'Earned'},{value:'spent',label:'Spent'}]} />
      <div className="card">
        {rows.map((h,i,a)=><LedgerRow key={i} {...h} last={i===a.length-1} onClick={()=>setMovement(h)} />)}
      </div>
      <Banner tone="quiet">Points from in-store purchases settle within a few hours. Refunds remove the points the purchase earned.</Banner>
    </Shell>
    </OverlayCtx.Provider>
  );
}

Object.assign(window, { LedgerRow, MovementSheet, PromoBox, GROUPS, PROMOS, HomeScreen, ShopScreen, CardScreen, PointsScreen, PointsHistoryScreen, CATALOGUE, CATEGORIES, LEDGER, CategoryPhotoTile });
