namespace modules {
    /**
     * The Soilmoisture measured by Grove moisture Sensor at C16
     */
    //% fixedInstance whenUsed block="Grove SoilMoistureLevel"
    export const GroveSoilMoistureLevel = new SoilMoistureClient("C16?dev=self")
}

namespace servers {
    function start() {
        jacdac.productIdentifier = 0x30912064
        jacdac.deviceDescription = "Grove soil moisture"
        jacdac.startSelfServers(() => [
            jacdac.createSimpleSensorServer(
                jacdac.SRV_SOIL_MOISTURE,
                jacdac.SoilMoistureRegPack.Moisture,
                () => pins.analogReadPin(AnalogPin.C16) / 1023,
            ),
        ])
    }
    start()
}