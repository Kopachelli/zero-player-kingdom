using System.Collections.Generic;
using ZPK.Attacks;

namespace ZPK
{
    /// <summary>
    /// Meade is a basic healing potion
    /// </summary>
    public class Meade : Item
    {
        public Meade()
        {
            attacks =  new List<Attack>
            {
                new Heal(2)
            };
        }
    }
}