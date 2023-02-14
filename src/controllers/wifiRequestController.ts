import {Response} from "express";
import {createWifiRequest, getAllWifiRequests} from "../services/wifiRequestService";
import {IWifiRequest} from "../models/WifiRequest";
async function get(res: Response) {
    try {
        const wifiRequests = await getAllWifiRequests();
        return res.status(200).send(wifiRequests);
    } catch (err: any) {
        console.error(`Error while getting wifi requests`, err.message);
        return res.status(500).send(err.message);
    }

}

async function post(request: IWifiRequest, res: Response) {
    try {
        const newWifiRequest = await createWifiRequest(request);
        return res.status(201).send(newWifiRequest);
    } catch (err: any) {
        console.error(`Error while getting wifi requests`, err.message);
        return res.status(500).send(err.message);
    }
}


export {get, post};
