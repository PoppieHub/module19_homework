/* # Fifth task */

let _totalPowerKWh = 0;

class Device {
    /* ## This parent constructor method accepts parameters:
        string: name,
        bool: (is it connected to the network?),
        numbers: (power consumption in kilowatts / hour).
    */
    constructor(name, powerConnection, powerConsumptionKWh) {
        this.name = name;
        this.powerConnection = powerConnection;
        this.powerConsumptionKWh = powerConsumptionKWh;
        this.type = `electrical appliance`;
    }

    /* ## This prototype method calculates the total power consumption */
    setTotalPowerKWh() {
        if (_totalPowerKWh < 0) return _totalPowerKWh = 0;
        if (this.powerConnection && this.powerConsumptionKWh > 0) {
            return _totalPowerKWh += this.powerConsumptionKWh;
        } else return _totalPowerKWh;
    }
    /* ## This prototype method checks whether the device is switched on/off from the socket */
    getMainsPowerSupply() {
        return this.powerConnection ?
            `Your device is a ${this.name}, which is connected to the socket`:
            `Your device is a ${this.name}, which is unplugged`;
    }
}

class SmartDevice extends Device {
    /* ## This child constructor method accepts parameters:
            bool: (does it have internet access?),
            string: name,
            bool: (Is it connected to electricity?),
            numbers: (power consumption in kilowatts / hour).
    */
    constructor(access, name, powerConnection, powerConsumptionKWh) {
        super(name, powerConnection, powerConsumptionKWh);
        super.setTotalPowerKWh();
        this.hasInternetAccess = access;
    }

    /* ## This prototype method checks if the device is connected to the internet */
    getInternetConnection() {
        return this.hasInternetAccess ?
            `Your device is a ${this.name}, has internet access`:
            `Your device is a ${this.name}, does not have internet access`;
    }

    /* ## This prototype method checks if the device is ready for remote work */
    getRemoteWork() {
        if (this.powerConnection && this.hasInternetAccess) {
            return `smart device ${name} ready for job`;
        } else if (this.powerConnection === false) {
            return super.getMainsPowerSupply();
        } else
            return this.getInternetConnection();
    }
}

class FunctionalDevice extends Device {
    /* ## This child constructor method accepts parameters:
        number or string: (power consumption percentage),
        string: name,
        bool: (is it connected to electricity?),
        number: (power consumption in kilowatts/hour).
    And translates into total power consumption relative to percentages */
    constructor(consumptionLevel, name, powerConnection, powerConsumptionKWh) {
        super(name, powerConnection, powerConsumptionKWh);
        this.consumptionLevel = this.constructor.getСonsumptionLevel(consumptionLevel);
        this.powerConsumptionKWh = powerConsumptionKWh * this.consumptionLevel;
        this.setTotalPowerKWh();
    }

    /* ## This prototype method converts received percentages */
    static getСonsumptionLevel(consumptionLevel) {
        consumptionLevel = consumptionLevel.toString()
        consumptionLevel = consumptionLevel.split('%')[0];

        return consumptionLevel * 0.01;
    }
}

const pc = new SmartDevice(false, 'pc', true, 600);
const lamp = new FunctionalDevice(89, 'lamp', true, 100);

console.group(`Fifth task`);
console.log(pc);
console.log(pc.getRemoteWork());
console.log(lamp);
console.log(lamp.getMainsPowerSupply());
console.table(`Total power consumption of switched on appliances: ${_totalPowerKWh}`);
console.groupEnd();
