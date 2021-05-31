import { Application, Router } from 'express';
import IndexController from './controllers/indexController';

const myRoutes: [string, Router][] = [['/', IndexController]];

const routes = (app: Application) => {
  myRoutes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};

export { routes };
