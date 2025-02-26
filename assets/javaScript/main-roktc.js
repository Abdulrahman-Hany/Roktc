// Sticky Header Functionality
const header = document.querySelector("header");
function checkStickyHeader() {
  header.classList.toggle("sticky", window.scrollY > 2);
}
window.addEventListener("scroll", checkStickyHeader);
window.addEventListener("load", checkStickyHeader);

//======= faq-question
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item, index) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    if (answer) {
      answer.style.maxHeight = index === 0 ? answer.scrollHeight + "px" : "0px";
      answer.style.overflow = "hidden";
      answer.style.transition = "max-height 0.3s ease-out";
      if (icon) icon.style.transform = index === 0 ? "rotate(180deg)" : "rotate(0deg)";

      question.addEventListener("click", function () {
        const isOpen = answer.style.maxHeight !== "0px";

        if (isOpen) {
          answer.style.maxHeight = "0px";
          if (icon) icon.style.transform = "rotate(0deg)";
        } else {
          answer.style.maxHeight = answer.scrollHeight + "px";
          if (icon) icon.style.transform = "rotate(180deg)";
        }
      });
    }
  });
});

function animateIfExists(selector, animationOptions) {
  const elements = document.querySelectorAll(selector);
  if (elements.length > 0) {
      gsap.from(elements, animationOptions);
  }
}

animateIfExists(".log-img", {
  opacity: 1,
  y: -90,
  delay: 0.5,
  duration: 0.5,
});

animateIfExists(".nav-links", {
  opacity: 0,
  y: -10,
  delay: 0.8,
  duration: 0.5,
  stagger: 0.3,
});

animateIfExists(".all-btn-mune", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
  stagger: 0.3,
});

animateIfExists(".system-label", {
  opacity: 0,
  y: 30,
  delay: 1.8,
  duration: 0.9,
  stagger: 0.3,
});

animateIfExists(".main-title", {
  opacity: 0,
  y: 30,
  delay: 2.2,
  duration: 0.5,
  stagger: 0.3,
});

animateIfExists(".image-container", {
  opacity: 0,
  y: 30,
  delay: 2.2,
  duration: 0.5,
  stagger: 0.3,
});

animateIfExists(".system-description", {
  opacity: 0,
  y: 30,
  delay: 2.3,
  duration: 0.5,
  stagger: 0.3,
});

animateIfExists(".description-wrapper", {
  opacity: 0,
  y: 30,
  delay: 2.3,
  duration: 0.5,
  stagger: 0.3,
});
animateIfExists(".titel-img-banner h2", {
  opacity: 0,
  y: 30,
  delay: 1.5,
  duration: 0.5,
  stagger: 0.3,
});

animateIfExists(".title-why-roktc", {
  opacity: 0,
  y: 30,
  delay: 2.5,
  duration: 0.5,
  stagger: 0.3,
});

animateIfExists([
  ".triangle-left-small",
  ".triangle-left-larg",
  ".triangle-right-small",
  ".triangle-right-larg",
  ".back-home-left"
], {
  opacity: 0,
  delay: 1.2,
  duration: 0.5,
  stagger: 0.3,
});

let buttonWhatsapp = document.querySelector(".why-roktc .whatsapp-icon");
window.addEventListener("scroll", () => {
    if(window.scrollY >= 50){
        buttonWhatsapp.style.bottom ="20px"
    }else {
        buttonWhatsapp.style.bottom ="-350px"
    }
});
const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});


scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Toggle Sidebar Menu
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.querySelector(".icon-mnue .bar-icon");
  const menuBtnClose = document.querySelector(".icon-mnue .close-bar-icon");
  const sidebar = document.querySelector(".sidebar");
  const menuItems = document.querySelectorAll(".sidebar ul li");

  menuBtn.addEventListener("click", function (event) {
    sidebar.style.display =
      sidebar.style.display === "block" ? "none" : "block";
    event.stopPropagation();
    menuBtn.style.display = "none";
    menuBtnClose.style.display = "block";
  });

  menuBtnClose.addEventListener("click", () => {
    sidebar.style.display = "none";
    menuBtn.style.display = "block";
    menuBtnClose.style.display = "none";
  });

  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && event.target !== menuBtn) {
      sidebar.style.display = "none";
      menuBtn.style.display = "block";
      menuBtnClose.style.display = "none";
    }
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      sidebar.style.display = "none";
      menuBtn.style.display = "block";
      menuBtnClose.style.display = "none";
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll('.nav-item');
    const contents = document.querySelectorAll('.content-wrapperr');

    const activeItem = document.querySelector('.nav-item.active');
    if (activeItem) {
        const targetId = activeItem.getAttribute('data-target');
        document.getElementById(targetId).style.display = 'flex';
    }

    navItems.forEach(item => {
        item.addEventListener('click', function () {
            if (this.classList.contains('active')) return;

            navItems.forEach(nav => nav.classList.remove('active'));

            contents.forEach(content => content.style.display = 'none');

            this.classList.add('active');

            const targetId = this.getAttribute('data-target');
            document.getElementById(targetId).style.display = 'flex';
        });
    });
});