namespace ZPK.Attacks
{
    /// <summary>
    /// The base attack
    /// </summary>
    public abstract class Attack
    {
        public int damage;
        public int ammunition;

        /// <summary>
        /// Executes the attack against a target
        /// Reduces ammunition if this attack has a limited amount
        /// </summary>
        /// <param name="attacker">The entity attacking</param>
        /// <param name="target">The target being attacked</param>
        /// <returns>The amount of damage dealt</returns>
        public virtual int Execute(Person attacker, Person target)
        {
            target.HP -= damage;
            ReduceAmmunition();
            return damage;
        }

        /// <summary>
        /// Determines if there is more ammunition for this attack
        /// </summary>
        /// <returns>TRUE when thre is more ammunition</returns>
        public bool HasAmmunition()
        {
            return ammunition > 0;
        }

        /// <summary>
        /// Reduces the ammunition of this attack
        /// </summary>
        /// <param name="reduction">How much ammunition to reduce at a time</param>
        private void ReduceAmmunition(int reduction = 1)
        {
            if (ammunition != null)
            {
                ammunition -= reduction;
            }
        }
    }
}
