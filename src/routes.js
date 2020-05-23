import { Router } from 'express';
import multer from 'multer';

// Import controllers
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import AppointmentController from './app/controllers/AppointmentController';
import ScheduleController from './app/controllers/ScheduleController';
import NotificationController from './app/controllers/NotificationController';
import AvailableController from './app/controllers/AvailableController';

// Import configs and middlewares
import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

// Initial routes
// X
routes.post('/users', UserController.store);
// X
routes.post('/sessions', SessionController.store);

// Logged in routes

routes.use(authMiddleware);

// X
routes.put('/users', UserController.update);

// X
routes.get('/providers', ProviderController.index);

// Em teoria X
routes.get('/providers/:providerId/available', AvailableController.index);

// have to be fixed
routes.post('/files', upload.single('file'), FileController.store);

// ok
routes.post('/appointments', AppointmentController.store);

// ok
routes.get('/appointments', AppointmentController.index);

// ok
routes.delete('/appointments/:id', AppointmentController.delete);

// ok
routes.get('/schedule', ScheduleController.index);

//ok 
routes.get('/notifications', NotificationController.index);

// ok
routes.put('/notifications/:id', NotificationController.update);

export default routes;
