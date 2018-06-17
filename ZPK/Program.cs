using System;
using ZPK.Generators;
using ZPK.Phases;

namespace ZPK
{
    static class Program
    {
        private static void Main(string[] args)
        {
            Console.WriteLine("ZERO PLAYER KINGDOM:");
            
            var warriorGenerator = new WarriorGenerator();

            var attacker = WarriorGenerator.Generate("Attacker");
            var defender = WarriorGenerator.Generate("Defender");

            var battleWinner = new Battle().Initiate(attacker, defender);
            Console.WriteLine($"The {battleWinner.GetType().Name} named '{battleWinner.Name}' wins with {battleWinner.HP} hit points remaining!");
        }
    }
}
