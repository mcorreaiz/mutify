
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

var mongoServer;

export const getUri = async () => {
    if (process.env.NODE_ENV === "test") {
        mongoServer = mongoServer || await MongoMemoryServer.create()
        return mongoServer.getUri()
    }

    return process.env.DB_URI
}

export const connect = async ({ uri }) => {
    const mongooseOpts = {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }

    await mongoose.connect(uri, mongooseOpts)

    mongoose.connection.once("open", () => {
        console.log(`MongoDB successfully connected to ${uri}`)
    })

    mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

export const closeDb = async () => {
    await mongoose.disconnect()

    if (process.env.NODE_ENV === "test") {
        await mongoServer.stop()
    }
}
