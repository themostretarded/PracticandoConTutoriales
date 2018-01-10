let renderer = PIXI.autoDetectRenderer(256, 256);
document
    .body
    .appendChild(renderer.view);
let stage = new PIXI.Container();
renderer.render(stage);
let scale = scaleToWindow(renderer.view);
console.log(scale);