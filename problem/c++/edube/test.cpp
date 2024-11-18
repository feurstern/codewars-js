#include <iostream>
#include <array>

using namespace std;
int multiply(int x, int y)
{
    return x * y;
}

array<int, 2> countTheOddAndTheEvents(int num)
{
    int evens = 0, odds = 0;

    while (num != 0)
    {
        if (num % 2 == 1)
        {
            odds++;
        }
        else if (num % 2 == 0)
        {
            evens++;
        }
    }

    return {evens, odds};
}

int main()
{
    int x, y, value;
    array<string, 4> languageList = {"English", "Finnish", "Chinese", "Japanese"};
    array<int, 3> arrTest = {22, false};

    for (int i = 0; i < arrTest.size(); i++)
    {
        cout << "Array list : " << arrTest[i] << endl;
    }
    int counter = 0;

    while (counter < languageList.size())
    {
        cout << "The available language: " << counter + 1 << ". " << languageList[counter] << endl;
        counter++;
    }
    // cin >> x;
    // cin >> y;
    // int a = multiply(x, y);
    // cout << "result :" << a;
    cout << "Enter the value:" << endl;
    cin >> value;
    int the_mask = 0b1000;
    int n_the_mask = ~the_mask;

    int p = 2;
    int z = p | 1;

    cout << "var z :" << z << endl;
    cout << "int_Mask : " << the_mask << endl;
    cout << "n_them_mask" << n_the_mask << endl;
    array<int, 2> result = countTheOddAndTheEvents(value);
    cout << "Evens : " << result[0] << "Odds: " << result[1];
    return 0;
}