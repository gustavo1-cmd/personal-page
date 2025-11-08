// Espera o carregamento completo da página
document.addEventListener("DOMContentLoaded", () => {
  // ----- Rolagem suave -----
  const menuLinks = document.querySelectorAll(".menu_superior a");

  menuLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault(); // evita o comportamento padrão
      const sectionID = link.getAttribute("href");

      // verifica se o link tem destino válido
      if (sectionID && sectionID.startsWith("#")) {
        document.querySelector(sectionID).scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

 
  const botoes = document.querySelectorAll(".botoes i");
  const links = {
    "fa-github": "https://github.com/gustavo1-cmd",
    "fa-instagram": "https://www.instagram.com/gusttax00?igsh=azFuYnBmNTF2Y3hp",
    "fa-linkedin": "https://www.linkedin.com/in/gustavo-deus-5a4843375?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  };

  botoes.forEach(botao => {
    botao.addEventListener("click", () => {
      for (const key in links) {
        if (botao.classList.contains(key)) {
          window.open(links[key], "_blank");
        }
      }
    });
  });


  });

  // ----- Pequeno efeito de brilho dinâmico -----
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.style.background = "rgba(20, 0, 40, 0.95)";
      header.style.boxShadow = "0 0 15px #6d00ff60";
    } else {
      header.style.background = "rgba(20, 0, 40, 0.8)";
      header.style.boxShadow = "none";
    }
  });
;
