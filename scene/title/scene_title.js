class SceneTitle extends XiaScene {
    constructor(game) {
        super(game)
        game.registerAction('k', function() {
            var k = Scene(game)
            game.replaceScene(k)
        })
    }
    draw() {
        this.game.context.fillText('press k to start', 100, 290)
    }
}