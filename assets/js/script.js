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