input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 1; index++) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Left, 60)
    }
    Kitronik_Move_Motor.move(Kitronik_Move_Motor.DriveDirections.Reverse, 60)
    for (let index = 0; index < 1; index++) {
        Kitronik_Move_Motor.spin(Kitronik_Move_Motor.SpinDirections.Right, 60)
    }
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    Kitronik_Move_Motor.stop()
    music.playMelody("B E A G E F G C ", 120)
})
basic.forever(function () {
	
})
