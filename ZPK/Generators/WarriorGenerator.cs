using System;

namespace ZPK.Generators
{
    /// <summary>
    /// Generates a Warrior entity
    /// </summary>
    public class WarriorGenerator
    {
        public static Warrior Generate(string name)
        {
            var hp = new Random().Next(15, 20);
            return new Warrior(name, hp);
        }
    }
}