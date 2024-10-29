class NewNode {
    constructor(data, next) {
        this.next = next
        this.data = data

    }
}

class NewList {
    constructor() {
        this.head = null
    }

    addHead(data) {
        let newNode = new NewNode(data, null)
        newNode.next = this.head

        this.head = newNode
    }


    addTail(hi) {
        const ho = new NewNode(hi, null)
        if (!this.head) this.head = ho
        else {
            let co = this.head
            while (co.next) {
                co = co.next
            }
            co.next = ho
        }
    }

    afis() {
            let co = this.head
            let ss = []
            while (co) {
                ss.unshift(co.data)
                co = co.next
            }
            return `${ss.join("-->")}-->NULL`
        

    }
     
    

    //     printList() {
    //         let current = this.head;
    //         let list = "";
    //         while (current) {
    //             list += current.data + " -> ";
    //             current = current.next;
    //         }
    //         list += "null";
    //         console.log(list);
    //     }

}


const list1 = new NewList()

list1.addHead(1)
list1.addHead(2)
list1.addHead(3)
list1.addHead(4)
list1.addHead(5)
list1.addHead(6)

console.log("Lista este: ", list1)
console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
//list1.printList()

console.log("Lista 1 este: ", list1.afis())

let list2 = new NewList()
list2.addTail(1)
list2.addTail(2)
list2.addTail(3)
list2.addTail(4)
list2.addTail(5)
list2.addTail(6)
console.log("Lista 2 este: ", list2.afis())

