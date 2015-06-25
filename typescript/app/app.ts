/// <reference path="attacks/punch.ts" />
/// <reference path="attacks/kick.ts" />

/// <reference path="definitions/people.ts" />

/// <reference path="phases/battle.ts" />

/// <reference path="units/person.ts" />
/// <reference path="units/knight.ts" />

/// <reference path="utilities/sort.ts" />

console.log('ZERO PLAYER KINGDOM');

// Generate the global definitions, variables, DOM elements, etc
var population = new People();
var zpkMsgBox = document.getElementById('zpk-message-box'); // The message box for displaying the game's messages

function zpk_init() {
  zpkMsgBox.innerHTML += "<p>Initializing...</p>";
  
  // Create the units
  var theknight:Person = new Knight('The Knight', {});
  var theenemyknight:Person = new Knight('The Enemy Knight', {
    str: 3, 
    def: 3, 
    dex: 7, 
    hp: 20
  });
  
  // Sort the People List
  population.sortPeople();
  
  // Initiate the battle
  battle( population.getPerson(0), population.getPerson(1) );
  
  zpkMsgBox.innerHTML += "<p>Initialization complete.</p>";
}