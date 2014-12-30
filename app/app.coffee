console.log 'ZERO PLAYER KINGDOM'

init = () ->
  console.debug 'initializing...'
  theknight = new Person "The Knight", {}
  theenemyknight = new Person "The Enemy Knight", {def:1}
  noname = new Person
  theknight.str = 25
  console.log 'The Knight has new str: ' + theknight.str
  theknight.punch(theenemyknight)
  console.log 'Enemy Knight HP: ' + theenemyknight.hp
  console.debug 'done with init'
