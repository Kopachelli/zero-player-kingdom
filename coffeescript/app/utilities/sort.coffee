## The sorting utility functions

sortBy = (key, a, b, r) ->
  r = if r then 1 else -1
  return -1*r if a[key] > b[key]
  return +1*r if a[key] < b[key]
  return 0
sortByMultiple = (a, b, keys) ->
  return r if (r = sortBy key, a, b) for key in keys
  return 0

## Set the global turn order
# Order by dex, int, str, then creation order
# People goes sooner the closer to 0 they are in the array
setTurnOrder = () ->
  console.log "sorting people..."
  people.sort (a,b) ->
    sortBy('dex', a, b, true) or
    sortBy('int', a, b, true) or
    sortBy('str', a, b, true)
