/* # Fourth task */

let TotalPowerKWh = 0;

/* ## This parent constructor function accepts parameters:
        string: name,
        bool: (is it connected to the network?),
        numbers: (power consumption in kilowatts / hour).
*/
function Device(name, powerConnection, powerConsumptionKWh) {
    this.name = name;
    this.powerConnection = powerConnection;
    this.powerConsumptionKWh = powerConsumptionKWh;
    this.type = `electrical appliance`;
}

/* ## This prototype function calculates the total power consumption */
Device.prototype.setTotalPowerKWh = function () {
    if (this.powerConnection) {
       return TotalPowerKWh += this.powerConsumptionKWh;
    }
}

/* ## This prototype function checks whether the device is switched on/off from the socket */
Device.prototype.getMainsPowerSupply = function () {
    return this.powerConnection ? `Your device is a ${this.name}, which is connected to the socket`: `Your device is a ${this.name}, which is unplugged`;
}

/* ## This child constructor function accepts parameters:
        string: name,
        bool: (does it have internet access?),
        bool: (Is it connected to electricity?),
        numbers: (power consumption in kilowatts / hour).
*/
function SmartDevice(name, access, powerConnection, powerConsumptionKWh) {
    this.name = name;
    this.powerConnection = powerConnection;
    this.hasInternetAccess = access;
    this.powerConsumptionKWh = powerConsumptionKWh;
    this.setTotalPowerKWh();
}

SmartDevice.prototype = new Device();

/* ## This prototype function checks if the device is connected to the internet */
SmartDevice.prototype.getInternetConnection = function () {
    return this.hasInternetAccess ? `Your device is a ${this.name}, has internet access`: `Your device is a ${this.name}, does not have internet access`;
}

/* ## This prototype function checks if the device is ready for remote work */
SmartDevice.prototype.getRemoteWork = function () {
    if (this.powerConnection && this.hasInternetAccess) {
        return `smart device ${name} ready for job`;
    } else if (this.powerConnection === false) {
        return this.getMainsPowerSupply();
    } else
        return this.getInternetConnection();
}

/* ## This child constructor function accepts parameters:
        string: name,
        bool: (is it connected to electricity?),
        number or string: (power consumption percentage),
        number: (power consumption in kilowatts/hour).
And translates into total power consumption relative to percentages */
function FunctionalDevice(name, powerConnection, consumptionLevel, powerConsumptionKWh) {
    this.name = name;
    this.powerConnection = powerConnection;
    this.consumptionLevel = this.getСonsumptionLevel(consumptionLevel);
    this.powerConsumptionKWh = powerConsumptionKWh * this.consumptionLevel;
    this.setTotalPowerKWh();
}

FunctionalDevice.prototype = new Device();

/* ## This prototype function converts received percentages */
FunctionalDevice.prototype.getСonsumptionLevel = function (consumptionLevel) {
    consumptionLevel = consumptionLevel.toString()
    consumptionLevel = consumptionLevel.split('%')[0];

    return consumptionLevel * 0.01;
}

const pc = new SmartDevice('pc', false, true, 600);
const lamp = new FunctionalDevice('lamp', false, 89, 100);

console.group(`Fourth task`);
    console.log(pc);
    console.log(pc.getRemoteWork());
    console.log(lamp);
    console.log(lamp.getMainsPowerSupply());
    console.table(`Total power consumption of switched on appliances: ${TotalPowerKWh}`);
console.groupEnd();

