let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "yellow", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
const start = document.querySelector('#start');
const restart = document.querySelector('#restart');

start.addEventListener("click", function () {
  if (started === false) {
    userSeq = [];
    level = 0;
    // console.log("game is started");
    started = true;
    levelUp();
  }
});

function levelUp() {
  userSeq = [];
  level++;
  h2.innerHTML = `Level ${level}`;


  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`#${randColor}`);
  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randBtn);
  gameSeq.push(randColor);
  console.log('game', gameSeq);

  gameFlash(randBtn);
}

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 300);
}



function checkAns(idx) {
  //   console.log("curr level : ", level);
  // let idx = level - 1;

  if (userSeq[idx] === gameSeq[idx]) {
    console.log("same value");
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 200);
    }
  } else {
    h2.innerHTML = 'Game Over ! Press start button to agien play.';
    alert('game over 🤦‍♂️🤦‍♂️')
    reset();
  }
}


function btnPress() {
  // console.log(this);
  let btn = this;
  userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    console.log('user', userSeq);

  checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (const btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

restart.addEventListener('click', () => {
      reset();
  h2.innerHTML = `wait 3 sec to restart game `;

  setTimeout(() => {
    levelUp()
  }, 3000);
});