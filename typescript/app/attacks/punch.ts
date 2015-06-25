// Punch attack
// The attacker deals their strength worth of damage to the defender
var punch = function(attacker: Person, target: Person) {
  // Calculate the damage this attack will do
  var dmg = attacker.str;
  // Apply the damage to the targets hp
  target.hp -= dmg;
  
  zpkMsgBox.innerHTML += '<p class="battle">' + attacker.name + ' punches ' + target.name + ' for ' + dmg + 'pts of damage.<br> - ' + target.name + ' has ' + target.hp + 'hp.</p>';
}