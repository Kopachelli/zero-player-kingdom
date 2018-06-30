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
        public Person Initiate(Person attacker, Person defender)
        {
            Console.WriteLine($"Initiating Battle...");
            Console.WriteLine($"{attacker.Name} ({attacker.HP}) vs {defender.Name} ({defender.HP})");
            var random = new Random();

            while (attacker.HP > 0 && defender.HP > 0)
            {
                // Attacker turn
                var attacks = attacker.GetAttacks();
                var attackIndex = random.Next(attacks.Count());
                var attack = attacks.ElementAt(attackIndex);
                var damage = attack.Execute(attacker, defender);
                LogAttack(attacker.Name, attack.GetType().Name, damage);

                // Defender has been defeated
                if (defender.HP < 1)
                {
                    return attacker;
                }
                
                // Defender turn
                attacks = defender.GetAttacks();
                attackIndex = random.Next(attacks.Count());
                attack = attacks.ElementAt(attackIndex);
                damage = attack.Execute(defender, attacker);
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
            // Change the damage type message based on the attack type
            var damageType = damage > 0 ? "deals" : "heals";
                
            Console.WriteLine($"{contender} uses {attack} and {damageType} {Math.Abs(damage)} points of damage");
        }
    }
}