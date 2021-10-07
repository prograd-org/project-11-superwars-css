let score = [ ];
var turn;

//Team 1 details
var team1={
    name:"Spiderman",
    score:12
}
//Team 2 details
var team2={
    name:"Wonder Women",
    score:30
}

//Team 3 details
var team3={
    name:"Captain America",
    score:50
}

//Team 4 details
var team4={
    name:"Gem Women",
    score:12
}
window.onload = ()=>{
    selectTurn();
    updateNames();
    updateScore();
    calculate();
}

let selectTurn =()=>{
    turn = Math.round(Math.random())+1; 
}
let updateNames = () =>{
    document.getElementById("super-heros").textContent = team1.name;
    document.getElementById("super-villans").textContent = team2.name;
    document.getElementById("super-heros1").textContent = team3.name;
    document.getElementById("super-villans2").textContent = team4.name;
}
updateNames();
let updateScore =() =>{
    document.getElementById("team1").textContent=team1.score;
    document.getElementById("team2").textContent=team2.score;
    document.getElementById("team3").textContent=team3.score;
    document.getElementById("team4").textContent=team4.score;
    let a=(team1+team3)
        console.log(a);
    let b=(team2+team4)
        console.log(b);
}
updateScore();
let calculate =() =>{
    document.getElementById("team-1-score").textContent=a;
    document.getElementById("team-2-score").textContent=b;
}
calculate();