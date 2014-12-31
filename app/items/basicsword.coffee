## Basic Sword item

class BasicSword extends Item
  constructor: (@name, @stats, type) ->
    @type = "weapon"
    super @name, @type, @stats

  # Log it
  logConstruction: ->
    console.groupCollapsed 'FORGED BASIC SWORD: ' + @name
    console.log 'Type: ' + @type
    console.dir @stats
    console.groupEnd()

  attacks: [slash]
