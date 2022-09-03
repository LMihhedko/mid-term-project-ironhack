window.addEventListener("load", function () {
  document.getElementById("menu").addEventListener("click", showHideNav);
  const btns = document.querySelectorAll(".header-button");
  for (const btn of btns) {
    btn.addEventListener("click", function () {
      location.href = "../contact.html";
    });
  }
});

function showHideNav() {
  const navMenu = document.querySelector("#navbar-menu");

  if (navMenu.style.display == "none") {
    navMenu.style.display = "flex";
  } else {
    navMenu.style.display = "none";
  }
}
