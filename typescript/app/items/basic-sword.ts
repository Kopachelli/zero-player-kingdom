// A Basic Sword

class BasicSword extends Item {
  constructor(name: string, params: any) { 
    this.params = params ? params : {};
    // Generate the attack array
    this.attacks = params.attacks ? params.attacks : [slice];
    // Define where this item can be equipped: 
    this.equipmentSlots = params.equipmentSlots ? params.equipmentSlots : [
      'leftHand', 
      'rightHand'];
    
    // Update the parameters object so this item can be initiated correctly
    this.params.attacks = this.attacks;
    this.params.equipmentSlots = this.equipmentSlots;
    super(name, this.params);
  }
  
  constructorMsg() {
    zpkMsgBox.innerHTML += '<div>Created new Sword: ' + this.name
                        + '</div>';
  }
}