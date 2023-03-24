import express from 'express';

import { createCustomer, getAllCustomers, getCustomerById, updateCustomerById, deleteCustomerById } from '../controllers/customerController.js';

const router = express.Router();

router.get('/Customers', getAllCustomers);

router.get('/Customers/:id', getCustomerById);

router.post('/Customers', createCustomer);

router.patch('/Customers/:id', updateCustomerById);

router.delete('/Customers/:id', deleteCustomerById);

export default router;
