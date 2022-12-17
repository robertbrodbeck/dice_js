var button = document.getElementById("roll-button");

function rollDice() {
    // Get Random Number 1-6 for both dice
    var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
    var randomNumber2 = (Math.floor(Math.random() * 6) + 1);

    // Set dice image to correct random number
    document.querySelector("img.img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
    document.querySelector("img.img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    // change h1 to display winner
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1.win-display").textContent = "🚩Player 1 Wins!";
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1.win-display").textContent = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1.win-display").textContent = "🤝 Draw! 🤝"
    }

}


// Event Listener to roll dice
button.addEventListener("click", rollDice);