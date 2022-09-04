input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    laser = game.createSprite(player.get(LedSpriteProperty.X), 4)
    music.playTone(1500, 100)
    for (let index = 0; index < 4; index++) {
        laser.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (laser.isTouching(alien)) {
            alien.delete()
            laser.delete()
            game.addScore(1)
            isalienalive = 0
            music.playTone(500, 200)
        }
    }
    laser.delete()
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
let laser: game.LedSprite = null
let alien: game.LedSprite = null
let player: game.LedSprite = null
let isalienalive = 0
isalienalive = 1
let delay = 450
let level = delay
player = game.createSprite(2, 4)
alien = game.createSprite(0, 0)
basic.forever(function () {
    music.ringTone(100000 / delay)
    alien.ifOnEdgeBounce()
    alien.move(1)
    basic.pause(delay)
    if (alien.isTouchingEdge()) {
        alien.change(LedSpriteProperty.Y, 1)
        basic.pause(delay)
    }
    if (alien.get(LedSpriteProperty.Y) > 3) {
        game.gameOver()
        music.stopAllSounds()
    }
    if (isalienalive == 0) {
        level = delay
        basic.pause(600)
        alien = game.createSprite(0, 0)
        delay = level - 20
        isalienalive = 1
    }
})
