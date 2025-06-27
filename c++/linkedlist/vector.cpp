#include <iostream>
#include <vector>

std::vector<std::vector<int>> multiplication(std::vector<std::vector<int>> vector_1, std::vector<std::vector<int>> vector_2)
{
    int rows = vector_1.size();
    int cols = vector_1[0].size();

    std::vector<std::vector<int>> vector_result(rows, std::vector<int>(cols));

    for (int i = 0; i < rows; i++)
    {
        for (int j = 0; j < cols; j++)
        {
            vector_result[i][j] = vector_1[i][j] * vector_2[i][j];
        }
    }

    return vector_result;
}

int main()
{

    std::vector<std::vector<int>> vector_1 = {{1, 2, 3}, {4, 5, 6}};
    std::vector<std::vector<int>> vector_2 = {{2, 3, 5}, {2, 4, 5}};

    std::vector<std::vector<int>> vector_result = multiplication(vector_1, vector_2);

    std::cout << vector_result[0][0];
}
