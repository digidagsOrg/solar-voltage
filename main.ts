let voltage = 0
basic.forever(function () {
    voltage = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(voltage)
    basic.pause(200)
})
