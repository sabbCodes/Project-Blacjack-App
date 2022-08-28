
let firstCard = 0;
let secondCard = 0;
let newCard = 0;
let randomChip = 0;
let cards = [];
let sum = 0;
let message = "";
let alive = false;
let gameOn = false;
let win = false;
let player = {
    name: window.prompt("Enter your name: "),
    chips: getRandomChip()
};
let captionEl = document.getElementById("caption");
let cardEl = document.getElementById("card-el");
let sumEl = document.getElementById("sum-el");
let playerData = document.getElementById("player-data");

let aceCard = document.getElementById("ace").style;
let twoCard = document.getElementById("two").style;
let threeCard = document.getElementById("three").style;
let fourCard = document.getElementById("four").style;
let fiveCard = document.getElementById("five").style;
let sixCard = document.getElementById("six").style;
let sevenCard = document.getElementById("seven").style;
let eightCard = document.getElementById("eight").style;
let nineCard = document.getElementById("nine").style;
let tenCard = document.getElementById("ten").style;
let jackCard = document.getElementById("jack").style;
let kingCard = document.getElementById("king").style;
let queenCard = document.getElementById("queen").style;

function getRandomNumber(){
    let randomNumber = Math.floor( Math.random() * 13) + 1;
    return randomNumber;
}

function getRandomChip(){
    randomChip = Math.floor( Math.random() * 1000);
    if (randomChip < 101){
        return 100;
    } else{
        return randomChip;
    }
}

function startGame(){
    gameOn = true;
    alive = true;
}

function renderGame(){

    cardEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++){
    cardEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if (sum < 21){
        message = "Would you like to draw a new card?";
    } else if (sum === 21){
        message = "Wohoo! You've got Blackjack!";
        win = true;
        confetti.start();
    } else {
        message = "You're out of the game!";
        alive = false;
    }
    captionEl.textContent = message;
}

function drawcard(){
    if (alive === true && gameOn === true){
    playerData.textContent = player.name + ": " + "$" + player.chips;

    firstCard = getRandomNumber();

    switch (firstCard){
        case 1:
         moveAceCard()
        break;
        case 2:
         moveTwoCard()
        break;
        case 3:
         moveThreeCard()
        break;
        case 4:
         moveFourCard()
        break;
        case 5:
         moveFiveCard()
        break;
        case 6:
         moveSixCard()
        break;
        case 7:
         moveSevenCard()
        break;
        case 8:
         moveEightCard()
        break;
        case 9:
         moveNineCard()
        break;
        case 10:
         moveTenCard()
        break;
        case 11:
         moveJackCard()
        break;
        case 12:
         moveKingCard()
        break;
        case 13:
         moveQueenCard()
        break;
    }

    secondCard = getRandomNumber();

    switch (secondCard){
        case 1:
         moveAceCard()
        break;
        case 2:
         moveTwoCard()
        break;
        case 3:
         moveThreeCard()
        break;
        case 4:
         moveFourCard()
        break;
        case 5:
         moveFiveCard()
        break;
        case 6:
         moveSixCard()
        break;
        case 7:
         moveSevenCard()
        break;
        case 8:
         moveEightCard()
        break;
        case 9:
         moveNineCard()
        break;
        case 10:
         moveTenCard()
        break;
        case 11:
         moveJackCard()
        break;
        case 12:
         moveKingCard()
        break;
        case 13:
         moveQueenCard()
        break;
    }

    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    renderGame();
    }
    gameOn = false;
}

function newcard(){
    gameOn = true
    if (alive === true && win === false  && gameOn === true){
        newCard = getRandomNumber();
        cards.push(newCard);
        sum += newCard;
        switch (newCard){
            case 1:
             moveAceCard()
            break;
            case 2:
             moveTwoCard()
            break;
            case 3:
             moveThreeCard()
            break;
            case 4:
             moveFourCard()
            break;
            case 5:
             moveFiveCard()
            break;
            case 6:
             moveSixCard()
            break;
            case 7:
             moveSevenCard()
            break;
            case 8:
             moveEightCard()
            break;
            case 9:
             moveNineCard()
            break;
            case 10:
             moveTenCard()
            break;
            case 11:
             moveJackCard()
            break;
            case 12:
             moveKingCard()
            break;
            case 13:
             moveQueenCard()
            break;
        }
    }
    renderGame();
}

function newgame(){
    window.location.reload();
}

function moveAceCard(){
    aceCard.top = -220 + "px";
    aceCard.left = 0 + "%";
}

function moveTwoCard(){
    twoCard.top = -220 + "px";
    twoCard.left =  7 + "%";
}

function moveThreeCard(){
    threeCard.top = -220 + "px";
    threeCard.left =  14 + "%";
}

function moveFourCard(){
    fourCard.top = -220 + "px";
    fourCard.left = 21 + "%";
}

function moveFiveCard(){
    fiveCard.top = -220 + "px";
    fiveCard.left = 28  + "%";
}

function moveSixCard(){
    sixCard.top = -220 + "px";
    sixCard.left = 35  + "%";
}

function moveSevenCard(){
    sevenCard.top = -220 + "px";
    sevenCard.left = 42  + "%";
}

function moveEightCard(){
    eightCard.top = -220 + "px";
    eightCard.left = 49  + "%";
}

function moveNineCard(){
    nineCard.top = -220 + "px";
    nineCard.left =  56 + "%";
}

function moveTenCard(){
    tenCard.top = -220 + "px";
    tenCard.left = 63  + "%";
}

function moveJackCard(){
    jackCard.top = -220 + "px";
    jackCard.left = 70  + "%";
}

function moveKingCard(){
    kingCard.top = -220 + "px";
    kingCard.left = 77  + "%";
}

function moveQueenCard(){
    queenCard.top = -220 + "px";
    queenCard.left = 84  + "%";
}

