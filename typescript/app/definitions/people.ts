// The global population of Person units and operations related to organizing them

class People {
  // Ordered list of all Person units
  private order = [];
  
  // Adds unit to the people array
  addPerson(person) {
    this.order.push(person);
  }
  
  // Get a person from the ordered list
  // @param index (int) : The index in the ordered array to return
  // @return the person object at the requested index of the ordered list
  getPerson(index: number): Person {
    return this.order[index];
  }

  // Sorts the people list by dexterity. 
  // When two units have the same dexterity, choose one randomly
  sortPeople() {
    this.order.sort(function(a, b) {
      return sortBy('dex', a, b, true);
    });
  }
}