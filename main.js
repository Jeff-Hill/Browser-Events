// console.log("Hello")

// Mirror Mirror Exercise Begin
let firstArticle = document.querySelector("#first-article")
let secondArticle = document.querySelector("#second-article")

let inputEL = document.querySelector("#message")
inputEL.addEventListener("keyup", function (event) {
firstArticle.textContent = event.target.value;
secondArticle.innerHTML = event.target.value;
})
// Mirror Mirror Exercise End

