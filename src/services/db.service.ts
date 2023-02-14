import mongoose from "mongoose";
const connectionString = process.env.DATABASE_URI || "mongodb://localhost:27017";
export const connectToServer = async () => {
    try {
        const dbConnection = await mongoose.connect(connectionString);
        console.log('Connected to MongoDB');
        return dbConnection;
    } catch (err) {
        console.log(err);
        return undefined;
    }
}
