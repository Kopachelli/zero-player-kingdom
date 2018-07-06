using System;
using System.Collections.Generic;
using System.Linq;
using ZPK.Attacks;

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
        public Person Initiate(Person attacker, Person defender)
        {
            Console.WriteLine($"Initiating Battle...");
            Console.WriteLine($"{attacker.Name} ({attacker.HP}) vs {defender.Name} ({defender.HP})");

            while (attacker.HP > 0 && defender.HP > 0)
            {
                // Attacker turn
                var attacks = attacker.GetAttacks();
                if (attacks != null)
                {
                    attack(attacker, defender, attacks);
                }

                // Defender has been defeated
                if (defender.HP < 1)
                {
                    return attacker;
                }
                
                // Defender turn
                attacks = defender.GetAttacks();
                if (attacks != null)
                {
                    attack(defender, attacker, attacks);
                }
            }

            return attacker.HP > 0 ? attacker : defender;
        }

        /// <summary>
        /// Chooses one of the attacker's attacks at random and executes it
        /// </summary>
        /// <param name="attacker">The entity attacking</param>
        /// <param name="defender">The entity being attacked</param>
        /// <param name="attacks">The list of attacks to choose from</param>
        private void attack(Person attacker, Person defender, IEnumerable<Attack> attacks)
        {
            var random = new Random();
            var attackIndex = random.Next(attacks.Count());
            var attack = attacks.ElementAt(attackIndex);
            var damage = attack.Execute(attacker, defender);
            LogAttack(attacker.Name, attack.GetType().Name, damage);
        }

        /// <summary>
        /// Logs the result of an attack
        /// </summary>
        /// <param name="contender"></param>
        /// <param name="attack"></param>
        /// <param name="damage"></param>
        private void LogAttack(string contender, string attack, int damage)
        {
            // Change the damage type message based on the attack type
            var damageType = damage > 0 ? "deals" : "heals";
                
            Console.WriteLine($"{contender} uses {attack} and {damageType} {Math.Abs(damage)} points of damage");
        }
    }
}