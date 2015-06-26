// An item: objects used and kept by people

interface ItemInterface {
  name: string;
}

class Item implements ItemInterface {
  name: string;
  
  constructor(name:string) {
    this.name = name;
    
    this.constructorMsg();
  }
  
  constructorMsg() {
    zpkMsgBox.innerHTML += '<div>Created new Item: ' + this.name
                        + '</div>';
  }
}