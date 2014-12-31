console.log 'ZERO PLAYER KINGDOM'

# Array of all the people
people = []

init = () ->
  console.debug 'initializing...'
  # Create items
  knightsword = new BasicSword "The Knight's Sword", {}
  # Create units
  theknight = new Knight "The Knight", { inventory:[knightsword] }
  theenemyknight = new Knight "The Enemy Knight", {def:1}
  # Set the turn order
  setTurnOrder()

  # Mods
  theknight.str += 1
  console.log 'The Knight has new str: ' + theknight.str

  console.group 'Item info:'
  console.log 'sword strike: ' + knightsword.attacks
  console.log 'The Knight inventory: '
  console.dir theknight.inventory
  console.group 'The Knight inventory attacks: '
  for i in theknight.inventory
    console.log i.attacks
  console.groupEnd()
  console.log 'The Knight hand: ' + theknight.hand
  theknight.hand = knightsword #equip the knight
  console.log 'The Knight hand (after equipping): ' + theknight.hand
  console.dir theknight.hand
  console.log 'The Knight sword (after equipping): ' + theknight.hand.name
  console.log 'The Knight sword attacks: ' + theknight.hand.attacks
  console.groupEnd()

  # Battle
  battle(theknight , theenemyknight)

  console.debug 'init complete'
