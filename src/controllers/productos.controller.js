
import { getConnection } from "../database/conexion/connection.js";
import { productoQuerys } from "../database/querys/productos.querys.js";
import { sql } from "../database/index.js";

//INICIO METODOS CU YASSER

export const buscarProducto = async (req, res, next) => {  
  const nombre = String(req.query.nombre).toUpperCase();
  const categoria = String(req.query.categoria).toUpperCase();
  const existencia = String(req.query.existencia).toUpperCase();
  
  try {

    const pool = await getConnection();
    let result;

    if(nombre == "" && categoria == "" && existencia == ""){
      result = await pool.request().query(productoQuerys.listarTodos);
      console.log("listarTodos");

    }else if (nombre == "" && categoria !="" && existencia == ""){
      result = await pool.request().input("categoria", categoria).query(productoQuerys.listarTodosByCategoria);
      console.log("listarTodosByCategoria");

    }else if (nombre != "" && categoria =="" && existencia == ""){
      result = await pool.request().input("nombre", nombre).query(productoQuerys.ListarTodosByNombre);
      console.log("ListarTodosByNombre");

    }else if (nombre != "" && categoria !="" && existencia == ""){
      result = await pool.request().input("categoria", categoria).input("nombre", nombre).query(productoQuerys.ListarTodosByCategoriaByNombre);
      console.log("ListarTodosByCategoriaByNombre");

    }else if (nombre == "" && categoria == "" && existencia == "TRUE"){
      result = await pool.request().query(productoQuerys.listarTodosExistentes);
      console.log("listarTodosExistentes");
    
    }else if (nombre == "" && categoria =="" && existencia == "FALSE"){
      result = await pool.request().query(productoQuerys.listarTodosAgotados);
      console.log("listarTodosAgotados");
    
    }else if (nombre == "" && categoria != "" && existencia == "TRUE"){
      result = await pool.request().input("categoria", categoria).query(productoQuerys.ListarByCategoriaEnExistencia);
      console.log("ListarByCategoriaEnExistencia");
    
    }else if (nombre == "" && categoria != "" && existencia == "FALSE"){
      result = await pool.request().input("categoria", categoria).query(productoQuerys.ListarByCategoriaAgotados); 
      console.log("ListarByCategoriaAgotados");
    
    }else if (nombre != "" && categoria == "" && existencia == "TRUE"){
      result = await pool.request().input("nombre", nombre).query(productoQuerys.ListarByNombreEnExistencia);
      console.log("ListarByNombreEnExistencia");
    
    }else if (nombre != "" && categoria == "" && existencia == "FALSE"){
      result = await pool.request().input("nombre", nombre).query(productoQuerys.ListarByNombreAgotados);
      console.log("ListarByNombreAgotados");
    
    }else if (nombre != "" && categoria != "" && existencia == "TRUE"){
      result = await pool.request().input("nombre", nombre).input("categoria", categoria).query(productoQuerys.ListarByCategoriaByNombreEnExistencia);
      console.log("ListarByCategoriaByNombreEnExistencia");
    
    }else if (nombre != "" && categoria != "" && existencia == "FALSE"){
      result = await pool.request().input("nombre", nombre).input("categoria", categoria).query(productoQuerys.ListarByCategoriaByNombreAgotados);
      console.log("ListarByCategoriaByNombreAgotados");
    }
    
    if(result.recordset.length < 1){
      return res.status(404).json({ mensage: "No se encontraron Productos" });
    
    }else{
      res.status(200).json(result.recordset);    
    }
    
  } catch (error) {
    res.status(500);
    res.send(error.message);
    console.log(error);
  }
};

export const registrarProducto = async (req, res, next) => {
  const { nombre, categoria, descripcion, marca, rutaImagen} = req.body;
  let { cantidadExistencia, tamanoProducto, precio, puntosFidelidad, esVotable, tipoEnvase } = req.body;
  try {
    const pool = await getConnection();
    const result = 
    await pool
      .request()
      .input("nombre", sql.VarChar(50), nombre)
      .input("cantidadExistencia", sql.Int, cantidadExistencia)
      .input("tamanoProducto", sql.VarChar(50), tamanoProducto)
      .input("categoria", sql.VarChar(50), categoria)
      .input("descripcion", sql.Text, descripcion)
      .input("marca", sql.VarChar(50), marca)
      .input("precio", sql.Float, precio)
      .input("puntosFidelidad", sql.Int, puntosFidelidad)
      .input("rutaImagen", sql.VarChar(500), rutaImagen)
      .input("esVotable", sql.Bit, esVotable)
      .input("tipoEnvase", sql.VarChar(50), tipoEnvase)
      .query(productoQuerys.registrarProducto);
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
    console.log(error);
  }
};

export const modificarProductoById = async (req, res, next) => {
  const { nombre, categoria, descripcion, marca, rutaImagen} = req.body;
  let { cantidadExistencia, tamanoProducto, precio, puntosFidelidad, esVotable, tipoEnvase } = req.body;
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("nombre", sql.VarChar(50), nombre)
      .input("cantidadExistencia", sql.Int, cantidadExistencia)
      .input("tamanoProducto", sql.VarChar(50), tamanoProducto)
      .input("categoria", sql.VarChar(50), categoria)
      .input("descripcion", sql.Text, descripcion)
      .input("marca", sql.VarChar(50), marca)
      .input("precio", sql.Float, precio)
      .input("puntosFidelidad", sql.Int, puntosFidelidad)
      .input("rutaImagen", sql.VarChar(500), rutaImagen)
      .input("esVotable", sql.Bit, esVotable)
      .input("tipoEnvase", sql.VarChar(50), tipoEnvase)
      .input("idProducto", req.params.id)
      .query(productoQuerys.modificarProductoByID);
    res.status(200).json({ nombre, cantidadExistencia, tamanoProducto, categoria, descripcion, marca, precio, puntosFidelidad, rutaImagen, esVotable, tipoEnvase });
  } catch (error) {
    res.status(500);
    res.send(error.message);
    console.log(error);
  }
};

export const eliminarProductoById = async (req, res, next) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("idProducto", req.params.id)
      .query(productoQuerys.eliminarProductoByID);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
    console.log(error);
  }
};

export const subirImagenProducto = async (req, res, next) => {
  const imagen = req.file;
  console.log(imagen);
  res.send("Imagen subida");
};

//FIN METODOS CU YASSER