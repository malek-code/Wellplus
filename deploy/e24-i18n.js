/* Croatian layer for the e24 prototype.
   The screens are authored in English; this swaps the rendered copy to Croatian
   when the language toggle is set to HR. Dictionary lives in e24-hr-*.js. */
(function(){
  const STORE_KEY = 'e24-lang';
  const originals = new WeakMap();
  const ATTRS = ['placeholder','aria-label','title','alt'];
  let observer = null, scheduled = false;

  const dict = () => window.E24_HR || {};
  const rules = () => window.E24_HR_RULES || [];
  const lookup = raw => {
    const d = dict();
    const t = raw.trim();
    if (!t) return null;
    if (d[t]) return raw.replace(t, d[t]);
    const rs = rules();
    for (let i = 0; i < rs.length; i++) {
      if (rs[i][0].test(t)) return raw.replace(t, t.replace(rs[i][0], rs[i][1]));
    }
    // Composed rows like "Card · Entered and confirmed here in the app":
    // translate each part on its own.
    if (t.indexOf('·') > -1) {
      const parts = t.split('·');
      let any = false;
      const done = parts.map(part=>{
        const k = part.trim();
        if (!k) return part;
        if (d[k]) { any = true; return part.replace(k, d[k]); }
        return part;
      });
      if (any) return raw.replace(t, done.join('·'));
    }
    return null;
  };

  function walk(root){
    const d = dict();
    if (!Object.keys(d).length) return;
    const it = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    while (it.nextNode()) nodes.push(it.currentNode);
    nodes.forEach(n=>{
      const p = n.parentNode;
      if (!p || p.nodeName === 'SCRIPT' || p.nodeName === 'STYLE') return;
      let rec = originals.get(n);
      // React can rewrite a node's text; re-read the source whenever the current
      // value is not the translation we last wrote.
      if (!rec || (n.nodeValue !== rec.out && n.nodeValue !== rec.src)) rec = { src:n.nodeValue, out:null };
      const hit = lookup(rec.src);
      if (hit && n.nodeValue !== hit) n.nodeValue = hit;
      rec.out = hit || rec.src;
      originals.set(n, rec);
    });
    const els = root.querySelectorAll ? root.querySelectorAll('*') : [];
    els.forEach(el=>{
      ATTRS.forEach(a=>{
        if (!el.hasAttribute(a)) return;
        const kept = el.getAttribute('data-om-' + a + '-en') || el.getAttribute(a);
        if (!el.hasAttribute('data-om-' + a + '-en')) el.setAttribute('data-om-' + a + '-en', kept);
        const hit = lookup(kept);
        if (hit) el.setAttribute(a, hit);
      });
    });
  }

  function restore(root){
    const it = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
    const nodes = [];
    while (it.nextNode()) nodes.push(it.currentNode);
    nodes.forEach(n=>{ const rec = originals.get(n); if (rec && n.nodeValue === rec.out) n.nodeValue = rec.src; });
    (root.querySelectorAll ? root.querySelectorAll('*') : []).forEach(el=>{
      ATTRS.forEach(a=>{
        const en = el.getAttribute('data-om-' + a + '-en');
        if (en != null) el.setAttribute(a, en);
      });
    });
  }

  function schedule(){
    if (scheduled) return;
    scheduled = true;
    setTimeout(()=>{ scheduled = false; walk(document.body); }, 0);
  }

  function start(){
    walk(document.body);
    if (observer) return;
    observer = new MutationObserver(schedule);
    observer.observe(document.body, { childList:true, subtree:true, characterData:true });
  }
  function stop(){
    if (observer) { observer.disconnect(); observer = null; }
    restore(document.body);
  }

  const apply = lang => {
    document.documentElement.lang = lang;
    if (lang === 'hr') start(); else stop();
  };

  window.E24_I18N = { apply, walk:()=>walk(document.body) };

  const boot = () => {
    const S = window.LangStore;
    if (!S) { setTimeout(boot, 60); return; }
    const saved = localStorage.getItem(STORE_KEY);
    if (saved && saved !== S.lang) S.lang = saved;
    const set = S.set.bind(S);
    S.set = v => { localStorage.setItem(STORE_KEY, v); set(v); apply(v); };
    apply(S.lang);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
