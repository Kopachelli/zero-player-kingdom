using FluentAssertions;
using Xunit;
using ZPK;
using ZPK.Attacks;

namespace UnitTests.Attacks
{
    public class HealTests
    {
        private readonly Heal _sut;

        public HealTests()
        {
            _sut = new Heal(5);
        }

        [Fact]
        public void Should_have_negative_damage()
        {
            _sut.damage.Should().Be(-5);
        }

        [Fact]
        public void Shuold_restore_attacker_hp()
        {
            var attacker = new Warrior("attacker", 10);
            var target = new Warrior("attacker", 10);
            
            _sut.Execute(attacker, target);

            attacker.HP.Should().Be(15);

        }

        [Fact]
        public void Should_have_no_ammunition_after_use()
        {
            var attacker = new Warrior("attacker", 10);
            var target = new Warrior("attacker", 10);
            
            // Verify the attack starts with the right amount of ammunition
            _sut.ammunition.Should().Be(1);
            
            _sut.Execute(attacker, target);

            _sut.ammunition.Should().Be(0);
        }
    }
}