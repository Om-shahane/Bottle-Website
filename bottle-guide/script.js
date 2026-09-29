/* ---------- Data ---------- */
const TYPES = {
  glass: {
    name: "Glass",
    color: "#8fd3d0",
    tagline: "The purest taste, with nothing added to your water.",
    pros: ["No plastic or metal taste", "Easy to see if it's clean", "Doesn't hold stains or smells", "Safe for hot drinks if borosilicate"],
    cons: ["Heavier than other types", "Can break if dropped", "Usually not insulated"],
    best: "Best for the office, home and anyone who cares most about taste.",
    ratings: { Weight: 2, Durability: 2, Taste: 5, Insulation: 1, Price: 3 },
    price: "Medium"
  },
  plastic: {
    name: "Plastic",
    color: "#6bb7e8",
    tagline: "Light, cheap and easy to replace.",
    pros: ["Lightest to carry", "Lowest price", "Won't shatter", "Many shapes and sizes"],
    cons: ["Can stain and keep odors", "Not for hot drinks", "Wears out sooner"],
    best: "Best for school, the gym and anyone who wants a low price. Choose BPA-free.",
    ratings: { Weight: 5, Durability: 3, Taste: 3, Insulation: 1, Price: 5 },
    price: "Low"
  },
  steel: {
    name: "Stainless steel",
    color: "#9aa9b5",
    tagline: "Tough, and the only one here that keeps drinks cold or hot for hours.",
    pros: ["Double-wall models keep drinks cold or hot", "Very durable", "Lasts for years", "Doesn't hold odors"],
    cons: ["Heavier than plastic", "Can dent", "Costs more", "Can't go in the microwave"],
    best: "Best for hiking, long days out and anyone who wants ice water that stays cold.",
    ratings: { Weight: 3, Durability: 5, Taste: 4, Insulation: 5, Price: 2 },
    price: "Higher"
  },
  rubber: {
    name: "Rubber",
    color: "#e8603c",
    tagline: "Soft, flexible food-grade silicone that folds away when empty.",
    pros: ["Collapses to save space", "Lightweight and unbreakable", "Grippy and comfortable", "Good for packing"],
    cons: ["Softer, so less stable when standing", "Can hold odors if not dried", "Not insulated"],
    best: "Best for travel, camping and runs where you want a bottle that packs small.",
    ratings: { Weight: 5, Durability: 4, Taste: 3, Insulation: 1, Price: 3 },
    price: "Medium"
  }
};
const TYPE_ORDER = ["glass", "plastic", "steel", "rubber"];

const PICKS = [
  { id: "glass-1", type: "glass", name: "Borosilicate glass bottle", price: "Medium", desc: "A clear glass bottle with a screw-on lid. Simple, clean and good on a desk.", points: ["Borosilicate handles hot and cold", "Easy to see when it needs a wash"] },
  { id: "glass-2", type: "glass", name: "Glass bottle with sleeve and wooden lid", price: "Medium", desc: "A glass bottle wrapped in a soft silicone sleeve, with a natural wood-look lid.", points: ["Sleeve adds grip and cushions drops", "Sleeve can be personalised"] },
  { id: "plastic-1", type: "plastic", name: "Slim plastic water bottles", price: "Low", desc: "Light, colourful bottles that fit in a bag pocket or fridge door.", points: ["Very light to carry", "Wide range of colours"] },
  { id: "plastic-2", type: "plastic", name: "Big motivational gym bottle", price: "Low", desc: "A large bottle with time markings on the side and a strap to carry it.", points: ["Time markers remind you to drink", "Shoulder strap and flip lid"] },
  { id: "steel-1", type: "steel", name: "Stainless steel bottle with carry loop", price: "Higher", desc: "A slim steel bottle with a screw-on lid and a loop for hanging or carrying.", points: ["Tough and dent-resistant", "Doesn't hold smells"] },
  { id: "steel-2", type: "steel", name: "Steel bottle with sports cap", price: "Higher", desc: "A tall steel bottle with a flip-up sports cap for drinking on the go.", points: ["Big capacity for long days", "Easy one-hand drinking"] },
  { id: "rubber-1", type: "rubber", name: "Collapsible silicone bottle", price: "Medium", desc: "Folds down to a fraction of its size once you've finished the water.", points: ["Clips to a bag with a carabiner", "Great for hikes and flights"] },
  { id: "rubber-2", type: "rubber", name: "Soft-touch rubber-finish bottle", price: "Medium", desc: "A slim bottle with a matte rubber-feel coating that is comfortable and grippy.", points: ["Non-slip matte finish", "Looks good on any desk"] }
];

