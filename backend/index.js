const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/userRoutes');
const booksRoutes = require('./routes/bookRoutes')

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: '*', // Specify the origin of your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Use the auth routes
app.use('/api/auth', authRoutes);
app.use('/api', booksRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
