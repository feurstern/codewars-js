#include <iostream>
#include <vector>

std::vector<std::vector<int>> Addition(std::vector<std::vector<int>> vector_1, std::vector<std::vector<int>> vector_2)
{

    int rows = vector_1.size();
    int cols = vector_1[0].size();

    std::vector<std::vector<int>> arr(rows, std::vector<int>(cols));

    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            arr[i][j] = vector_1[i][j] + vector_2[i][j];
        }
    }

    return arr;
}

int main()
{

    int rows, cols;

    std::cout << "Rows:" << std::endl;
    std::cin >> rows;

    std::cout << "cols:" << std::endl;
    std::cin >> cols;

    std::vector<std::vector<int>> arr_1(rows, std::vector<int>(cols));
    std::vector<std::vector<int>> arr_2(rows, std::vector<int>(cols));

    std::cout << "Enter the value for the first matrix:" << std::endl;

    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            std::cin >> arr_1[i][j];
        }
    }

    std::cout << "Enter the value for the second matrix:" << std::endl;
    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            std::cin >> arr_2[i][j];
        }
    }

    std::vector<std::vector<int>> arr_3 = Addition(arr_1, arr_2);

    for (const auto &row : arr_3)
    {
        for (int val : row)
        {
            std::cout << val << std::endl;
        }
        std::cout << std::endl;
    }

    return 0;
}