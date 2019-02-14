// var loadLevel = function(k, game) {
//     var blocks = []
//     var p = position[k]
//     for (let i = 0; i < p.length; i++) {
//         blocks.push(Block(p[i], game))
//     }
//     return blocks
// }

var blocks = []

var enableDebugMode = function(enable, game) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function() {
        if (event.key == 'p') {
            window.paused = !window.paused
        } else if ('01234567'.includes(event.key)) {
            var n = event.key
            // blocks = loadLevel(Number(n), game)
        }
    })
    var slide = document.querySelector('.slide')
    window.addEventListener('input', function() {
        window.fps = slide.value 
    })
}

var __main = function() {
    var images = {
        bg: 'img/bg.png',
        bullet: 'img/bullet.png',
        cloud: 'img/cloud.png',
        player: 'img/player.png',
    }
    var game = XiaGame.instance(images, function(g) {
        var s = Scene.new(g) 
        g.runScene(s)
    })
}
__main()