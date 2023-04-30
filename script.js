const toggleMenu = () => {
  const x = document.getElementById("menu-links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

const showOrHideDropdownMenu = () => {
  const arrow = document.querySelector(".dropdown-menu span");
  const aside = document.querySelector("#content aside");

  if (aside.style.display === "none" || aside.style.display === "") {
    aside.style.display = "block";
    arrow.className = "icon-down-arrow-big";
  } else {
    aside.style.display = "none";
    arrow.className = "icon-up-arrow";
  }
};

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

// Change favicon depending on theme bode
const darkThemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
const favicon = document.querySelector('link[rel="icon"]');

const faviconDarkPath = "./assets/logos/favicon.ico";
const favionLightPath = "./assets/logos/favicon-light.ico";

// If the browser is currently in dark mode, change the favicon to the dark version
if (darkThemeMediaQuery.matches) {
  favicon.href = favionLightPath;
} else {
  // Otherwise, change the favicon to the light version
  favicon.href = faviconDarkPath;
}

// Listen for changes to the theme mode of the browser
darkThemeMediaQuery.addEventListener("change", (event) => {
  if (event.matches) {
    favicon.href = favionLightPath;
  } else {
    favicon.href = faviconDarkPath;
  }
});
