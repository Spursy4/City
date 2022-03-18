// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);

// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// Bottom left Windows
for (let y = 375 ;  y <= 600; y += 45) {
    ctx.fillStyle = "white"
    ctx.fillRect(22, y, 100, 20)
}
// Top left windows
for (let x = 30; x <= 120 ; x += 25 ) {
    ctx.fillStyle = "white"
    ctx.fillRect(x, 215, 13, 10)
}
for (let x = 30; x <= 120 ; x += 25 ) {
    ctx.fillStyle = "white"
    ctx.fillRect(x, 240, 13, 10)
}
for (let x = 30; x <= 120 ; x += 25 ) {
    ctx.fillStyle = "white"
    ctx.fillRect(x, 265, 13, 10)
}for (let x = 30; x <= 120 ; x += 25 ) {
    ctx.fillStyle = "white"
    ctx.fillRect(x, 290, 13, 10)
}
for (let x = 30; x <= 120 ; x += 25 ) {
    ctx.fillStyle = "white"
    ctx.fillRect(x, 315, 13, 10)
}
for (let x = 30; x <= 120 ; x += 25 ) {
    ctx.fillStyle = "white"
    ctx.fillRect(x, 340, 13, 10)
}



// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

// Right Windows
for (let x = 172; x <= 280; x += 25) {
    // console.log(x);
ctx.fillStyle = "white"
ctx.fillRect(x, 120, 11, 475)
}

