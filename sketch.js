let colorPicker;

let settings = {
  res: 0.0036,
  alpha: 100,
  nFrames: 150,
  dots: true,
  nDots: [1],
  lines: false,
  red: 0,
  green: 0,
  blue: 0,
  play: true,
  weight: 5,
  curves: false


}

let gui;

let recorder = [];
// Create a new canvas to match the browser size
function setup() {
  createCanvas(windowWidth, windowHeight);
gui = new dat.GUI();
gui.add(settings, 'dots', false, true);
gui.add(settings, 'play', false, true);
gui.add(settings, 'weight', 1,40);
gui.add(settings, 'nDots', [0,1, 2,3,4,5,6]);
gui.add(settings, 'lines', false, true);
gui.add(settings, 'curves', false, true);

gui.add(settings, 'red', 0, 255);
gui.add(settings, 'green', 0, 255);
gui.add(settings, 'blue', 0, 255);
gui.add(settings, 'alpha', 5, 255);
gui.add(settings, 'nFrames', 1, 1000);
gui.add(settings, 'res', 0.001, 0.02);




colorPicker = createColorPicker('white');
colorPicker.position(20, 20 );   
background(colorPicker.color());

}

// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

// Main render loop
function draw() { 
  background(colorPicker.color());
  
  if(settings.play == false) {
    frameCount= 0;
  } 
  
  
  let x1 = noise(frameCount* settings.res) * width;
  let y1 = noise(100+ frameCount * settings.res) * height;
  let x2 = noise(200+ frameCount  * settings.res) * width;
  let y2 = noise(300+ frameCount  * settings.res) * height;
  let x3 = noise(500+ frameCount * settings.res) * width;
  let y3 = noise(700+ frameCount  * settings.res) * height;
  let x4 = noise(900+ frameCount   * settings.res) * width;
  let y4 = noise(1110 + frameCount   * settings.res) * height;
  let x5 = noise(150 + frameCount   * settings.res) * width;
  let y5 = noise(250  + frameCount   * settings.res) * height;
  let x6 = noise(350 + frameCount   * settings.res) * width;
  let y6 = noise(350  + frameCount   * settings.res) * height;


 let frame ={
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    x3: x3,
    y3: y3,
    x4: x4,
    y4: y4,
    x5: x6,
    y5: y5,
    x6: x6,
    y6: y6
   
 }

recorder.push(frame);;
while(recorder.length > settings.nFrames) recorder.shift();
  
playback();
  
}

