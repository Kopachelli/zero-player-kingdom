/// <reference path="attacks/punch.ts" />
/// <reference path="phases/battle.ts" />
/// <reference path="units/person.ts" />

console.log('ZERO PLAYER KINGDOM');
var zpkMsgBox = document.getElementById('zpk-message-box'); // The message box for displaying the game's messages

function zpk_init() {
  zpkMsgBox.innerHTML += "<p>Initializing...</p>";
  
  // Create the units
  var theknight:Person = new Person('The Knight');
  var theenemyknight:Person = new Person('The Enemy Knight');
  
  battle(theknight, theenemyknight);
  
  zpkMsgBox.innerHTML += "<p>Initialization complete.</p>";
}