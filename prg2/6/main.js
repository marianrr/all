const Factory = (name) => {
    return {
        name: name,
        coco: function() {
            return 'dj guga la felipa...'
        }
    }
}

const two = Factory("Je suis rb...")
console.log("Numele este ", two.name)
console.log(typeof two.name)
console.log(two.coco())