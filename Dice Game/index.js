var randomNumber1 = Math.floor(Math.random()*6)+1;// random number from 0 to 1 (excluding 1, say 0.917) with Math.random()

var randomDice1 = "images/dice" + randomNumber1 +".png";//images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomDice1);



var randomNumber2 = Math.floor(Math.random()*6)+1;// random number from 0 to 1 (excluding 1, say 0.917) with Math.random()

var randomDice2 = "images/dice" + randomNumber2 +".png";//images/dice1.png to images/dice6.png

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDice2);

//if player 1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML ="🏆 player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "🏆 player 2 wins!";
}
else{
    document.querySelector("h1").innerHTML ="🎌Draw!";
}