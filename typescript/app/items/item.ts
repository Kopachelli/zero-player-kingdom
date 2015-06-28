// An item: objects used and kept by people
// Create: var item = new Item("Item", {});
// Create with defined parameters: var item = new Item("Item", {attacks[explode]});
// Name (string) [required]
// Parameters: An object of the item's parameters

interface ItemInterface {
  attacks: any[];
  name: string;
  equipmentSlots: any[];
  params:any;
}

class Item implements ItemInterface {
  attacks: any[];
  name: string;
  equipmentSlots: any[];
  params:any;
  
  constructor(name:string, params:any) {
    this.name = name;
    // Generate the attack array
    this.attacks = params.attacks ? params.attacks : [];
    // Define where this item can be equipped
    this.equipmentSlots = params.equipmentSlots ? params.equipmentSlots : [];
    
    // Add the item to the global list
    items.addItem(this);
    
    this.constructorMsg();
  }
  
  constructorMsg() {
    zpkMsgBox.innerHTML += '<div>Created new Item: ' + this.name
                        + '</div>';
  }
  
  /**
   * Determine if this item can be equipped
   * @return (boolean) Whether or not the user can equip this item
   */
  canEquip(person: Person): boolean {
    // Loop through the person's open equipment slots to determine if any are open
    for (var openSlot in person.equipmentSlots) {
      // If the equipment slot is empty
      if ( '' === person.equipmentSlots[openSlot] ) {
        // If this item can be equipped to the empty slot
        if ( 0 <= this.equipmentSlots.indexOf(openSlot) ) {
          // Add the item to the person's equipment slot
          person.equipmentSlots[openSlot] = this;
          return true;
        }
      }
    }
    return false;
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
    if( this.canEquip(person) ) {
      // Add the item's attacks to the person's attack list
      person.attacks = person.attacks.concat(this.attacks); 
      zpkMsgBox.innerHTML += '<p>' + person.name + ' equips ' + this.name + '</p>';
    } else {
      // The person could not equip this item
      zpkMsgBox.innerHTML += '<p>' + person.name + ' could not equip ' + this.name
                          + '</p>';
    }
  }
  
  /** Uses this item
   * @param person: The person using the item
   */
  use(person: Person) {
    zpkMsgBox.innerHTML += '<p>' + person.name + ' uses ' + this.name
                        + '</p>';
  }
}