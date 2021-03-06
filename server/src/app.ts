import express, { Application } from 'express';
import socketIo, { Socket } from 'socket.io';
import { createServer } from 'http';
import router from './routes';

const app: Application = express();
const httpServer = createServer(app);
const io = new socketIo.Server(httpServer, {
  cors: {
    origin: 'http://localhost:3000'
  }
});

io.on('connection', (socket: Socket) => {
  console.log('Novo usuario ', socket.id);
});

const startSocket = (port: number, host: string) =>
  httpServer.listen(port, host, () => {
    console.log('socket online');
  });

app.use(express.json());
app.use(router);

export { startSocket };
export default app;
