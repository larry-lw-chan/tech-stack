﻿global using System;
global using System.Linq;
global using System.Collections.Generic;

namespace Basic;
class Program
{
    static void Main(string[] args)
    {
        // Examples of different Notations
        int decimalNotation = 1_000_000;
        int binaryNotation = 0b_0000_0001_0100_1000_0000;
        int hexadecimalNotation = 0x_001E_00FF;

        Console.WriteLine(decimalNotation);
        Console.WriteLine(binaryNotation);
        Console.WriteLine(hexadecimalNotation);

        // Just a simple if-else statement
        var x = 3;
        if (x < 10)
        {
            Console.WriteLine("x is less than 10");
        }
        else
        {
            Console.WriteLine("x is greater than or equal to 10");
        }

        // Autogenerated
        WriteLine($"Computer nameed {Env.MachineName} says \"No.\"");

        // Verbs are methods
        Console.WriteLine();
        Console.WriteLine("Hello Admed");
        Console.WriteLine("Temperature on {0:D} is {1}C", DateTime.Now, 23.4);

        // Nouns are classes

    }
}