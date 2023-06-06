window.addEventListener('mousemove', mouseCoordinates);

let x = Math.floor((Math.random() * screen.width) + 1);
let y = Math.floor((Math.random() * screen.height) + 1);

x = x-200;
y = y-250;

document.getElementById('cat').style.paddingLeft = x+'px';
document.getElementById('cat').style.paddingTop = y+'px';

let catX = x+50;
let catY = y+50;


document.getElementById('cat').src='cat.jpg';


console.log('x:'+screen.width+' y:'+screen.height);
console.log('x:'+x+' y:'+y);
function mouseCoordinates(event){
    document.getElementById('axis').innerHTML='X:'+event.clientX+' Y:'+event.clientY;

    let a = catX - event.clientX;
    let b = catY - event.clientY;

    let distance = Math.sqrt( a*a + b*b );
    console.log(distance);
}