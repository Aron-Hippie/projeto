function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //Substituir a Imagem
  if (html.classList.contains("light")) {
    //se tiver lightMode, adicionar a imagem light
    img.setAttribute("src", "./assets/Pink-avatar.png")
  } else {
    //se tiver sem o lightMode, manter a imagem normal
    img.setAttribute("src", "./assets/Ninja-avatar.png")
  }

  const CatName = document.querySelector("profile p")

  if (html.classList.contains("light")) {
    p.setAttribute("Pink")
  } else {
    p.setAttribute("Ninja")
  }
}
