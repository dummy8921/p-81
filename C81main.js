canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(200,300,40,0,2*Math.PI);
ctx.stroke();

color="black";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(300,300,40,0,2*Math.PI);
ctx.stroke();

color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(400,300,40,0,2*Math.PI);
ctx.stroke();

color="yellow";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(250,340,40,0,2*Math.PI);
ctx.stroke();

color="green";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=10;
ctx.arc(350,340,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",draw);
function draw(e)
{
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    circle(mousex,mousey);
}
function circle(mousex,mousey)
{
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=4;
ctx.arc(mousex,mousey,40,0,2*Math.PI);
ctx.stroke();
}