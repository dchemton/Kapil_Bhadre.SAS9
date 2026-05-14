// Loader
window.onload = () => {
  document.getElementById("loader").style.display = "none";
};

// Typing effect
const text = "Senior Data Analyst | SAS | Risk Analytics";
let i = 0;
function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,60);
  }
}
typing();

// Scroll animation
const faders = document.querySelectorAll('.fade');
window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add('show');
    }
  });
});

// Skill bars animation
const bars = document.querySelectorAll('[data-skill]');
window.addEventListener('scroll', ()=>{
  bars.forEach(bar=>{
    const val = bar.getAttribute('data-skill');
    bar.style.width = val + "%";
  });
});

// Dark Mode
document.getElementById("darkToggle").onclick = ()=>{
  document.body.classList.toggle("dark");
};