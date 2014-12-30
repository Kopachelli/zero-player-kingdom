console.log 'ZERO PLAYER KINGDOM'

init = () ->
  console.debug 'initializing...'
  theknight = new Person "The Knight", {}
  theenemyknight = new Person "The Enemy Knight", {def:1}
  theknight.str += 1
  console.log 'The Knight has new str: ' + theknight.str
  battle(theknight , theenemyknight)
  console.debug 'init complete'
