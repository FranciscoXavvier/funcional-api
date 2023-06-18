// INICIO CONSULTAS CU YASSER
const consultaRegistrarEmpleado = 
      `INSERT INTO Empleado (nombre, apellidoPaterno, apellidoMaterno, contrasena, claveTrabajador, numeroTelefono, correo, esCuentaConfirmada, cargo)
      OUTPUT INSERTED.* 
       VALUES (@nombre, @apellidoPaterno, @apellidoMaterno, @contrasena, @claveTrabajador, @numeroTelefono, @correo, @esCuentaConfirmada, @cargo);`;

const consultaIniciarSesion = 
     `SELECT *
      FROM   Empleado
      WHERE	 Empleado.claveTrabajador = @claveTrabajador AND Empleado.contrasena = @contrasena
      ORDER BY  Empleado.idEmpleado ASC`;

// FIN CONSULTAS CU YASSER

export const empleadoQuerys = {
    registrarEmpleado: consultaRegistrarEmpleado,
    iniciarSesion : consultaIniciarSesion,
};