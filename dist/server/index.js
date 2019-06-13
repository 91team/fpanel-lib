"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const next_1 = __importDefault(require("next"));
const path_1 = require("path");
const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next_1.default({ dev });
const handle = app.getRequestHandler();
async function startServer() {
    await app.prepare();
    const server = express_1.default();
    server.use('/service-worker.js', (req, res) => app.serveStatic(req, res, path_1.join(__dirname, '../.next/service-worker.js')));
    server.get('*', (req, res) => handle(req, res));
    await server.listen(port, () => console.log(`> Ready on http://localhost:${port}`));
}
startServer();
//# sourceMappingURL=index.js.map