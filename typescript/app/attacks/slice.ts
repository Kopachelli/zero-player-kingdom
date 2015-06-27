// Slice attack
// The attacker deals their strength +4 worth of damage to the defender
var slice = function(attacker: Person, target: Person) {
  // Calculate the damage this attack will do
  var dmg = attacker.str + 4;
  // Apply the damage to the targets hp
  target.hp -= dmg;
  
  zpkMsgBox.innerHTML += '<p class="battle">' + attacker.name + ' slices ' + target.name + ' for ' + dmg + 'pts of damage.<br> - ' + target.name + ' has ' + target.hp + 'hp.</p>';
}