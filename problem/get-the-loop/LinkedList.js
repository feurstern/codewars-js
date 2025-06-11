class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  size() {
    let count = 0;
    let node = this.data;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  clear() {
    this.next = null;
  }
  getFirst() {
    return this.next;
  }
  addition(x, y) {
    return x + y;
  }
}

class Player {
  constructor(parameters) {
    
  }
}

let node1 = new ListNode(2);
const node2 = new ListNode(10);
node1.next = node2;
node1.next = node2;

const list = new ListNode(node1);
list.next = node1;

console.log("size of the linked list:", list.size());
console.log("first linked list:", list.getFirst());
console.log("node list", list);
list.clear();
console.log("node list after", list);

console.log("addition", list.addition(list.size(), 4));
