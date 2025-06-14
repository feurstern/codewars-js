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

type Node struct {
	value int
	next  *Node
}

func main() {

	numbers := []int{14, 32, 5, 23, 19, 199, 33, 222}
	a := findTheLargestNumber(numbers[:])

	node1 := &Node{value: 5}
	node2 := &Node{value: 12}

	node1.next = node2

	current := node1
	for current != nil {
		fmt.Println(current.value)
		current = current.next
	}

	fmt.Printf("The highest number: %d", a)
}
