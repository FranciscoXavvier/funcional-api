import {Router} from 'express';
import {registrarOrden, agregarProducto, modificarEstadoOrdenById} from '../controllers/orden.controller.js';

const router = Router();

// INICIO RUTAS CU Xavier

router.post('/Orden/Registrar', registrarOrden);
router.post('/Orden/AgregarProducto', agregarProducto);
router.put('/Orden/ActualizarEstadoOrden', modificarEstadoOrdenById )
// FIN RUTAS CU Xavier

export default router;