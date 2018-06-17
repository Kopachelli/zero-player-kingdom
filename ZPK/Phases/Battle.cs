using System;
using System.Linq;

namespace ZPK.Phases
{
    /// <summary>
    /// This phase pits to contenders against each other
    /// </summary>
    public class Battle
    {
        /// <summary>
        /// Initiates a battle and returns the victor
        /// </summary>
        /// <param name="attacker"></param>
        /// <param name="defender"></param>
        /// <returns></returns>
        public Person.Person Initiate(Person.Person attacker, Person.Person defender)
        {
            Console.WriteLine($"{attacker.Name} ({attacker.HP}) vs {defender.Name} ({defender.HP})");
            var random = new Random();

            while (attacker.HP > 0 && defender.HP > 0)
            {
                
                // Attacker turn
                var attackIndex = random.Next(attacker.Attacks.Count);
                var attack = attacker.Attacks.ElementAt(attackIndex);
                var damage = attack.damage;
                defender.HP -= damage;
                LogAttack(attacker.Name, attack.GetType().Name, damage);

                // Defender has been defeated
                if (defender.HP < 1)
                {
                    return attacker;
                }
                
                // Defender turn
                attackIndex = random.Next(defender.Attacks.Count);
                attack = defender.Attacks.ElementAt(attackIndex);
                damage = attack.damage;
                attacker.HP -= damage;
                LogAttack(defender.Name, attack.GetType().Name, damage);
            }

            return attacker.HP > 0 ? attacker : defender;
        }

        /// <summary>
        /// Logs the result of an attack
        /// </summary>
        /// <param name="contender"></param>
        /// <param name="attack"></param>
        /// <param name="damage"></param>
        private void LogAttack(string contender, string attack, int damage)
        {
            Console.WriteLine($"{contender} uses {attack} and deals {damage} points of damage");

        }
    }
}