let starter = document.getElementById("starter");

let imgArray = [
"Assets/imgs/assets/Asset20.png",
"Assets/imgs/assets/Asset21.png",
"Assets/imgs/assets/Asset22.png",
"Assets/imgs/assets/Asset23.png",
"Assets/imgs/assets/Asset24.png",
"Assets/imgs/assets/Asset25.png",
"Assets/imgs/assets/Asset26.png",
"Assets/imgs/assets/Asset27.png",
]

let count = 0;

function animate(){
  starter.src = imgArray[count];
  count++;
  if (imgArray.length == count) {
    count = 0;
  }
}

setInterval(animate, 100);
