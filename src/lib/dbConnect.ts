import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: string
} // database connection object, whether there is an active connection to the database, and to ensure that the application doesn’t attempt to establish multiple connections unnecessarily.

const connection : ConnectionObject = {};

async function dbConnect(): Promise<void> {
    if (connection.isConnected) {
        console.log("Already connected to MongoDB");
        return;
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI ?? "");
        //connection.isConnected = db.connections[0].readyState; // not a neccessary step as it is just to show that yes it is connected, probably wont even be needed as such, but yes it is a good practice, like you are carrying a biscuit from the packet to prove you have the packet of biscuits! 
        connection.isConnected = db.connections[0].host;
        console.log(`MongoDB connected on host : ${ connection.isConnected}`);
    }
    catch (err) {
        console.log("Error connecting to MongoDB", err);
        process.exit(1);
    }
}
export default dbConnect;