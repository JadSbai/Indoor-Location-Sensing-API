import {Response} from "express";
import {createBluetoothDevice, getAllBluetoothDevices} from "../services/bluetoothDeviceService";
import {IBluetoothDevice} from "../models/BluetoothDevice";
async function get(res: Response) {
    try {
        const bluetoothDevices = await getAllBluetoothDevices();
        return res.status(200).send(bluetoothDevices);
    } catch (err: any) {
        console.error(`Error while getting wifi requests`, err.message);
        return res.status(500).send(err.message);
    }

}

async function post(request: IBluetoothDevice, res: Response) {
    try {
        const newBluetoothDevice = await createBluetoothDevice(request);
        return res.status(201).send(newBluetoothDevice);
    } catch (err: any) {
        console.error(`Error while getting wifi requests`, err.message);
        return res.status(500).send(err.message);
    }
}


export {get, post};
