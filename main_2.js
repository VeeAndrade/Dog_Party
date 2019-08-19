var changeDogName =
document.querySelector("#user-dog-name");

var button =
document.querySelector("#change-name-button");

var mainHeader =
document.querySelector("#main-header");

button.addEventListener('click', function (event) {
  event.preventDefault()
  mainHeader.innerText = `A site about ${changeDogName.value}`
})
