using FluentAssertions;
using Xunit;
using ZPK;
using ZPK.Attacks;

namespace UnitTests.Attacks
{
    public class PunchTests
    {
        private readonly Punch _sut;

        public PunchTests()
        {
            _sut = new Punch();
        }

        [Fact]
        public void Should_have_infinite_ammunition()
        {
            var attacker = new Warrior("attacker", 10);
            var target = new Warrior("attacker", 10);
            
            // Verify the attack starts with the right amount of ammunition
            _sut.ammunition.Should().Be(0);
            
            _sut.Execute(attacker, target);

            _sut.ammunition.Should().Be(-1);
        }
    }
}