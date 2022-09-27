/*
function twoFor(name:string = "you"):string{
    let text = ("One for " + name + " one for me")
    return(text)
    
}
console.log(twoFor())
console.log(twoFor("Lucy"))

function isLeapyear(year:number): boolean{
    if (year%4 === 0){
        console.log("yay")
        

        if (year%10 !== 0){
            console.log("double yay")
            return true
        }
        else
        {
            return false
        }
    } else{
        if (year % 400 === 0){
            return true
        }
        else{
            return false
        }
        
    }
   
}

let answer = isLeapyear(2012)

console.log(answer)
*/
/* Objects:

function printName(person:{first:string, last:string}): void{
    console.log(person.first + person.last)
}
printName({first: "hello", last: "world"})


let coordinate:{x: number, y: number} = {x:34, y:2};

function randomCoordinate(): {x: number, y: number}{
    return {x: Math.random(), y: Math.random()};
}

printName({first:"Ziggy", last:"Smith", })


let coordinate:Point

function randomCoordinate(): {x: number, y: number}{
    return {x: Math.random(), y: Math.random()};
}


type Point = {
    x: number;
    y: number;

}
type MyNum = number;
let age: MyNum = 1222221;


type Song ={
    title:string;
    artist: string;
    numStreams: number;
    credits: {producer:string;writer:string};
}

function calculatePayout(song:Song):number{
    return song.numStreams * 0.0033
}
function printSong(song:Song){
    console.log(song.title + song.artist)
}


const mySong: Song ={
    title:"sgsgs",
    artist:"sgdg",
    numStreams:12441331,
    credits:{
        producer:"dff",
        writer:"sdgs"
    }
}
calculatePayout(mySong)
printSong(mySong)


type Point = {
    x: number;
    y: number;
    z?: number;
}

const myPoint: Point = {x:1,y:2,z:5}

type User ={
    readonly id: number;
    username: string;



}

const user: User = {
    id: 255252,
    username:"hi"
}

user.username = "hello"


type Circle = {
    radius:number;
};
type Colourful = {
    colour: string;
}

type ColourfulCircle = Circle & Colourful ;
const happyFace: ColourfulCircle ={
    radius:4,
    colour:"blue"
};

type Cat = {
    numLives: number
}
type Dog = {
    breed:string
}
type CatDog = Cat & Dog & {age:number}
const bob: CatDog = {
    numLives:4,
    breed:"cavapoochon",
    age:5
}
*/
// ARRAYS + 2 dimensional arrays
var activeUsers = [];
var ages = [44, 22, 13];
ages[0] = 99;
var bools = [];
var board = [
    ["X", "O", "O"],
    ["X", "O", "O"],
    ["X", "O", "O"]
];
