using System.Collections.Generic;
using ZPK.Attacks;

namespace ZPK
{
    public interface Item
    {
        IEnumerable<Attack> GetAttacks();
    }
}