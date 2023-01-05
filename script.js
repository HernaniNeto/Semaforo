let img = document.getElementById('img');
let buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

let trafficLight = (event) => {
  stopAutomatic();
  turnOn[event.target.id]();
  
}

let nextIndex = () => {
  if(colorIndex < 2) {
    colorIndex++
  }

  else {
    colorIndex = 0;
  }
}

let changeColor = () => {
  let colors = ['red', 'yellow', 'green']
  let color = colors[colorIndex]
  turnOn[color]();
  nextIndex();

}

let stopAutomatic = () => {
  clearInterval(intervalId);
}

let turnOn = {
  'red': () => img.src = './img/vermelho.png',
  'yellow': () => img.src = './img/amarelo.png',
  'green': () => img.src = './img/verde.png',
  'automatic': () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight);