// INICIO CONSULTAS CU YASSER
const consultaRegistrarCliente = 
      `INSERT INTO Cliente (nombre, apellidoPaterno, apellidoMaterno, contrasena, matricula, numeroTelefono, correo, esCuentaConfirmada)
      OUTPUT INSERTED.* 
       VALUES (@nombre, @apellidoPaterno, @apellidoMaterno, @contrasena, @matricula, @numeroTelefono, @correo, @esCuentaConfirmada);`;

const consultaIniciarSesion = 
     `SELECT *
      FROM   Cliente
      WHERE	 Cliente.matricula = @matricula AND Cliente.contrasena = @contrasena
      ORDER BY  Cliente.idCliente ASC`;

// FIN CONSULTAS CU YASSER

export const clienteQuerys = {
    registrarCliente: consultaRegistrarCliente,
    iniciarSesion : consultaIniciarSesion,
};