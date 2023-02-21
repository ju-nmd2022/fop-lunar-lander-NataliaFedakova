
function rocket(x, y, fireIsOn){
noStroke();
fill("#fddd5c");
ellipse(x +100, y + 100, 70, 120);
if (fireIsOn){
fill("#a1051d");
ellipse (x+92, y+ 185, 17, 30);
ellipse (x+106, y+ 185, 17, 30);
fill("#820006");
ellipse(x + 99, y + 188, 20, 40);
} else {
} 
fill("#afc9cf");
ellipse(x + 100, y + 45, 20, 10);

fill("#afc9cf");
strokeWeight(4);
stroke("#afc9cf");
line(x + 100, y + 45, x+100, y+27);

fill("#afc9cf");
ellipse(x + 100, y + 82, 30);

fill("#eeeee");
ellipse(x + 100, y + 82, 27);

fill("#414141");
noStroke();
rect(x + 87, y + 156, 25, 7);

fill("#6b6b6b");
noStroke();
rect(x + 90, y + 162, 18, 5);

fill("#afc9cf");
beginShape();
vertex(x + 68, y + 120);
vertex(x + 80, y + 150);
vertex(x + 53, y + 170);
endShape();

fill("#afc9cf");
beginShape();
vertex(x + 132, y + 120);
vertex(x + 120, y + 150);
vertex(x + 146, y + 170);
endShape();
}

function scenery () {
  push();
fill (159, 160, 164);
beginShape();
vertex(0, 710);
bezierVertex(117, 600, 476, 600, 592, 710);
endShape();

fill("#313335");
ellipse(59, 685, 10);
ellipse(300, 698, 50, 45);
ellipse(430, 668, 40);
ellipse(410, 685, 20);
ellipse(490, 695, 15);
ellipse(100, 669, 30, 20);
ellipse(228, 645, 30, 20);

fill(150, 111, 211);
ellipse(100, 100, 50, 40);

fill(32, 2, 54);
ellipse(100, 100, 70, 5); 

fill( 0, 0, 255);
ellipse(460, 460, 150, 130);  

fill(255, 255, 255);
ellipse(457, 302, 50);
rect(437, 325, 40, 80);
ellipse(436, 400, 30, 10);
ellipse(473, 400, 30, 10);

beginShape();
fill(255, 255, 255);
vertex(440, 320);
bezierVertex(408, 325, 408, 390, 460, 320); 
endShape();

beginShape();
vertex(470, 320);
bezierVertex(510, 325, 510, 390, 460, 320);
endShape();

fill(0, 0, 0);
ellipse(457, 300, 30);

fill(255, 0, 0);
rect(459, 327, 10, 8);

fill(0, 0, 255);
rect(459, 327, 4);
pop();
}

let isGameActive = true;
let acceleration = 0.3;
let rocketY = 10;
let speed = 3; 
let y = 10;
let velocity = 2; 
  
 
function draw() {  
background(0, 0, 0);
scenery (0, 0);
rocket(200, y, keyIsDown(38)); 
  if (isGameActive){    
    y = y + speed;  
    rocketY = rocketY + velocity;     
    speed = speed + acceleration;
    velocity = velocity + acceleration;   
  if (keyIsDown(38)) {  
    y = y - speed;    
    speed = speed - 0.9;     
  }  
  if (y > 470) {             
    isGameActive = false;     
  } 
  if (y <-150) {              
    isGameActive = false;     
  } 
} 
}


