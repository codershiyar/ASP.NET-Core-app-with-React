namespace Test;

public class PerformanceTest
{
    [Fact]
    public void AverageResponseTime_10000Requests()
    {
        //Arrange
        var sut = new List<(DateTime Start, DateTime End)>();

        //Act
        for (var i = 0; i < 10000; i++)
        {
            using (var client = new HttpClient())
            {
  
                var start = DateTime.Now;
                var response = client.GetAsync("http://localhost:7117/api/").Result;
                var end = DateTime.Now;
                sut.Add((start, end));
            }
        }

        //Assert
        var expected = 5;
        var actual = (int)sut.Select(r => (r.End - r.Start).TotalSeconds).Average();
        Assert.True(actual <= expected);
    }
}