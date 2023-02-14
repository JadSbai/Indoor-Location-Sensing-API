import mongoose from "mongoose";
import {app} from '../src/app'
import request from "supertest";
import dotenv from 'dotenv'
import {IBluetoothDevice} from "../src/models/BluetoothDevice";
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

describe("GET /api/bluetooth", () => {
    it("should return all bluetooth devices", async () => {
        const res = await request(app).get("/api/wifi");
        expect(res.statusCode).toBe(200);
    });
});

describe("POST /api/bluetooth", () => {
    it("should create a new bluetooth device", async () => {
        const bluetoothDevice: IBluetoothDevice = {
            mac: '01010101',
            rssi: 12,
            timestamp: 15,
            friendlyName: 'test'
        }
        const res = await request(app).post("/api/bluetooth").send(bluetoothDevice);
        expect(res.statusCode).toBe(201);
        expect(res.body.mac).toBe(bluetoothDevice.mac)
        expect(res.body.rssi).toBe(bluetoothDevice.rssi)
        expect(res.body.friendlyName).toBe(bluetoothDevice.friendlyName)
        expect(res.body.timestamp).toBe(bluetoothDevice.timestamp)
    });
});

