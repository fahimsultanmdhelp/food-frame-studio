/* ===== EDIT HERE: your links ===== */
const FIVERR_URL = "https://www.fiverr.com/mdfahimsulta";
const INSTAGRAM_USERNAME = "md_fahimsultan_food_frame_stu";
const INSTAGRAM_URL = "https://www.instagram.com/md_fahimsultan_food_frame_stu/";
const PINTEREST_URL = "https://www.pinterest.com/foodframestudio0361/";
const EMAIL = "fahimsultanmd.help@gmail.com";

/* ===== EDIT HERE: services ===== */
const SERVICES = [
  {t:"Food Advertisement Design", p:["Burger, pizza, chicken and other food ads","Food photos, prices and promotional text","Restaurant advertising posters"]},
  {t:"Instagram Post Design", p:["Square Instagram food posts","Restaurant promotional posts","Simple social media graphics"]},
  {t:"Restaurant Menu Design", p:["Simple restaurant menus","Food names, prices and your images","Clean, readable layouts"]},
  {t:"Food Offer Banner", p:["Discount banners","Special food offers and combo meals","Buy 1 Get 1 promotional graphics"]},
  {t:"Flyer Design", p:["Restaurant promotional flyers","Food business advertising flyers","Simple flyers for small businesses"]},
  {t:"Logo Design", p:["Simple, clean logos for food businesses","Logo and brand colors for restaurants and cafes","Profile pictures for Instagram and Facebook"]}
];

/* ===== EDIT HERE: portfolio. To use your own design, upload the image to GitHub and set img to its file name (e.g. "burger.jpg"). It replaces the drawn image. ===== */
const PORTFOLIO = [
  {t:"Logo Design: Food Frame Studio", img:"1000019222.png"},
  {t:"Burger Advertisement", img:"1_20261019_012052_0000.png"},
  {t:"Pizza Food Promotion", img:"2_20261019_012052_0002.png"},
  {t:"Taco Food Advertisement", img:"3_20261019_012052_0001.png"},
  {t:"Menu Card: Classic Virgin Mojito", img:"01_Classic_Virgin_Mojito.png"},
  {t:"Menu Card: Green Apple Mojito", img:"02_Green_Apple_Mojito.png"},
  {t:"Menu Card: Blue Lagoon Mojito", img:"03_Blue_Lagoon_Mojito.png"},
  {t:"Menu Card: Blueberry Lemonade", img:"04_Blueberry_Lemonade.png"},
  {t:"Menu Card: Green Apple Lemonade", img:"05_Green_Apple_Lemonade.png"},
  {t:"Menu Card: Chocolate Smoothie", img:"06_Chocolate_Smoothie.png"},
  {t:"Menu Card: Oreo Smoothie", img:"07_Oreo_Smoothie.png"},
  {t:"Menu Card: Blue Velvet Smoothie", img:"08_Blue_Velvet_Smoothie.png"}
];


