function toggleMode() {
  const html = document.documentElement

  const img = document.querySelector("#profile img")
  const alte = document.querySelector("#profile img")

  html.classList.toggle("light")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png"),
      alte.setAttribute("alt", "Foto de Kaique de chapéu!")
  } else {
    img.setAttribute("src", "./assets/avatar.png"),
      alte.setAttribute("alt", "Foto de Kaique!")
  }
}
