import express from 'express';

import { createTableOrder, getAllTableOrders, getTableOrderById, updateTableOrderById, deleteTableOrderById } from '../controllers/TableOrderController.js';

const router = express.Router();

router.get('/table-order', getAllTableOrders);

router.get('/table-order/:id', getTableOrderById);

router.post('/table-order', createTableOrder);

router.patch('/tables/:tables_id/tables/:tables_id', updateTableOrderById);

router.delete('/orders/:orders_id/orders/:orders_id', deleteTableOrderById);

export default router;