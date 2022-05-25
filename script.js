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
links.forEach(link => {
  link.addEventListener('click', handleClick => {
    const submenus = document.querySelectorAll(".hidden-menu-submenu")

    submenus.forEach(submenu => {
      console.log(submenu.style.display)
      if (submenu.style.display === "flex") {
        submenu.style.display = "none"
      }
      else {
        submenu.style.display = "flex"
      }
    })
  })
})
