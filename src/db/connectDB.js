import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    if (connection.isConnected) {
        // Already connected
        return;
    }

    try {
        const db = await mongoose.connect("mongodb+srv://3556ishugupta:idCFGetcRm5eF8xx@cluster0.1tlt1ax.mongodb.net/ChaiDataBase", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        connection.isConnected = db.connections[0].readyState;
        console.log('Success: Connected to MongoDB');
    } catch (error) {
        console.error("Error connecting to the database", error);
        process.exit(1); // Exit process on connection failure
    }
}

export default dbConnect;
