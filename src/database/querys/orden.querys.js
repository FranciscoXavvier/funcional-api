// INICIO CONSULTAS CU XAVIER
const consultaRegistrarOrden = 
      `INSERT INTO Orden (Cliente_idCliente, direccionEntrega, estado, fechaOrden, metodoPago, totalPagado)
      OUTPUT INSERTED.* 
       VALUES (@Cliente_idCliente, @direccionEntrega, @estado, @fechaOrden, @metodoPago, @totalPagado);`;

const agregarProductosOrden =      
      `INSERT INTO Orden_has_producto (Producto_idProducto, Orden_idOrden, cantidadProducto, subtotal)
      OUTPUT INSERTED.* 
       VALUES (@Producto_idProducto, @Orden_idOrden, @cantidadProducto, @subtotal);`; 

const consultaModificarOrdenByID = 
       `UPDATE Orden SET Cliente_idCliente = ISNULL(@Cliente_idCliente, Cliente_idCliente), 
       direccionEntrega = ISNULL(@direccionEntrega,direccionEntrega), 
       estado = ISNULL(@estado,estado), 
       fechaOrden = ISNULL(@fechaOrden, fechaOrden),
       metodoPago = ISNULL(@metodoPago, metodoPago), 
       totalPagado = ISNULL(@totalPagado, totalPagado)
       WHERE Orden.idOrden = @idOrden;`; 

export const ordenQuerys = {
    registrarOrden: consultaRegistrarOrden,
    agregarProducto: agregarProductosOrden,
    actualizarOrden: consultaModificarOrdenByID
};