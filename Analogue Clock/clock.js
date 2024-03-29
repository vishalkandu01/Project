var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d'); //ctx stand for context
var radius = canvas.height/2; // By using the canvas height to calculating the clock radius so, it makes the clock work for all canvas sizes
ctx.translate(radius, radius); // It's remap with the center of the canvas
radius = radius * 0.90//reduce clock redius to 90%
setInterval(drawClock, 1000)// drawClock(); 

function drawClock() { // to save the time
    drawface(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
}

function drawface(ctx, radius) {
    var grad;
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'black';
    ctx.fill();
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0, 0, radius*1.05);
    grad.addColorStop(0, '#33f');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#33f');
    ctx.strokeStyle = grad;
    ctx.lineWidth = radius*0.1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = '#33f';
    ctx.fill();
}

function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius*0.15 + "px arial";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for(num = 1; num < 13; num++) {
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    }
}

function drawTime(ctx, radius) {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    hour = hour%12;
    hour = (hour*Math.PI/6)*
    (minute*Math.PI/(6*60))*
    (second*Math.PI/(6*60*60));
    drawHand(ctx, hour, radius*0.5, radius*0.07);

    minute = (minute*Math.PI/30) + (second*Math.PI/(30 * 60));
    drawHand(ctx, minute, radius*0.8, radius*0.07);
    
    second=(second*Math.PI/30);         
    drawHand(ctx, second, radius*0.9, radius*0.02);
}

function drawHand(ctx, pos, length, width) {
    ctx. beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
}