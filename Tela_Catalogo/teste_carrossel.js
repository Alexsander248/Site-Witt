var carrossel = document.querySelector('.carrossel');
var kimetsu = document.getElementById("kimetsu");
var jujutsu = document.getElementById("jujutsu");
var chainsaw = document.getElementById("chainsaw");
var drStone = document.getElementById("dr_stone");
var blueLock = document.getElementById("blue_lock");
var strongExorcist = document.getElementById("strong_exorcist");
var vinlandSaga = document.getElementById("vinland_saga");
var bokuNoHero = document.getElementById("boku_no_hero");
var handyman = document.getElementById("handyman");
var graceGods = document.getElementById("grace_gods");
var home = document.querySelector(".home");
var titulo = document.getElementById("titulo");

carrossel.addEventListener("mouseover", ()=> {
    
    carrossel.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (e.deltaY < 0) {
          carrossel.scrollLeft -= 400;
        } else {
          carrossel.scrollLeft += 400;
        }
      });
      
})

// onmouseover jujutsu 

kimetsu.addEventListener("mouseover", () => {
  home.style.backgroundImage = "url('img/tanjiro gif.gif')"
  kimetsu.classList.add("scale-up-center")
  kimetsu.classList.remove("scale-down-center")
  titulo.innerHTML = "Kimetsu no Yaiba"
  kimetsu.style.zIndex = "1"

})

kimetsu.addEventListener("mouseout", () =>{
  kimetsu.classList.remove("scale-up-center")
  kimetsu.classList.add("scale-down-center")
  kimetsu.style.zIndex = "0"
})

jujutsu.addEventListener("mouseover", () => {
  home.style.backgroundImage = "url('img/jujutsu.gif')"
  titulo.innerHTML = "Jujutsu Kaisen"
  jujutsu.classList.add("scale-up-center")
  jujutsu.classList.remove("scale-down-center")
  jujutsu.style.zIndex = "1"
})

jujutsu.addEventListener("mouseout", () =>{
  
  jujutsu.classList.remove("scale-up-center")
  jujutsu.classList.add("scale-down-center")
  jujutsu.style.zIndex = "0"
})

chainsaw.addEventListener("mouseover", () => {
  home.style.backgroundImage = "url('img/chainsaw gif2.gif')"
  titulo.innerHTML = "Chainsaw Man"
  chainsaw.classList.add("scale-up-center")
  chainsaw.classList.remove("scale-down-center")
  chainsaw.style.zIndex = "1"
})

chainsaw.addEventListener("mouseout", () =>{
  
  chainsaw.classList.remove("scale-up-center")
  chainsaw.classList.add("scale-down-center")
  chainsaw.style.zIndex = "0"
})

drStone.addEventListener("mouseover", () => {
  home.style.backgroundImage = "url('img/drStone.gif')"
  titulo.innerHTML = "Dr. Stone"
  drStone.classList.add("scale-up-center")
  drStone.classList.remove("scale-down-center")
  drStone.style.zIndex = "1"
})

drStone.addEventListener("mouseout", () =>{
  drStone.classList.remove("scale-up-center")
  drStone.classList.add("scale-down-center")
  drStone.style.zIndex = "0"
})

blueLock.addEventListener("mouseover", () => {
  home.style.backgroundImage = "url('img/bluelock.gif')"
  titulo.innerHTML = "Blue Lock"
  blueLock.classList.add("scale-up-center")
  blueLock.classList.remove("scale-down-center")
  blueLock.style.zIndex = "1"
})

blueLock.addEventListener("mouseout", () =>{
  blueLock.classList.remove("scale-up-center")
  blueLock.classList.add("scale-down-center")
  blueLock.style.zIndex = "0"
})

strongExorcist.addEventListener("mouseover", () => {
  home.style.backgroundImage = "url('img/img25.jpe')"
  titulo.innerHTML = "Strong Exorcist in Another World"
  strongExorcist.classList.add("scale-up-center")
  strongExorcist.classList.remove("scale-down-center")
  strongExorcist.style.zIndex = "1"
})

strongExorcist.addEventListener("mouseout", () =>{
  strongExorcist.classList.remove("scale-up-center")
  strongExorcist.classList.add("scale-down-center")
  strongExorcist.style.zIndex = "0"
})

vinlandSaga.addEventListener("mouseover", () => {
  home.style.backgroundImage = "url('img/img26.jpe')"
  titulo.innerHTML = "Vinland Saga"
  vinlandSaga.classList.add("scale-up-center")
  vinlandSaga.classList.remove("scale-down-center")
  vinlandSaga.style.zIndex = "1"
})

vinlandSaga.addEventListener("mouseout", () =>{
  vinlandSaga.classList.remove("scale-up-center")
  vinlandSaga.classList.add("scale-down-center")
  vinlandSaga.style.zIndex = "0"
})

bokuNoHero.addEventListener("mouseover", () => {
  home.style.backgroundImage = "url('img/boku_no_hero.gif')"
  titulo.innerHTML = "Boku no Hero"
  bokuNoHero.classList.add("scale-up-center")
  bokuNoHero.classList.remove("scale-down-center")
  bokuNoHero.style.zIndex = "1"
})

bokuNoHero.addEventListener("mouseout", () =>{
  bokuNoHero.classList.remove("scale-up-center")
  bokuNoHero.classList.add("scale-down-center")
  bokuNoHero.style.zIndex = "0"
})

handyman.addEventListener("mouseover", () => {
  home.style.backgroundImage = "url('img/img24.jpe')"
  titulo.innerHTML = "Handyman Saitou in Another World"
  handyman.classList.add("scale-up-center")
  handyman.classList.remove("scale-down-center")
  handyman.style.zIndex = "1"
})

handyman.addEventListener("mouseout", () =>{
  handyman.classList.remove("scale-up-center")
  handyman.classList.add("scale-down-center")
  handyman.style.zIndex = "0"
})

graceGods.addEventListener("mouseover", () => {
  home.style.backgroundImage = "url('img/img28.jpe')"
  titulo.innerHTML = "Grace of the Gods"
  graceGods.classList.add("scale-up-center")
  graceGods.classList.remove("scale-down-center")
  graceGods.style.zIndex = "1"
})

graceGods.addEventListener("mouseout", () =>{
  graceGods.classList.remove("scale-up-center")
  graceGods.classList.add("scale-down-center")
  graceGods.style.zIndex = "0"
})


