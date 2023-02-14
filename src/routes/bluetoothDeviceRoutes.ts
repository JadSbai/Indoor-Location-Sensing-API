import express from "express";
import {get, post} from "../controllers/bluetoothDeviceController";
import {IBluetoothDevice} from "../models/BluetoothDevice";

const router = express.Router();

router.get("/api/bluetooth", async (req, res) => {
    return await get(res);
});

router.post("/api/bluetooth", async (req, res) => {
    const requestData: IBluetoothDevice = {
        mac: req.body.mac,
        rssi: req.body.rssi,
        timestamp: req.body.timestamp,
        friendlyName: req.body.friendlyName,
    }
    return await post(requestData, res);
});

export { router as bluetoothRouter };
