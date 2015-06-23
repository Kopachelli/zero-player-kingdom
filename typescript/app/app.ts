/// <reference path="attacks/punch.ts" />
/// <reference path="definitions/people.ts" />
/// <reference path="phases/battle.ts" />
/// <reference path="units/person.ts" />
/// <reference path="utilities/sort.ts" />

console.log('ZERO PLAYER KINGDOM');

// Generate the global definitions, variables, DOM elements, etc
var population = new People();
var zpkMsgBox = document.getElementById('zpk-message-box'); // The message box for displaying the game's messages

function zpk_init() {
  zpkMsgBox.innerHTML += "<p>Initializing...</p>";
  
  // Create the units
  var theknight:Person = new Person('The Knight');
  var theenemyknight:Person = new Person('The Enemy Knight');
  
  // Sort the People List
  population.sortPeople();
  
  // Initiate the battle
  battle( population.getPerson(0), population.getPerson(1) );
  
  zpkMsgBox.innerHTML += "<p>Initialization complete.</p>";
}