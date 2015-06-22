console.log('ZERO PLAYER KINGDOM');
var zpkMsgBox = document.getElementById('zpk-message-box'); // The message box for displaying the game's messages

// A Person unit
// Create: var johndoe = new Person("John Doe");
// Name (string) [required]
// DEF : Defense
// HP: Hit Points
// STR : Strength
interface PersonInterface {
  def?: number;
  hp: number;
  name: string;
  str?: number;
}
class Person implements PersonInterface {
  def: number;
  hp: number;
  name: string;
  str: number;
  
  constructor(name:string, def?:number, hp?:number, str?:number) {
    this.name = name;
    // Set the strength attribute (2-6)
    if (str) {
      this.str = str;
    } else {
      this.str = Math.floor((Math.random() * 4) + 2);
    } 
    // Set the defense attribute (1-4)
    if (def) {
      this.def = def;
    } else {
      this.def = Math.floor((Math.random() * 3) + 1);
    } 
    // Set the hit points for this person (15-25)
    if (hp) {
      this.hp = hp;
    } else {
      this.hp = Math.floor((Math.random() * 10) + 14);
    }
    
    zpkMsgBox.innerHTML += '<div>Created new Person: ' + this.name
                        + '<ul>'
                        + '<li>Defense: ' + this.def + '</li>'
                        + '<li>HP: ' + this.hp + '</li>'
                        + '<li>Strength: ' + this.str + '</li>'
                        + '</ul>'
                        + '</div>';
  }
}

// Punch attack
// The attacker deals their strength worth of damage to the defender
var punch = function(attacker: Person, target: Person) {
  // Calculate the damage this attack will do
  var dmg = attacker.str;
  // Apply the damage to the targets hp
  target.hp -= dmg;
  
  zpkMsgBox.innerHTML += '<p class="battle">' + attacker.name + ' punches ' + target.name + ' for ' + dmg + 'pts.<br> - ' + target.name + ' has ' + target.hp + 'hp.</p>';
}

// Battle phase
// Two units attack each other until one runs out of hp
var battle = function(attacker: Person, defender: Person) {
  // Start the attack loop
  while ( defender.hp > 0 && attacker.hp > 0 ) {
    // Attacker goes first
    punch(attacker, defender);
    // Check if the defender is still alive
    if ( defender.hp > 0 ) {
      // The defender is still standing so the defender attacks
      punch(defender, attacker);
    }
  }
  
  // Determine who won the battle
  var battleWinner = defender.name;
  if ( defender.hp <= 0 ) {
    battleWinner = attacker.name;
  }
  // Inform the user who won the battle
  zpkMsgBox.innerHTML += '<p class="battle">Battle is over. ' + battleWinner + ' wins.'; 
}

function zpk_init() {
  zpkMsgBox.innerHTML += "<p>Initializing...</p>";
  
  // Create the units
  var theknight:Person = new Person('The Knight');
  var theenemyknight:Person = new Person('The Enemy Knight');
  
  battle(theknight, theenemyknight);
  
  zpkMsgBox.innerHTML += "<p>Initialization complete.</p>";
}