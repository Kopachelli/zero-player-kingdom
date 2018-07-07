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
            damage = healAmount * -1;
        }
        
        /// <summary>
        /// Executes the attack against a target
        /// </summary>
        /// <param name="attacker">The entity attacking</param>
        /// <param name="target">Unused - The target being attacked</param>
        /// <returns>The amount of damage dealt</returns>
        public override int Execute(Person attacker, Person target)
        {
            // This attack applies a negative amount of damage to the executor
            return base.Execute(attacker, attacker);
        }
    }
}