const FAQ = [
  ["Which bottle is the healthiest?", "Glass and stainless steel are the most inert, so they add the least to your water. Plastic and silicone bottles are also fine when they are labelled food-grade or BPA-free."],
  ["Which bottle keeps water cold longest?", "A double-wall vacuum insulated stainless steel bottle. Glass, plastic and rubber bottles are usually not insulated."],
  ["Can I put hot drinks in any bottle?", "Only in bottles made for it. Borosilicate glass and insulated steel bottles can take hot drinks. Most plastic bottles cannot, so check the label."],
  ["How often should I replace my bottle?", "Replace it when it cracks, leaks, or has damage or smells that will not wash out. Steel and glass often last for years."],
  ["Are rubber bottles the same as silicone?", "On this site, rubber bottles means flexible food-grade silicone bottles. They are soft, foldable and easy to pack."]
];

/* ---------- Image with graceful fallback ---------- */
function bottleSVG(type) {
  const c = (TYPES[type] || { color: "#16a3b5" }).color;
  const shape = {
    glass: `<rect x="86" y="30" width="48" height="24" rx="6" fill="#dfeeee"/><path d="M92 54h36l12 34v112a12 12 0 0 1-12 12H92a12 12 0 0 1-12-12V88z" fill="${c}" fill-opacity=".45" stroke="${c}" stroke-width="3"/><path d="M92 120h36v80a6 6 0 0 1-6 6H98a6 6 0 0 1-6-6z" fill="${c}" fill-opacity=".7"/>`,
    plastic: `<rect x="88" y="26" width="44" height="26" rx="8" fill="#2a4a55"/><path d="M92 52h36l16 30v118a12 12 0 0 1-12 12H88a12 12 0 0 1-12-12V82z" fill="${c}" fill-opacity=".5" stroke="${c}" stroke-width="3"/><path d="M84 110h52M84 140h52M84 170h52" stroke="#fff" stroke-opacity=".6" stroke-width="3"/>`,
    steel: `<rect x="84" y="24" width="52" height="30" rx="8" fill="#2a4a55"/><rect x="72" y="56" width="76" height="152" rx="18" fill="${c}"/><rect x="82" y="66" width="10" height="132" rx="5" fill="#fff" fill-opacity=".45"/><rect x="72" y="176" width="76" height="32" rx="14" fill="#0b3c49" fill-opacity=".35"/>`,
    rubber: `<rect x="90" y="28" width="40" height="22" rx="8" fill="#2a4a55"/><path d="M92 50h36c12 16 24 34 24 58 0 26-10 40-10 64 0 22 6 32 6 40H72c0-8 6-18 6-40 0-24-10-38-10-64 0-24 12-42 24-58z" fill="${c}"/><path d="M76 118h68M74 148h72M76 178h68" stroke="#fff" stroke-opacity=".35" stroke-width="4"/>`
  }[type] || "";
  return `<svg viewBox="0 0 220 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${(TYPES[type] || {}).name || ""} bottle illustration"><rect width="220" height="240" fill="#e6f1f1"/><ellipse cx="110" cy="222" rx="52" ry="8" fill="#0b3c49" fill-opacity=".14"/>${shape}</svg>`;
}

function img(src, alt, type, cls = "") {
  return `<img src="${src}" alt="${alt}" loading="lazy" class="${cls}" data-type="${type}">`;
}

