class Player extends XiaImage {
    constructor(game) {
        super(game, 'player')
        this.speed = 5
    }
    moveLeft() {
        this.x -= this.speed
    }
    moveRight() {
        this.x += this.speed
    }
    moveUp() {
        this.y -= this.speed
    }
    moveDown() {
        this.y += this.speed
    }
}
const randomBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n)
}
class Enemy extends XiaImage {
    constructor(game) {
        var e = randomBetween(0, 4)
        var name = 'enemy' + e
        super(game, name)
        this.setup()
    }
    setup() {
        this.speed = randomBetween(5, 10)
        this.x = randomBetween(0, 390)
        this.y = randomBetween(-10, 50)
    }
    update() {
        this.y += this.speed
        if (this.y > 650) {
            this.setup()
        }
    }
}
class Scene extends XiaScene {
    constructor(game) {
        super(game)
        this.setup()
        this.setupInput()
        this.numebrOfEnemy = 10
    }
    setup() {
        var game = this.game
        this.bg = XiaImage.new(game, 'bg')
        // this.player = XiaImage.new(game, 'player')
        this.player = Player.new(game)
        this.player.x = 180
        this.player.y = 550
        this.enemy = Enemy.new(game)
        this.cloud = XiaImage.new(game, 'cloud')
        this.addElement(this.bg)
        this.addElement(this.player)
        this.addElement(this.enemy)
        this.addEnemy()
    }
    addEnemy() {
        var es = []
        var game = this.game 
        log(this.numebrOfEnemy)
        for (let i = 0; i < 10; i++) {
            var e = Enemy.new(game)
            this.addElement(e)
            es.push(e)
        }
        log('es',es)
        this.es = es 
    }
    setupInput() {
        this.game.registerAction('a', () => {
            this.player.moveLeft()
        })
        this.game.registerAction('d', () => {
            this.player.moveRight()
        })
        this.game.registerAction('w', () => {
            this.player.moveUp()
        })
        this.game.registerAction('s', () => {
            this.player.moveDown()
        })
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