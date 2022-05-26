function toggleMenu() {
  const x = document.getElementById("menu-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

// Show submenu in hamburger link
const links = document.querySelectorAll(".icon-right-arrow");
console.log(links);
links.forEach((link) => {
  link.addEventListener("click", (handleClick) => {
    const submenu = link.parentElement.querySelector("div");

    if (submenu.className === "hidden-menu-submenu") {
      link.className = "icon-down-arrow";
      submenu.className = "shown-menu-submenu";
    } else {
      link.className = "icon-right-arrow";
      submenu.className = "hidden-menu-submenu";
    }
  });
});
