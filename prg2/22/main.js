class Game {
    

    rise() {
        console.log("miau iau dau hau hau")
    }

    callFunction() {
        this.rise()
        return "dj guga la felipa"
    }
}


const fifa = new Game()
fifa.callFunction()