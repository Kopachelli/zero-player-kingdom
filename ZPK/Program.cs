using System;
using ZPK.Generators;
using ZPK.Phases;

namespace ZPK
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            
            var warriorGenerator = new WarriorGenerator();

            var attacker = WarriorGenerator.Generate("Attacker");
            var defender = WarriorGenerator.Generate("Defender");

            var battleWinner = new Battle().Initiate(attacker, defender);
            Console.WriteLine($"The {battleWinner.GetType().Name} named '{battleWinner.Name}' wins with {battleWinner.HP} hit points remaining!");
        }
    }
}
