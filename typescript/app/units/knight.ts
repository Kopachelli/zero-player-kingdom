// The Knight class

class Knight extends Person {
  constructor(name:string, params:any) {
    this.params = params ? params : {};
    // Generate the attack array
    this.attacks = params.attacks ? params.attacks : [punch, kick];
    this.params.attacks = this.attacks;
    super(name, this.params);
  }
  
  constructionMsg(){
    zpkMsgBox.innerHTML += '<div>Created new Knight: ' + this.name
                        + '<ul>'
                        + '<li>Defense: ' + this.def + '</li>'
                        + '<li>Dexterity: ' + this.dex + '</li>'
                        + '<li>HP: ' + this.hp + '</li>'
                        + '<li>Strength: ' + this.str + '</li>'
                        + '</ul>'
                        + '</div>';
  }
}