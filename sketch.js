function setup (){
  createCanvas (600,600);
  angleMode (DEGREES);
}

function draw (){
  background (255,255,255);
  translate (300,300);
  rotate (-90);
  
  let hr = hour();
  let min = minute();
  let sec = second();
  
  strokeWeight (5);
  stroke (0);
  noFill();
  let end1 = map(sec, 0, 60, 0, 360);
  //arc (0,0,300,300,0,end1);
  
  let end2 = map(min, 0, 60, 0, 360);
  //arc (0,0,250,250,0,end2);
  
  let end3 = map(hr % 12, 0, 12, 0, 360);
  //arc (0,0,200,200,0,end2);
  
  push();
  rotate (end1);
  strokeWeight(2);
  stroke(255,0,0);
  line(0,0,150,0);
  pop();
  
  push();
  rotate (end2);
  strokeWeight(5);
  stroke(0);
  line(0,0,150,0);
  pop();
  
  push();
  rotate (end3);
  strokeWeight(5);
  stroke(0);
  line(0,0,100,0);
  pop();
  
  strokeWeight(5);
  stroke(0);
  ellipse(0,0,400,400);
  
  
  
  //fill(255);
  //noStroke(0);
  //text(hr + ':' + min + ':' + sec, 200, 200);
}