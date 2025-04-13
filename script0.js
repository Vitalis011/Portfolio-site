document.addEventListener("DOMContentLoaded", function () {
  const menuCloseBtn = document.getElementById("menu-closeBtn");
  const menuOpenBtn = document.getElementById("menu-openBtn");
  const navbarMenu = document.querySelector(".nav-menu");
  const body = document.body;

  function handleResponsiveMenu() {
    if (window.innerWidth >= 900) {
      navbarMenu.style.left = "";
      body.classList.remove("show-mobile-menu");
    } else {
      navbarMenu.style.left = "-300px";
      body.classList.remove("show-mobile-menu");
    }
  }

  handleResponsiveMenu();

  if (menuOpenBtn && menuCloseBtn && navbarMenu) {
    menuOpenBtn.addEventListener("click", () => {
      navbarMenu.style.left = "0";
      body.classList.add("show-mobile-menu");
    });

    menuCloseBtn.addEventListener("click", () => {
      navbarMenu.style.left = "-300px";
      body.classList.remove("show-mobile-menu");
    });
  }
  window.addEventListener("resize", handleResponsiveMenu);
});

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form");
  const successMessage = document.getElementById("successMessage");

  if (contactForm && successMessage) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      successMessage.style.display = "block";

      setTimeout(() => {
        successMessage.style.display = "none";
        contactForm.reset();
      }, 3000);
    });
  }
});

const showMoreBtn = document.querySelector(".show-more");
const overlay = document.getElementById("showMoreOverlay");
const closeOverlayBtn = document.querySelector(".close-overlay-btn");
const body = document.body;

if (showMoreBtn && overlay && closeOverlayBtn) {
  showMoreBtn.addEventListener("click", () => {
    overlay.classList.add("active");
    body.classList.add("overlay-active");
  });

  closeOverlayBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
    body.classList.remove("overlay-active");
  });

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      overlay.classList.remove("active");
      body.classList.remove("overlay-active");
    }
  });
}

const backToTopBtn = document.getElementById("backToTopBtn");

function toggleBackToTopBtn() {
  if (window.scrollY > window.innerHeight) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
}

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", toggleBackToTopBtn);
window.addEventListener("load", toggleBackToTopBtn);
