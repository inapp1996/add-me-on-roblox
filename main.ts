input.onButtonPressed(Button.A, function () {
    basic.showString("Do you know what is this?")
    basic.showLeds(`
        . . # . .
        . # # # .
        # # . # #
        . # # # .
        . . # . .
        `)
    basic.showString("(Press B)")
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Roblox")
    basic.showString("My username:Inapp1997")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Press")
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.West)
})
basic.showString("Press A")
