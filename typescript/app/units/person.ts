// A Person unit
// Create: var johndoe = new Person("John Doe", {});
// Create with defined parameters: var janesmith = new Person("Jane Smith", {str:1, def:2});
// Name (string) [required]
// Parameters: An object of the units parameters
// ATTACKS : List of attacks this unit has
// DEF : Defense
// DEX : Dexterity
// HP: Hit Points
// STR : Strength

interface PersonInterface {
  attacks: any[];
  def?: number;
  dex?: number;
  hp: number;
  name: string;
  params: any;
  str?: number;
}

class Person implements PersonInterface {
  attacks: any[];
  def: number;
  dex: number;
  hp: number;
  name: string;
  params: any;
  str: number;
  
  constructor(name:string, params:any) {
    this.name = name;
    // Set the strength attribute (2-6)
    this.str = params.str ? params.str : Math.floor((Math.random() * 4) + 2);
    // Set the defense attribute (1-4)
    this.def = params.def ? params.def : Math.floor((Math.random() * 3) + 1);
    // Set the dexterity attribute (5-10)
    this.dex = params.dex ? params.dex : Math.floor((Math.random() * 5) + 5);
    // Set the hit points for this person (15-25)
    this.hp = params.hp ? params.hp : Math.floor((Math.random() * 10) + 14);
    // Generate the attack array
    this.attacks = params.attacks ? params.attacks : [punch];
    
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