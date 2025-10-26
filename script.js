document.addEventListener("DOMContentLoaded", () => {
    // Menu mobile toggle
    const menuToggle = document.getElementById("menu-toggle")
    const mobileMenu = document.getElementById("mobile-menu")
  
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active")
        mobileMenu.classList.toggle("active")
  
        // Impedir rolagem do body quando o menu está aberto
        document.body.style.overflow = mobileMenu.classList.contains("active") ? "hidden" : ""
      })
  
      // Fechar o menu quando um link é clicado
      const mobileLinks = mobileMenu.querySelectorAll("a")
      mobileLinks.forEach((link) => {
        link.addEventListener("click", function () {
          menuToggle.classList.remove("active")
          mobileMenu.classList.remove("active")
          document.body.style.overflow = ""
  
          // Rolagem suave para a seção
          const targetId = this.getAttribute("href")
          const targetElement = document.querySelector(targetId)
  
          if (targetElement) {
            setTimeout(() => {
              window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: "smooth",
              })
            }, 300)
          }
  
          return false
        })
      })
    }
  
    // Smooth scrolling para links de navegação desktop
    const desktopLinks = document.querySelectorAll(".desktop-menu a, .footer-links a, .hero a")
  
    desktopLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        const targetElement = document.querySelector(targetId)
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: "smooth",
          })
        }
      })
    })
  
    // Formulário de contato
    const contactForm = document.querySelector(".contact-form form")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Aqui você adicionaria o código para enviar o formulário
        // Por exemplo, usando fetch para enviar para um backend
  
        alert("Obrigado pelo contato! Retornaremos em breve.")
        contactForm.reset()
      })
    }
  
    // Animação ao scroll para os cards de serviço
    const serviceCards = document.querySelectorAll(".service-card")
  
    function checkScroll() {
      serviceCards.forEach((card) => {
        const cardPosition = card.getBoundingClientRect().top
        const screenPosition = window.innerHeight / 1.3
  
        if (cardPosition < screenPosition) {
          card.style.opacity = "1"
          card.style.transform = "translateY(0)"
        }
      })
    }
  
    // Inicializar os cards com opacidade 0
    serviceCards.forEach((card) => {
      card.style.opacity = "0"
      card.style.transform = "translateY(20px)"
      card.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })
  
    // Verificar o scroll inicial e adicionar listener
    window.addEventListener("scroll", checkScroll)
    checkScroll()
  })  