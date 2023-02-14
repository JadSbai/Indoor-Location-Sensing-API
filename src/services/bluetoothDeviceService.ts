import {BluetoothDevice, IBluetoothDevice} from "../models/BluetoothDevice";

async function createBluetoothDevice(bluetoothDevice: IBluetoothDevice) {
    const {mac, rssi, timestamp, friendlyName} = bluetoothDevice;

    const newBluetoothDevice = BluetoothDevice.build({ mac, rssi, timestamp, friendlyName });
    await newBluetoothDevice.save();
    return newBluetoothDevice;
}

async function getAllBluetoothDevices() {
    return BluetoothDevice.find({});
}

export {createBluetoothDevice, getAllBluetoothDevices};
