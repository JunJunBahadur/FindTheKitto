let catX, catY = 0;
let distance = 1200;
let won = false;
let intervalId;
localStorage.setItem("score", 0);

function gameEnd() {
    document.getElementById('desc').style.visibility = 'visible';
    document.getElementById('desc').innerHTML='You found the cat!';
    document.getElementById('play').style.visibility = 'visible';
    document.getElementById('play').innerHTML = 'Play again';
}

function gameStart() {
    document.getElementById('cat').style.pointerEvents = 'auto';
    document.getElementById('desc').style.visibility = 'hidden';
    document.getElementById('play').style.visibility = 'hidden';
    document.getElementById('cat').style.visibility = 'visible';
    generateCat();
    intervalId = setInterval(movement, 400);
}

function setScore() {
    document.getElementById('score').innerHTML='score:'+localStorage.getItem('score');
}

function movement() {
    window.addEventListener('mousemove', mouseCoordinates);
}

function generateCat() {
    document.getElementById('catImg').style.visibility = 'hidden';
    
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
    clearInterval(intervalId);
    document.getElementById("cat").style.pointerEvents = "none";
    document.getElementById('catImg').style.visibility = "visible";
    let score = Number(localStorage.getItem("score"));
    score = score+1;
    localStorage.setItem("score", score);
    setScore();
    console.log('hello');
    gameEnd();
}

function mouseCoordinates(event){
    document.getElementById('axis').innerHTML='X:'+event.clientX+' Y:'+event.clientY;
    
    let a = catX - event.clientX;
    let b = catY - event.clientY;
    
    distance = Math.sqrt( a*a + b*b );
    window.removeEventListener('mousemove', mouseCoordinates);
    playAudio(distance);
    console.log(distance);
}

function playAudio(distance) {
    var audio = new Audio('cat.mp3');
    var audioFast = new Audio('cat(1).mp3');
    
    if (distance<200) {
        audioFast.play();
        return;
    }

    if (distance>1000) {
        audio.volume = 0.1;
    } else if (distance>700 && distance<1000){
        audio.volume = 0.2;
    } else if (distance>400 && distance<700){
        audio.volume = 0.4;
    } else {
        audio.volume = 0.7;
    } 
    audio.play();
}