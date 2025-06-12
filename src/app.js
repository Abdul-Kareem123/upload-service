require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');

const fileRoutes = require('./routes/file.routes');

const app = express();

// Create upload directory if not exists
const uploadDir = path.join(__dirname, '..', process.env.UPLOAD_DIR);
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

app.use('/api', fileRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
