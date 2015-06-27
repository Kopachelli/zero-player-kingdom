// Potion
// Gives user +10hp

class BasicPotion extends Item {
  constructor(name: string) {
    super(name, {})
  }
  
  constructorMsg() {
    zpkMsgBox.innerHTML += '<div>Created new Potion: ' + this.name
                        + '</div>';
  }
  
  /** Uses this item: Adds 10hp to the user
   * This item is destroyed on use
   * @param person: The person using the item
   */
  use(person: Person) {
    // The amount of hp to heal
    var healAmount = 10;
    person.hp += healAmount;
    zpkMsgBox.innerHTML += '<p>' + person.name + ' uses ' + this.name
                        + ' and gains ' + healAmount + 'hp.';
                        + '</p>';
    this.destroy();
  }
}