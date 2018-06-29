namespace ZPK.Attacks
{
    /// <summary>
    /// The base attack
    /// </summary>
    public abstract class Attack
    {
        public int damage;

        /// <summary>
        /// Executes the attack against a target
        /// </summary>
        /// <param name="attacker">The entity attacking</param>
        /// <param name="target">The target being attacked</param>
        /// <returns>The amount of damage dealt</returns>
        public virtual int Execute(Person attacker, Person target)
        {
            target.HP -= damage;
            return damage;
        }
    }
}
