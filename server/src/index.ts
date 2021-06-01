import './config/db-mongo';
import { startSocket } from './app';

const port = 5000;
const host = '0.0.0.0';

startSocket(port, host);
