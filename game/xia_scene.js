class XiaScene {
    constructor(game) {
        this.game = game
        this.elements = []
    }
    static new(game) {
        var i = new this(game)
        return i
    }
    addElement(image) {
        this.elements.push(image)
    }
    draw() {
        for (let i = 0; i < this.elements.length; i++) {
            var e = this.elements[i]
            this.game.drawImg(e)
        }
    }
    update() {

    }
}