// If a photo file is missing, swap in an illustration so the layout never breaks.
document.addEventListener("error", function (e) {
  const el = e.target;
  if (!(el instanceof HTMLImageElement)) return;
  const type = el.dataset.type || el.dataset.fallback;
  const holder = el.parentElement;
  if (el.dataset.fallback === "hero") {
    holder.innerHTML = `<svg viewBox="0 0 440 480" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four bottles illustration"><defs><linearGradient id="hg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0b3c49"/><stop offset="1" stop-color="#16a3b5"/></linearGradient></defs><rect width="440" height="480" fill="url(#hg)"/>${TYPE_ORDER.map((t, i) => `<g transform="translate(${8 + i * 106} 90) scale(.5)">${bottleSVG(t).replace(/<svg[^>]*>|<\/svg>|<rect width="220" height="240"[^>]*\/>/g, "")}</g>`).join("")}</svg>`;
  } else if (type) {
    holder.innerHTML = bottleSVG(type);
  }
}, true);

/* ---------- Header nav ---------- */
const navToggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");
navToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open);
});
nav.addEventListener("click", (e) => { if (e.target.tagName === "A") { nav.classList.remove("open"); navToggle.setAttribute("aria-expanded", false); } });

/* ---------- Type tabs ---------- */
const tabsEl = document.getElementById("typeTabs");
const panelEl = document.getElementById("typePanel");

function showType(key) {
  const t = TYPES[key];
  tabsEl.querySelectorAll(".tab").forEach(b => b.setAttribute("aria-selected", b.dataset.key === key));
  panelEl.innerHTML = `
    <div class="type-img">${img(`images/${key}-1.jpg`, `A ${t.name.toLowerCase()} water bottle`, key)}</div>
    <div class="type-info">
      <h3>${t.name} bottles</h3>
      <p class="tagline">${t.tagline}</p>
      <div class="pc">
        <div class="pros"><h4>Good things</h4><ul>${t.pros.map(p => `<li>${p}</li>`).join("")}</ul></div>
        <div class="cons"><h4>Watch out for</h4><ul>${t.cons.map(p => `<li>${p}</li>`).join("")}</ul></div>
      </div>
      <p class="best">${t.best}</p>
    </div>`;
}
TYPE_ORDER.forEach(key => {
  const b = document.createElement("button");
  b.className = "tab"; b.role = "tab"; b.dataset.key = key; b.textContent = TYPES[key].name;
  b.addEventListener("click", () => showType(key));
  tabsEl.appendChild(b);
});
showType("glass");

/* ---------- Quiz recommender ---------- */
const SCORES = {
  use: {
    gym:    { plastic: 3, steel: 2, rubber: 2, glass: 0 },
    office: { glass: 3, steel: 2, plastic: 1, rubber: 0 },
    travel: { steel: 3, rubber: 3, plastic: 1, glass: 0 },
    school: { plastic: 3, steel: 2, rubber: 2, glass: 0 }
  },
  temp: {
    cold: { steel: 3, glass: 1, plastic: 1, rubber: 1 },
    hot:  { steel: 3, glass: 2, plastic: -3, rubber: -2 },
    room: { glass: 2, plastic: 2, rubber: 2, steel: 1 }
  },
  priority: {
    taste:  { glass: 4, steel: 2, plastic: 0, rubber: 0 },
    tough:  { steel: 4, rubber: 3, plastic: 2, glass: -1 },
    light:  { plastic: 4, rubber: 4, steel: 1, glass: 0 },
    budget: { plastic: 4, rubber: 2, glass: 2, steel: 0 }
  }
};
const REASONS = {
  glass: "It gives the cleanest taste and suits calm, everyday use.",
  plastic: "It is light, affordable and easy to replace.",
  steel: "It is tough and the best at keeping drinks cold or hot.",
  rubber: "It is soft, light and packs down small when you're done."
};

