
let canvas;
let xPos = 0;
let yPos = 0;
let easing = .1;


function setup(){
   canvas = createCanvas(windowWidth,windowHeight);
   canvas.position(0, 0);
   canvas.style("z-index", -2);
    //background(225);
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw(){
   // background(100);
    clear();

    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);
    drawSomething(xPos, yPos);
    // strokeWeight(0);
    // fill(random(200, 255),random(200, 255),random(200, 255));
    // ellipse(mouseX, mouseY, 30, 30);

}

// function mouseMoved(){
//     drawSomething(mouseX, mouseY);

//     // strokeWeight(0);
//     // fill(random(200, 255),random(200, 255),random(200, 255));
//     // ellipse(mouseX, mouseY, 30, 30);
// }

function drawSomething(_x, _y){
/*
// draw eyeballs
fill(28, 28, 24);
ellipse(_x, _y, 30, 30);
ellipse(_x - 20, _y + 5, 30, 30);

//draw pupils
fill(237, 2, 53);
ellipse(_x + 10, _y, 5, 5);
ellipse(_x - 10, _y + 5, 5);
*/

// Draw the quad.
//quad(-30, -30, 30, -30, 30, 30, -30, 30);
fill(random(200, 255), random(200, 255),random(200, 255));
quad(_x - 10, _y + 5, 5,_x - 10, _y + 5,_x + 5,_y + 10, 10);

}