
let inputField = document.querySelector("#email");
let submit = document.querySelector("#submit");
let errorIcon = document.querySelector(".error");
let errorMessage = document.querySelector(".error-message");
let arrow = document.querySelector(".arrow-right");


// submit.addEventListener('click',
//     function (event) {
//         if (inputField.value === "") {
//             event.preventDefault();
//             errorIcon.style.display = "inline";
//             errorMessage.style.display = "inline";
//             inputField.style.borderColor = "hsl(0, 87%, 60%)";
//         }
//     }
// );


document.forms[0].onsubmit = function (event) {
    if (inputField.value === "") {
        event.preventDefault();
        errorIcon.style.display = "inline";
        errorMessage.style.display = "block";
        inputField.style.borderColor = "red";
    }
}

arrow.onmouseenter = function () {
    submit.style.backgroundColor = "rgb(248, 215, 215)";
    submit.style.color = "hsl(0, 26 %, 55 %)";
}

arrow.onclick = function () {
    submit.click();
}