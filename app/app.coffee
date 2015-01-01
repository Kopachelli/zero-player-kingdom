console.log 'ZERO PLAYER KINGDOM'

# Array of all the people
people = []

init = () ->
  console.debug 'initializing...'
  # Create items
  knightsword = new BasicSword "The Knight's Sword", {}
  knightarmor = new BasicArmor "The Knight's Armor", {}
  # Create units
  theknight = new Knight "The Knight", { inventory:[knightsword] }
  theenemyknight = new Knight "The Enemy Knight", {def:1}
  # Set the turn order
  setTurnOrder()

  # Mods
  theknight.str += 1
  console.log 'The Knight has new str: ' + theknight.str

  console.groupCollapsed 'Item info:'
  console.log 'The Knight inventory: '
  console.dir theknight.inventory
  console.group 'The Knight inventory attacks: '
  for i in theknight.inventory
    console.log i.attacks
  console.groupEnd()
  console.log 'The Knight hand: ' + theknight.hand
  # Equip the knight
  theknight.hand = knightsword
  theknight.body = knightarmor
  console.log 'The Knight equipment: HAND: ' + theknight.hand.name + ' | BODY: ' + theknight.body.name
  console.groupEnd()

  # Battle
  battle(theknight , theenemyknight)

  console.debug 'init complete'
