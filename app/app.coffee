console.log 'ZERO PLAYER KINGDOM'

# Array of all the people
people = []
# Array of all items
items = []

init = () ->
  console.debug 'initializing...'
  # Create items
  knightsword = new BasicSword "The Knight's Sword", {}
  knightarmor = new BasicArmor "The Knight's Armor", {}
  potion1 = new BasicHealingPotion "Potion 1", {}
  # Create units
  theknight = new Knight "The Knight", { inventory:[knightsword, potion1] }
  theenemyknight = new Knight "The Enemy Knight", {def:1}
  # Set the turn order
  setTurnOrder()

  # Mods
  console.group 'Mods'
  theknight.hasItem = true
  theknight.updateItemStatus()
  theenemyknight.updateItemStatus()
  theknight.useItem(potion1)
  console.groupEnd()

  console.groupCollapsed 'The Knight equipment info:'
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

  # Items
  console.group 'Global Items'
  for i in items
    console.log i.name

  console.groupEnd()

  # Battle
  battle(theknight , theenemyknight)

  console.debug 'init complete'
