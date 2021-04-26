basic.forever(function () {
    music.playMelody("A E B A F C D F ", 120)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        # # . # #
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # # . # #
        . # # # .
        `)
    soundExpression.yawn.play()
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        # # # # #
        `)
    basic.pause(1000)
    basic.showString("Hi")
    basic.showString("I'm Eve")
    for (let index = 0; index < 2; index++) {
        basic.showIcon(IconNames.SmallSquare)
        soundExpression.mysterious.play()
        basic.showLeds(`
            # # . # #
            # # . # #
            . # # # #
            # . . . #
            # # # # .
            `)
        soundExpression.mysterious.play()
        basic.showIcon(IconNames.Square)
        basic.showIcon(IconNames.Chessboard)
        basic.showLeds(`
            # # . # #
            # # # # #
            . # # # .
            # . . . #
            . # # # #
            `)
    }
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        # # . # #
        `)
    basic.pause(1000)
    basic.showString("I'm glitching?")
    basic.pause(100)
    basic.showString("Restarting Activation")
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        # # . # #
        `)
    soundExpression.mysterious.play()
    basic.showLeds(`
        # . . . #
        . # # # .
        . # . # .
        . # # # .
        # . . . #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(5000)
})
