// Battle phase
// Two units attack each other until one runs out of hp
var battle = function(attacker: Person, defender: Person) {
  // Start the attack loop
  while ( defender.hp > 0 && attacker.hp > 0 ) {
    // Attacker goes first
    attacker.attacks[ Math.floor((Math.random() * attacker.attacks.length)) ](attacker, defender);
    // Check if the defender is still alive
    if ( defender.hp > 0 ) {
      // The defender is still standing so the defender attacks
      defender.attacks[ Math.floor((Math.random() * defender.attacks.length)) ](defender, attacker);
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
