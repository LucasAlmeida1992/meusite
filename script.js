document.addEventListener("DOMContentLoaded", () => {
  console.log("Página carregada. Interatividade ativa.");

  const btnOrcamento = document.getElementById("btnOrcamento");
  const maquinaverde = document.querySelector(".maquinaverde");
  const maquina = document.querySelector(".maquina");

  btnOrcamento?.addEventListener("click", (e) => {
      e.preventDefault(); // Evita redirecionamento imediato

      const isDesktop = window.innerWidth >= 768;
      const distance = isDesktop ? -200 : -50; // Ajuste menor para evitar deslocamento excessivo

      maquinaverde?.style.transform = `translateY(${distance}px)`;
      maquina?.style.transform = `translateY(${distance}px)`;

      setTimeout(() => {
          window.location.href = "https://wa.me/message/2KNB5DI35PDBH1";
      }, 500);
  });
});




