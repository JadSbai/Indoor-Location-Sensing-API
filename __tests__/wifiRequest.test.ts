import mongoose from "mongoose";
import {app} from '../src/app'
import request from "supertest";
import dotenv from 'dotenv'
import {IWifiRequest} from "../src/models/WifiRequest";
dotenv.config();

/* Connecting to the database before each test. */
beforeEach(async () => {
    const connection = process.env.DATABASE_URI || 'lol';
    await mongoose.connect(connection);
});

/* Closing database connection after each test. */
afterEach(async () => {
    await mongoose.connection.close();
});

describe("GET /api/wifi", () => {
    it("should return all wifi requests", async () => {
        const res = await request(app).get("/api/wifi");
        expect(res.statusCode).toBe(200);
    });
});

describe("POST /api/wifi", () => {
    it("should create a new wifi request", async () => {
        const wifiRequest: IWifiRequest = {
            mac: '01010101',
            rssi: 12,
            ssid: "test",
            timestamp: 15,
            sensorId: 'test',
            sequenceNumber: 45,
        }
        const res = await request(app).post("/api/wifi").send(wifiRequest);
        expect(res.statusCode).toBe(201);
        expect(res.body.mac).toBe(wifiRequest.mac)
        expect(res.body.rssi).toBe(wifiRequest.rssi)
        expect(res.body.ssid).toBe(wifiRequest.ssid)
        expect(res.body.timestamp).toBe(wifiRequest.timestamp)
        expect(res.body.sensorId).toBe(wifiRequest.sensorId)
        expect(res.body.sequenceNumber).toBe(wifiRequest.sequenceNumber)
    });
});

