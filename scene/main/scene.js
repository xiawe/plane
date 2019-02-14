class Scene extends XiaScene {
    constructor(game) {
        super(game)
        this.setup()
    }
    setup() {
        var game = this.game
        this.bg = XiaImage.new(game, 'bg')
        this.player = XiaImage.new(game, 'player')
        this.player.x = 180
        this.player.y = 550
        this.cloud = XiaImage.new(game, 'cloud')
        this.addElement(this.bg)
        this.addElement(this.player)
    }
    update() {
        this.cloud.y += 5
    }
}
// var Scene = function(game) {
//     s = {
//         game: game,
//     }
//     var paddle = Paddle(game)
//     var ball = Ball(game)
//     blocks = loadLevel(2, game)
//     game.registerAction('a', function() {
//         paddle.moveLeft()
//     })
//     game.registerAction('d', function() {
//         paddle.moveRight()
//     })
//     game.registerAction('f', function() {
//         ball.fire()
//     })
//     s.update = function(n) {
//         if (paused) {
//             return
//         }
//         ball.move()
//         if (collide(ball, paddle)) {
//             log('paddle img',paddle.img.width)
//             ball.speedY = -ball.speedY
//         }
//         for (let i = 0; i < blocks.length; i++) {
//             var b = blocks[i]
//             if (collide(b, ball) && b.alive) {
//                 ball.bounce()
//                 b.kill()
//             }
//         }
//         if (ball.y > paddle.y) {
//             var end = SceneEnd.new(game)
//             game.replaceScene(end)
//         }
//     }
//     s.draw = function() {
//         game.drawImg(paddle)
//         game.drawImg(ball)
//         for (let i = 0; i < blocks.length; i++) {
//             var b = blocks[i]
//             if (b.alive) {
//                 game.drawImg(b)
//             }
//         }
//     }

//     enableDebugMode(true, game)

//     var enableDrag = false
//     window.addEventListener('mousedown', function(event) {
//         enableDrag = true
//     })

//     window.addEventListener('mousemove', function(event) {
//         var x = event.offsetX
//         var y = event.offsetY
//         if (enableDrag) {
//             ball.x = x
//             ball.y = y
//         }
//     })

//     window.addEventListener('mouseup', function(event) {
//         enableDrag = false
//     })

//     return s  
// }