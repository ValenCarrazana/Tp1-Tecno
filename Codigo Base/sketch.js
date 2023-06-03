
let t;


function setup() {
  createCanvas(800,800,WEBGL, { antialias: true });
 
  
  //Crear triangulos
 t = new Triangulos();
}

function draw(){
  //Dibujar triangulos
 
  t.dibujar();
  t.textura(mouseX);
  
}
