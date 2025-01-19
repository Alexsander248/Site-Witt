const navigation = document.querySelector(".navigation");
const header = document.querySelector(".header");

if (navigation) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      navigation.classList.add("scrolled");
    } else {
      navigation.classList.remove("scrolled");
    }
  });
} else {
  console.error("Elemento com a classe '.navigation' não foi encontrado.");
}

if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
} else {
  console.error("Elemento com a classe '.header' não foi encontrado.");
}
