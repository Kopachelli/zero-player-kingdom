using System.Linq;
using FluentAssertions;
using Xunit;
using ZPK;

namespace UnitTests.Item
{
    public class MeadeTests
    {
        private readonly Meade _sut;

        public MeadeTests()
        {
            _sut = new Meade();
        }

        [Fact]
        public void Should_add_heal_once_equipped()
        {
            var attacker = new Warrior("attacker", 10);
            
            attacker.Equip(_sut);
            
            attacker.GetAttacks().Should().Contain(_sut.GetAttacks());
        }

        [Fact]
        public void Should_not_provide_attacks_without_ammunition()
        {
            var attacker = new Warrior("attacker", 10);

            // Use up the Heal
            _sut.GetAttacks().First().Execute(attacker, attacker);
            
            _sut.GetAttacks().Should().BeNullOrEmpty();
        }
    }
}