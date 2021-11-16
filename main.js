// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const hiHat = new Audio('sounds/hi-hat.mp3');
const kickDrum = new Audio('sounds/kick-drum.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3');

// This function is called every 600ms
function update() {
    setTick = 0;
    const metronomeCount = document.querySelector('.metronomeCount');
    const metronome = document.querySelector('#metronome');
    const hiHatId = document.querySelector('#hi-hat');
    const kickDrumId = document.querySelector('#kick-drum');
    const snareDrumId = document.querySelector('#snare-drum');
    const math = (setTick % 4) + 1;

    setTick++;
    if (metronome.checked) {
        if (setTick % 4 === 0) {
            tock.play();
        } else {
            // Play the 'tick' sound
            tick.play();
        }
    }
    if (hiHatId.checked) {
        hiHat.play();
    }
    if (snareDrumId.checked) {
        snareDrum.play();
    }
    if (kickDrumId.checked) {
        kickDrum.play();
    }
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);