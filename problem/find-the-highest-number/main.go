package main

import "fmt"

func findTheLargestNumber(numbers []int) int {
	h := 0
	for _, num := range numbers {
		if num > h {
			h = num
		}
	}

	return h
}

func main() {

	numbers := []int{14, 32, 5, 23, 19, 199, 33, 222}
	a := findTheLargestNumber(numbers[:])

	fmt.Printf("The highest number: %d", a)
}
