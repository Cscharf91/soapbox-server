import { Router } from 'express';
import soapstoneController from '../controllers/soapstoneController.js';

const router = Router();

router.get('/', soapstoneController.getSoapstones);
router.post('/', soapstoneController.createSoapstone);
router.get('/:id', soapstoneController.getSoapstone);
router.patch('/:id', soapstoneController.updateSoapstone);
router.delete('/:id', soapstoneController.deleteSoapstone);

export default router;