const menuBtn = document.getElementById("menu-btn");
const menuList = document.getElementById("menu-list");
const tabs = document.querySelectorAll(".services__link");

function getSmoothScrolling() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
}

function getMenu() {
  menuBtn.addEventListener("click", () => {
    menuList.classList.toggle("opened");
  })
}

getSmoothScrolling();
getMenu();