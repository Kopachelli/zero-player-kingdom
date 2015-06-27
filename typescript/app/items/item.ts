// An item: objects used and kept by people
// Create: var item = new Item("Item", {});
// Create with defined parameters: var item = new Item("Item", {attacks[explode]});
// Name (string) [required]
// Parameters: An object of the item's parameters

interface ItemInterface {
  attacks: any[];
  name: string;
  params:any;
}

class Item implements ItemInterface {
  attacks: any[];
  name: string;
  params:any;
  
  constructor(name:string, params:any) {
    this.name = name;
    // Generate the attack array
    this.attacks = params.attacks ? params.attacks : [];
    
    // Add the item to the global list
    items.addItem(this);
    
    this.constructorMsg();
  }
  
  constructorMsg() {
    zpkMsgBox.innerHTML += '<div>Created new Item: ' + this.name
                        + '</div>';
  }
  
  /** Destroy this item from the global list and remove it from the game
   */
  destroy() {
    items.destroyItem(this);
  }
  
  /** Functionality to run when this item is equipped
   * @param person: The person equipping the item
   */
  equip(person: Person) {
    person.attacks = person.attacks.concat(this.attacks); 
  }
  
  /** Uses this item
   * @param person: The person using the item
   */
  use(person: Person) {
    zpkMsgBox.innerHTML += '<p>' + person.name + ' uses ' + this.name
                        + '</p>';
  }
}