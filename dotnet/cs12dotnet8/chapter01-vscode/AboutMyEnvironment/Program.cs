namespace AboutMyEnvironment;

class Program
{
    static void Main(string[] args)
    {
        string name = typeof(Program).Namespace ?? "None!";
        Console.WriteLine($"Namespace: {name}");
    }
}
