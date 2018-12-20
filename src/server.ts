import app from './app';

import path from 'path';
import http from 'http';
import socketIo from 'socket.io';

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket: any) => {
  console.log('someone joined!!');
});

/**
 * Start Express server.
 */
server.listen(3000, () => {
  console.log('  App is running at http://localhost:%d in %s mode');
  console.log(
    `  App is running at http://localhost:%d in %s mode ${app.get(
      'port'
    )} ${app.get('env')}`
  );
  console.log('------------------------------------------------------------');
});
