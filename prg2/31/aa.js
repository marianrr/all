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


    addHead(data) {
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

addTail(data) {
    const node = new Node(data)
    if(!this.head) {
        this.head = node 
        this.tail = node 
    }
    else {
// node.next = this.tail
// this.tail = node


this.tail.next = node
      this.tail = node
}


}



}

const list1 = new List()
list1.addHead(1)
list1.addHead(2)
list1.addHead(3)
list1.addHead(4)
list1.addHead(5)

console.log("Lista 1 este: ", list1)
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
console.log("head 1: ", list1.head)
console.log("tail 1: ", list1.tail)

console.log("*******************************************************************************************")


const list2 = new List()
list2.addTail(1)
list2.addTail(2)
list2.addTail(3)
list2.addTail(4)
list2.addTail(5)

console.log("Lista 2 este: ", list2)
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
console.log("head 2: ", list2.head)
console.log("tail 2: ", list2.tail)