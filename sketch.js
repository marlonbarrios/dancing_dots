//Tool for Meta-creation 01: Drawing Bot with dots, geometries and    mathematical noise.  
//Software by Marlon Barrios Solano.
//https://marlonbarrios.github.io/
//Software for drawing with points in order to create a drawing.
// It uses the Perlin noise algorithm to animate the 'dots' with a more organic movement and shapes. The circle is hardcoded as a demo when load.
// You can change the parameters:
// the background color in the top left and in the top right, you can adjust the number of animated dots ( 1 to 6), the thickness or the weight of the 'pen' the RGB values of the drawing, add connecting lines or curves (its like an explosion) , the alpha level, length of the trailing, lines resolution and capture an image of a moment you like with the key 'p' ( it exports pngs/ SVGs for next version)


//MIT License is defined as follows:
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//MIT License



let settings = {
  res: 0.0026,
  alpha: 50,
  nFrames: 1000,
  // dots: false,
  // nDots: [0],
  // lines: false,
  red: 0,
  green: 0,
  blue: 0,
  play: true,
  weight: 3,
  // curves: false,
  square: false,
  circle: true,
  triangle: false,
  bg_red: 255,
  bg_green: 255,
  bg_blue: 255,
  bg_alpha: 255,
  changingRadius: true,
}

let gui;

let recorder = [];
// Create a new canvas to match the browser size
function setup() {
  createCanvas(windowWidth, windowHeight);
gui = new dat.GUI();
// gui.add(settings, 'dots', false, true);
gui.add(settings, 'play', false, true);
gui.add(settings, 'weight', 1,40);
// gui.add(settings, 'nDots', [0,1, 2,3,4,5,6]);
// gui.add(settings, 'lines', false, true);
// gui.add(settings, 'curves', false, true);
gui.add(settings, 'square', false, true);
gui.add(settings, 'circle', false, true);
gui.add(settings, 'triangle', false, true);
gui.add(settings, 'changingRadius', false, true);
gui.add(settings, 'nFrames', 1, 2000);
gui.add(settings, 'res', 0.001, 0.02);
gui.add(settings, 'red', 0, 255);
gui.add(settings, 'green', 0, 255);
gui.add(settings, 'blue', 0, 255);
gui.add(settings, 'alpha', 5, 255);
gui.add(settings, 'bg_red', 0, 255);
gui.add(settings, 'bg_green', 0, 255);
gui.add(settings, 'bg_blue', 0, 255);
gui.add(settings, 'bg_alpha', 5, 255);




gui.remember(settings);

 
background(settings.bg_red, settings.bg_green, settings.bg_blue, settings.bg_alpha);

}

// On window resize, update the canvas size
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

// Main render loop
function draw() { 
  background(settings.bg_red, settings.bg_green, settings.bg_blue, settings.bg_alpha);
  stroke(settings.red, settings.green, settings.blue, settings.alpha);
  
  if(settings.play == false) {
    frameCount= 0;
  } 
  
  
  let x1 = noise(frameCount* settings.res) * width;
  let y1 = noise(100+ frameCount * settings.res) * height;
  let x2 = noise(200+ frameCount  * settings.res) * width;
  let y2 = noise(300+ frameCount  * settings.res) * height;
  let x3 = noise(500+ frameCount * settings.res) * width;
  let y3 = noise(700+ frameCount  * settings.res) * height;
  // let x4 = noise(900+ frameCount   * settings.res) * width;
  // let y4 = noise(1110 + frameCount   * settings.res) * height;
  // let x5 = noise(150 + frameCount   * settings.res) * width;
  // let y5 = noise(250  + frameCount   * settings.res) * height;
  // let x6 = noise(350 + frameCount   * settings.res) * width;
  // let y6 = noise(350  + frameCount   * settings.res) * height;


 let frame ={
    x1: x1,
    y1: y1,
    x2: x2,
    y2: y2,
    x3: x3,
    y3: y3,
    // x4: x4,
    // y4: y4,
    // x5: x5,
    // y5: y5,
    // x6: x6,
    // y6: y6
   
 }

recorder.push(frame);;
while(recorder.length > settings.nFrames) recorder.shift();
  
playback();
  
}

