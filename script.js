function showHideMenu() {
  if (document.getElementById("menu").className == "hide-menu") {
    document.getElementById("menu").className = "";
    document.getElementById("container").className = "menu-is-show";
  } else {
    document.getElementById("menu").className = "hide-menu";
    document.getElementById("container").className = "";
  }
}
