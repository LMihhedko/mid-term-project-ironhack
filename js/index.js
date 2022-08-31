window.onload = function () {
  //menu oculto
  let menu = false;

  //activar listener para menu hamburguesa
  document.getElementById("menu").addEventListener("click", showHideNav);

  //detectar cuando se redimensiona la pantalla
  window.onresize = hide;
};

function hide() {
  //ocultar el menu cuando la resolución sea superior a 820px
  if (window.innerWidth >= 576) {
    document.querySelector("navbar").style.left = "-160px";
    menu = false;
  }
}

function showHideNav() {
  //si el menu está oculto lo muestra
  if (menu == false) {
    document.querySelector("navbar").style.left = "0px";
    menu = true;
  } else {
    //si está visible lo oculta
    document.querySelector("navbar").style.left = "-160px";
    menu = false;
  }
}
