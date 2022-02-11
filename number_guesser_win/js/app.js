let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // validation
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Нужно ввести число от ${min} до ${max}`, "red");
  }

  // check if won
  if (guess === winningNum) {
    /* guessInput.disabled = true;
    guessInput.style.border = "1px solid green";
    setMessage(`Поздравляю! Вы угадали число ${winningNum}`, "green"); */

    gameOver(true, `Поздравляю! Вы угадали число ${winningNum}`);
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // lost
      /*  guessInput.disabled = true;
      guessInput.style.border = "1px solid red";
      setMessage(`Вы проиграли! Правильный ответ ${winningNum}`, "red"); */

      gameOver(false, `Вы проиграли! Правильный ответ ${winningNum}`);
    } else {
      // continues

      guessInput.style.border = "1px solid red";

      guessInput.value = "";
      setMessage(`Неверно! У вас осталось ${guessesLeft} попыток`, "red");
    }
  }
});

// play again
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  guessInput.disabled = true;
  guessInput.style.border = `1px solid ${color}`;
  message.style.color = color;
  setMessage(msg);

  // play again
  guessBtn.textContent = "Начать заново";
  guessBtn.className += "play-again";
}

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
