namespace ZPK.Person
{
    /// <summary>
    /// A Person is a base contender for battle
    /// </summary>
    public class Person
    {
        public string Name;
        public int HP;

        public Person(string name, int hp)
        {
            Name = name;
            HP = hp;
        }

    }
}