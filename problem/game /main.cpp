#include <raylib.h>
#include <iostream>

int main(void)
{
    InitWindow(800, 450, "Rats Plague");

    int speedOfLight = 3E8;

    std::cout << speedOfLight << std::endl;

    while (!WindowShouldClose())
    {
        BeginDrawing();
        ClearBackground(RAYWHITE);
        DrawText("Congrats! You created your first window!", 190, 200, 20, LIGHTGRAY);
        EndDrawing();
    }

    CloseWindow();

    return 0;
}