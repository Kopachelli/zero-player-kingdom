## An item object
# Types of items:
# Weapon
class Item
  constructor: (@name, @type, @stats) ->
    return console.warn 'Items need names!' if !@name
    return console.warn 'No stats provided for ' + @name + '!' if !stats
    @logConstruction()

  # Log it
  logConstruction: ->
    console.groupCollapsed 'CREATED NEW ITEM: ' + @name
    console.log 'Type: ' + @type
    console.log 'Stats: '
    console.dir @stats
    console.groupEnd()
