import express from "express";
import {bluetoothRouter} from "./routes/bluetoothDeviceRoutes";
import {wifiRouter} from "./routes/wifiRequestRoutes";

const app = express();
app.use(express.json());
app.use(bluetoothRouter);
app.use(wifiRouter);

export {app};
