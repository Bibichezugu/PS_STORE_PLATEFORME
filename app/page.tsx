"use client";

import { useMemo, useState } from "react";
import { Gamepad2, Search, ShoppingBag, UserRound, Truck, ShieldCheck, Headphones, Menu, Plus, Minus, X, ArrowRight, Sparkles } from "lucide-react";

type Product = { id: number; name: string; category: string; platform: string; note: string; tone: string };
const products: Product[] = [
  { id: 1, name: "Jeux PlayStation 5", category: "Jeux", platform: "PS5", note: "Catalogue à compléter", tone: "blue" },
  { id: 2, name: "Jeux PlayStation 4", category: "Jeux", platform: "PS4", note: "Catalogue à compléter", tone: "purple" },
  { id: 3, name: "Jeux Xbox", category: "Jeux", platform: "Xbox", note: "Catalogue à compléter", tone: "green" },
  { id: 4, name: "Console PlayStation 5", category: "Consoles", platform: "PS5", note: "Disponibilité à confirmer", tone: "silver" },
  { id: 5, name: "Manettes & contrôleurs", category: "Accessoires", platform: "Multi-plateforme", note: "Catalogue à compléter", tone: "pink" },
  { id: 6, name: "Casques gaming", category: "Accessoires", platform: "Multi-plateforme", note: "Catalogue à compléter", tone: "orange" },
];

