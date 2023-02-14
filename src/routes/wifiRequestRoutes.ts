import express, {Request, Response} from "express";
import {get, post} from "../controllers/wifiRequestController";
import {IWifiRequest} from "../models/WifiRequest";

const router = express.Router();

router.get("/api/wifi", async (req: Request, res: Response) => {
    return await get(res);
});

router.post("/api/wifi", async (req: Request, res: Response) => {
    const requestData: IWifiRequest = {
        mac: req.body.mac,
        ssid: req.body.ssid,
        rssi: req.body.rssi,
        timestamp: req.body.timestamp,
        sensorId: req.body.sensorId,
        sequenceNumber: req.body.sequenceNumber,
    }
    return await post(requestData, res);
});

export { router as wifiRouter };
