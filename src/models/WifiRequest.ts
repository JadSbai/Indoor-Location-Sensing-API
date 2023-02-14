import mongoose from "mongoose";

export interface IWifiRequest {
    mac: string,
    ssid: string,
    rssi: number,
    timestamp: number,
    sensorId: string,
    sequenceNumber: number,
}

interface wifiRequestModelInterface extends mongoose.Model<WifiRequestDoc> {
    build(attr: IWifiRequest): WifiRequestDoc
}

interface WifiRequestDoc extends mongoose.Document {
    mac: string,
    ssid: string,
    rssi: number,
    timestamp: number,
    sensorId: string,
    sequenceNumber: number,
}

const wifiRequestSchema = new mongoose.Schema({
    mac: {type: String, required: true},
    ssid: {type: String, required: true},
    rssi: {type: Number, required: true},
    timestamp: {type: Number, required: true},
    sensorId: {type: String, required: true},
    sequenceNumber: {type: Number, required: true},
});

wifiRequestSchema.statics.build = (attr: IWifiRequest) => {
    return new WifiRequest(attr);
}

const WifiRequest = mongoose.model<WifiRequestDoc, wifiRequestModelInterface>('WifiRequest', wifiRequestSchema)

export{WifiRequest};
