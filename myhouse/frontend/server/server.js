const { createProxyMiddleware } = require('http-proxy-middleware');
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
dotenv.config({ path: "../.env" });

const apiProxy = createProxyMiddleware("/api", {
    target: process.env.REACT_APP_BACKEND_HOST,
    changeOrigin: true,
});
app.use('/api', apiProxy);

const authProxy = createProxyMiddleware("/auth", {
    target: process.env.REACT_APP_BACKEND_HOST,
    changeOrigin: true,
});
app.use('/auth', authProxy);

app.use(express.static(path.join(__dirname, '../build')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(9000);