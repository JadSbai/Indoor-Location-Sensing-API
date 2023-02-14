import {IWifiRequest, WifiRequest} from "../models/WifiRequest";

async function createWifiRequest(wifiRequest: IWifiRequest) {
    const {mac, ssid, rssi, sequenceNumber, sensorId, timestamp} = wifiRequest;

    const newWifiRequest = WifiRequest.build({ mac, ssid, rssi, sequenceNumber, sensorId, timestamp });
    await newWifiRequest.save();
    return newWifiRequest;
}

async function getAllWifiRequests() {
    return WifiRequest.find({});
}

export {createWifiRequest, getAllWifiRequests};
