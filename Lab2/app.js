const http = require("http");

const url = require("url");

const PORT = 80;

const listener = (req, res) => {
    const reqUrl = url.parse(req.url).pathname;
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    if (req.method !== "GET") return;

    if (reqUrl === "/") {
        res.end("Some text here");
    } else if (reqUrl === "/health-check") {
        res.end("Health check - OK");
    }
};

const server = http.createServer(listener);
server.listen(PORT, () => {
    console.log(`Server running`);
});