function playback() {
 
  for(frame of recorder) {


stroke(settings.red,settings.green, settings.blue, settings.alpha);
if(settings.dots) { 
  strokeWeight(settings.weight + 3)
  if(settings.nDots == 1 && settings.lines == false) {
    point(frame.x1, frame.y1);
    settings.lines = false;
  }
  if(settings.nDots >= 2) {
    point(frame.x1, frame.y1);
    point(frame.x2, frame.y2);
  }
  if(settings.nDots >= 3) {
    point(frame.x1, frame.y1);
    point(frame.x2, frame.y2);
    point(frame.x3, frame.y3);
  }
  if(settings.nDots == 4) {
    point(frame.x1, frame.y1);
    point(frame.x2, frame.y2);
    point(frame.x3, frame.y3);
    point(frame.x4, frame.y4);
  }
  if(settings.nDots == 5) {
    point(frame.x1, frame.y1);
    point(frame.x2, frame.y2);
    point(frame.x3, frame.y3);
    point(frame.x4, frame.y4);
    point(frame.x5, frame.y5);
  }
  if(settings.nDots == 6) {
    point(frame.x1, frame.y1);
    point(frame.x2, frame.y2);
    point(frame.x3, frame.y3);
    point(frame.x4, frame.y4);
    point(frame.x5, frame.y5);
    point(frame.x6, frame.y6);
  }
}

if(settings.lines) {
  strokeWeight(settings.weight);

 if(settings.nDots <= 1 && settings.lines == true) {
  strokeWeight(settings.weight);
  point(frame.x1, frame.y1);
  settings.lines = 0;
}
 
  if(settings.nDots >= 2 && settings.lines == true && settings.curves == false) {
    strokeWeight(settings.weight)
    line(frame.x1, frame.y1, frame.x2, frame.y2);
  }
  if(settings.nDots >= 3 && settings.lines == true) {
    strokeWeight(settings.weight)
    line(frame.x1, frame.y1, frame.x2, frame.y2);
    line(frame.x2, frame.y2, frame.x3, frame.y3);
    // line(frame.x3, frame.y3, frame.x1, frame.y1);
  }
  if(settings.nDots == 4 && settings.lines == true && settings.curves == false) {
  
    strokeWeight(settings.weight)
    line(frame.x1, frame.y1, frame.x2, frame.y2);
    line(frame.x2, frame.y2, frame.x3, frame.y3);
    line(frame.x3, frame.y3, frame.x4, frame.y4);

    // line(frame.x4, frame.y4, frame.x1, frame.y1);
  }
    if(settings.nDots == 5 && settings.lines == true) {
      strokeWeight(settings.weight)
      line(frame.x1, frame.y1, frame.x2, frame.y2);
      line(frame.x2, frame.y2, frame.x3, frame.y3);
      line(frame.x3, frame.y3, frame.x4, frame.y4);
      line(frame.x4, frame.y4, frame.x5, frame.y5);

   // line(frame.x4, frame.y4, frame.x1, frame.y1);
    }

    if(settings.nDots == 6 && settings.lines == true) {
      strokeWeight(settings.weight)
      line(frame.x1, frame.y1, frame.x2, frame.y2);
      line(frame.x2, frame.y2, frame.x3, frame.y3);
      line(frame.x3, frame.y3, frame.x4, frame.y4);
      line(frame.x4, frame.y4, frame.x5, frame.y5);
      line(frame.x5, frame.y5, frame.x6, frame.y6);

   // line(frame.x4, frame.y4, frame.x1, frame.y1);
    }
  }
    if(settings.curves) {
    
    if(settings.nDots == 3 && settings.curves == true && settings.lines == false) {
      strokeWeight(settings.weight)
      fill(colorPicker.color());
  beginShape();
  curveVertex(frame.x1, frame.y1);
    curveVertex(frame.x1, frame.y1);
    curveVertex(frame.x1, frame.y1);
    curveVertex(frame.x2, frame.y2);
    curveVertex(frame.x3, frame.y3);
    curveVertex(frame.x3, frame.y3);
    endShape();
  }

      if(settings.nDots == 4 && settings.curves == true && settings.lines == false) {
        strokeWeight(settings.weight)
        fill(colorPicker.color());
    beginShape();
      curveVertex(frame.x1, frame.y1);
      curveVertex(frame.x1, frame.y1);
      curveVertex(frame.x2, frame.y2);
      curveVertex(frame.x3, frame.y3);
      curveVertex(frame.x4, frame.y4);
      curveVertex(frame.x4, frame.y4);
      endShape();
    }

    if(settings.nDots == 5 && settings.curves == true && settings.lines == false) {
      strokeWeight(settings.weight)
      fill(colorPicker.color());
  beginShape();
    curveVertex(frame.x1, frame.y1);
    curveVertex(frame.x1, frame.y1);
    curveVertex(frame.x2, frame.y2);
    curveVertex(frame.x3, frame.y3);
    curveVertex(frame.x4, frame.y4);
    curveVertex(frame.x5, frame.y5);
    curveVertex(frame.x5, frame.y5);
    endShape();
  }

  if(settings.nDots == 6 && settings.curves == true && settings.lines == false) {
    strokeWeight(settings.weight)
    fill(colorPicker.color());
beginShape();
  curveVertex(frame.x1, frame.y1);
  curveVertex(frame.x1, frame.y1);
  curveVertex(frame.x2, frame.y2);
  curveVertex(frame.x3, frame.y3);
  curveVertex(frame.x4, frame.y4);
  curveVertex(frame.x5, frame.y5);
  curveVertex(frame.x6, frame.y6);
  curveVertex(frame.x6, frame.y6);
  endShape();
}


    }
  }
}
    


  function keyPressed() {
    // Save frame if letter 'p' is pressed
    if (keyCode === 80) {
      save(`botdrawing.png`);
    }
  }
