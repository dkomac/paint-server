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
const FROM_SERVER = 'FROM_SERVER';
const MOUSEDOWN_FALSE = 'MOUSEDOWN_FALSE';
const MEMORY_DATA = [];
io.on('connection', (socket) => {
    socket.isDrawing = false;
    console.log(`---- ${socket.id} joined the server ----`);
    let newLine = [];
    socket.on('message', (action) => {
        switch (action.type) {
            case 'DRAWING_STATUS':
                socket.isDrawing = action.payload.isDrawing;
                break;
            case 'POSITION_DATA':
                newLine.push(action.payload);
                io.emit(FROM_SERVER, { type: 'message', payload: MEMORY_DATA });
                break;
            default:
                console.log('i dont know :thinkingface:');
        }
        if (!socket.isDrawing && newLine.length > 1) {
            MEMORY_DATA.push(newLine);
            newLine = [];
        }
        io.emit('message', { type: FROM_SERVER, text: action });
    });
});
/**
 * Start Express server.
 */
server.listen(3001, () => {
    console.log('  App is running at http://localhost:%d in %s mode');
    console.log(`  App is running at http://localhost:%d in %s mode ${app_1.default.get('port')} ${app_1.default.get('env')}`);
    console.log('------------------------------------------------------------');
});
//# sourceMappingURL=server.js.map