console.log('hello American People')

let favColor = prompt('Whats your favorite Color?: ');

if(favColor == 'red white blue'){
    document.write('Welcome Brother ' );
} else {
    document.body.style.background=favColor
}

let loki = confirm("Is this page getting you down? If so click 'OK' to be taken away from this page. Click 'Cancel' to stay and continue reading.")

if(loki) {
window.location.href="https://youtu.be/dQw4w9WgXcQ"
} else {
alert("Good, people are dying be an adult")
}

function changeToRed(){
    document.body.style.background="red"
}

function changeToBlue(){
    document.body.style.background="blue"
}

function changeToWhite(){
    document.body.style.background="white"
}

function snowFlakeTest (){
    window.setInterval(changeToRed, 1000)
    window.setInterval(changeToWhite, 1500)
    window.setInterval(changeToBlue, 2000)
}
