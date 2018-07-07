using System.Collections.Generic;
using System.Linq;
using ZPK.Attacks;

namespace ZPK
{
    public abstract class Item
    {
        protected IEnumerable<Attack> attacks;

        public IEnumerable<Attack> GetAttacks()
        {
            return attacks.TakeWhile(item => item.HasAmmunition());
        }
    }
}