## A Person is a unit that can be a character
# Create: johndoe = new Person "John Doe", {}
# Name (string) [required]
# Stats (object) [required]:
# DEF : Defense
# STR : Strenght
# HP: Hit Points
class Person
  constructor: (@name, stats) ->
    return console.warn 'People need a name!' if !@name
    return console.warn 'No stats provided!' if !stats
    @def = if typeof(stats.def) != 'undefined' then stats.def else Math.floor((Math.random() * 3) + 1)
    @str = if typeof(stats.str) != 'undefined' then stats.str else Math.floor((Math.random() * 10) + 1)
    @hp = if typeof(stats.hp) != 'undefined' then stats.hp else Math.floor((Math.random() * 10) + 5)
    # Log it
    console.group 'CREATED NEW PERSON: ' + @name
    console.log 'DEF: ' + @def
    console.log 'STR: ' + @str
    console.log 'HP: ' + @hp
    console.groupEnd()

  punch: (target) ->
    # Calculate the damage by subtracking this person's strength from the target
    dmg = (target.def - @str ) * -1
    # If the result is less than 0, make it 0
    if dmg < 0 then dmg = 0
    # Subtract the damage from the target's HP
    target.hp -= dmg
    console.log @name + 'punches ' + target.name + 'for ' + dmg + 'pts of damage!'
