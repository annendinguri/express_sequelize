import express from 'express';

import { createOrder, getAllOrders, getOrderById, updateOrderById, deleteOrderById } from '../controllers/orderController.js';

const router = express.Router();

router.get('/Orders', getAllOrders);

router.get('/Orders/:id', getOrderById);

router.post('/Orders', createOrder);

router.patch('/Orders/:id', updateOrderById);

router.delete('/Orders/:id', deleteOrderById);

export default router;