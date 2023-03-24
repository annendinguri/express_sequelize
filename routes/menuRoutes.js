import express from 'express';

import { createMenu, getAllMenus, getMenuById, updateMenuById, deleteMenuById } from '../controllers/menuController.js';

const router = express.Router();

router.get('/Menus', getAllMenus);

router.get('/Menus/:id', getMenuById);

router.post('/Menus', createMenu);

router.patch('/Menus/:id', updateMenuById);

router.delete('/Menus/:id', deleteMenuById);

export default router;