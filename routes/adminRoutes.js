import express from 'express';

import { createAdmin, getAllAdmins, getAdminById, updateAdminById, deleteAdminById } from '../controllers/adminController.js';

const router = express.Router();

router.get('/Admins', getAllAdmins);

router.get('/Admins/:id', getAdminById);

router.post('/Admins', createAdmin);

router.patch('/Admins/:id', updateAdminById);

router.delete('/Admins/:id', deleteAdminById);

export default router;