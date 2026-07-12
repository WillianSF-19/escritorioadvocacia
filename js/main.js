(() => {
  "use strict";

  const WHATSAPP = Object.freeze({
    numero: "5599999999999",
    mensagemPadrao: "Olá, gostaria de uma orientação em Direito de Família."
  });

  const criarLinkWhatsApp = (mensagem) =>
    `https://wa.me/${WHATSAPP.numero}?text=${encodeURIComponent(mensagem)}`;

  const configurarLinkWhatsApp = (elemento, mensagem) => {
    elemento.href = criarLinkWhatsApp(mensagem);
    elemento.target = "_blank";
    elemento.rel = "noopener noreferrer";
  };

  const configurarWhatsApp = () => {
    const idsCtas = [
      "ctaHeader",
      "ctaHero",
      "ctaSobre",
      "ctaProcesso",
      "ctaFooter",
      "wppFloatBtn"
    ];

    idsCtas.forEach((id) => {
      const elemento = document.getElementById(id);
      if (elemento) configurarLinkWhatsApp(elemento, WHATSAPP.mensagemPadrao);
    });

    document.querySelectorAll("[data-service]").forEach((elemento) => {
      const servico = elemento.dataset.service;
      if (!servico) return;

      configurarLinkWhatsApp(
        elemento,
        `Olá! Tenho interesse em ${servico}. Pode me orientar?`
      );
    });
  };

  const configurarMenuMovel = () => {
    const menu = document.getElementById("primaryMenu");
    const botao = document.querySelector(".nav-toggle");
    const mediaMenuMovel = window.matchMedia("(max-width: 760px)");

    if (!menu || !botao) return;

    const atualizarEstado = (aberto) => {
      menu.classList.toggle("is-open", aberto);
      botao.setAttribute("aria-expanded", String(aberto));
      botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    };

    const fecharMenu = ({ devolverFoco = false } = {}) => {
      atualizarEstado(false);
      if (devolverFoco) botao.focus();
    };

    botao.addEventListener("click", () => {
      atualizarEstado(!menu.classList.contains("is-open"));
    });

    menu.addEventListener("click", (evento) => {
      if (evento.target.closest("a")) fecharMenu();
    });

    document.addEventListener("click", (evento) => {
      if (!menu.classList.contains("is-open")) return;
      if (menu.contains(evento.target) || botao.contains(evento.target)) return;
      fecharMenu();
    });

    document.addEventListener("keydown", (evento) => {
      if (evento.key === "Escape" && menu.classList.contains("is-open")) {
        fecharMenu({ devolverFoco: true });
      }
    });

    mediaMenuMovel.addEventListener("change", () => fecharMenu());
  };

  const configurarAno = () => {
    const elementoAno = document.getElementById("year");
    if (elementoAno) elementoAno.textContent = new Date().getFullYear();
  };

  const inicializar = () => {
    configurarWhatsApp();
    configurarMenuMovel();
    configurarAno();
  };

  document.addEventListener("DOMContentLoaded", inicializar);
})();
