// A Basic Sword

class BasicSword extends Item {
  constructor(name: string, params: any) { 
    this.params = params ? params : {};
    // Generate the attack array
    this.attacks = params.attacks ? params.attacks : [slice];
    this.params.attacks = this.attacks;
    super(name, this.params);
  }
  
  constructorMsg() {
    zpkMsgBox.innerHTML += '<div>Created new Sword: ' + this.name
                        + '</div>';
  }
}