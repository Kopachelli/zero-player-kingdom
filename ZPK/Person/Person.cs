using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using ZPK.Attacks;

namespace ZPK
{
    /// <summary>
    /// A Person is a base contender for battle
    /// </summary>
    public abstract class Person
    {
        public readonly string Name;
        public int HP;

        protected readonly ICollection<Attack> Attacks;
        
        protected Person(string name, int hp)
        {
            Name = name;
            HP = hp;
            Attacks = new List<Attack>();
        }

        /// <summary>
        /// Adds an item's attacks to this person
        /// </summary>
        /// <param name="item">The item being equipped</param>
        public void Equip(Item item)
        {
            if (item == null)
            {
                throw new ArgumentNullException(nameof(item));
            }

            if (!item.GetAttacks().Any())
            {
                throw new ArgumentOutOfRangeException(nameof(item));
            }

            foreach (var attack in item.GetAttacks())
            {
                Attacks.Add(attack);
            }
        }
        
        public IEnumerable<Attack> GetAttacks()
        {
            return Attacks;
        }
    }
}