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
    console.log('in item');
    console.dir(params);
    // Generate the attack array
    this.attacks = params.attacks ? params.attacks : [];
    
    this.constructorMsg();
  }
  
  constructorMsg() {
    zpkMsgBox.innerHTML += '<div>Created new Item: ' + this.name
                        + '</div>';
  }
}