import { App } from './app';
import { LoggerService } from './services/logger/logger.service';
import sequelize from './config/db.config';
import router from './routes';

const app = new App(router, new LoggerService(), sequelize);

app.init();
