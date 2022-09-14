
const basic_circle = (s) => {
  var cns;
  var containerElem;

  s.setup = () => {
    containerElem = document.getElementById('static-circle-div');
    cns = s.createCanvas(containerElem.clientWidth, containerElem.clientHeight)
  }

  s.draw = () => {
    s.background(150);
    //Calculate the circle's diameter.
    let di = containerElem.clientWidth / 8;
    //Calculate the circle's x pos.
    let xPos = containerElem.clientWidth / 2;
    //Calculate the circle's y pos.
    let yPos = containerElem.clientHeight /2;
    // s.fill(0, 102, 153);


    s.circle(xPos, yPos ,di);
    s.stroke(50)
    s.textSize(20);
    s.text("static circle", containerElem.clientWidth / 12, 25)
  }

  s.windowResized = () => {
    s.resizeCanvas(containerElem.clientWidth, containerElem.clientHeight);
  }
}
new p5(basic_circle, document.getElementById('static-circle-div'))

const basic_circle2 = (s) => {
  let cns;
  let containerElem;
  let xPos;
  let yPos;


  s.setup = () => {
    containerElem = document.getElementById('static-circle-div');
    cns = s.createCanvas(containerElem.clientWidth, containerElem.clientHeight)
    xPos = containerElem.clientWidth / 2;
    yPos = containerElem.clientHeight;
  }

  s.draw = () => {
    s.background(170);
    let di = containerElem.clientWidth / 8;
    s.circle(xPos, yPos, di);

    yPos -= 2;

    yPos < 0 ? yPos = containerElem.clientHeight : null;
    s.stroke(50)
    s.textSize(20);
    s.text("A circle moving up", containerElem.clientWidth / 12, 25)
  }

  s.windowResized = () => {
    xPos = containerElem.clientWidth / 2
    s.resizeCanvas(containerElem.clientWidth, containerElem.clientHeight);
  }
}
new p5(basic_circle2, document.getElementById('circle-div2'))


const basic_circle3 = (s) => {
  var cns;
  var containerElem;
  let xPos;
  let yPos;

  s.setup = () => {
    containerElem = document.getElementById('static-circle-div');
    cns = s.createCanvas(containerElem.clientWidth, containerElem.clientHeight)
    xPos = 0;
    yPos = containerElem.clientHeight;
  }

  s.draw = () => {
    s.background(190);
    let di = containerElem.clientWidth / 8
    s.circle(xPos,yPos,di);

    if(xPos <= containerElem.clientWidth){
      xPos += 4;
    }
    if(yPos >= 0){
      yPos -= 4;
    }

    if(xPos > containerElem.clientWidth && yPos < 0){
      xPos = 0;
      yPos = containerElem.clientHeight;
    }

    s.stroke(50)
    s.textSize(20);
    s.text("Move diagonally.", containerElem.clientWidth / 12, 25)

  }

  s.windowResized = () => {
    s.resizeCanvas(containerElem.clientWidth, containerElem.clientHeight);

  }
}
new p5(basic_circle3, document.getElementById('circle-div3'))


const basic_circle4 = (s) => {
  var cns;
  var containerElem;
  let xPos;
  let yPos;
  let di;


  s.setup = () => {
    containerElem = document.getElementById('static-circle-div');
    cns = s.createCanvas(containerElem.clientWidth, containerElem.clientHeight)
    yPos = 0;
    xPos = containerElem.clientWidth/2;
    di = containerElem.clientWidth/8;
  }

  s.draw = () => {
    s.background(210);
    s.circle(xPos, yPos, di)

    xPos += s.random(-2, 2);
    yPos += 2;

    yPos > containerElem.clientHeight ? yPos = 0 : null;
    s.stroke(50)
    s.textSize(20);
    s.text("A circle jiggling down", containerElem.clientWidth / 12, 25)
  }

  s.windowResized = () => {

    xPos = containerElem.clientWidth/2;
    di = containerElem.clientWidth/8;
    s.resizeCanvas(containerElem.clientWidth, containerElem.clientHeight);
  }

}
new p5(basic_circle4, document.getElementById('circle-div4'))
