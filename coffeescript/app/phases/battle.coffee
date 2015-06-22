## Battle Phase
battle = (first, second) ->
  # Figure out who will attack first
  if people.indexOf(first) < people.indexOf(second)
    attacker = first
    defender = second
  else
    attacker = second
    defender = first

  console.log '%c BATTLE INITIATE: ' + attacker.name + ' vs ' + defender.name , 'background: #660033; color:#fff'

  # Loop through attacks until one of them is dead
  while defender.hp > 0 && attacker.hp > 0
    # Decide whether to use an item or attack
    attacker.attack(defender)
    if ( defender.hp > 0 )
      defender.attack(attacker)
    console.log attacker.name + '\'s HP: ' + attacker.hp + ' | ' + defender.name + '\'s HP: ' + defender.hp
