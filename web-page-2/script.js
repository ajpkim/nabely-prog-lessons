function showInfo(flavor) {
  let flavors = document.getElementsByClassName("info")
  for (let i = 0; i < flavors.length; i++) {
    flavors[i].style.display = "none"
  }
  document.getElementById(flavor).style.display = "block"
}

document.getElementById("flavorSelect").addEventListener("change", function () {
  let selectedFlavor = this.value
  if (selectedFlavor) {
    showInfo(selectedFlavor)
  }
})
