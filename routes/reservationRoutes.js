import express from 'express';

import { createReservation, getAllReservations, getReservationById, updateReservationById, deleteReservationById } from '../controllers/reservationController.js';

const router = express.Router();

router.get('/Reservations', getAllReservations);

router.get('/Reservations/:id', getReservationById);

router.post('/Reservations', createReservation);

router.patch('/Reservations/:id', updateReservationById);

router.delete('/Reservations/:id', deleteReservationById);

export default router;