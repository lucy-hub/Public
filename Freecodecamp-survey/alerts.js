

function handleButtonClick() {
    var username = document.getElementById("name").value
    alert("Thank you for completing my survey, "+username+"!");
}
let buttonElement = document.getElementById('submit')
buttonElement.addEventListener('click', handleButtonClick);
