import { Router } from 'express';
import promptController from '../controllers/promptController.js';

const router = Router();

router.get('/', promptController.getPrompts);
router.post('/', promptController.createPrompt);
router.get('/:id', promptController.getPrompt);
router.patch('/:id', promptController.updatePrompt);
router.delete('/:id', promptController.deletePrompt);

export default router;