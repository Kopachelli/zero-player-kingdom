## Slash attack
slash = (attacker , target) ->
  # Calculate the damage by subtracking this person's strength from the target
  dmg = (target.def - attacker.str - 1 ) * -1
  # If the result is less than 0, make it 0
  if dmg < 0 then dmg = 0
  # Subtract the damage from the target's HP
  target.hp -= dmg
  console.log '%c' + attacker.name + ' strikes ' + target.name + ' for ' + dmg + 'pts of damage!' , 'color: #660033 '
