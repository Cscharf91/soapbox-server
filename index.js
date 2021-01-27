import express from 'express';
import wordRoutes from './routes/wordRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import phraseRoutes from './routes/phraseRoutes.js';
import promptRoutes from './routes/promptRoutes.js';
import mongoose from 'mongoose';
import cors from 'cors';
import 'dotenv/config.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const dbUri = process.env.DB_URI;
mongoose.connect(dbUri, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));

app.use('/api/words', wordRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/phrases', phraseRoutes);
app.use('/api/prompts', promptRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server is live on ' + PORT);
}) 