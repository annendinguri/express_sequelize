import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';
import roleRoutes from './routes/roleRoutes.js';
import userRoleRouter from './routes/userRoleRoutes.js';
import tableOderRouter from './routes/tableOrderRoutes.js';
import tableReservationRouter from './routes/tableReservationRoutes.js';
import customerOrderRouter from './routes/customerOrderRoutes.js';
import tableRoutes from './routes/tableRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import menuRoutes from './routes/menuRoutes.js';
import reservationRoutes from './routes/reservationRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import customerRoutes from './routes/customerRoutes.js';
import authRoutes from './routes/authRoutes.js'
import errorHandler from './middlewares/errorHandler.js';
import cors from 'cors';
import db from './models/index.js';

const sequelize = db.sequelize;

dotenv.config();
const app = express();

app.use (cors());
app.use(express.json());
app.use(errorHandler);

sequelize.sync({force: true}).then(() => {
    console.log("Tables created.");
}).catch(err =>{
    console.log(err);
});

app.use('/api/v1', userRoutes);
app.use('/api/v1', tableRoutes);
app.use('/api/v1', menuRoutes);
app.use('/api/v1', orderRoutes);
app.use('/api/v1', reservationRoutes);
app.use('/api/v1', adminRoutes);
app.use('/api/v1', customerRoutes);
app.use('/api/v1', roleRoutes);
app.use('/api/v1', userRoleRouter);
app.use('/api/v1', tableOderRouter);
app.use('/api/v1', tableReservationRouter);
app.use('/api/v1', customerOrderRouter);
app.use('/api/v1', authRoutes);

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
});
    