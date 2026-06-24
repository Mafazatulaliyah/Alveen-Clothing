/**
 * ============================================================
 * ALVEEN CLOTHING - SHARED COMPONENTS & DATA
 * Equivalent to React components (vanilla JS, CDN-ready)
 * ============================================================
 */
// Inisialisasi objek audio secara global agar bisa diakses semua halaman
window.ClickSound = new Audio('../audio/click.mp3'); 

// Atur volume jika dirasa terlalu keras (opsional, rentang 0.0 sampai 1.0)
window.ClickSound.volume = 0.5;
// ─────────────────────────────────────────────
// DATA: Products (Updated for Images)
// ─────────────────────────────────────────────
window.PRODUCTS = [
  { id:1,  name:"Jersey Futsal Pro Custom",   category:"jersey",     price:85000,  oldPrice:120000, badge:"TERLARIS", image:"../../img/produk/jersey-futsal.jpg", desc:"Drifit premium, sublimasi full color, jahitan kuat dan rapi untuk performa terbaik di lapangan." },
  { id:2,  name:"Jersey Sepak Bola Elite",    category:"jersey",     price:90000,  oldPrice:null,   badge:"NEW",      image:"../../img/produk/jersey-soccer.jpg", desc:"Bahan polyester breathable, print tajam, ringan dan nyaman untuk pertandingan." },
  { id:3,  name:"Jaket Gunung Windbreaker",   category:"jaket",      price:185000, oldPrice:null,   badge:"PREMIUM",  image:"../../img/produk/jaket-windbreaker.jpg", desc:"Parasut ripstop tahan angin & air, cocok untuk pendakian dan aktivitas outdoor ekstrem." },
  { id:4,  name:"Jaket Outdoor Hiking Pro",   category:"jaket",      price:195000, oldPrice:220000, badge:"SALE",     image:"../../img/produk/jaket-hiking.jpg", desc:"Material taslan waterproof, multi-pocket, desain ergonomis untuk kenyamanan maksimal." },
  { id:5,  name:"Hoodie Fleece Premium",      category:"hoodie",     price:145000, oldPrice:175000, badge:"TERLARIS", image:"../../img/produk/hoodie-fleece.jpg", desc:"Fleece tebal lembut, custom sablon/bordir, ukuran S-5XL tersedia." },
  { id:6,  name:"Hoodie Oversize Streetwear", category:"hoodie",     price:155000, oldPrice:null,   badge:"NEW",      image:"../../img/produk/hoodie-oversize.jpg", desc:"Desain oversize kekinian, bahan cotton fleece premium, cocok untuk gaya sehari-hari." },
  { id:7,  name:"Polo Shirt Komunitas",       category:"seragam",    price:95000,  oldPrice:null,   badge:null,       image:"../../img/produk/polo-shirt.jpg", desc:"Lacoste pique berkualitas, bordir nama & logo, ideal untuk acara resmi komunitas." },
  { id:8,  name:"Seragam Organisasi Custom",  category:"seragam",    price:110000, oldPrice:null,   badge:"POPULER",  image:"../../img/produk/seragam-organisasi.jpg", desc:"Seragam profesional dengan detail bordir, bahan nyaman dan tahan lama untuk organisasi." },
  { id:9,  name:"Kaos Olahraga Drifit",       category:"baju",       price:65000,  oldPrice:85000,  badge:"SALE",     image:"../../img/produk/kaos-drifit.jpg", desc:"Drifit anti-keringat, ringan, elastis, cocok untuk berbagai aktivitas olahraga." },
  { id:10, name:"Baju Seragam Event",         category:"seragam",    price:75000,  oldPrice:null,   badge:null,       image:"../../img/produk/seragam-event.jpg", desc:"Custom event apparel, sablon full color, produksi cepat untuk kebutuhan acara mendadak." },
  { id:11, name:"Tas Outdoor Daypack 30L",    category:"tas",        price:245000, oldPrice:285000, badge:"PREMIUM",  image:"../../img/produk/tas-daypack.jpg", desc:"Bahan cordura 600D tahan air, sistem back support, multi-compartment untuk pendaki." },
  { id:12, name:"Sepatu Hiking Trail",        category:"sepatu",     price:385000, oldPrice:450000, badge:"TERLARIS", image:"../../img/produk/sepatu-hiking.jpg", desc:"Outsole Vibram grip kuat, midsole EVA, toe cap reinforced, waterproof membrane." },
  { id:13, name:"Kaos Kaki Hiking Anti-Slip", category:"kaossaki",  price:45000,  oldPrice:null,   badge:null,       image:"../../img/produk/kaos-kaki.jpg", desc:"Wool blend antibakteri, padding extra di tumit dan ujung, anti-slip untuk medan berat." },
  { id:14, name:"Jersey Basket Premium",      category:"jersey",     price:95000,  oldPrice:115000, badge:"NEW",      image:"../../img/produk/jersey-basket.jpg", desc:"Bahan mesh breathable ultra-ringan, sublimasi full panel, ukuran S-XXL tersedia." },
  { id:15, name:"Jaket Varsity Custom",       category:"jaket",      price:215000, oldPrice:null,   badge:"PREMIUM",  image:"../../img/produk/jaket-varsity.jpg", desc:"Bahan wool premium kombinasi leather sleeves, embroidered patches, tampilan klasik modern." },
  { id:16, name:"Tas Ransel Laptop Outdoor",  category:"tas",        price:295000, oldPrice:330000, badge:"SALE",     image:"../../img/produk/tas-laptop.jpg", desc:"Laptop compartment 15\", raincover included, ergonomic shoulder strap, material tahan banting." },
];

