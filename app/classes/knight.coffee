## Knight class

class Knight extends Person
  constructor: (@name, stats) ->
    super
    @attacks = [
      punch
    ]

  # Log it
  logConstruction: ->
    console.groupCollapsed 'CREATED NEW KNIGHT: ' + @name
    console.log 'DEF: ' + @def
    console.log 'DEX: ' + @dex
    console.log 'HP: ' + @hp
    console.log 'INT: ' + @int
    console.log 'STR: ' + @str
    console.log 'Inventory: '
    console.dir @inventory
    console.groupEnd()
