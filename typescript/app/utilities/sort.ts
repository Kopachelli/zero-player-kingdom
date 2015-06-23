// Sorting functions

// Sorts an array of objects by a specific key 
// For example: Sort all of the Person units in order of their dexterity
var sortBy = function(key, a, b, r) {
  r = r ? 1 : -1;
  if (a[key] > b[key]) {
    return -1 * r;
  }
  if (a[key] < b[key]) {
    return +1 * r;
  }
  return 0;
};