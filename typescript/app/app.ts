/// <reference path="attacks/kick.ts" />
/// <reference path="attacks/punch.ts" />
/// <reference path="attacks/slice.ts" />

/// <reference path="definitions/people.ts" />
/// <reference path="definitions/items.ts" />

/// <reference path="phases/battle.ts" />

/// <reference path="units/person.ts" />
/// <reference path="units/knight.ts" />

/// <reference path="items/item.ts" />
/// <reference path="items/basic-potion.ts" />
/// <reference path="items/basic-sword.ts" />

/// <reference path="utilities/sort.ts" />

console.log('ZERO PLAYER KINGDOM');

// Generate the global definitions, variables, DOM elements, etc
var population = new People();
var items = new Items();
var zpkMsgBox = document.getElementById('zpk-message-box'); // The message box for displaying the game's messages

function zpk_init() {
  zpkMsgBox.innerHTML += "<p>Initializing...</p>";
  
  // Create items
  var basicsword:BasicSword = new BasicSword('Basic Sword', {});
  var basicpotion:BasicPotion = new BasicPotion('Basic Potion');
  
  // Create the units
  var theknight:Knight = new Knight('The Knight', {});
  var theenemyknight:Knight = new Knight('The Enemy Knight', {
    str: 3, 
    def: 3, 
    dex: 7, 
    hp: 20
  });
  
  // Equip the units
  theknight.equip(basicsword);
  
  // Use items
  theknight.use(basicpotion);
  
  // Sort the People List
  population.sortPeople();
  
  zpkMsgBox.innerHTML += "<p>Initialization complete.</p>";
  
  // Start the battle phase
  battle( population.getPerson(0), population.getPerson(1) );
}