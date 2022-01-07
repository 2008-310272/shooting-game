// 往左移動
input.onButtonPressed(Button.A, function () {
    主角.change(LedSpriteProperty.X, -1)
})
function airplane2 () {
    game.addScore(1)
    飛機2.set(LedSpriteProperty.X, 0)
    飛機2.set(LedSpriteProperty.Y, 0)
}
// 發射子彈
input.onButtonPressed(Button.AB, function () {
    子彈1 = game.createSprite(0, 5)
    子彈2 = game.createSprite(1, 5)
    子彈3 = game.createSprite(2, 5)
    子彈4 = game.createSprite(3, 5)
    子彈5 = game.createSprite(4, 5)
    for (let index = 0; index < 4; index++) {
        子彈1.change(LedSpriteProperty.Y, -1)
        子彈2.change(LedSpriteProperty.Y, -1)
        子彈3.change(LedSpriteProperty.Y, -1)
        子彈4.change(LedSpriteProperty.Y, -1)
        子彈5.change(LedSpriteProperty.Y, -1)
        basic.pause(10)
    }
    子彈5.delete()
    子彈1.delete()
    子彈2.delete()
    子彈3.delete()
    子彈4.delete()
})
// 往右移動
input.onButtonPressed(Button.B, function () {
    主角.change(LedSpriteProperty.X, 1)
})
function airplane1 () {
    game.addScore(1)
    飛機.set(LedSpriteProperty.X, 0)
    飛機.set(LedSpriteProperty.Y, 0)
}
let 子彈5: game.LedSprite = null
let 子彈4: game.LedSprite = null
let 子彈3: game.LedSprite = null
let 子彈2: game.LedSprite = null
let 子彈1: game.LedSprite = null
let 飛機2: game.LedSprite = null
let 飛機: game.LedSprite = null
let 主角: game.LedSprite = null
主角 = game.createSprite(2, 4)
飛機 = game.createSprite(0, 0)
飛機2 = game.createSprite(1, 0)
music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.ForeverInBackground)
basic.forever(function () {
    let change_game = 0
    if (change_game == 1) {
        if (子彈3) {
            if (子彈3.isTouching(飛機)) {
                game.addScore(1)
                飛機.set(LedSpriteProperty.X, 0)
                飛機.set(LedSpriteProperty.Y, 0)
            }
        }
    }
})
basic.forever(function () {
    basic.pause(randint(10, 500))
    飛機.change(LedSpriteProperty.X, 1)
    if (飛機.get(LedSpriteProperty.X) == 4) {
        basic.pause(500)
        飛機.set(LedSpriteProperty.X, 0)
        飛機.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    if (子彈1 || (子彈2 || (子彈3 || (子彈4 || 子彈5)))) {
        if (子彈1.isTouching(飛機2)) {
            airplane1()
        } else if (子彈2.isTouching(飛機2)) {
            airplane1()
        } else if (子彈3.isTouching(飛機2)) {
            airplane1()
        } else if (子彈4.isTouching(飛機2)) {
            airplane1()
        } else if (子彈5.isTouching(飛機2)) {
            airplane1()
        }
    }
})
// 當飛機碰到就死了
basic.forever(function () {
    if (飛機.isTouching(主角)) {
        game.gameOver()
        basic.showString("score" + game.score())
    }
})
basic.forever(function () {
    if (飛機2.isTouching(主角)) {
        game.gameOver()
        basic.showString("score" + game.score())
    }
})
basic.forever(function () {
    basic.pause(randint(200, 500))
    飛機2.change(LedSpriteProperty.X, 1)
    if (飛機2.get(LedSpriteProperty.X) == 4) {
        basic.pause(500)
        飛機2.set(LedSpriteProperty.X, 0)
        飛機2.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    if (子彈1 || (子彈2 || (子彈3 || (子彈4 || 子彈5)))) {
        if (子彈1.isTouching(飛機2)) {
            airplane2()
        } else if (子彈2.isTouching(飛機2)) {
            airplane2()
        } else if (子彈3.isTouching(飛機2)) {
            airplane2()
        } else if (子彈4.isTouching(飛機2)) {
            airplane2()
        } else if (子彈5.isTouching(飛機2)) {
            airplane2()
        }
    }
})
