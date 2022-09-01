window.onload = function () {
  let menu = false;
  //activar listener para menu hamburguesa
  document.getElementById("menu").addEventListener("click", showHideNav);
  //detectar cuando se redimensiona la pantalla
  window.onresize = hide;
};

function hide() {
  //ocultar el menu cuando la resolución sea superior a 576px
  if (window.innerWidth >= 576) {
    document.querySelector("#navbar-links").style.display = "flex";
    menu = false;
  }
}

function showHideNav() {
  //si el menu está oculto lo muestra
  if (menu == false) {
    document.querySelector("#navbar-links").style.display = "none";
    menu = true;
  } else {
    //si está visible lo oculta
    document.querySelector("#navbar-links").style.display = "flex";
    menu = false;
  }
}
