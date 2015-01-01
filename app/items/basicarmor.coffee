## Basic Armor item

class BasicArmor extends Item
  constructor: (@name, @stats, type) ->
    @type = "armor"
    super @name, @type, @stats

  # Log it
  logConstruction: ->
    console.groupCollapsed 'FORGED BASIC ARMOR: ' + @name
    console.log 'Type: ' + @type
    console.dir @stats
    console.groupEnd()
