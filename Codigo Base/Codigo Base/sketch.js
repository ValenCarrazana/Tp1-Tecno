
let t;
let g;

function setup() {
  createCanvas(800,800,WEBGL, { antialias: true });
  
  //Crear triangulos
  // t = new Triangulos();
  // t.cargar();

  //Crear Grafico
  g = new Grafico();
}

function draw(){

  //Dibujar grafico
  g.dibujarLineas(mouseY);
  g.dibujarcirculos(mouseY);

  //Dibujar triangulos
  // t.dibujar();
  // t.textura();
 
}
