import express from 'express';

import { createTableReservation, getAllTableReservations, getTableReservationById, updateTableReservationById, deleteTableReservationById } from '../controllers/TableReservationController.js';

const router = express.Router();

router.get('/table-reservation', getAllTableReservations);

router.get('/table-reservation/:id', getTableReservationById);

router.post('/table-reservation', createTableReservation);

router.patch('/tables/:tables_id/reseravations/:reservations_id', updateTableReservationById);

router.delete('/tables/:tables_id/reservations/:reservations_id', deleteTableReservationById);

export default router;