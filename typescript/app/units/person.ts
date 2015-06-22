
// A Person unit
// Create: var johndoe = new Person("John Doe");
// Name (string) [required]
// DEF : Defense
// HP: Hit Points
// STR : Strength
interface PersonInterface {
  def?: number;
  hp: number;
  name: string;
  str?: number;
}
class Person implements PersonInterface {
  def: number;
  hp: number;
  name: string;
  str: number;
  
  constructor(name:string, def?:number, hp?:number, str?:number) {
    this.name = name;
    // Set the strength attribute (2-6)
    if (str) {
      this.str = str;
    } else {
      this.str = Math.floor((Math.random() * 4) + 2);
    } 
    // Set the defense attribute (1-4)
    if (def) {
      this.def = def;
    } else {
      this.def = Math.floor((Math.random() * 3) + 1);
    } 
    // Set the hit points for this person (15-25)
    if (hp) {
      this.hp = hp;
    } else {
      this.hp = Math.floor((Math.random() * 10) + 14);
    }
    
    zpkMsgBox.innerHTML += '<div>Created new Person: ' + this.name
                        + '<ul>'
                        + '<li>Defense: ' + this.def + '</li>'
                        + '<li>HP: ' + this.hp + '</li>'
                        + '<li>Strength: ' + this.str + '</li>'
                        + '</ul>'
                        + '</div>';
  }
}