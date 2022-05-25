const p5 = require("p5");

new p5();

export const settings = {
  p5: true,
  dimensions: [800, 400],
  // Turn on a render loop (it's off by default in canvas-sketch)
  animate: true,
  // Enable MSAA
  attributes: {
    antialias: true,
  },
};

export const sketch = () => {
  let stepX;
  let stepY;
  colorMode(HSB, width, height, 100);
  noStroke();

  return () => {
    stepX = mouseX + 2;
    stepY = mouseY + 2;

    for (let gridY = 0; gridY < height; gridY += stepY) {
      for (let gridX = 0; gridX < width; gridX += stepX) {
        fill(gridX, height - gridY, 100);
        rect(gridX, gridY, stepX, stepY);
      }
    }
  };
};
