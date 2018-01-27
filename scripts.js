var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var z = 3.15
var xcu = canvas.width/2
var ycu = 0
var lives = 5
var score = 0 
var eggy = 20
var eggx = 20
var eggSpeedy = 5;
var eggy1 = 100
var eggx1 = 90
var eggSpeedy1 = 5;
var eggy2 = 80
var eggx2 = 321
var eggSpeedy2 = 5;
var hit = canvas.width/2 -50;
document.onkeydown = checkKey;
window.onload = function (){
 	const FPS = 30; 
  	setInterval(function(){drawEverything(); falling();falling1(); falling2();}, 1000 / FPS);
}


function checkKey(e) {

    e = e || window.event;
    if (e.keyCode == '37' && hit > 0) {
        xcu = xcu -1
		z = z - 0.15
		hit = hit - 6
		if (z < 3.15) {
			z = 4.6
			xcu = xcu - 50
		}
    }
    else if (e.keyCode == '39' && hit +50 < canvas.width) {
        xcu = xcu + 1
		z = z + 0.15
		hit = hit + 6
		if (z>4.6) {
			z = 3.15
			xcu = xcu + 50
		}
    }
}

function falling(){
	if (eggy > canvas.height - 150){
		 if(eggx > hit && eggx < hit + 50){
		 	lives--
		 	if (score > 10){
		 		score-= 10
		 	}else{
		 		score = 0
		 	}
			eggSpeedy++
		 }else{
		 	if (lives < 1){
		 		eggSpeedy = 0;
			}
		}	
	eggy = 20;
	eggx = Math.floor((Math.random()*canvas.width)+10)

	}else{
		eggy += eggSpeedy
		if (lives > 0) {
			// to add to the score while the game is playing
			score += 0.01
		}
	}
}
function falling1(){
	if (eggy1 > canvas.height - 150){
		 if(eggx1 > hit && eggx1 < hit + 50){
		 	lives--
			eggSpeedy1++
		 	if (score > 10){
		 		score-= 10
		 	}else{
		 		score = 0
		 	}
		 }else{
		 	if (lives < 1){
		 		text(100, 100, "white", "Game Over");
		 		eggSpeedy1 = 0;
			}
		}	
	eggy1 = 20;
	eggx1 = Math.floor((Math.random()*canvas.width)+10)

	}else{
		eggy1 += eggSpeedy1
	}
}
function falling2(){
	if (eggy2 > canvas.height - 150){
		 if(eggx2 > hit && eggx2 < hit + 50){
		 	lives--
			eggSpeedy2++
		 	if (score > 10){
		 		score-= 10
		 	}else{
		 		score = 0
		 	}
		 }else{
		 	if (lives < 1){
		 		text(100, 100, "white", "Game Over");
		 		eggSpeedy2 = 0;
			}
		}	
	eggy2 = 20;
	eggx2 = Math.floor((Math.random()*canvas.width)+10)

	}else{
		eggy2 += eggSpeedy2
	}
}


function drawEverything() {
	Rect(0, 0, canvas.width, canvas.height, "teal");
 	images('ground.png', 0, canvas.height-120)
 	RotRect(0,canvas.height-100,50,50,"orange", z, xcu, ycu)
 	circle(eggx, eggy, 20, 'red')
	circle(eggx1, eggy1, 20, 'red')
	circle(eggx2, eggy2, 20, 'red')
 	text(100, 100, "black", lives)
 	text(canvas.width-100, 100, "black", Math.round(score))
}

function RotRect(x, y, width, height, col, rot,xx,yy){
	context.translate((x+xx),(y+yy));
	context.rotate(rot);
	Rect(0,0,width,height, col);
	context.rotate(-rot);
	context.translate(-(x+xx), -(y+yy));
}
function images(url, x, y){
	var img = new Image;
	img.src = url
	context.drawImage(img, x, y)
}

function Rect(leftX, topY, width, height, drawColor) {
	context.fillStyle = drawColor;
	context.fillRect(leftX, topY, width, height);
}
function circle(centerx, centery, rad, drawColor) {
	context.fillStyle = drawColor;
	context.beginPath();
	context.arc(centerx, centery, rad, 0, Math.PI*2, true);
	context.fill();
}
function text(leftx, topy, drawColor, text) {
	context.fillStyle = drawColor;
	context.font = "20px sans serif"
	context.fillText(text, leftx, topy)
}