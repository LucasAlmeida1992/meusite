document.addEventListener("DOMContentLoaded", () => {
  console.log("Página carregada. Você pode adicionar interatividade aqui.");

  const btnOrcamento = document.getElementById("btnOrcamento");
  const maquinaverde = document.querySelector(".maquinaverde");
  const maquina = document.querySelector(".maquina");

  btnOrcamento.addEventListener("click", (e) => {
    e.preventDefault(); // Evita redirecionamento imediato

    // Detecta se está em desktop ou mobile
    const isDesktop = window.innerWidth >= 768;

    // Define a distância de deslocamento
    const distance = isDesktop ? -800 : -110; // Ajuste na distância baseado no dispositivo

    // Aplica a animação de deslocamento nas imagens
    maquinaverde.style.transform = `translateY(${distance}px)`;
    maquina.style.transform = `translateY(${distance}px)`;

    // Aguarda 650ms antes de redirecionar
    setTimeout(() => {
      window.location.href = "https://wa.me/message/2KNB5DI35PDBH1"; // Corrigido para incluir "https://"
    }, 650); // Tempo ajustado para garantir uma animação fluida
  });
});




