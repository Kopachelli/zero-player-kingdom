using System.Collections.Generic;
using ZPK.Attacks;

namespace ZPK.Person
{
    /// <summary>
    /// A Person is a base contender for battle
    /// </summary>
    public class Person
    {
        public readonly string Name;
        public int HP;
        public List<Attack> Attacks;
        

        public Person(string name, int hp)
        {
            Name = name;
            HP = hp;
            Attacks = new List<Attack>();
        }

    }
}