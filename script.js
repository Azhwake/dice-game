//write code here
let dice = Math.floor(Math.random() * 6) + 1. // random dice number from 1 - 6
let currentScore = 0 // u can enter what ever you want there !
let activePlayer = 0 //0 ==== player 1 will play  1=== player2 will play
let scores = [0,0]

const player1 = document.querySelector(".#player--0")
const player2 = document.querySelector(".#player--1")


function switchPlayer (){
      //currentScore = 0
      currentScore = 0;
      document.querySelector(`#current--${activePlayer}`).innerText = 0;
      //switch player
      if(activePlayer ===0){
          activePlayer=1
      }else{
          activePlayer =0
      }
      player1.classList.toggle("player--active")
      player2.classList.toggle("player--active")
     } //toggle is like on and off switches wht ever you want ..

//Roll
document.querySelector(".btn--roll").addEventListener("click",function(){
    //code
    let dice = Math.floor(Math.random() * 6) + 1 //randomm dice number from
    //2.change image to random dice number
    document.querySelector(".dice").src=`dice-${dice}.png`
    console.log(dice)
    //check if dice is 1
    if(dice ===1){
       switchPlayer()
    }else{
        //add dice value to current
        currentScore = currentScore  + dice 
        document.querySelector(`#currentt--${activePlayer}`).innerText = currentScore
    }
})

//hold
document.querySelector(".btn--hold").addEventListener("click",function(){
    //add current score to the score.
    scores[activePlayer] = scores[activePlayer] + currentScore
    document.querySelector(`#score--${activePlayer}`).innerText = scores[activePlayer]
    document.querySelector(`#current--${activePlayer}`).innerText = 0
    //2.check if player >100
    //winner 
    //switch user
    if(scores[activePlayer] >=10){
        document.querySelector(`name--${activePlayer}`).innerText ="Winner!!"
        document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
    }else{
        switchPlayer()
         }
         //add dice value to current
         currentScore = currentScore  + dice 
         document.querySelector(`#currentt--${activePlayer}`).innerText = currentScore
     }

    

)

//new
document.querySelector(".btn--new").addEventListener("click",function(){
    //code
    document.querySelector("#score--0").innerText = 0
    document.querySelector("#score--1").innerText =0
    player1.classList.remove("player--winner")
    player2.classList.remove("player--winner")
    document.querySelector("#name--0").innerText = "PLAYER 1"
    player1.classList.add("player--active")
    player2.classList.remove("player--active")


})






// let dice = Math.floor(Math.random() * 6) + 1; // random dice number from 1 - 6
// let currentScore = 0; // You can enter whatever you want here
// let activePlayer = 0; // 0 === player 1, 1 === player 2
// let scores = [0, 0];
// let gameActive = true; // To track if the game is active

// const player1 = document.querySelector("#player--0");
// const player2 = document.querySelector("#player--1");

// function switchPlayer() {
//     currentScore = 0;
//     document.querySelector(`#current--${activePlayer}`).innerText = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     player1.classList.toggle("player--active");
//     player2.classList.toggle("player--active");
// }

// // Roll Dice
// document.querySelector(".btn--roll").addEventListener("click", function () {
//     if (!gameActive) return; // Stop game if a player has won

//     // Roll the dice
//     let dice = Math.floor(Math.random() * 6) + 1;

//     // Change image to random dice number
//     document.querySelector(".dice").src = `dice-${dice}.png`;
//     console.log(dice);

//     // Check if dice is 1
//     if (dice === 1) {
//         switchPlayer();
//     } else {
//         // Add dice value to current score
//         currentScore += dice;
//         document.querySelector(`#current--${activePlayer}`).innerText = currentScore;
//     }
// });

// // Hold Score
// document.querySelector(".btn--hold").addEventListener("click", function () {
//     if (!gameActive) return; // Stop game if a player has won

//     // Add current score to total score of the active player
//     scores[activePlayer] += currentScore;
//     document.querySelector(`#score--${activePlayer}`).innerText = scores[activePlayer];
//     document.querySelector(`#current--${activePlayer}`).innerText = 0;

//     // Check if the player has won
//     if (scores[activePlayer] >= 100) {
//         document.querySelector(`#name--${activePlayer}`).innerText = "Winner!!";
//         document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
//         gameActive = false; // Stop the game
//     } else {
//         switchPlayer();
//     }
// });

// // New Game
// document.querySelector(".btn--new").addEventListener("click", function () {
//     // Reset all values
//     scores = [0, 0];
//     currentScore = 0;
//     activePlayer = 0;
//     gameActive = true; // Reactivate the game

//     document.querySelector("#score--0").innerText = 0;
//     document.querySelector("#score--1").innerText = 0;
//     document.querySelector("#current--0").innerText = 0;
//     document.querySelector("#current--1").innerText = 0;

//     player1.classList.remove("player--winner");
//     player2.classList.remove("player--winner");
//     document.querySelector("#name--0").innerText = "PLAYER 1";
//     document.querySelector("#name--1").innerText = "PLAYER 2";

//     // Set Player 1 as active and Player 2 as inactive
//     player1.classList.add("player--active");
//     player2.classList.remove("player--active");
// });
