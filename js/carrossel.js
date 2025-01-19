// Função para inicializar o comportamento do carrossel
function initCarrossel(carrossel) {
  const scrollStep = 400; // Define a quantidade de deslocamento para o scroll da roda do mouse
  let isDragging = false;
  let touchStartX = 0;

  // Adicione o evento de "wheel" para navegação com a roda do mouse
  carrossel.addEventListener("wheel", (e) => {
    e.preventDefault();
    carrossel.scrollLeft += e.deltaY > 0 ? scrollStep : -scrollStep;
  });

  // Adicione o evento de "touchstart" para capturar o início do toque
  carrossel.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    isDragging = true;
  });

  // Adicione o evento de "touchmove" para realizar o arraste
  carrossel.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    const touchMoveX = e.touches[0].clientX;
    const touchDeltaX = touchStartX - touchMoveX;
    carrossel.scrollLeft += touchDeltaX;
    touchStartX = touchMoveX; // Atualiza para o próximo movimento
  });

  // Finalize o arraste com "touchend" e "touchcancel"
  ["touchend", "touchcancel"].forEach((event) =>
    carrossel.addEventListener(event, () => {
      isDragging = false;
    })
  );

  // Estilo de rolagem suave
  carrossel.style.scrollBehavior = "smooth";
}

// Inicialize os carrosséis
const carrossel1 = document.querySelector(".carrossel");
const carrossel2 = document.querySelector(".carrossel2");

initCarrossel(carrossel1);
initCarrossel(carrossel2);
