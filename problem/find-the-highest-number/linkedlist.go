package main

import "fmt"

type node struct {
	next *node
	data int
}

type linkedList struct {
	head   *node
	length int
}

func f() {

	fmt.Println("hello world")
}
