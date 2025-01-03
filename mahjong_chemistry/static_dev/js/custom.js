document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButtons = document.querySelectorAll("[data-bs-theme-value]");
  const body = document.body;

  // Темы
  themeToggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const themeValue = button.getAttribute("data-bs-theme-value");
      body.setAttribute("data-bs-theme", themeValue);
      localStorage.setItem("theme", themeValue);
    });
  });

  const savedTheme = localStorage.getItem("theme") || "light";
  body.setAttribute("data-bs-theme", savedTheme);

  const logo = document.querySelector(".logo");
  const navMenu = document.querySelector("#main-nav");

  // Функциональность логотипа
  if (logo && navMenu) {
    logo.addEventListener("click", (event) => {
      if (!event.target.closest("a")) {
        // Если клик происходит НЕ по ссылке (логотип изображение/текст).
        event.preventDefault();

        if (navMenu.classList.contains("show")) {
          navMenu.classList.remove("show");
        } else {
          // Закрытие всех других меню
          document.querySelectorAll(".dropdown-menu.show").forEach(menu => menu.classList.remove("show"));
          navMenu.classList.add("show");
        }
      }
    });
  }

  // Закрытие меню при клике вне его
  document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !logo.contains(event.target)) {
      navMenu.classList.remove("show");
    }
  });
});
