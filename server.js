const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Đặt các tệp tĩnh
app.use(express.static(__dirname));

// Route cho trang chính
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Lắng nghe các kết nối trên cổng PORT
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
