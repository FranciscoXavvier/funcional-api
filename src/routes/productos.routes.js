import { Router } from "express";
import uploadImage from "../storage/libs/storage.js"
import { buscarProducto, registrarProducto, modificarProductoById, eliminarProductoById, subirImagenProducto } from "../controllers/productos.controller.js";

const router = Router();

// INICIO RUTAS CU YASSER

router.get("/Productos/Buscar", buscarProducto);
router.post("/Productos/Registrar", registrarProducto);
router.post("/Productos/SubirImagen", uploadImage.single('ImagenProducto'), subirImagenProducto);
router.put("/Productos/Actualizar/:id", modificarProductoById);
router.delete("/Productos/Eliminar/:id", eliminarProductoById);

// FIN RUTAS CU YASSER

export default router;