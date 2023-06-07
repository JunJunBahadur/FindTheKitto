let catX, catY = 0;
generateCat();

setInterval(movement, 600);


function movement() {
    window.addEventListener('mousemove', mouseCoordinates);
}

function generateCat() {
    //document.getElementById('cat').style.visibility = 'hidden';
    
    document.getElementById('catImg').src='cat.jpg';
    let x = Math.floor((Math.random() * screen.width) + 1);
    let y = Math.floor((Math.random() * screen.height) + 1);
    
    if (y>250) {
        y = y-250;
    }
    if (x>200) {
        x = x-200;
    }
    
    document.getElementById('cat').style.marginLeft = x+'px';
    document.getElementById('cat').style.marginTop = y+'px';
    
    catX = x+50;
    catY = y+50;

}

function found(){
    document.getElementById('cat').style.visibility = "visible";
    console.log('hello');
}

function mouseCoordinates(event){
    document.getElementById('axis').innerHTML='X:'+event.clientX+' Y:'+event.clientY;

    let a = catX - event.clientX;
    let b = catY - event.clientY;

    let distance = Math.sqrt( a*a + b*b );
    window.removeEventListener('mousemove', mouseCoordinates);
    console.log(distance);
    playAudio(distance);
}

function playAudio(distance) {
    var audio = new Audio('cat.mp3');
    if (distance>1000) {
        audio.volume = 0.1;
    } else if (distance>700 && distance<1000){
        audio.volume = 0.2;
    } else if (distance>400 && distance<700){
        audio.volume = 0.4;
    } else if (distance>100 && distance<400){
        audio.volume = 0.7;
    } else {
        audio.volume = 1;
    }
    audio.play();
}