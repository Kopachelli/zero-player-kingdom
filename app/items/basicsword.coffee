## Basic Sword item

class BasicSword extends Item
  constructor: (@name, @type, stats) ->
    @type = "weapon"

    console.groupCollapsed 'FORGED BASIC SWORD: ' + @name
    console.log 'Type: ' + @type
    console.groupEnd()

  attacks: [slash]
