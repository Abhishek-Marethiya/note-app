import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/noteRouter';

dotenv.config();

const app=express();
app.use(express.json());
const SERVER_PORT=5000
const MONGO_URI='mongodb+srv://abhimaxu01:iuLy5zv4QdJFpIyD@cluster0.olvniyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'


const connectMongoDB = async()=>{
    try {
		const conn = await mongoose.connect(MONGO_URI);
		console.log(`MongoDB connected at : ${conn.connection.host}`);
	} catch (error) {
		console.error('Error connection to mongoDB failed');
		process.exit(1);
	}
}

app.use('/api/notes',router);

app.listen(SERVER_PORT,()=>{
    console.log(`Server is running on port ${SERVER_PORT}`);
    connectMongoDB();
})
