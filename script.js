function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  const catName = document.querySelector("#catName")
  console.log("catName" + catName)

  //Substituir a Imagem
  if (html.classList.contains("light")) {
    //se tiver lightMode, adicionar a imagem light
    img.setAttribute("src", "./assets/Pink-avatar.png")
    catName.textContent = "Pink"
  } else {
    //se tiver sem o lightMode, manter a imagem normal
    img.setAttribute("src", "./assets/Ninja-avatar.png")
    catName.textContent = "Ninja"
  }
}
