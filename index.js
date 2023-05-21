
var images=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
var p1Index=Math.floor((Math.random()*6));
var diceImage = images[p1Index];
var p2Index=Math.floor((Math.random()*6));
function diceroll(){

    document.querySelector(".img1").setAttribute("src",diceImage);
    
    diceImage = images[p2Index];
    
    document.querySelector(".img2").setAttribute("src",diceImage);
    // decision of winner

    if(p1Index>p2Index){
        document.querySelector(".container h1").textContent="Player 1 WON 🥳";
    }
    else if(p2Index>p1Index){
        document.querySelector(".container h1").textContent="Player 2 WON 🥳";
    }
    else 
    document.querySelector(".container h1").textContent=" tie , refresh once more";
}

window.addEventListener('load', diceroll);
