// 웨이브가 들어가는 페이지 공통 애니메이션
window.requestAnimFrame = function()
{
	return (
		window.requestAnimationFrame       || 
		window.webkitRequestAnimationFrame || 	
		window.mozRequestAnimationFrame    || 
		window.oRequestAnimationFrame      || 
		window.msRequestAnimationFrame     || 
		function(/* function */ callback){
			window.setTimeout(callback, 1000 / 60);
		}
	);
}();
function getRandomFloat(max) {
  return Math.random() * Math.floor(max);
}

function getAmplitudeRandom(amplitude) {
  return amplitude * getRandomFloat(2)
}

var guiControls = new function(){

	this.period = 1;
	this.amplitude = 25;
	this.waveSpeed = 5;
}
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.height = 280;
canvas.width = window.innerWidth;

var start = {
	x: 0,
	y : ( document.body.clientHeight / 2 )
}

var amplitude = 600;
var frequency = 6;
var segments  = 50;
var interval  = frequency / segments;
var dampener = 6;
var rippleOffset = 20;
var time = Date.now();
var dateCoeff = Date.now()*0.0000000000005;
var amplituderef;
var sinus = new CustomEase("sinus", "M0.4,181.7C292.3,67.5,380.2,1,532.2,1c215,0,266.6,156,637.2,156 s596.3-139.6,959.9-139.6C2718.8,17.4,3348,189,3792.8,189");
var sinusRef = new CustomEase("sinusRef", "M0.2,214.2C292.1,100,393.4,0.5,532.1,0.5s266.6,199,637.2,199s511.1-149.6,959.9-149.6 s1252.1,164.2,1759.1,164.2");

var startBis = {
	x: 0,
	y : 140
}

  draw_line = function( i, amplitude, offset, start, lineWidth, dampener, sin ){
  
    ctx.beginPath();
    ctx.moveTo( start.x, start.y + amplituderef * Math.sin( x / dateCoeff + ( i  / getRandomFloat(4) ) ) );
    ctx.moveTo( start.x, start.y + guiControls.amplitude * Math.sin( x / guiControls.period + ( i  / 5 ) ) );
    ctx.lineWidth = lineWidth || 2;
    ctx.strokeStyle = '#e6e6e6';

    for(var x = 0; x < segments; x++) {
      var norm = 1 - x * segments;
      var t = x / segments;
      dateCoeff = Date.now()*0.0000000000005;
      
      amplituderef = amplitude * 1 + (Math.sin(dateCoeff) * Math.random()) / dampener;
      
      var y = amplituderef * Math.sin( x / (1 + sin.getRatio(norm)) + ( i / 8 ) +  sinus.getRatio(norm));
    	ctx.lineTo( start.x + x*segments,  start.y + y);

    }

    ctx.stroke(); 
}

var i = 0;

function render(){
	ctx.clearRect(0, 0, canvas.width, canvas.height );
  
	draw_line( i, '20', '0.5', start, '1', '1', sinus );
  draw_line( i, '30', '10', startBis, '0.5', '5', sinusRef );
  
  requestAnimationFrame( render );
  
  i += guiControls.waveSpeed / 15 ;
    
}

render();