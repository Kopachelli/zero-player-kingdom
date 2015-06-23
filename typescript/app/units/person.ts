// A Person unit
// Create: var johndoe = new Person("John Doe");
// Name (string) [required]
// DEF : Defense
// DEX : Dexterity
// HP: Hit Points
// STR : Strength

interface PersonInterface {
  def?: number;
  dex?: number;
  hp: number;
  name: string;
  str?: number;
}

class Person implements PersonInterface {
  def: number;
  dex: number;
  hp: number;
  name: string;
  str: number;
  
  constructor(name:string, def?:number, dex?:number, hp?:number, str?:number) {
    this.name = name;
    // Set the strength attribute (2-6)
    this.str = str ? str : Math.floor((Math.random() * 4) + 2);
    // Set the defense attribute (1-4)
    this.def = def ? def : Math.floor((Math.random() * 3) + 1);
    // Set the dexterity attribute (1-4)
    this.dex = dex ? dex : Math.floor((Math.random() * 5) + 5);
    // Set the hit points for this person (15-25)
    this.hp = hp ? hp : Math.floor((Math.random() * 10) + 14);
    
    // Add this person to the global person list
    population.addPerson(this);
    
    this.constructionMsg();
  }
  
  constructionMsg(){
    zpkMsgBox.innerHTML += '<div>Created new Person: ' + this.name
                        + '<ul>'
                        + '<li>Defense: ' + this.def + '</li>'
                        + '<li>Dexterity: ' + this.dex + '</li>'
                        + '<li>HP: ' + this.hp + '</li>'
                        + '<li>Strength: ' + this.str + '</li>'
                        + '</ul>'
                        + '</div>';
  }
}