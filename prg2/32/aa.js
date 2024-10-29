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
        this.length = 0
    }

    append(data) {
        const node = new Node(data)
        if (!this.head) {
            this.head = this.tail = node
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.length++
    }

    prepend(data) {
        const node = new Node(data)

        if (!this.head) {
            this.head = node
            this.tail = node
        }
        else {
            this.tail.next = node
            this.tail = node
        }
this.length++

    }

    print() {
        if (this.length) {
            let listDisplay = ""
            let current = this.head
            while (current) {
                listDisplay += current.data + " ---> "
                current = current.next
            }

            return `${listDisplay} NULL`

        }
        return undefined







    }





}


const list1 = new List()

list1.append(1)
list1.append(2)
list1.append(3)
list1.append(4)
list1.append(5)
list1.append(6)

console.log("This is list1: ", list1)
console.log("This is head1: ", list1.head)
console.log("This is tail1: ", list1.tail)
console.log("This is list1 printed: ", list1.print())

console.log("##########################################################")
const list2 = new List()

list2.prepend(1)
list2.prepend(2)
list2.prepend(3)
list2.prepend(4)
list2.prepend(5)
list2.prepend(6)

console.log("This is list2: ", list2)
console.log("This is head2: ", list2.head)
console.log("This is tail2: ", list2.tail)
console.log("This is list2 printed: ", list2.print())