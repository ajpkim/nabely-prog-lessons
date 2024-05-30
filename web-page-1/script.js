function showInfo(flavor) {
  let flavors = document.getElementsByClassName("info")
  for (const i = 0; i < flavors.length; i++) {
    flavors[i].style.display = "none"
  }
  document.getElementById(flavor).style.display = "block"
}
