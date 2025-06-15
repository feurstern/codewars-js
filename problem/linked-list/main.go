package main

import "fmt"

type Node struct {
	value int
	next  *Node
}

type Linkedlist struct {
	head *Node
}

func (list *Linkedlist) Add(newValue int) {
	newNode := &Node{value: newValue}

	if list.head == nil {
		list.head = newNode
		return
	}

	current := list.head
	for current.next != nil {
		current = current.next
	}
	current.next = newNode
}

func (list *Linkedlist) Search(value int) bool {
	current := list.head

	for current != nil {
		if current.value == value {
			return true
		}

		current = current.next
	}

	return false
}

func (list *Linkedlist) Print(value int) {
	current := list.head

	for current != nil {
		if current.value == value {
			fmt.Printf("%d ->", current.value)
			current = current.next
		}

	}

	fmt.Println("nill")
}

func (list *Linkedlist) Delete(value int) {

	current := list.head

	if list.head == nil {
		return
	}

	if list.head.value == value {
		list.head = list.head.next
		return
	}

	for current.next != nil {

		if current.value == value {
			current.next = current.next.next
			return
		}
		current = current.next
	}

}

func main() {

}
