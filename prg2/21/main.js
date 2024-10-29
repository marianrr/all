class Library {
    constructor(title) {
        this.title = title
    }

    changeTitle(title) {
        this.title = "dj guga la felipa..."
        return this.title
    }
}


const book1 = new Library("mili")
console.log(book1.title)
console.log(book1.changeTitle())
console.log(book1.title)
console.log(book1.changeTitle())