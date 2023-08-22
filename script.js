const text =  [
    "Bom dia!!! <br>( ノ ^o^)ノ",
    "Hoje é seu aniversario né??? <br>(◐ω◑ )", 
    "Que boomm!!! <br>(〜^∇^)〜",
    `Feliz Aniversário! <br>🎉🎈🎂
    <br>Hoje é o dia mais brilhante do ano, porque é o seu aniversário! <br>🌟🎉 
    <br>Desde o momento em que você chegou a este mundo, ele se tornou um lugar mais doce e encantador <br>🌎🍭
    <br>Que seu dia seja repleto de sorrisos, abraços apertados e muitos desejos realizados <br>😁🐈
    <br>Você merece toda a alegria que o mundo pode oferecer! <br>🥳💖
    <br>Continue espalhando sua magia por onde passa, porque você faz o mundo ficar mais bonito com seu sorriso especial <br>🧙‍♂️😄
    <br>Feliz aniversário, querida! Que a felicidade esteja sempre ao seu lado. <br>🎂🎁🎈
    <br>Com carinho <br>😍
    <br>KAL <br>🤗❤️<br>`,
    "TENHA <br>UM <br>ÓTIMO <br>DIA!!! <br>❤️ (•́ ω •̀๑)"
];

var i = 0;
var textIndex = 0;
var tag = document.getElementById("text");
var html = document.getElementById("text").innerHTML;
var attr = tag.setAttribute("data", html);

var firstScreen = document.getElementById("first-screen");
var happyCat =  document.getElementById("happy-cat");
var txt = text[0];
var speed = 100;

var isClear = false

firstScreen.style.backgroundImage = "url('./assets/1.svg')"

async function typeWriter() {
  if (i <= txt.length) {
    isClear = false
    document.getElementById("text").innerHTML = txt.slice(0, i + 1);
    i++;
    tag.scrollTop = tag.scrollHeight
    setTimeout(typeWriter, speed);
  } else {
    isClear = true
  }
}

function changeText() {
  if (isClear) {
    textIndex++
    txt = text[textIndex]
    if (textIndex <= 2) {
      firstScreen.style.backgroundImage = "url('./assets/2.svg')"
    }
    if (textIndex === 3) {
      firstScreen.style.backgroundImage = "url('./assets/3.svg')"
    }
    if (textIndex === 4) {
      document.getElementById('button').style.display = 'none';
      document.getElementById('happy-cat').style.display = 'block'
    }
    i = 0
    typeWriter();
  }
}

typeWriter();
