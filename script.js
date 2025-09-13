window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("bod").classList.add("bod");
});
let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    } else {
      entry.target.classList.remove("visible");
    }
  });
});
document.querySelectorAll(".fade").forEach((el) => observer.observe(el));
function clickon() {
  let btnmobon = document.getElementById("btn-mob");
  let moblinks = document.getElementById("mob-links");
  let btnmoboff = document.getElementById("btn-mob-off");
  moblinks.style.display = "flex";
  btnmobon.style.display = "none";
  btnmoboff.style.display = "inline-block";
}
function clickoff() {
  let btnmoboff = document.getElementById("btn-mob-off");
  let moblinks = document.getElementById("mob-links");
  let btnmobon = document.getElementById("btn-mob");
  moblinks.style.display = "none";
  btnmoboff.style.display = "none";
  btnmobon.style.display = "inline-block";
}
