// Make the Node and List links
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class List {
    constructor() {
        this.head = null
        this.tail = null
    }

    addToHead(data) {
        const node = new Node(data)
        //debugger
        if (!this.head) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    addToTail(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = node
            this.tail = node
        }
        else {

            node.next = this.head
            this.head = node


        }
    }


}


// const list1 = new List()
// list1.addToHead(1)
// list1.addToHead(2)
// list1.addToHead(3)
// list1.addToHead(4)
// list1.addToHead(5)
// list1.addToHead(6)
// list1.addToHead(7)
// list1.addToHead(8)
// list1.addToHead(9)

// console.log("This is the head: ", list1.head)
// console.log("This is the tail: ", list1.tail)

console.log("%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")

const list2 = new List()

list2.addToTail(1)
list2.addToTail(2)
list2.addToTail(3)
list2.addToTail(1)
list2.addToTail(4)
list2.addToTail(5)
list2.addToTail(6)
list2.addToTail(7)
list2.addToTail(8)
list2.addToTail(9)

console.log("This is the head: ", list2.head)
console.log("This is the tail: ", list2.tail)
