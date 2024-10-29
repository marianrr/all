
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
    if(!this.head) {
        this.head = node
        this.tail = node
    }

else {

   node.next = this.head

   this.head = node

}
}

addToTail(data) {
    const node = new Node(data)
   if(!this.head) {
    this.head = node
    this.tail = node
}
   else {
    this.tail.next = node
    this.tail = node
   }
}

afis() {
    let str = ""
    let current = this.head
    while(current) {
        str += `${current.data}---->`
        current = current.next
    }
    str += "NULL"
    return str
}

removeHead() {
    this.head = this.head.next


}


removeTail() {
    let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }

        const removedNode = this.tail;
        this.tail = current;  // Penultimul nod devine coada
        this.tail.next = null;  // Coada nouă nu mai are next



}



}


const list1 = new List()
list1.addToHead(111)
list1.addToHead(222)
list1.addToHead(567)
console.log("Lista este: ", list1.afis())
console.log("The tail is: ", list1.tail.data)
console.log("The head is: ", list1.head.data)
list1.removeHead()
console.log("Lista este: ", list1.afis())
console.log("The tail is: ", list1.tail.data)
console.log("The head is: ", list1.head.data)

console.log("#############################################################################################")

const list2 = new List()

list2.addToTail(1)
list2.addToTail(2)
list2.addToTail(3)
list2.addToTail(4)
list2.addToTail(5)
list2.addToTail(6)
list2.addToTail(7)


console.log("Lista este: ", list2.afis())
console.log("The tail is: ", list2.tail.data)
//console.log("The head is: ", list2.head.data)

// list2.removeHead()
// list2.removeHead()
// list2.removeHead()

list2.removeTail()
list2.removeTail()
list2.removeTail()

console.log("dupa remove...")
console.log("Lista este: ", list2.afis())
console.log("The tail is: ", list2.tail.data)
//console.log("The head is: ", list2.head.data)