// A Basic Sword

class BasicSword extends Item {
  constructor(name: string) { 
    super(name);
  }
  
  constructorMsg() {
    zpkMsgBox.innerHTML += '<div>Created new Sword: ' + this.name
                        + '</div>';
  }
}