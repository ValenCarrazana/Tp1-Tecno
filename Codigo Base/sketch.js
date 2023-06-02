
let t;

function setup() {
  createCanvas(800,800,WEBGL, { antialias: true });
  
  t = new Triangulos();
  t.cargar();
}

function draw(){
  t.dibujar();
  t.textura(mouseX);
 
}