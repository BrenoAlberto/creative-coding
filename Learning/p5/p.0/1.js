const p5 = require("p5");

new p5();

export const settings = {
  p5: true,
  dimensions: [100, 100],
  // Turn on a render loop (it's off by default in canvas-sketch)
  animate: true,
  // Enable MSAA
  attributes: {
    antialias: true,
  },
};

export const sketch = () => {
  return ({ playhead, width, height }) => {
    clear();
    point(60, 50);
    fill(128);
    strokeWeight(1);
    ellipse(40, 50, 60, 60);
    rect(50, 50, 40, 20);
  };
};
