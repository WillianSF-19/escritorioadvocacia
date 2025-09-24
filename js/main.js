const NUMERO_WHATSAPP = "5599999999999";
const MENSAGEM_PADRAO = "Olá, gostaria de uma orientação em Direito de Família.";



const criarLinkWhatsApp = (texto) =>
  `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`;



const configurarWhatsApp = (elemento, texto) => {
  elemento.setAttribute("href", criarLinkWhatsApp(texto));
  elemento.setAttribute("target", "_blank");
  elemento.setAttribute("rel", "noopener noreferrer");
};



document.addEventListener("DOMContentLoaded", () => {
  const elementoAno = document.getElementById("year");
  if (elementoAno) elementoAno.textContent = new Date().getFullYear();



  const menuPrincipal = document.getElementById("primaryMenu");
  const botaoMenu = document.querySelector(".nav-toggle");
  if (menuPrincipal && botaoMenu) {
    botaoMenu.addEventListener("click", () => {
      const menuAtivo = menuPrincipal.classList.toggle("is-open");
      botaoMenu.setAttribute("aria-expanded", menuAtivo ? "true" : "false");
    });



    menuPrincipal.querySelectorAll("a").forEach((ancora) => {
      ancora.addEventListener("click", () => {
        if (menuPrincipal.classList.contains("is-open")) {
          menuPrincipal.classList.remove("is-open");
          botaoMenu.setAttribute("aria-expanded", "false");
        }
      });
    });
  }



  const idsCtas = ["ctaHeader", "ctaHero", "ctaSobre", "ctaProcesso", "ctaFooter", "wppFloatBtn"];
  idsCtas.forEach((id) => {
    const elemento = document.getElementById(id);
    if (elemento) configurarWhatsApp(elemento, MENSAGEM_PADRAO);
  });



  document.querySelectorAll("[data-service]").forEach((botao) => {
    const servico = botao.getAttribute("data-service");
    if (!servico) return;
    const mensagem = `Olá! Tenho interesse em ${servico}. Pode me orientar?`;
    configurarWhatsApp(botao, mensagem);
  });

  
  
  document.querySelectorAll('a[href^="#"]').forEach((ancora) => {
    ancora.addEventListener("click", (evento) => {
      const destinoId = ancora.getAttribute("href");
      if (!destinoId || destinoId.length === 1) return;
      const destino = document.querySelector(destinoId);
      if (!destino) return;
      evento.preventDefault();
      const deslocamento = destino.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: deslocamento, behavior: "smooth" });
      if (menuPrincipal?.classList.contains("is-open")) {
        menuPrincipal.classList.remove("is-open");
        botaoMenu?.setAttribute("aria-expanded", "false");
      }
    });
  });
});
