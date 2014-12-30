## Battle Phase
battle = (attacker, defender) ->
  console.log '%c BATTLE INITIATE: ' + attacker.name + ' vs ' + defender.name , 'background: #660033; color:#fff'
  # Loop through attacks until one of them is dead
  while defender.hp > 0 && attacker.hp > 0
    attacker.attack(defender)
    if ( defender.hp > 0 )
      defender.attack(attacker)
    console.log attacker.name + '\'s HP: ' + attacker.hp + ' | ' + defender.name + '\'s HP: ' + defender.hp
