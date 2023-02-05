const images = ["0.jpg","1.jpg","2.jpg","3.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bimage = document.createElement("img");
const h2 = document.querySelector("#clock");
document.body.insertBefore(bimage, h2);
bimage.src = `img/${chosenImage}` ;

console.log(bimage) ;