function playback() {
 
  for(frame of recorder) {

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
  // if(settings.nDots == 4) {
  //   point(frame.x1, frame.y1);
  //   point(frame.x2, frame.y2);
  //   point(frame.x3, frame.y3);
  //   point(frame.x4, frame.y4);
  // }
  // if(settings.nDots == 5) {
  //   point(frame.x1, frame.y1);
  //   point(frame.x2, frame.y2);
  //   point(frame.x3, frame.y3);
  //   point(frame.x4, frame.y4);
  //   point(frame.x5, frame.y5);
  // }
  // if(settings.nDots == 6) {
  //   point(frame.x1, frame.y1);
  //   point(frame.x2, frame.y2);
  //   point(frame.x3, frame.y3);
  //   point(frame.x4, frame.y4);
  //   point(frame.x5, frame.y5);
  //   point(frame.x6, frame.y6);
  // }
}

// if(settings.lines) {
//   strokeWeight(settings.weight);

//  if(settings.nDots <= 1 && settings.lines == true) {
//   strokeWeight(settings.weight);
//   point(frame.x1, frame.y1);
//   settings.lines = 0;
// }
 
//   if(settings.nDots >= 2 && settings.lines == true && settings.curves == false) {
//     strokeWeight(settings.weight)
//     line(frame.x1, frame.y1, frame.x2, frame.y2);
//   }
//   if(settings.nDots >= 3 && settings.lines == true) {
//     strokeWeight(settings.weight)
//     line(frame.x1, frame.y1, frame.x2, frame.y2);
//     line(frame.x2, frame.y2, frame.x3, frame.y3);
//     // line(frame.x3, frame.y3, frame.x1, frame.y1);
//   }
//   if(settings.nDots == 4 && settings.lines == true && settings.curves == false) {
  
//     strokeWeight(settings.weight)
//     line(frame.x1, frame.y1, frame.x2, frame.y2);
//     line(frame.x2, frame.y2, frame.x3, frame.y3);
//     line(frame.x3, frame.y3, frame.x4, frame.y4);

//     // line(frame.x4, frame.y4, frame.x1, frame.y1);
//   }
//     if(settings.nDots == 5 && settings.lines == true) {
//       strokeWeight(settings.weight)
//       line(frame.x1, frame.y1, frame.x2, frame.y2);
//       line(frame.x2, frame.y2, frame.x3, frame.y3);
//       line(frame.x3, frame.y3, frame.x4, frame.y4);
//       line(frame.x4, frame.y4, frame.x5, frame.y5);

//    // line(frame.x4, frame.y4, frame.x1, frame.y1);
//     }

//     if(settings.nDots == 6 && settings.lines == true) {
//       strokeWeight(settings.weight)
//       line(frame.x1, frame.y1, frame.x2, frame.y2);
//       line(frame.x2, frame.y2, frame.x3, frame.y3);
//       line(frame.x3, frame.y3, frame.x4, frame.y4);
//       line(frame.x4, frame.y4, frame.x5, frame.y5);
//       line(frame.x5, frame.y5, frame.x6, frame.y6);

//    // line(frame.x4, frame.y4, frame.x1, frame.y1);
//     }
//   }
//     if(settings.curves) {
    
//     if(settings.nDots == 3 && settings.curves == true) {
//       strokeWeight(settings.weight)
//       fill(colorPicker.color());
//   beginShape();
//   curveVertex(frame.x1, frame.y1);
//     curveVertex(frame.x1, frame.y1);
//     curveVertex(frame.x1, frame.y1);
//     curveVertex(frame.x2, frame.y2);
//     curveVertex(frame.x3, frame.y3);
//     curveVertex(frame.x3, frame.y3);
//     endShape();
//   }

//       if(settings.nDots == 4 && settings.curves == true) {
//         strokeWeight(settings.weight)
//         fill(colorPicker.color());
//     beginShape();
//       curveVertex(frame.x1, frame.y1);
//       curveVertex(frame.x1, frame.y1);
//       curveVertex(frame.x2, frame.y2);
//       curveVertex(frame.x3, frame.y3);
//       curveVertex(frame.x4, frame.y4);
//       curveVertex(frame.x4, frame.y4);
//       endShape();
//     }

//     if(settings.nDots == 5 && settings.curves == true) {
//       strokeWeight(settings.weight)
//       fill(colorPicker.color());
//   beginShape();
//     curveVertex(frame.x1, frame.y1);
//     curveVertex(frame.x1, frame.y1);
//     curveVertex(frame.x2, frame.y2);
//     curveVertex(frame.x3, frame.y3);
//     curveVertex(frame.x4, frame.y4);
//     curveVertex(frame.x5, frame.y5);
//     curveVertex(frame.x5, frame.y5);
//     endShape();
//   }

//   if(settings.nDots == 6 && settings.curves == true) {
//     strokeWeight(settings.weight)
//     fill(colorPicker.color());
// beginShape();
//   curveVertex(frame.x1, frame.y1);
//   curveVertex(frame.x1, frame.y1);
//   curveVertex(frame.x2, frame.y2);
//   curveVertex(frame.x3, frame.y3);
//   curveVertex(frame.x4, frame.y4);
//   curveVertex(frame.x5, frame.y5);
//   curveVertex(frame.x6, frame.y6);
//   curveVertex(frame.x6, frame.y6);
//   endShape();
// }


    // }

    if(settings.square == true && settings.changingRadius == false) {
    
      push(); 
      strokeWeight(settings.weight)
     
 
      // find the mid point 
      let midX = lerp(frame.x1, frame.x2, 0.5);
      let midY = lerp(frame.y1, frame.y2, 0.5); 
      translate(midX, midY);
      
      // find the distance between the points
      let len = dist(frame.x1, frame.y1, frame.x2, frame.y2);
      
      // calculate the angle between two points 
      let angle = atan2(frame.y1-frame.y2, frame.x1-frame.x2);
      rectMode(CENTER);
      noFill();
      rotate(angle);
      rect(0, 0, len);
      pop();
    }

    if(settings.square == true && settings.changingRadius == true) {
    
      push(); 
      strokeWeight(settings.weight)
     
 
      // find the mid point 
      let midX = lerp(frame.x1, frame.x2, 0.5);
      let midY = lerp(frame.y1, frame.y2, 0.5); 
      translate(midX, midY);
      
      // find the distance between the points
      let len = dist(frame.x1, frame.y1, frame.x2, frame.y2);
      
      // calculate the angle between two points 
      let angle = atan2(frame.y1-frame.y2, frame.x1-frame.x2);
      let rectX = noise(100) * width;
      let rectY= noise(200) * height;
      rectMode(CENTER);
      noFill();
      rotate(angle);
      rect(0, 0,  rectX- len, rectY- len);
      pop();
    }

    if(settings.circle == true && settings.changingRadius == false) {
      
   
      push(); 
      strokeWeight(settings.weight)
    
 
      // find the mid point 
      let midX = lerp(frame.x1, frame.x2, 0.5);
    
      let midY = lerp(frame.y1, frame.y2, 0.5); 
      translate(midX, midY);
      
      // find the distance between the points
      let len = dist(frame.x1, frame.y1, frame.x2, frame.y2);
      
      // calculate the angle between two points 
      let angle = atan2(frame.y1-frame.y2, frame.x1-frame.x2);
    
      ellipseMode(CENTER);
      noFill();
      rotate(angle);
      ellipse(0, 0, len, len);
      pop();
    }

    if(settings.circle == true && settings.changingRadius == true) {
      
      
      push(); 
      strokeWeight(settings.weight)
    
      // find the mid point 
      let midX = lerp(frame.x1, frame.x2, 0.5);
    
      let midY = lerp(frame.y1, frame.y2, 0.5); 
      translate(midX, midY);
      
      // find the distance between the points
      let len = dist(frame.x1, frame.y1, frame.x2, frame.y2);
      
      // calculate the angle between two points 
      let angle = atan2(frame.y1-frame.y2, frame.x1-frame.x2);
      
      let circleX = noise(100) * width ;
      let circleY = noise(200) * height;
      ellipseMode(CENTER);
      noFill();
      rotate(angle);
      ellipse(0, 0, circleX- len, circleY- len);
      pop();
    }




if(settings.triangle == true && settings.lines == false && settings.curves == false) {
    
  push(); 
  strokeWeight(settings.weight)
 

  // // find the mid point 
  // let midX = lerp(frame.x1, frame.x2, 0.5);
  // let midY = lerp(frame.y1, frame.y2, 0.5); 
  // translate(midX, midY);
  
  // find the distance between the points
  // let len = dist(frame.x1, frame.y1, frame.x2, frame.y2);
  
  // calculate the angle between two points 
  // let angle = atan2(frame.y1-frame.y2, frame.x1-frame.x2);
  
  noFill();
  // rotate(angle);
  triangle(frame.x1, frame.y1, frame.x2, frame.y2, frame.x3, frame.y3);
  pop();
}

}
}
   


  function keyPressed() {
    // Save frame if letter 'p' is pressed
    if (keyCode === 80) {
      save(`botdrawing.png`);
    }
  }
