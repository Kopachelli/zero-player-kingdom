namespace ZPK.Phases
{
    /// <summary>
    /// This phase pits to contenders against each other
    /// </summary>
    public class Battle
    {
        public string Initiate(Person.Person attacker, Person.Person defender)
        {
            return $"{attacker.Name} vs {defender.Name}";
        }
    }
}