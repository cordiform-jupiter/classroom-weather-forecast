let clouds = [];

function setup() {
  createCanvas(800, 400);
  // Load static data and initialize clouds
  loadStaticCloudData();
}

function draw() {
  background(220);
  // Update and display each cloud
  for (let cloud of clouds) {
    cloud.update();
    cloud.display();
  }
}

function loadStaticCloudData() {
  // Static data - replace this with your own data
  const staticData = [
    { type: 1, x: 100, y: 100 },
    { type: 2, x: 200, y: 200 },
    { type: 3, x: 300, y: 150 },
    { type: 4, x: 400, y: 200 },
    { type: 5, x: 500, y: 100 },
    // Add more data items as needed
  ];

  // Initialize clouds based on the static data
  for (let item of staticData) {
    clouds.push(new Cloud(item.type, item.x, item.y));
  }
}

class Cloud {
  constructor(type, x, y) {
    this.type = type;
    this.x = x;
    this.y = y;
    // Add more properties as needed
  }

  update() {
    // Implement animation logic based on the cloud type and other factors
  }

  display() {
    // Draw the cloud based on its type and properties
    ellipse(this.x, this.y, 50, 50);  // Example: Draw a simple ellipse
    // Add more drawing logic based on the cloud type
  }
}
