const tickRate = 1000 / 30; // 30 FPS
let clickStrength = 1;
let score = 100;

let pitchfork = new Building('pitchfork', 0.1, 15);
let potatofarmer = new Building('potatofarmer', 1, 100);

let tractor1 = new SwoleArms('tractor I', 100, pitchfork);

function scorePlusPlus() {
    score += clickStrength;
}

function incScore() {
    score += pitchfork.cps
    score += potatofarmer.cps
}

function updateButtons() {
    pitchfork.buttonState();
    potatofarmer.buttonState();
    tractor1.buttonState();
}

function updatePage() {
    incScore();
    updateButtons();
    document.getElementById('score').innerHTML =
        '$' + Math.floor(score).toLocaleString();
}

setInterval(updatePage, tickRate);
