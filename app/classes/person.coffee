## A Person is a unit that can be a character
# Create: johndoe = new Person "John Doe", {}
# Name (string) [required]
# Stats (object) [required]:
# DEF : Defense
# DEX : Dexterity
# HP: Hit Points
# INT: Intelligence
# STR : Strenght
class Person
  constructor: (@name, stats) ->
    return console.warn 'People need a name!' if !@name
    return console.warn 'No stats provided!' if !stats
    @def = if typeof(stats.def) != 'undefined' then stats.def else Math.floor((Math.random() * 3) + 1)
    @dex = if typeof(stats.dex) != 'undefined' then stats.dex else Math.floor((Math.random() * 3) + 1)
    @hp = if typeof(stats.hp) != 'undefined' then stats.hp else Math.floor((Math.random() * 10) + 10)
    @int = if typeof(stats.int) != 'undefined' then stats.int else Math.floor((Math.random() * 5) + 1)
    @str = if typeof(stats.str) != 'undefined' then stats.str else Math.floor((Math.random() * 8) + 2)
    # Add this person to the person list
    people.push(@)
    # Log it
    console.groupCollapsed 'CREATED NEW PERSON: ' + @name
    console.log 'DEF: ' + @def
    console.log 'DEX: ' + @dex
    console.log 'HP: ' + @hp
    console.log 'INT: ' + @int
    console.log 'STR: ' + @str
    console.groupEnd()

  attack: (target) ->
    @punch(target)

  punch: (target) ->
    # Calculate the damage by subtracking this person's strength from the target
    dmg = (target.def - @str ) * -1
    # If the result is less than 0, make it 0
    if dmg < 0 then dmg = 0
    # Subtract the damage from the target's HP
    target.hp -= dmg
    console.log '%c' + @name + ' punches ' + target.name + ' for ' + dmg + 'pts of damage!' , 'color: #660033 '
