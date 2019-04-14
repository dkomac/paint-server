import app from './app';

import path from 'path';
import http from 'http';
import socketIo from 'socket.io';

const server = http.createServer(app);
const io = socketIo(server);

const FROM_SERVER: string = 'FROM_SERVER';

const MOUSEDOWN_FALSE: string = 'MOUSEDOWN_FALSE'

const MEMORY_DATA: any = []

io.on('connection', (socket: any) => {
  socket.isDrawing = false;
  console.log(`---- ${socket.id} joined the server ----`);
  let newLine: any = []

  socket.on('message', (action: { type: string; payload: any }) => {
    
    switch(action.type) {
      case 'DRAWING_STATUS':
        socket.isDrawing = action.payload.isDrawing
        break;

      case 'POSITION_DATA':
        newLine.push(action.payload)
        io.emit(FROM_SERVER, { type: 'message', payload: MEMORY_DATA})
        break;

        default:
        console.log('i dont know :thinkingface:')
    }

    if(!socket.isDrawing && newLine.length > 1) {
      MEMORY_DATA.push(newLine);
      newLine = []
    }
    
    
    io.emit('message', {type: FROM_SERVER, text: action});    
  });
});

/**
 * Start Express server.
 */
server.listen(3001, () => {
  console.log('  App is running at http://localhost:%d in %s mode');
  console.log(
    `  App is running at http://localhost:%d in %s mode ${app.get(
      'port'
    )} ${app.get('env')}`
  );
  console.log('------------------------------------------------------------');
});
