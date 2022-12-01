input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    number = randint(1, 3)
    if (number == 3) {
        basic.showIcon(IconNames.Yes)
    } else if (number == 2) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . . # .
            . . # . .
            . . # . .
            `)
    }
})
let number = 0
basic.showLeds(`
    . # # # .
    # . . . #
    . # # # .
    # . . . #
    . # # # .
    `)
basic.pause(2000)
basic.clearScreen()
