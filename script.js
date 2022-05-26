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

// Close hamburger menu once user clicks on link
const menu = document.querySelector("#menu-links");
const submenuLinks = document.querySelectorAll(".hidden-menu-submenu p");

submenuLinks.forEach((submenuLink) => {
  submenuLink.addEventListener("click", (handleClick) => {
    menu.style.display = "none";
  });
});
