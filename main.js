// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const hiHat = new Audio('sounds/hi-hat.mp3');
const kickDrum = new Audio('sounds/kick-drum.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3');

// This function is called every 600ms
function update() {
    const metronomeCount = document.querySelector('.metronomeCount');

    // Play the 'tick' sound
    tick.play();
}

function secondSound () {
    tock.play();
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
    setInterval(secondSound, 2600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
