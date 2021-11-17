// Setup 'tick' sound
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3');
const hiHat = new Audio('sounds/hi-hat.mp3');
const kickDrum = new Audio('sounds/kick-drum.mp3');
const snareDrum = new Audio('sounds/snare-drum.mp3');

let setTick = 0;

// This function is called every 600ms
function update() {
    const metronomeCount = document.querySelector('.metronomeCount');
    const metronome = document.querySelector('#metronome');
    const hiHatId = document.querySelector('#hi-hat');
    const hiHatInput = document.querySelector('#hihat-number');
    const kickDrumId = document.querySelector('#kick-drum');
    const kickDrumInput = document.querySelector('#kick-drum-number');
    const snareDrumId = document.querySelector('#snare-drum');
    const snareDrumInput = document.querySelector('#snare-drum-number');
    const math = (setTick % 4) + 1;

    setTick++;
    if (setTick < 5) {
        metronomeCount.innerText = setTick;
    } else {
        setTick = 0;
    }
    if (metronome.checked) {
        if (setTick % 4 === 0) {
            tock.play();
        } else {
            // Play the 'tick' sound
            tick.play();
        }
    }
    if (hiHatId.checked) {
        if (Number(hiHatInput.value) === math) {
            hiHat.play();
        }
    }
    if (snareDrumId.checked) {
        if (Number(snareDrumInput.value) === math) {
        snareDrum.play();
        }
    }
    if (kickDrumId.checked) {
        if (Number(kickDrumInput.value) === math) {
            kickDrum.play();
        }
    }
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);