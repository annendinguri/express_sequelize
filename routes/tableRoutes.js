import express from 'express';

import { createTable, getAllTables, getTableById, updateTableById, deleteTableById } from '../controllers/tableController.js';

const router = express.Router();

router.get('/Tables', getAllTables);

router.get('/Tables/:id', getTableById);

router.post('/Tables', createTable);

router.patch('/Tables/:id', updateTableById);

router.delete('/Tables/:id', deleteTableById);

export default router;