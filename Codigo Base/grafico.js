
class Grafico {
    constructor() {
      textureMode(NORMAL);
      createGraphics(900, 900);
  
  
      // Propiedades para el caminante
      this.vel = 4;
      this.x = -300;
      this.y = 400;
  
      // Variables para controlar la creación de la siguiente línea
      this.nuevaLinea = false;
      this.nuevaLineaY = 0;
      this.nuevaLineaX = 50;
      this.angulo = 0; // Variable de ángulo para la siguiente línea (en radianes)
      this.variacionAngular = 0.05; // Variación angular de la siguiente línea (ajusta según sea necesario)
    }


/*dibujarLineas(x) {
 
  if (x > height / 2) {
    while (true) {
      noStroke();
      fill(0);
      const radio = 200; // Radio de la curva
      const x = this.nuevaLineaX;
      const y = this.nuevaLineaY + radio * sin(this.angulo);
      ellipse(x, y, 10, 10);

      // Incrementar el ángulo de la siguiente línea
      this.angulo += this.variacionAngular;

      // Mover la posición X de la siguiente línea
      this.nuevaLineaX += this.vel;

      // Si la siguiente línea ha salido completamente de la pantalla, detener el bucle
      if (this.nuevaLineaX > width + 10) {
        break;
      }
    }
  }
}*/

  

    dibujarcirculos(x){
       // Aca iría una condición de sonido especifica para determinar si se deben dibujar los circulos
        if (x>height/2){  
          push();      
            fill(0);
            ellipse(random(-300, 400), random(-300, 400),random(10, 20),random(10, 20)); 
          pop();
          }
     
    }
}
