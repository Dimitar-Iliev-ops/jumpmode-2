// Creating variables
var myX = 0, myY = 0,updates=0,nagorelipadam,dy=1;
function update() {
    // Napisanoto tuk se izpulnqva otnovo i otnovo mnogo puti v sekunda
	
	
	myY=myY+dy
	
    if(myY>=600-110){	
		myY=600-110
}
	
}
function draw() {
    // tuk naprogramirai kakvo da se risuva
    drawImage(backCake,0, 0, 800, 600);
    drawImage(femaleAction,myX,myY,80,110);
};
function keyup(key) {
	dy= -dy 
	
	
    // Show the pressed keycode in the console
    console.log("Pressed", key);
};
function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
};
