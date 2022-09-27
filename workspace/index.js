// Welcome to my javascript code :)
/*
var a = 1

var b = 100

var c = 10


var biggest_number = (a > b) ? a:b;

//do {
  //  console.log(a);
    //a+=1;
//} while (a<10);
//console.log("hi")

function handleButtonClick() {
    console.log('Ouch!!!');
    var worked = false;
    let theText = myInputBox.value;
    //try {
    //    var num = Number(theText);
    //    console.log('checkpoint');
     //   console.log(num);
    //    worked = true;
    //    countLoop(num);
    //}
    //finally {
     //   if (worked === false) {
     //       console.log("Unacceptable input. Value must be an INT!");
    //    }
    //}
    console.log(theText);
    countLoop(theText, theText)
}

function countLoop(range, texts)

{
    range++
    for(i = 0; i < range; i++ )
    {
        console.log(i)
        if (i === 50)
        {
            console.log("We have reached 50")
            break
        }
    }
    var part1 = "All numbers between 0 and ";
    var part2 = " have been output in the console!";
    
    message = part1.concat(texts, part2);
    alert(message);

}
//countLoop(10)
let buttonElement = document.getElementById('myButton')
//buttonElement.addEventListener('click', handleButtonClick);

let myParagraph = document.getElementById("demo")
setInterval(function () 
{
    var today = new Date();
    myParagraph.textContent = today.toTimeString()
},1000 );


var player1 = {
    name: "Lucy",
    age: 16,
    favorite_colour: "blue",
};


var main_paragraph = document.getElementById("main_paragraph")

var new_paragraph = document.createElement("h2");
new_paragraph.innerHTML = "Hello!";

main_paragraph.appendChild(new_paragraph);
*/

window.onscroll = function () {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if(window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}


