#include <iostream>

using namespace std;

int main()
{
    int a;
    cout << "Enter the valuee of a" << endl;
    cin >> a;

    while (a != 1)
    {
        if (a == 1)
            break;
        if (a % 2 == 0)
        {
            a /= 2;
        }
        else if (a % 2 == 1)
        {
            a = a * 3 + 1;
        }

        cout << "Current value : " << a << endl;
    }
}