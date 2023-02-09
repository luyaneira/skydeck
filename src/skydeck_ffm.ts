import { bootstrapExtra } from "@workadventure/scripting-api-extra";

// Calling bootstrapExtra will initiliaze all the "custom properties"  
bootstrapExtra();

console.log('Script started successfully');

var soundConfig = {
    volume : 0.5,
    loop : false,
    rate : 1,
    detune : 1,
    delay : 0,
    seek : 0,
    mute : false
}

WA.onInit().then(() => {
    var elevatorSoundInit =  WA.sound.loadSound("../maps/resources/elevatorSound.mp3");
    elevatorSoundInit.play(soundConfig);
}).catch(e => console.error(e));