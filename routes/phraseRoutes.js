import { Router } from 'express';
import phraseController from '../controllers/phraseController.js';

const router = Router();

router.get('/', phraseController.getPhrases);
router.post('/', phraseController.createPhrase);
router.get('/:id', phraseController.getPhrase);
router.patch('/:id', phraseController.updatePhrase);
router.delete('/:id', phraseController.deletePhrase);

export default router;