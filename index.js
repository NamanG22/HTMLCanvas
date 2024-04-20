const canvas = document.querySelector('#draw');
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth=100;
ctx.strokeStyle = '#BADA55'
let lastx = 0;
let lasty = 0;
let isDrawing = false;
let hue = 0;
let w=100;
let inc = -1;
function draw(d) {
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue},100%,50%)`;
    ctx.lineWidth=w;
    ctx.beginPath();
    ctx.moveTo(lastx,lasty);
    ctx.lineTo(d.offsetX,d.offsetY);
    ctx.stroke();
    console.log(d);
    [lastx,lasty] = [d.offsetX,d.offsetY];
    hue++;
    w+=inc;
    if(w==0) inc=1;
    if(w==100) inc=-1;
}
document.addEventListener('mousemove',draw);
document.addEventListener('mousedown',d=>{
    isDrawing=true;
    [lastx,lasty] = [d.offsetX,d.offsetY];
});
document.addEventListener('mouseup',d=>{
    isDrawing=false;
});
