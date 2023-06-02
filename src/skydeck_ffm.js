import { bootstrapExtra } from "@workadventure/scripting-api-extra"

console.log("Script started successfully")

bootstrapExtra();

WA.onInit().then(async () => {
  console.log('Position: ', await WA.player.getPosition());

  playSound();

  WA.state.onVariableChange("npc1").subscribe(async (value) => {
    console.log(WA.state.npc1)
    WA.room.setTiles([
      { x: WA.state.npc1.x2, y: WA.state.npc1.y2, tile: null, layer: "roomAPI" },
      { x: WA.state.npc1.x1, y: WA.state.npc1.y1, tile: "movingObject", layer: "roomAPI" }]);
  })

  WA.state.onVariableChange("npc2").subscribe(async (value) => {
    console.log(WA.state.npc2)
    WA.room.setTiles([
      { x: WA.state.npc2.x2, y: WA.state.npc2.y2, tile: null, layer: "roomAPI" },
      { x: WA.state.npc2.x1, y: WA.state.npc2.y1, tile: "movingObject", layer: "roomAPI" },]);
  })
}).catch(e => console.error(e));

function playSound() {
  var elevatorSoundInit = WA.sound.loadSound("../maps/resources/elevatorSound.mp3");
  elevatorSoundInit.play();
}