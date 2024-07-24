document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const appearanceToggle = document.querySelector(".appearance-toggle");

  function changeDisplayMode() {
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
    }
  }

  appearanceToggle.addEventListener("click", changeDisplayMode);
});