const categories = ["Tout", "Jeux", "Consoles", "Accessoires"];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tout");
  const [cart, setCart] = useState<number[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const visible = useMemo(() => products.filter(p =>
    (category === "Tout" || p.category === category) &&
    (p.name.toLowerCase().includes(search.toLowerCase()) || p.platform.toLowerCase().includes(search.toLowerCase()))
  ), [category, search]);
  const count = cart.length;
  const add = (id: number) => setCart(current => [...current, id]);
  const remove = (id: number) => setCart(current => { const i = current.indexOf(id); return i < 0 ? current : [...current.slice(0, i), ...current.slice(i + 1)]; });

  return (
    <main>
      <div className="topline">Bienvenue chez PS STORE · Votre univers gaming</div>
      <header className="header wrap">
        <a className="brand" href="#"><span className="brand-icon"><Gamepad2 size={25}/></span><span>PS <b>STORE</b></span></a>
        <label className="search"><Search size={18}/><input value={search} onChange={e => setSearch(e.target.value)} placeholder="Rechercher un jeu, une console, un accessoire..."/></label>
        <nav className="head-actions">
          <button className="icon-button account" aria-label="Compte"><UserRound size={19}/><span>Compte</span></button>
          <button className="icon-button cart-trigger" onClick={() => setCartOpen(true)} aria-label="Ouvrir le panier"><ShoppingBag size={19}/><span>Panier</span><i>{count}</i></button>
        </nav>
      </header>
      <div className="nav-wrap"><nav className="nav wrap"><a className="active" href="#">Accueil</a><a href="#catalogue">Jeux</a><a href="#catalogue">Consoles</a><a href="#catalogue">Accessoires</a><a href="#avantages">Pourquoi PS STORE</a><button className="mobile-menu" aria-label="Menu"><Menu/></button></nav></div>

      <section className="hero wrap">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={14}/> LE GAMING PREND UNE AUTRE DIMENSION</span>
          <h1>Joue. Vis. <em>Recommence.</em></h1>
          <p>Découvre notre univers de jeux vidéo, consoles et accessoires gaming. Tout ce qu’il te faut pour vivre ta passion.</p>
          <a className="primary-button" href="#catalogue">Explorer la boutique <ArrowRight size={17}/></a>
          <div className="hero-foot"><span><i/> Sélection gaming</span><span><i/> Service de proximité</span></div>
        </div>
        <div className="hero-art" aria-label="Illustration gaming décorative"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="console"><div className="console-core"/></div><div className="controller"><Gamepad2 size={70}/></div><div className="floating-tag">PLAY<br/><b>MORE.</b></div></div>
      </section>

      <section className="benefits wrap" id="avantages">
        <div><span><Truck/></span><section><b>Livraison & retrait</b><small>Modalités à confirmer avec le magasin</small></section></div>
        <div><span><ShieldCheck/></span><section><b>Achat en confiance</b><small>Informations claires sur chaque article</small></section></div>
        <div><span><Headphones/></span><section><b>Conseil gaming</b><small>Une équipe à votre écoute</small></section></div>
      </section>

      <section className="catalogue wrap" id="catalogue">
        <div className="section-heading"><div><span className="eyebrow">TROUVE TON PROCHAIN NIVEAU</span><h2>Explore la boutique</h2><p>Choisis une catégorie pour découvrir les articles.</p></div><span className="catalogue-count">{visible.length} catégories d’articles</span></div>
        <div className="filters">{categories.map(c => <button key={c} onClick={() => setCategory(c)} className={category === c ? "filter selected" : "filter"}>{c}</button>)}</div>
        <div className="product-grid">{visible.map(p => <article className="product-card" key={p.id}>
          <div className={"product-art " + p.tone}><span className="platform">{p.platform}</span><div className="product-symbol">{p.category === "Jeux" ? <Gamepad2 size={58}/> : p.category === "Consoles" ? <div className="mini-console"/> : <Headphones size={58}/>}</div><span className="art-caption">PS STORE</span></div>
          <div className="product-info"><span className="product-category">{p.category}</span><h3>{p.name}</h3><p>{p.note}</p><div className="product-bottom"><span className="price">Prix à confirmer</span><button className="add-button" onClick={() => add(p.id)} aria-label={"Ajouter " + p.name + " au panier"}><Plus size={18}/></button></div>
          </div>
        </article>)}</div>
        <p className="catalogue-note">Les articles présentés sont des catégories de démonstration. Les références, photos, prix et stocks réels seront ajoutés après validation du catalogue PS STORE.</p>
      </section>

      <section className="closing wrap"><div><span className="eyebrow">PRÊT À PASSER AU NIVEAU SUPÉRIEUR ?</span><h2>Ton prochain jeu t’attend.</h2><p>Retrouve bientôt l’ensemble du catalogue PS STORE.</p></div><a className="primary-button" href="#catalogue">Voir les catégories <ArrowRight size={17}/></a></section>
      <footer className="footer"><div className="wrap footer-inner"><a className="brand" href="#"><span className="brand-icon"><Gamepad2 size={23}/></span><span>PS <b>STORE</b></span></a><span>© {new Date().getFullYear()} PS STORE. Tous droits réservés.</span><span>Boutique gaming · Lubumbashi</span></div></footer>

      {cartOpen && <div className="drawer-backdrop" onClick={() => setCartOpen(false)}><aside className="cart-drawer" onClick={e => e.stopPropagation()}><div className="drawer-head"><div><span className="eyebrow">TA SÉLECTION</span><h2>Mon panier ({count})</h2></div><button className="close-button" onClick={() => setCartOpen(false)} aria-label="Fermer"><X/></button></div>
        {count === 0 ? <div className="empty-cart"><ShoppingBag size={42}/><h3>Ton panier est vide</h3><p>Ajoute un article du catalogue pour commencer.</p><button className="primary-button" onClick={() => setCartOpen(false)}>Continuer mes achats</button></div> :
          <><div className="cart-lines">{products.filter(p => cart.includes(p.id)).map(p => <div className="cart-line" key={p.id}><div><b>{p.name}</b><small>{p.platform} · Prix à confirmer</small></div><div className="qty"><button onClick={() => remove(p.id)} aria-label="Retirer un exemplaire"><Minus size={15}/></button><b>{cart.filter(id => id === p.id).length}</b><button onClick={() => add(p.id)} aria-label="Ajouter un exemplaire"><Plus size={15}/></button></div></div>)}</div><p className="cart-warning">Le panier est une démonstration locale. La validation des commandes sera activée après la mise en place du serveur et des règles de vente.</p></>}
      </aside></div>}
    </main>
  );
}
