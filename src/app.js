const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();

connectDB();

app.use(express.json());

app.use('/api/users', userRoutes);

app.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
