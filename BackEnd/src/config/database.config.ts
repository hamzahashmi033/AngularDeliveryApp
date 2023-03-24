import mongoose from "mongoose";

const connectDB = async()=>{
    const {connection} = await mongoose.connect(process.env.MONGO_URI!)
    console.log("DataBase is successfully connect with " + connection.host);
}
export default connectDB;