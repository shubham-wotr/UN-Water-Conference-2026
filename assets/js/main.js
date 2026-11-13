// Speakers
const speakers = [
  {
    name: "Eshwer Kale", img: "Eshwer-Kale-Picsart-ImageFlipper.png",
    role: "Thematic Lead – Water Resources Development and Governance, WOTR Centre for Resilience Studies (W-CReS), India",
    topic: "Challenges and Opportunities in Strengthening O&M Systems for Rural Drinking Water Schemes under the Jal Jeevan Mission."
  },
  {
    name: "Manish Wasuja / Anand Ghodke", img: "Manish-Wasuja.png",
    role: "WASH Specialist, UNICEF India",
    topic: "WASH and Water Quality: Ensuring Safe and Reliable Drinking Water Services for Rural Households."
  },
  {
    name: "Anuj Sharma", img: "Anuj-Sharma.webp",
    role: "Chief Executive Officer, Arghyam, India",
    topic: "Achieving Universal and Reliable Drinking Water Services under the Jal Jeevan Mission: Challenges and Opportunities."
  },
  {
    name: "Sanjay Singh", img: "Sanjay-Singh-Picsart-ImageFlipper.png",
    role: "Secretary, Parmarth Samaj Sevi Sansthan, India",
    topic: "Community Institutions and Women’s Engagement for Sustainable Rural Drinking Water Services."
  },
  {
    name: "Harish Daware", img: "Harish-Daware.JPG",
    role: "Director, Watershed Organisation Trust (WOTR), India",
    topic: "Strengthening Drinking Water Sources for Reliable Supply and Long-Term Scheme Sustainability."
  },
  {
    name: "Priya Agarwal", img: "Priya-Agarwal.png",
    role: "Food Systems Consultant, India Climate Collaborative (ICC)",
    topic: "Climate Resilience and Sustainable Financing for Rural Drinking Water Systems."
  }
];
const esc = s => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");
document.getElementById("speaker-grid").innerHTML = speakers.map((s, i) => `
  <article class="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div class="flex flex-col sm:flex-row md:flex-row items-center sm:items-center gap-space-md text-center sm:text-left">
  <div class="w-24 h-24 sm:h-32 rounded-full sm:rounded-xl overflow-hidden bg-surface-container shrink-0 shadow-sm">
    <img src="assets/Images/${encodeURI(s.img)}" alt="${esc(s.name)}" class="w-full h-full object-cover object-top" loading="lazy">
  </div>
  <div class="flex flex-col">
    <span class="text-label-caps text-outline uppercase tracking-wider">Speaker ${i + 1}</span>
    <h3 class="text-title text-on-surface">${esc(s.name)}</h3>
    <p class="text-body-sm text-on-surface-variant mt-0.5">${esc(s.role)}</p>
  </div>
</div>
<div class="mt-space-md bg-surface-container-low p-space-sm rounded-lg">
  <span class="text-label-caps uppercase text-secondary block">Session Topic</span>
  <p class="text-body-sm text-on-surface mt-1">${esc(s.topic)}</p>
</div>
  </article>`).join("");

// Active section highlighting (top nav + bottom nav)
const links = document.querySelectorAll("[data-target]");
const sections = [...new Set([...links].map(l => l.dataset.target))].map(id => document.getElementById(id));
const setActive = id => links.forEach(l => {
  const on = l.dataset.target === id;
  l.classList.toggle("active", on);
  if (on) l.setAttribute("aria-current", "true"); else l.removeAttribute("aria-current");
});
const onScroll = () => {
  const y = window.scrollY + 120;
  let current = null;
  for (const s of sections) if (s.offsetTop <= y) current = s.id;
  setActive(current);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Registration form (client-side only for now — connect to a backend / form service before going live)
const form = document.getElementById("reg-form");
const errorEl = document.getElementById("form-error");
form.addEventListener("submit", e => {
  e.preventDefault();
  let ok = true;
  form.querySelectorAll("[required]").forEach(f => {
    const valid = f.type === "checkbox" ? f.checked : f.value.trim() !== "" && f.checkValidity();
    if (f.type !== "checkbox") f.classList.toggle("invalid", !valid);
    if (!valid) ok = false;
  });
  errorEl.classList.toggle("hidden", ok);
  if (!ok) { form.querySelector(".invalid, [required]:not(:checked)")?.focus(); return; }
  // TODO: send `new FormData(form)` to the registration endpoint.
  form.classList.add("hidden");
  const done = document.getElementById("form-success");
  done.classList.remove("hidden"); done.classList.add("flex");
});
form.querySelectorAll(".field").forEach(f => f.addEventListener("input", () => f.classList.remove("invalid")));
