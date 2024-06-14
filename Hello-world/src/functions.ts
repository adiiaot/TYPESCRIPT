function calculateTax(income: number, taxYear = 2022): number{
    if (taxYear < 2022)
    return income * 1.2;
    return income * 1.3
}


calculateTax(10_000);
/* when passing arguments in a function,
typescript is really strict about it 
if you pass more than the number of arguments you have specified
. in the TSCONFIG.TS file, enable these comments to catch
the errors

//"noUnUsedLocals": true;
//"noUnUsedParameters": true;
//"noImplicitReturns": true;
*/