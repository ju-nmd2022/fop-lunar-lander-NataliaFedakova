function setup(){
  createCanvas(600, 700);
}

function startScreen() {
    background(0, 0, 0);
    noStroke();
    fill("#700124");
    ellipse(500, 92, 250);
    
    fill("#4c020f"); 
    ellipse(467, 83, 10);
    ellipse(577, 13, 10);
    ellipse(457, 113, 30);
    ellipse(557, 83, 20);
    ellipse(507, 183, 30);
    ellipse(457, 13, 20);
    ellipse(407, 63, 40);
    ellipse(507, 63, 40);
    ellipse(547, 143, 20);  
    ellipse(437, 173, 15);  
    fill(255, 255, 255);  
    textSize(30);
    textStyle("bold");   
    textFont('courier');    
    text("LUNAR LANDER GAME", 150, 340);
    textSize(35); 
    text("PRESS START", 190, 420);

    fill("#600002");
    rect(175, 385, 260, 50);

    fill(255, 255, 255);
    text("PRESS START", 190, 420);

    
    } 
   
  function rocket(x, y, fireIsOn){   
    noStroke();
    fill("#33c9dd");
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

  function gameScreen() { 
    push(); 
    noStroke();
    fill("#df617f");
    ellipse(137, 0, 450);
    ellipse(490, 600, 450);
  
    fill("#df617f");
    beginShape();
    vertex(0, 710);
    vertex(72, 560);
    vertex(169, 700);  
    endShape();
  
    fill("#fc496a");
    beginShape();
    vertex(129, 700); 
    vertex(225, 290);
    vertex(355, 700);
    endShape();
  
    fill("#d34761");
    beginShape(); 
    vertex(97, 657);  
    vertex(138, 505);
    vertex(182, 660);
    endShape();
  
  fill ("#700124");
  beginShape();
  vertex(0, 710);
  bezierVertex(117, 600, 476, 600, 592, 710);
  endShape();
  
  fill("#4c020f"); 
  ellipse(59, 685, 10);
  ellipse(300, 698, 50, 45);
  ellipse(430, 668, 40);
  ellipse(410, 685, 20);
  ellipse(490, 695, 15);
  ellipse(100, 669, 30, 20); 
  ellipse(228, 645, 30, 20);
   
  fill ("#966fd6");
  ellipse(100, 100, 100, 90);
  
  fill(255, 255, 170);
  ellipse(445, 91, 20);
  
  fill(255, 255, 100);
  ellipse(505, 150, 60);
  
  fill(32, 2, 55);
  ellipse(100, 100, 150, 8); 
  
  fill("#00ffff");
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

  function overScreen(){
    background(0,0,0); 
    noStroke();
    fill(255, 255, 255);
    textSize(35);
    textStyle("bold");
    text("GAME OVER", 209, 200);
    
    fill("#600002");
    rect(185, 255, 240, 50);
    
    fill(255, 255, 255);
    text("PLAY AGAIN", 200, 290);
    
    fill ("#700124");
    beginShape();
    vertex(0, 710);
    bezierVertex(7, 500, 476, 400, 592, 710);
    endShape();
    
    fill("#4c020f"); 
    ellipse(59, 685, 10);
    ellipse(300, 698, 50, 45);
    ellipse(430, 668, 40);
    ellipse(410, 685, 20);
    ellipse(490, 695, 15);
    ellipse(100, 669, 30, 20); 
    ellipse(228, 645, 30, 20);
    ellipse(200, 574, 30);
    ellipse(400, 574, 30);
    ellipse(300, 604, 50);
    ellipse(100, 604, 30, 20);
    
    fill("#afc9cf");
    beginShape();
    vertex(z+101, p+358);
    vertex(z+123, p+340);
    vertex(z+140, p+390);
    endShape();
    fill("#414141");
    rect(z+250, p+330, 10);
    ellipse(z+193, p+344, 20);  
    
    
    fill("#414141");
    beginShape();
    vertex(r+257, d+350);
    vertex(r+237, d+350); 
    vertex(r+240, d+390); 
    endShape();  
    
    fill(0, 0, 0);
    rect(r+159, d+370, 10);
    rect(r+189, d+300, 10);
    
    fill("#afc9cf");
    rect(r+159, d+370, 30);  
    rect(r+159, d+370, 20);  

    fill(0,0,0);
    rect(r+190, d+ 393, 15);

    fill(255, 0, 0); 
ellipse(272, 520, 20, 60);
ellipse(262, 522, 20, 40);
ellipse(282, 522, 20, 40);

ellipse(365, 568, 20, 40);
ellipse(370, 573, 30, 35);
ellipse(360, 573, 30, 35);

fill(0, 0, 0);
rect(254, 541, 60, 30); 
beginShape();
vertex(227, 550);
vertex(197, 550);
vertex(240, 590);
endShape(); 

rect(322, 528, 30, 80);
ellipse(254, 572, 30);
rect(283, 567, 20);

fill(255, 0, 0);
ellipse(365, 568, 20, 40);
ellipse(370, 573, 30, 35);
ellipse(360, 573, 30, 35);

noStroke(); 
  push();
  rotate(0.3);
  translate(267, 267);
      fill("#33c9dd");
      ellipse(o +100, t + 100, 70, 120);
      fill("#afc9cf");
      ellipse(o + 100, t + 45, 20, 10);
      
      fill("#afc9cf");
      strokeWeight(4);
      stroke("#afc9cf");
       
      fill("#afc9cf");
      ellipse(o + 100, t + 82, 30);
      
      fill("#eeeee");
      ellipse(o + 160, t + 122, 27); 
       
      fill("#414141");
      noStroke(); 
      rect(o + 87, t + 156, 25, 7);
      
      fill("#6b6b6b");
      noStroke();
      rect(o + 90, t + 162, 18, 5);
      
      fill("#afc9cf"); 
      beginShape();
      vertex(o + 68, t + 120);
      vertex(o + 80, t + 150);   
      vertex(o + 53, t + 170);
      endShape(); 
      
      pop();
 }

 function star(z ,p){
  background(0, 0, 0, 0);
  fill("#fcd800");
  push();
  scale(0.3);
  beginShape();
  vertex(z + 230,p + 80);
  vertex(z + 150, p +80);
  vertex(z +120, p-5);
  vertex(z + 80,p+80);
  vertex(z, p +80);
  vertex(z + 65,p + 135);
  vertex(z + 40, p+205);
  vertex(z + 115, p + 165);
  vertex(z + 190, p+205);
  vertex(z + 165, p + 135);
  endShape(CLOSE); 
  pop();
  
  fill(255, 255, 255);
  textSize(35);
  text("YOU WON", 230, 380); 
  }

let isGameActive = true;
let acceleration = 0.2;
let rocketY = 10;
let speed = 3; 
let y = 10;
let velocity = 2;   
let state = "start";
let gameTimer = 0;
let z =100;
let p = 100; 
let r = 100;
let d = 100;
let o = 100;
let t = 100;

 
function draw() {   
if (state === "start") {   
    startScreen();
  } else if (state === "game") {
    background(30, 19, 34);
    gameScreen(); 
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
  if (y > 458) {             
    isGameActive = false;      
  } 
 if (y <-150) {                  
    isGameActive = false;       
  }    
  else if (y > 458 && speed < 3) {  
  console.log("win"); 
}    else if (y > 458 && speed > 3) {
  console.log("lose");  
}
  }    
} if (y > 458 && speed > 3){  
  overScreen();
  p = p - speed; 
  z = z - speed;
  p = p-1; 
  z = z-1;     
  r = r + speed; 
  d = d - speed;
  r = r-1;  
  d = d-1;   
} if (y > 458 && speed < 3){   
  background(0, 0, 0, 255, 25);      
    star(0, p);
    star(250, p);
    star(500, p);
    star(750, p);
    star(1000, p); 
    star(1250, p);
    star(1500, p);
    star(1750, p);
    star(2000, p); 
    star(2250, p);

    p = p + speed; 
    p = p + 1;        
} if (y <-150) { 
  overScreen();
} else if (state === "over") {     
  startScreen();       
}  
}  
 
   
function mouseClicked() {
  if (state === "start") {    
    state = "game";    
  } else if (state === "over") {    
    state = "start";    
}        
}         
  