/* ===== Created images (drawn in code, no files needed). Replace later by adding your own image file in "img". ===== */
const A=(bg,body,label,fg="#F7F0E3")=>`<svg viewBox="0 0 400 300" role="img" aria-label="${label}"><rect width="400" height="300" fill="${bg}"/>${body}<text x="200" y="278" text-anchor="middle" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="24" fill="${fg}">${label}</text></svg>`;
const ART={
 burger:A("#262320",'<path d="M90 140a110 72 0 0 1 220 0z" fill="#E0A04A"/><rect x="80" y="144" width="240" height="16" rx="8" fill="#5aa338"/><rect x="90" y="160" width="220" height="32" rx="14" fill="#6b3a1f"/><rect x="80" y="190" width="240" height="14" rx="7" fill="#F2C230"/><path d="M90 206h220v8a26 26 0 0 1-26 26H116a26 26 0 0 1-26-26z" fill="#E0A04A"/><circle cx="150" cy="105" r="4" fill="#F7F0E3"/><circle cx="200" cy="90" r="4" fill="#F7F0E3"/><circle cx="250" cy="105" r="4" fill="#F7F0E3"/>',"BURGER DEAL"),
 pizza:A("#C8341E",'<circle cx="200" cy="130" r="105" fill="#E8A33C"/><circle cx="200" cy="130" r="88" fill="#F2C230"/><g fill="#B3261E"><circle cx="165" cy="100" r="16"/><circle cx="235" cy="105" r="16"/><circle cx="200" cy="150" r="16"/><circle cx="150" cy="160" r="14"/><circle cx="250" cy="165" r="14"/></g><g fill="#3f8f3a"><circle cx="205" cy="95" r="6"/><circle cx="170" cy="140" r="6"/><circle cx="240" cy="140" r="6"/></g>',"HOT PIZZA"),
 post:A("#F7F0E3",'<circle cx="200" cy="120" r="90" fill="#E8731A"/><circle cx="200" cy="120" r="62" fill="#262320"/><circle cx="200" cy="120" r="34" fill="#F7F0E3"/><rect x="30" y="30" width="60" height="10" rx="5" fill="#262320"/>',"TODAY'S SPECIAL","#262320"),
 menu:A("#262320",'<rect x="110" y="24" width="180" height="230" rx="10" fill="#F7F0E3"/><rect x="130" y="44" width="80" height="12" rx="6" fill="#E8731A"/><g fill="#262320"><rect x="130" y="80" width="100" height="8" rx="4"/><rect x="130" y="108" width="120" height="8" rx="4"/><rect x="130" y="136" width="90" height="8" rx="4"/><rect x="130" y="164" width="110" height="8" rx="4"/><rect x="130" y="192" width="100" height="8" rx="4"/></g><g fill="#E8731A"><rect x="252" y="80" width="20" height="8" rx="4"/><rect x="252" y="108" width="20" height="8" rx="4"/><rect x="252" y="136" width="20" height="8" rx="4"/><rect x="252" y="164" width="20" height="8" rx="4"/><rect x="252" y="192" width="20" height="8" rx="4"/></g>',"MENU"),
 banner:A("#E8731A",'<text x="200" y="110" text-anchor="middle" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="64" fill="#262320">BUY 1</text><text x="200" y="185" text-anchor="middle" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="64" fill="#F7F0E3">GET 1</text><rect x="120" y="205" width="160" height="10" rx="5" fill="#262320"/>',"FOOD OFFER","#262320"),
 flyer:A("#262320",'<rect x="0" y="0" width="400" height="70" fill="#E8731A"/><text x="200" y="48" text-anchor="middle" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="34" fill="#262320">NOW OPEN</text><circle cx="200" cy="150" r="60" fill="#F7F0E3"/><circle cx="200" cy="150" r="38" fill="#C8341E"/><circle cx="200" cy="150" r="14" fill="#F2C230"/>',"RESTAURANT FLYER")
};
const LOGO='<svg viewBox="0 0 48 48" width="34" height="34" role="img" aria-label="Food Frame Studio logo"><rect x="3" y="3" width="42" height="42" rx="6" fill="none" stroke="#E8731A" stroke-width="4"/><circle cx="24" cy="24" r="12" fill="#F7F0E3"/><circle cx="24" cy="24" r="6" fill="#E8731A"/></svg>';
document.querySelectorAll(".logo").forEach(e=>e.innerHTML=LOGO);

const $ = s => document.querySelector(s);
const isSet = v => v && !v.startsWith("[");

$("#serviceList").innerHTML = SERVICES.map(s =>
  `<article class="svc"><h3>${s.t}</h3><ul>${s.p.map(x=>`<li>${x}</li>`).join("")}</ul></article>`).join("");

$("#gallery").innerHTML = PORTFOLIO.map(p =>
  `<article class="card"><div class="pic"><img src="${p.img}" alt="${p.t}" loading="lazy"></div><h3>${p.t}</h3><p>Sample Design — Practice Project</p></article>`).join("");

function toast(msg){
  const t = $("#toast"); t.textContent = msg; t.classList.add("show");
  clearTimeout(toast.id); toast.id = setTimeout(()=>t.classList.remove("show"), 4500);
}

document.querySelectorAll("[data-link]").forEach(a => {
  const which = a.dataset.link;
  const url = which === "fiverr" ? FIVERR_URL : INSTAGRAM_URL;
  if (isSet(url)) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
  else a.addEventListener("click", e => {
    e.preventDefault();
    toast("Add your real " + (which === "fiverr" ? "Fiverr" : "Instagram") + " link in script.js first.");
  });
});

$("#form").addEventListener("submit", e => {
  e.preventDefault();
  const f = e.target, msg = $("#formMsg");
  let ok = true;
  ["name","email","details"].forEach(id => {
    const el = f[id], bad = !el.value.trim() || (id === "email" && !el.checkValidity());
    el.classList.toggle("bad", bad); if (bad) ok = false;
  });
  if (!ok) { msg.className = "err"; msg.textContent = "Please fill in your name, a valid email, and project details."; return; }
  const body = `Name: ${f.name.value}\nEmail: ${f.email.value}\n\n${f.details.value}`;
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent("Project enquiry from " + f.name.value)}&body=${encodeURIComponent(body)}`;
  msg.className = "ok";
  msg.textContent = "Your email app should open now. Press Send there. Nothing has been sent yet.";
});

document.querySelectorAll(".buttons").forEach(b=>{const a=document.createElement("a");a.className="btn";a.textContent="Pinterest";a.href=PINTEREST_URL;a.target="_blank";a.rel="noopener";b.appendChild(a);});

{const h=document.querySelector("#services h2");if(h)h.textContent="My services";}
