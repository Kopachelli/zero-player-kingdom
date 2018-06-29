using System.Collections.Generic;
using ZPK.Attacks;

namespace ZPK
{
    /// <summary>
    /// Meade is a basic healing potion
    /// </summary>
    public class Meade : Item
    {
        public IEnumerable<Attack> GetAttacks()
        {
            return new List<Attack>
            {
                new Heal(2)
            };
        }
    }
}