var canvas=document.getElementById("canvasId")
var context=canvas.getContext("2d")
context.moveTo(0,0)
context.lineTo(320,240)
context.stroke()

context.strokeRect(50,50,100,20)
context.fillRect(50,50,100,20)