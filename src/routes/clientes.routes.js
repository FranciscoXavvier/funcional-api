import {Router} from 'express';
import {registrarCliente, IniciarSesionCliente} from '../controllers/clientes.controller.js';

const router = Router();

// INICIO RUTAS CU YASSER
router.post('/Clientes/Registrar', registrarCliente);
router.post("/Clientes/IniciarSesion", IniciarSesionCliente);

// FIN RUTAS CU YASSER

export default router;