using System.Collections.Generic;
using System.Linq;
using FluentAssertions;
using Xunit;
using ZPK;
using ZPK.Attacks;

namespace UnitTests.Person
{
    public class WarriorTests
    {
        private readonly Warrior _sut;
        
        public WarriorTests()
        {
            _sut = new Warrior("warrior name", 15);
        }

        [Fact]
        public void Should_create_warrior()
        {
            Assert.Equal("warrior name", _sut.Name);
            Assert.Equal(15, _sut.HP);
        }

        [Fact]
        public void Should_have_two_attacks()
        {
            var expectedAttacks = new List<Attack>
            {
                new Punch(),
                new Kick()
            };
            
            _sut.GetAttacks().Should().BeEquivalentTo(expectedAttacks);
        }
    }
}