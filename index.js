let catX, catY = 0;
generateCat();


window.addEventListener('mousemove', mouseCoordinates);


function generateCat() {
    document.getElementById('cat').src='cat.jpg';
    let x = Math.floor((Math.random() * screen.width) + 1);
    let y = Math.floor((Math.random() * screen.height) + 1);
    
    if (y>250) {
        y = y-250;
    }
    if (x>200) {
        x = x-200;
    }
    
    document.getElementById('cat').style.paddingLeft = x+'px';
    document.getElementById('cat').style.paddingTop = y+'px';
    
    catX = x+50;
    catY = y+50;
}

function mouseCoordinates(event){
    document.getElementById('axis').innerHTML='X:'+event.clientX+' Y:'+event.clientY;

    let a = catX - event.clientX;
    let b = catY - event.clientY;

    let distance = Math.sqrt( a*a + b*b );
    console.log(distance);
    //playAudio(distance);
}

function playAudio(distance) {
    var audio = new Audio('meow.mp3');
    audio.play();
}