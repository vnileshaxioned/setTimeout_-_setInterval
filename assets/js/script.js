// for change image
var image = document.querySelector('.image'),
  counter = 0,
  srcArr = [
    'assets/images/pic01.jpg',
    'assets/images/pic02.jpg',
    'assets/images/pic03.jpg',
    'assets/images/pic04.jpg',
  ];

setInterval(changeSrc, 1000);

function changeSrc() {
  counter++;
  if (counter == 4) {
    counter = 0;
    image.src = srcArr[counter];
  } else {
    image.src = srcArr[counter];
  }
}

// for digital clock
var hour = document.querySelector('.hour-number'),
  minute = document.querySelector('.minute-number'),
  second = document.querySelector('.second-number');

setInterval(clock, 1000);

function clock() {
  var date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    afterTwelve = h - 12;

  if (h > 12) {
    zero(afterTwelve, hour);
  } else {
    hour.innerText = h;
  }

  zero(m, minute);
  zero(s, second);
}

function zero(time, element) {
  if (time < 10) {
    element.innerText = '0' + time;
  } else {
    element.innerText = time;
  }
}