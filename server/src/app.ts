import express, { Application } from 'express';
import { routes } from './routes';

// Boot express
const app: Application = express();

export default app;

// Application routing
routes(app);
