/* F1 — wishlist, its own tab (F-01). Out-of-stock items stay, marked, and cannot go to the cart.
   No back-in-stock or price-drop alerts (v2). */
function WishlistScreen() {
  const nav = useNav();
  const w = useWish();
  const items = w.keys.map(k => CATALOG[k]).filter(Boolean);
  const toCart = p => { window.CartStore.add(p.name, 1); nav.go('cart:' + p.key); };
  return (
    <Screen active="Wishlist" title="Wishlist" action={<CartAction onClick={()=>nav.go('cart')} />}>
      {items.length ? (
        <div className="card">
          <div className="clines">
            {items.map((p,i)=>(
              <div className="cline wishline" key={p.key} data-last={i === items.length-1 ? 'true' : undefined}>
                <button className="wishopen" onClick={()=>nav.go('shopflow:' + p.key)}>
                  <span className="cthumb"><img src={p.img} alt="" /></span>
                  <span className="cinfo">
                    <span className="nm">{p.name}</span>
                    <span className="sz">{p.oos ? 'Out of stock' : eur(p.price)}</span>
                  </span>
                </button>
                <span className="wishacts">
                  <button className="wishcart" disabled={p.oos} onClick={()=>toCart(p)} aria-label={'Add ' + p.name + ' to cart'}><CartGlyph size={19} /></button>
                  <button className="wishrm" onClick={()=>WishStore.remove(p.key)} aria-label="Remove from wishlist"><i className="ti ti-heart-filled"></i></button>
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="quiet" style={{textAlign:'center',padding:'28px 16px'}}>
          <i className="ti ti-heart" style={{fontSize:22,color:'var(--sage-500)'}}></i>
          <div style={{fontFamily:'var(--font-serif-display)',fontSize:17,marginTop:8}}>Your wishlist is empty</div>
          <p className="tiny" style={{marginTop:6}}>Tap the heart on any product to save it here.</p>
          <button className="fchip" style={{marginTop:12}} onClick={()=>nav.tab('shop')}>Go to the shop</button>
        </div>
      )}
    </Screen>
  );
}

Object.assign(window, { WishlistScreen });
