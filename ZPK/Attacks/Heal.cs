namespace ZPK.Attacks
{
    public class Heal : Attack
    {
        /// <summary>
        /// Constructor
        /// </summary>
        /// <param name="healAmount">How much damage this heals</param>
        public Heal(int healAmount)
        {
            damage = healAmount;
        }
        
        /// <summary>
        /// Executes the attack against a target
        /// </summary>
        /// <param name="attacker">The entity attacking</param>
        /// <param name="target">The target being attacked</param>
        /// <returns>The amount of damage dealt</returns>
        public override int Execute(Person attacker, Person target)
        {
            attacker.HP += damage;
            return damage * -1;
        }
    }
}