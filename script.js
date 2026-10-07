const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav");
menu.addEventListener("click", () => nav.classList.toggle("open"));

document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const careerData = {
  technical: {
    title: "Solutions Engineer / Technical Support Engineer",
    match: "Strong match",
    text: "Your current experience maps naturally to technical support and solutions-oriented roles. Build depth in APIs, observability, SQL, cloud platforms and structured incident management."
  },
  customer: {
    title: "Technical Account Manager / Customer Success Engineer",
    match: "Very strong match",
    text: "Your combination of technical troubleshooting and customer-facing experience is a strong foundation. Strengthen stakeholder management, product strategy, adoption metrics and executive communication."
  },
  building: {
    title: "Backend / Full-stack Engineer",
    match: "Growth path",
    text: "Your development experience gives you a base to move toward engineering. A strong portfolio of 2–3 production-style projects, GitHub activity and deeper backend/cloud skills would make this path stronger."
  },
  ai: {
    title: "AI/ML Technical Specialist",
    match: "Interesting growth path",
    text: "Your AI background can become a differentiator when combined with your SaaS and customer experience. Consider LLM APIs, RAG, evaluation, AI observability and practical automation projects."
  }
};

const result = document.getElementById("career-result");
const buttons = document.querySelectorAll(".career-btn");

function renderCareer(key) {
  const item = careerData[key];
  result.innerHTML = `<h3>${item.title}</h3><p>${item.text}</p><span class="match">${item.match}</span>`;
}
renderCareer("technical");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCareer(btn.dataset.career);
  });
});

document.querySelectorAll(".placeholder-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    alert("Replace this placeholder with your real project, GitHub or demo URL.");
  });
});
