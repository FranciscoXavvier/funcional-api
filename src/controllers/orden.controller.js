
import { getConnection } from "../database/conexion/connection.js";
import { ordenQuerys } from "../database/querys/orden.querys.js";
import { sql } from "../database/conexion/connection.js";

export const registrarOrden = async (req, res, next) => {
    const { Cliente_idCliente, direccionEntrega, estado, fechaOrden, metodoPago} = req.body;
    let { totalPagado } = req.body;
    
    try {
      const pool = await getConnection();
      const result = 
      await pool
        .request()
        .input("Cliente_idCliente", sql.Int, Cliente_idCliente)
        .input("direccionEntrega", sql.VarChar(50), direccionEntrega)
        .input("estado", sql.VarChar(50), estado)
        .input("fechaOrden", sql.Date, fechaOrden)
        .input("metodoPago", sql.VarChar(50), metodoPago)
        .input("totalPagado", sql.Float, totalPagado)
        .query(ordenQuerys.registrarOrden);
      res.status(200).json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
      console.log(error);
    }
  };

  export const agregarProducto = async (req, res, next) => {
    const { Producto_idProducto, Orden_idOrden, cantidadProducto, subtotal} = req.body;

    try {
      const pool = await getConnection();
      const result = 
      await pool
        .request()
        .input("Producto_idProducto", sql.Int, Producto_idProducto)
        .input("Orden_idOrden", sql.Int, Orden_idOrden)
        .input("cantidadProducto", sql.Int, cantidadProducto)
        .input("subtotal", sql.Float, subtotal)
        .query(ordenQuerys.agregarProducto);
      res.status(200).json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
      console.log(error);
    }
  };

  export const modificarEstadoOrdenById = async (req, res, next) => {
    const { estado} = req.body;
    try {
      const pool = await getConnection();
      await pool
        .request()
        .input("estado", sql.VarChar(50), estado)
        .input("idOrden", req.params.id)
        .query(ordenQuerys.modificarEstadoOrdenById);
      res.status(200).json({ estado });
    } catch (error) {
      res.status(500);
      res.send(error.message);
      console.log(error);
    }
  };