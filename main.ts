let old_y = 0
let X_ = 0
let Y_ = 0
let Y = 0
let X = 0
led.enable(false)
serial.redirectToUSB()
OLED.init(128, 64)
basic.forever(function () {
    let old_x = 0
    let Z = 0
    X = pins.analogReadPin(AnalogPin.P3) / 8
    Y = pins.analogReadPin(AnalogPin.P4) / 16
    serial.writeValue("x", X)
    serial.writeValue("x", Y)
    serial.writeValue("x", Z)
    if (X > 120) {
        Y_ += 1
    }
    if (X == 0) {
        Y_ += -1
    }
    if (X == 0) {
        X_ += -1
    }
    if (X == 0) {
        X_ += 1
    }
    OLED.drawLine(
    old_x,
    old_y,
    X_,
    Y_
    )
    old_y = X_
    old_y = Y_
})
