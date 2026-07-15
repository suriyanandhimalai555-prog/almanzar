import express from 'express';
import { registerDistributor, loginDistributor } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/register', registerDistributor);
router.post('/login', loginDistributor); // Added login route

export default router;