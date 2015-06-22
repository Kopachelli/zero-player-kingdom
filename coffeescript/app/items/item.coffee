## An item object
# Types of items:
# Weapon
class Item
  constructor: (@name, @type, @stats) ->
    return console.warn 'Items need names!' if !@name
    return console.warn 'No stats provided for ' + @name + '!' if !stats
    items.push(@)
    @logConstruction()

  # Log construction
  logConstruction: ->
    console.groupCollapsed 'CREATED NEW ITEM: ' + @name
    console.log 'Type: ' + @type
    console.log 'Stats: '
    console.dir @stats
    console.groupEnd()

  # Use the item
  # Parameters such as user, target
  use: (params) ->
    params = params || ''
    params.user = if typeof(params.user) != 'undefined' then params.user
    console.log @name + ' has been used by ' + params.user.name
    # Remove this item from the user's inventory
    params.user.inventory.splice( params.user.inventory.indexOf(@) , 1)
    # console.dir params.user.inventory #for debugging purposes
    # Destroy this item
    items.splice( items.indexOf(@) , 1)
