class Nnode {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}

class Llist {
    constructor() {
        this.head = null
    }

    addToHead(data) {
        let newNode = new Nnode(data)

        newNode.next = this.head
        this.head = newNode

    }

    afis() {

        if (!this.head) return
        else {
            let arr = []
            let current = this.head
            while (current) {
                arr.push(current.data)
                current = current.next
            }



            return arr.join("---->") + "---->NULL"
        }
    }

    addToTail(data) {
        let newNote = new Nnode(data)
        if (!this.head) this.head = newNote
        else {
let current = this.head
while(current.next) {
    current = current.next
}

current.next = newNote
        }
    }
}


// if(!this.head) this.head = newNode
// else {
//     let current = this.head
//     while(current.next) {
// current = current.next
//     }


// }


const list1 = new Llist()

list1.addToHead(1)
list1.addToHead(2)
list1.addToHead(3)
list1.addToHead(4)

console.log("List 1 is: ", list1)
console.log(list1.afis())

list1.addToTail(7777)
console.log(list1.afis())
