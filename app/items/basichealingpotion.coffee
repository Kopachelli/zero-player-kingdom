## Basic Healing Potion

class BasicHealingPotion extends Item
  constructor: (@name, @stats, type) ->
    @type = "item"
    super @name, @type, @stats

  # Log construction
  logConstruction: ->
    console.groupCollapsed 'CRAFTED BASIC HEALING POTION: ' + @name
    console.log 'Type: ' + @type
    console.dir @stats
    console.groupEnd()