window.CATEGORIES = [
  { key:"all",      label:"Semua",           icon:"⊞" },
  { key:"jersey",   label:"Jersey",          icon:"⚽" },
  { key:"jaket",    label:"Jaket Outdoor",   icon:"⛰️" },
  { key:"hoodie",   label:"Hoodie",          icon:"👕" },
  { key:"seragam",  label:"Seragam",         icon:"👔" },
  { key:"baju",     label:"Baju Olahraga",   icon:"🏃" },
  { key:"tas",      label:"Tas Outdoor",     icon:"🎒" },
  { key:"sepatu",   label:"Sepatu Hiking",   icon:"👟" },
  { key:"kaossaki", label:"Kaos Kaki",       icon:"🧦" },
];

window.TESTIMONIALS = [
  { id:1, name:"Ahmad Rizky",    role:"Kapten Tim Futsal FC",       rating:5, text:"Jersey futsal kami tampak super profesional! Drifit-nya ringan, printing sublimasi sangat tajam. Pengiriman tepat waktu, recommended banget!", avatar:"AR", city:"Semarang" },
  { id:2, name:"Dewi Susanti",   role:"Ketua Komunitas PA Jateng",  rating:5, text:"Sudah 3x order seragam hiking, selalu memuaskan. Kualitas jahitan rapi, desain sesuai permintaan, harga sangat bersahabat!", avatar:"DS", city:"Yogyakarta" },
  { id:3, name:"Budi Pratama",   role:"Pengurus OSIS SMA N 5",      rating:5, text:"Pesan jaket 50 pcs, Alveen sangat profesional dan responsif. Hasilnya melampaui ekspektasi. Tim kami sangat puas!", avatar:"BP", city:"Solo" },
  { id:4, name:"Nita Fitriani",  role:"Owner Distro Bandung",       rating:4, text:"Admin responsif, proses desain mudah. Hoodie-nya nyaman banget, kualitas premium. Pasti akan order lagi bulan depan!", avatar:"NF", city:"Bandung" },
  { id:5, name:"Rudi Hermawan",  role:"Ketua Karang Taruna RT 05",  rating:5, text:"Jersey turnamen RT kami tampak keren banget! Banyak yang nanya beli di mana. Alveen Clothing selalu jadi pilihan!", avatar:"RH", city:"Surabaya" },
  { id:6, name:"Sari Indah",     role:"Event Organizer",            rating:5, text:"Pesan seragam event 200 pcs dalam 10 hari kerja, semua selesai tepat waktu dengan kualitas konsisten. Amazing service!", avatar:"SI", city:"Jakarta" },
];

// ─────────────────────────────────────────────
// UTILITIES
// ─────────────────────────────────────────────
window.formatRupiah = (n) => new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',minimumFractionDigits:0}).format(n);

window.Toast = (() => {
  let container;
  function getContainer() {
    if (!container) {
      container = document.createElement('div');
      container.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:9998;display:flex;flex-direction:column;gap:10px;pointer-events:none;';
      document.body.appendChild(container);
    }
    return container;
  }
  return {
    show(title, msg, type='info', dur=4000) {
      const c = getContainer();
      const colors = { success:'#22c55e', error:'#ef4444', info:'#2563eb', warning:'#f59e0b' };
      const icons  = { success:'✅', error:'❌', info:'ℹ️', warning:'⚠️' };
      const t = document.createElement('div');
      t.style.cssText = `min-width:300px;max-width:360px;background:var(--bg-card,#fff);border:1px solid var(--border,#e2e8f0);border-radius:14px;padding:14px 18px;box-shadow:0 8px 32px rgba(0,0,0,.15);display:flex;gap:12px;align-items:flex-start;pointer-events:all;animation:slideInR .4s cubic-bezier(.4,0,.2,1) both;position:relative;overflow:hidden;`;
      t.innerHTML = `
        <div style="font-size:1.2rem;flex-shrink:0;margin-top:2px;">${icons[type]}</div>
        <div style="flex:1;">
          <div style="font-weight:700;font-size:.9rem;color:var(--text-primary,#0f172a);margin-bottom:2px;">${title}</div>
          <div style="font-size:.82rem;color:var(--text-secondary,#475569);">${msg}</div>
        </div>
        <button onclick="this.closest('div[style]').remove()" style="background:none;border:none;cursor:pointer;color:#94a3b8;font-size:.9rem;padding:0;flex-shrink:0;">✕</button>
        <div style="position:absolute;bottom:0;left:0;height:3px;background:${colors[type]};border-radius:0 0 14px 14px;animation:toastBar ${dur}ms linear forwards;"></div>
      `;
      c.appendChild(t);
      setTimeout(() => { t.style.opacity='0'; t.style.transform='translateX(100%)'; t.style.transition='.3s'; setTimeout(()=>t.remove(),300); }, dur);
    }
  };
})();

// ─────────────────────────────────────────────
// CLICK SOUND (Web Audio API)
// ─────────────────────────────────────────────
window.ClickSound = (() => {
  let ctx;
  function init() {
    if (ctx) return;
    ctx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return {
    play() {
      try {
        init();
        if (ctx.state === 'suspended') ctx.resume();
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.frequency.setValueAtTime(900, ctx.currentTime);
        o.frequency.exponentialRampToValueAtTime(500, ctx.currentTime + .06);
        g.gain.setValueAtTime(.08, ctx.currentTime);
        g.gain.exponentialRampToValueAtTime(.001, ctx.currentTime + .06);
        o.start(); o.stop(ctx.currentTime + .06);
      } catch(e) {}
    }
  };
})();
