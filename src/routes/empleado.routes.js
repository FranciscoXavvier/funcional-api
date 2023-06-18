import {Router} from 'express';
import {registrarEmpleado, IniciarSesionEmpleado} from '../controllers/empleados.controller.js';

const router = Router();

// INICIO RUTAS CU YASSER

router.post('/Empleados/Registrar', registrarEmpleado);
router.post("/Empleados/IniciarSesion", IniciarSesionEmpleado);

// FIN RUTAS CU YASSER

export default router;