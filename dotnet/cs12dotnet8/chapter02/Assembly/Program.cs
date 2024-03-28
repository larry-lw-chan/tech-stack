using System.Reflection;
System.Data.DataSet ds = new();
HttpClient client = new();


Assembly myApp = Assembly.GetExecutingAssembly();

// End application if myApp is null
if (myApp == null) return;

// Loop through all the assemblies referenced by myApp
foreach (AssemblyName name in myApp.GetReferencedAssemblies())
{
    // Load the assembly
    Assembly a = Assembly.Load(name);

    // Declare a variable to count the number of methods
    int methodCount = 0;

    // Loop through all the types in the assembly
    foreach (Type t in a.DefinedTypes)
    {
        // Add up the counts of methods
        methodCount += t.GetMethods().Length;
    }

    // Output the count of types and their methods
    Console.WriteLine("{0:N0} types with {1:N0} methods in {2} assembly.",
        arg0: a.DefinedTypes.Count(),
        arg1: methodCount,
        arg2: name.Name
    );
}

