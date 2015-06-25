// Kick attack
// The attacker deals their strength +2 worth of damage to the defender
var kick = function(attacker: Person, target: Person) {
  // Calculate the damage this attack will do
  var dmg = attacker.str + 2;
  // Apply the damage to the targets hp
  target.hp -= dmg;
  
  zpkMsgBox.innerHTML += '<p class="battle">' + attacker.name + ' kicks ' + target.name + ' for ' + dmg + 'pts of damage.<br> - ' + target.name + ' has ' + target.hp + 'hp.</p>';
}