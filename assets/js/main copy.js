const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

//Declare canvas size  
const CANVAS_WITH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;


//Player Image 
const playerImage = new Image();
playerImage.src='./assets/img/shadow_dog.png';

const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 0;
let gameFrame = 0;
const staggerFrame = 5;

function animate(){
    /*
        This method expect 4 arguments that messure the area that is going to be clr
    */
    ctx.clearRect(0,0,CANVAS_WITH,CANVAS_HEIGHT);
    //ctx.fillRect(50,50,100,100);
    //ctx.drawImage(image,sx,sy,sw,sh,dx,dy,dw,dh); 

    ctx.drawImage(playerImage,frameX * spriteWidth,frameY * spriteHeight,spriteWidth,spriteHeight,0,0,spriteWidth,spriteHeight );
    //Remender opperation % 
    if( gameFrame % staggerFrame == 0){
        if(frameX < 6) frameX++;
        else frameX = 0;
    }
    gameFrame++;
    requestAnimationFrame(animate);
}


animate();
