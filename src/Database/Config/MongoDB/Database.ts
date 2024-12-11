import mongoose from 'mongoose';
import "dotenv/config";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://admin:adminadmin@olympus.faonfdg.mongodb.net/`);
    console.log('Conectado a MongoDB exitosamente.');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
  }
};

export default connectMongoDB;