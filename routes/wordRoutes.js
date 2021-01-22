import { Router } from 'express';
import wordController from '../controllers/wordController.js';

const router = Router();

router.get('/', wordController.getWords);
router.post('/', wordController.createWord);
router.get('/:id', wordController.getWord);
router.patch('/:id', wordController.updateWord);
router.delete('/:id', wordController.deleteWord);

export default router;