"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const server = http_1.default.createServer(app_1.default);
const io = socket_io_1.default(server);
io.on('connection', (socket) => {
    console.log('someone joined!!');
});
/**
 * Start Express server.
 */
server.listen(3000, () => {
    console.log('  App is running at http://localhost:%d in %s mode');
    console.log(`  App is running at http://localhost:%d in %s mode ${app_1.default.get('port')} ${app_1.default.get('env')}`);
    console.log('------------------------------------------------------------');
});
//# sourceMappingURL=server.js.map