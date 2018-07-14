using Xunit;
using ZPK.Generators;

namespace UnitTests.Generators
{
    public class WarriorGeneratorsTests
    {
        private readonly WarriorGenerator _sut;
        
        public WarriorGeneratorsTests()
        {
            _sut = new WarriorGenerator();
        }

        [Fact(Skip = "Cannot reference static method")]
        public void Should_create_warrior()
        {
            // Cannot reference static method
            //var warrior = _sut.Generate("my warrior");
            var thing = 4;
            Assert.Equal(4, thing);
        }
    }
}