const p5 = require("p5");

new p5();

export const settings = {
  p5: true,
  dimensions: [720, 720],
  // Turn on a render loop (it's off by default in canvas-sketch)
  animate: true,
  // Enable MSAA
  attributes: {
    antialias: true,
  },
};

export const sketch = () => {
  noCursor();

  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);
  noStroke();

  return () => {
    background(mouseY / 2, 100, 100);

    fill(360 - mouseY / 2, 100, 100);
    rect(360, 360, mouseX + 1, mouseX + 1);
  };
};
