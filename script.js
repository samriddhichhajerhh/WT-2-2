
//let fft
const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio(`tunes/a.wav`); 

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; 
    audio.play(); // playing audio
    const clickedKey = document.querySelector(`[data-key="${key}"]`); 
    clickedKey.classList.add("active"); 
    setTimeout(() => { 
        clickedKey.classList.remove("active");
    }, 150);
}

// function setup() {
//     createCanvas(400, 400);
    

//     fft = new p5.FFT();
//   }
  
//   function draw() {
//     background(255, 10);
//     let waveform = fft.waveform();
//     let spectrum = fft.analyze();
//     for (let i = 0; i <waveform.length; i++){
//         fill (0, 0, 255);
        
//         let x = map (i, 0, waveform.length, 0, width);
//         let y = map (waveform[i], -1, 1, height, height / 2)
//         circle(x, y, 5)
//       }
      
//       let size = map(level, 0, 1, 0, width / 2);
//       noStroke ();
//       fill (186, 184, 108);
//       circle (width / 2, height / 2, size)
//   }
    

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); 
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    audio.volume = e.target.value;
}

const showHideKeys = () => {
  
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
   
    if(allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);

