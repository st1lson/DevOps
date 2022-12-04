const http = require("http");

const PORT = 80;

const listener = (_req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Some text here");
};

const server = http.createServer(listener);
server.listen(PORT, () => {
    console.log(`Server running`);
});
