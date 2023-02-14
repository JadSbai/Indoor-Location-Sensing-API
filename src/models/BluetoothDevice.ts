import mongoose from "mongoose";

export interface IBluetoothDevice {
    mac: string,
    rssi: number,
    timestamp: number,
    friendlyName: string,
}

interface bluetoothDeviceModelInterface extends mongoose.Model<BluetoothDeviceDoc> {
    build(attr: IBluetoothDevice): BluetoothDeviceDoc
}

interface BluetoothDeviceDoc extends mongoose.Document {
    mac: string,
    rssi: number,
    timestamp: number,
    friendlyName: string,
}

const bluetoothDeviceSchema = new mongoose.Schema({
    mac: {type: String, required: true},
    rssi: {type: Number, required: true},
    timestamp: {type: Number, required: true},
    friendlyName: {type: String, required: true},
});

bluetoothDeviceSchema.statics.build = (attr: IBluetoothDevice) => {
    return new BluetoothDevice(attr);
}

const BluetoothDevice = mongoose.model<BluetoothDeviceDoc, bluetoothDeviceModelInterface>('BluetoothDevice', bluetoothDeviceSchema)

export{BluetoothDevice};
