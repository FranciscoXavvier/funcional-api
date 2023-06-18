
import { getConnection } from "../database/conexion/connection.js";
import { empleadoQuerys } from "../database/querys/empleados.querys.js";
import { sql } from "../database/conexion/connection.js";
/// INICIO Metodos CU YASSER 
  export const registrarEmpleado = async (req, res, next) => {
    const { nombre, apellidoPaterno, apellidoMaterno, contrasena, claveTrabajador} = req.body;
    let { numeroTelefono, correo, esCuentaConfirmada, cargo } = req.body;
    try {
      const pool = await getConnection();
      const result = 
      await pool
        .request()
        .input("nombre", sql.VarChar(50), nombre)
        .input("apellidoPaterno", sql.VarChar(50), apellidoPaterno)
        .input("apellidoMaterno", sql.VarChar(50), apellidoMaterno)
        .input("contrasena", sql.VarChar(50), contrasena)
        .input("claveTrabajador", sql.VarChar(50), claveTrabajador)
        .input("numeroTelefono", sql.VarChar(50), numeroTelefono)
        .input("correo", sql.VarChar(50), correo)
        .input("esCuentaConfirmada", sql.Bit, esCuentaConfirmada)
        .input("cargo", sql.VarChar(50), cargo)
        .query(empleadoQuerys.registrarEmpleado);
      res.status(200).json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
      console.log(error);
    }
  };

  export const IniciarSesionEmpleado = async (req, res, next) =>{
    const { claveTrabajador, contrasena } = req.body;
    try{
      const pool = await getConnection();
      const result =
      await pool
        .request()
        .input("claveTrabajador", sql.VarChar(50), claveTrabajador)
        .input("contrasena", sql.VarChar(50), contrasena)
        .query(empleadoQuerys.iniciarSesion);
      if(result.recordset.length < 1){
        return res.status(404).json({ mensage: "Clave Trabajador o contraseña incorrecta" });
      }else{
        res.status(200).json(result.recordset[0]);
      }
    }catch(error){
      res.status(500);
      res.send(error.message);
      console.log(error);
    }
  };

//FIN METODOS CU YASSER