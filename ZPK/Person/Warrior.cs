using ZPK.Attacks;

namespace ZPK.Person
{
    /// <inheritdoc />
    /// <summary>
    /// A warrior is a basic fighter
    /// </summary>
    public class Warrior : Person
    {
        public Warrior(string name, int hp) : base(name, hp)
        {
            Attacks.Add(new Punch());
            Attacks.Add(new Kick());
        }
    }
}