document.getElementById("quiz").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const answers = ["use", "temp", "priority"].map(n => form.elements[n].value);
  const err = document.getElementById("quizError");
  if (answers.some(a => !a)) { err.hidden = false; return; }
  err.hidden = true;

  const total = { glass: 0, plastic: 0, steel: 0, rubber: 0 };
  ["use", "temp", "priority"].forEach((n, i) => {
    Object.entries(SCORES[n][answers[i]]).forEach(([k, v]) => total[k] += v);
  });
  const ranked = Object.entries(total).sort((a, b) => b[1] - a[1]);
  const [best, second] = [ranked[0][0], ranked[1][0]];
  const t = TYPES[best];

  const result = document.getElementById("result");
  result.innerHTML = `
    <div class="type-img">${img(`images/${best}-1.jpg`, `${t.name} bottle`, best)}</div>
    <div>
      <h3>Your match: ${t.name}</h3>
      <p>${REASONS[best]} ${t.best}</p>
      <p class="runner">Also worth a look: ${TYPES[second].name.toLowerCase()}.</p>
      <p><a class="btn ghost" href="#picks" id="seePicks">See ${t.name.toLowerCase()} picks</a></p>
    </div>`;
  result.hidden = false;
  result.scrollIntoView({ behavior: "smooth", block: "nearest" });
  document.getElementById("seePicks").addEventListener("click", () => setFilter(best));
});

/* ---------- Picks grid + filters ---------- */
const filtersEl = document.getElementById("filters");
const gridEl = document.getElementById("picksGrid");
let currentFilter = "all";

function renderPicks() {
  const list = PICKS.filter(p => currentFilter === "all" || p.type === currentFilter);
  gridEl.innerHTML = list.map(p => `
    <article class="card">
      <div class="thumb">${img(`images/${p.id}.jpg`, `${p.name}`, p.type)}</div>
      <div class="body">
        <div class="meta"><span class="type-tag">${TYPES[p.type].name}</span><span class="price">${p.price} price</span></div>
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <ul>${p.points.map(x => `<li>${x}</li>`).join("")}</ul>
      </div>
    </article>`).join("");
}
function setFilter(key) {
  currentFilter = key;
  filtersEl.querySelectorAll(".chip").forEach(c => c.setAttribute("aria-pressed", c.dataset.key === key));
  renderPicks();
}
[["all", "All"], ...TYPE_ORDER.map(k => [k, TYPES[k].name])].forEach(([k, label]) => {
  const c = document.createElement("button");
  c.className = "chip"; c.dataset.key = k; c.textContent = label;
  c.setAttribute("aria-pressed", k === "all");
  c.addEventListener("click", () => setFilter(k));
  filtersEl.appendChild(c);
});
renderPicks();

/* ---------- Comparison table ---------- */
(function buildTable() {
  const rows = ["Weight", "Durability", "Taste", "Insulation", "Price"];
  const labels = { Weight: "Lightness", Durability: "Durability", Taste: "Pure taste", Insulation: "Keeps temperature", Price: "Low cost" };
  const stars = n => `<span class="stars" aria-label="${n} out of 5">${"★".repeat(n)}<span class="off">${"★".repeat(5 - n)}</span></span>`;
  const table = document.getElementById("compareTable");
  table.innerHTML = `
    <thead><tr><th scope="col">What you get</th>${TYPE_ORDER.map(k => `<th scope="col">${TYPES[k].name}</th>`).join("")}</tr></thead>
    <tbody>${rows.map(r => `<tr><th scope="row">${labels[r]}</th>${TYPE_ORDER.map(k => `<td>${stars(TYPES[k].ratings[r])}</td>`).join("")}</tr>`).join("")}
    <tr><th scope="row">Hot drinks</th><td>Yes, if borosilicate</td><td>Usually no</td><td>Yes</td><td>Check the label</td></tr></tbody>`;
})();

/* ---------- FAQ ---------- */
document.getElementById("faqList").innerHTML = FAQ.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join("");
