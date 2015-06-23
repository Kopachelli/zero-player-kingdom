// The Knight class

class Knight extends Person {
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