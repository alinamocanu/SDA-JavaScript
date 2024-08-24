const canvas = document.getElementById("graphics");
const ctx = canvas.getContext('2d');

/*
// draw a line
ctx.moveTo(25, 75);
ctx.lineTo(75, 75);
ctx.stroke();
*/

// draw a triangle
/*ctx.beginPath();
ctx.moveTo(45, 50);
ctx.lineTo(25, 75);
ctx.lineTo(75, 75);
ctx.closePath();
ctx.stroke();*/

// draw a trapezoid
/*ctx.beginPath(); // Create a path
ctx.moveTo(25, 75); // Move the pointer to (25,25) coordinates
ctx.lineTo(75, 75); // Create a line from (25,25) to (75,75)
ctx.lineTo(100, 75); // Create a line from (75,75) to (100,75)
ctx.lineTo(100, 125); // Create a line from (100,75) to (100,125)
ctx.lineTo(80, 125); // Create a line from (100,125) to (80,125)
ctx.closePath(); // Create a line from (80,125) to the beginning of the path
ctx.stroke(); // Stroke the path outline*/

/*ctx.fillRect(25, 25, 100, 100); 
ctx.clearRect(0,0, 150, 150);
ctx.fillStyle = "red";
ctx.fillRect(25, 25, 100, 100);*/

ctx.beginPath(); // Create a path
ctx.arc(50, 50, 25, 0, 2*Math.PI, true); // Create an arc with center at (50,50), radius equal to 25px, start angle 90deg, ending angle 180deg and clockwise direction
ctx.stroke(); 