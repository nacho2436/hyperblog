var canvas = document.getElementById("canvas");
var papel = canvas.getContext("2d");
var rect = canvas.getBoundingClientRect();
var x = 0;
var y = 0;
var dibujando = false;
color = "#EAEE08";



document.addEventListener("mousedown", function clickinicio(e)
{
	x = e.clientX - rect.left;
	y = e.clientY - rect.top;
  dibujando = true;
 console.log(dibujando);
 console.log(e);
});

document.addEventListener("mousemove", function mouseEnMovimiento(e)
{
	if (dibujando === true)
	{
		dibujar(x , y , e.clientX - rect.left, e.clientY - rect.top);
		x = e.clientX - rect.left;
		y = e.clientY - rect.top;
console.log(dibujando);
console.log(x);
console.log(y);
	}
});

document.addEventListener("mouseup", function clicksoltarfinal(e)
{
	if (dibujando === true)
	dibujar(x , y , e.clientX - rect.left, e.clientY - rect.top);
	x = 0;
	y = 0;
	dibujando = false
  console.log(dibujando);
});



function dibujar(xinicial_1, yfinal_1, xinicail_2, yfinal_2)
{

  papel.beginPath();
  papel.strokeStyle = color;
  papel.lineWidth = 3;
  papel.moveTo(xinicial_1, yfinal_1);
  papel.lineTo(xinicail_2, yfinal_2);
  papel.stroke();
  papel.closePath();
}
