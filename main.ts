input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    laser = game.createSprite(player.get(LedSpriteProperty.X), 4)
    for (let index = 0; index < 4; index++) {
        laser.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (laser.isTouching(alien)) {
            alien.delete()
            laser.delete()
            game.addScore(1)
            isalienalive = isalienalive - 1
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
    alien.ifOnEdgeBounce()
    alien.move(1)
    basic.pause(delay)
    if (alien.isTouchingEdge()) {
        alien.change(LedSpriteProperty.Y, 1)
        basic.pause(delay)
    }
    if (alien.get(LedSpriteProperty.Y) > 3) {
        game.gameOver()
    }
    if (isalienalive == 0) {
        basic.pause(600)
        alien = game.createSprite(0, 0)
        delay = level - 50
        isalienalive = 1
    }
})
