import express from 'express';

import { createCustomerOrder, getAllCustomerOrders, getCustomerOrderById, updateCustomerOrderById, deleteCustomerOrderById } from '../controllers/CustomerOrderController.js';

const router = express.Router();

router.get('/customer-order', getAllCustomerOrders);

router.get('/custome-rorder/:id', getCustomerOrderById);

router.post('/customer-order', createCustomerOrder);

router.patch('/customers/:customers_id/orders/:orders_id', updateCustomerOrderById);

router.delete('/orders/:orders_id/orders/:orders_id', deleteCustomerOrderById);

export default router;