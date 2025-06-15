#include <iostream>

int main()
{
    std::string programmingLanguage[][2] = {{"C++", "Advance"},
                                            {"Rust", "Beginner"},
                                            {"Go", "Advance"},
                                            {"Typescript", "Advance"}};

    std::cout << programmingLanguage[0][0] << std::endl;
    std::cout << programmingLanguage[3][0] << std::endl;

    int arr_1[2][3] = {{1, 4, 5}, {4, 12, 8}};
    int arr_2[2][3] = {{5, 3, 1}, {7, 2, 3}};
    int arr_3[2][3];

    for (int i = 0; i < 2; i++)
    {
        // accessing array of the bound
        for (int j = 0; j < 3; j++)
        {
            arr_3[i][j] = arr_1[i][j] + arr_2[i][j];
        }
    }

    std::cout << "The result of matrix" << arr_3 << std::endl;

    return 0;
}