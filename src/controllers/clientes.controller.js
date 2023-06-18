import { getConnection} from "../database/conexion/connection.js";
import { clienteQuerys } from "../database/index.js";
import { sql } from "../database/conexion/connection.js";
/// INICIO Metodos CU YASSER 
  export const registrarCliente = async (req, res, next) => {
    const { nombre, apellidoPaterno, apellidoMaterno, contrasena, matricula} = req.body;
    let { numeroTelefono, correo, esCuentaConfirmada } = req.body;
    try {
      const pool = await getConnection();
      const result = 
      await pool
        .request()
        .input("nombre", sql.VarChar(50), nombre)
        .input("apellidoPaterno", sql.VarChar(50), apellidoPaterno)
        .input("apellidoMaterno", sql.VarChar(50), apellidoMaterno)
        .input("contrasena", sql.VarChar(50), contrasena)
        .input("matricula", sql.VarChar(50), matricula)
        .input("numeroTelefono", sql.VarChar(50), numeroTelefono)
        .input("correo", sql.VarChar(50), correo)
        .input("esCuentaConfirmada", sql.Bit, esCuentaConfirmada)
        .query(clienteQuerys.registrarCliente);
      res.status(200).json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
      console.log(error);
    }
  };

  export const IniciarSesionCliente = async (req, res, next) =>{
    const { matricula, contrasena } = req.body;
    try{
      const pool = await getConnection();
      const result =
      await pool
        .request()
        .input("matricula", sql.VarChar(50), matricula)
        .input("contrasena", sql.VarChar(50), contrasena)
        .query(clienteQuerys.iniciarSesion);
      if(result.recordset.length < 1){
        return res.status(404).json({ mensage: "Matricula o contraseña incorrecta" });
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