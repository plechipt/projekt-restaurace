function toggleMenu() {
  const x = document.getElementById("menu-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Show submenu in hamburger link
const links = document.querySelectorAll(".submenu-link");
links.forEach((link) => {
  link.addEventListener("click", (handleClick) => {
    const submenu = link.querySelector("div");

    if (submenu.className === "hidden-menu-submenu") {
      submenu.className = "shown-menu-submenu";
    } else {
      submenu.className = "hidden-menu-submenu";
    }
  });
});
