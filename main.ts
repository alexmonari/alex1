basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.StickFigure)
    basic.showLeds(`
        # . # . #
        . . # . .
        # # # # #
        . . # . .
        # . # . #
        `)
    music.playMelody("G B A G C5 B A B ", 126)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
