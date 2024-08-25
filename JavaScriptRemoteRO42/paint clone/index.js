const canvas = document.getElementById("graphics");
const ctx = canvas.getContext('2d');

const brushSize = document.querySelector('input[type="range"]');
const colorPicker = document.querySelector('input[type="color"]');
const penButton = document.querySelector('button:first-of-type');
const eraseButton = document.querySelector('button:nth-of-type(2)');
const clearButton = document.querySelector('button:last-of-type');
canvas.width = window.innerWidth-40;
canvas.height = window.innerHeight * 0.85;
ctx.lineWidth = 5;
ctx.strokeStyle = 'black';
ctx.lineCap = 'round';
let isDrawing=false;

function startPosition(e) {
    isDrawing = true;
    draw(e);
}

function endPosition() {
    isDrawing=false;
    ctx.beginPath();
}

function draw(e) {
    if(!isDrawing) return;
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = brushSize.value;
     /*
    e.clientX, e.clientY give the horizontal(X) and vertical(Y) position 
    of the mouse pointer relative to the browser window.
    canvas.offsetLeft-This gives the distance between the left edge of the canvas and the left edge of the viewport (i.e., the visible part of the page in the browser)
    This adjustment is made to get the correct X-coordinate relative to the canvas itself, rather than the entire window. */
    ctx.lineTo(e.clientX-canvas.offsetLeft, e.clientY-canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX-canvas.offsetLeft, e.clientY-canvas.offsetTop);
}

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);
brushSize.addEventListener("input" , () => {
    ctx.lineWidth = brushSize.value;
});

clearButton.addEventListener("click" , () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

penButton.addEventListener("click" , () => {
    ctx.strokeStyle = colorPicker.value;
    ctx.globalCompositeOperation = 'source-over';
});

eraseButton.addEventListener("click" , () => {
    ctx.strokeStyle = "rgba(0,0,0,0)";
    ctx.globalCompositeOperation = 'destination-out';
});

