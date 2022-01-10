var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keyup",dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;



dibujarlineas("red", 149, 149, 151, 151, papel);
console.log(dibujarlineas);


function dibujarlineas(color,x1,y1,x2,y2,lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(x1,y1);
  lienzo.lineTo(x2,y2);
  lienzo.stroke();
  lienzo.closePath();
}


function dibujarTeclado(evento)
 {

var colorcito ="Blue";
var movimiento =10;
 console.log(evento.keyCode);


 switch (evento.keyCode)
 {
   case teclas.UP:
   dibujarlineas(colorcito,x,y,x, y-movimiento,papel);
   y= y-movimiento;
          break;
     case teclas.DOWN:
     dibujarlineas(colorcito,x,y,x, y+movimiento,papel);
     y= y + movimiento;
           break;
     case teclas.LEFT:
     dibujarlineas(colorcito,x,y,x -movimiento, y,papel);
     x= x-movimiento;
           break;
     case teclas.RIGHT:
     dibujarlineas(colorcito,x,y,x+movimiento, y,papel);
     x= x+movimiento;
           break;
   }

}
