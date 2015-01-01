## A Person is a unit that can be a character
# Create: johndoe = new Person "John Doe", {}
# Name (string) [required]
# Stats (object) [required]:
# DEF : Defense
# DEX : Dexterity
# HP: Hit Points
# INT: Intelligence
# STR : Strenght
# Inventory (array) : Array of objects the character holds
class Person
  constructor: (@name, stats) ->
    return console.warn 'People need a name!' if !@name
    return console.warn 'No stats provided for ' + @name + '!' if !stats

    @def = if typeof(stats.def) != 'undefined' then stats.def else Math.floor((Math.random() * 3) + 1)
    @dex = if typeof(stats.dex) != 'undefined' then stats.dex else Math.floor((Math.random() * 3) + 1)
    @hp = if typeof(stats.hp) != 'undefined' then stats.hp else Math.floor((Math.random() * 10) + 10)
    @int = if typeof(stats.int) != 'undefined' then stats.int else Math.floor((Math.random() * 5) + 1)
    @str = if typeof(stats.str) != 'undefined' then stats.str else Math.floor((Math.random() * 8) + 2)
    @inventory = if typeof(stats.inventory) != 'undefined' then stats.inventory else []
    @attacks = [
      punch
    ]
    # Add this person to the person list
    people.push(@)
    @logConstruction()

  # Log it
  logConstruction: ->
    console.groupCollapsed 'CREATED NEW PERSON: ' + @name
    console.log 'DEF: ' + @def
    console.log 'DEX: ' + @dex
    console.log 'HP: ' + @hp
    console.log 'INT: ' + @int
    console.log 'STR: ' + @str
    console.log 'Inventory: '
    console.dir @inventory
    console.groupEnd()


  hand: ''
  body: ''

  attack: (target) ->
    attackOptions = @attacks
    # console.log 'This hand attacks: ' + @hand.attacks
    if @hand.attacks then attackOptions = attackOptions.concat(@hand.attacks)

    # Review the attack options for this person
    # console.debug @name + ' attack options: '
    # console.dir attackOptions

    # Select a random attack from my attacks and equipment
    chosenAttack = Math.floor((Math.random() * attackOptions.length))
    # console.debug 'Using attack ' + chosenAttack

    # Call the attack function
    attackOptions[chosenAttack](@, target)
