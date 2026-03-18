import mongoose from "mongoose"

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB)
        console.log("MongoDB: Connected")
    } catch(e){
        console.log(`MongoDB: Failed to connect - ${e.message}`)
    }
}

export default connectDB