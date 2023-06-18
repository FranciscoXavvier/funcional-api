// INICIO CONSULTAS CU YASSER
const consultaListarTodos = `SELECT * FROM Producto`;
const consultaListarTodosExistentes = `SELECT * FROM Producto WHERE cantidadExistencia > 0`;
const consultaListarTodosAgotados = `SELECT * FROM Producto WHERE cantidadExistencia < 1`;
const consultaListarTodosByCategoria = `SELECT * FROM Producto WHERE Producto.categoria LIKE '%' + @categoria + '%'`;
const consultaListarTodosByNombre = `SELECT * FROM Producto WHERE Producto.nombre LIKE '%' + @nombre + '%'`;
const consultaListarTodosByCategoriaByNombre = `SELECT * FROM Producto WHERE Producto.nombre LIKE '%' + @nombre + '%' AND Producto.categoria LIKE '%' + @categoria + '%'`;
const consultaListarByCategoriaEnExistencia = `SELECT * FROM Producto WHERE Producto.categoria LIKE '%' + @categoria + '%' AND cantidadExistencia > 0`;
const consultaListarByCategoriaAgotados = `SELECT * FROM Producto WHERE Producto.categoria LIKE '%' + @categoria + '%' AND cantidadExistencia < 1`;
const consultaListarByNombreEnExistencia = `SELECT * FROM Producto WHERE Producto.nombre LIKE '%' + @nombre + '%' AND cantidadExistencia > 0`;
const consultaListarByNombreAgotados = `SELECT * FROM Producto WHERE Producto.nombre LIKE '%' + @nombre + '%' AND cantidadExistencia < 1`;
const consultaListarByCategoriaByNombreEnExistencia = `SELECT * FROM Producto WHERE Producto.nombre LIKE '%' + @nombre + '%' AND Producto.categoria LIKE '%' + @categoria + '%' AND cantidadExistencia > 0`;
const consultaListarByCategoriaByNombreAgotados = `SELECT * FROM Producto WHERE Producto.nombre LIKE '%' + @nombre + '%' AND Producto.categoria LIKE '%' + @categoria + '%' AND cantidadExistencia < 1`;
const consultaRegistrarProducto = 
      `INSERT INTO Producto (nombre, cantidadExistencia, tamanoProducto, categoria, descripcion, marca, precio, puntosFidelidad, rutaImagen, esVotable, tipoEnvase)
      OUTPUT INSERTED.* 
       VALUES (@nombre, @cantidadExistencia, @tamanoProducto, @categoria, @descripcion, @marca, @precio, @puntosFidelidad, @rutaImagen, @esVotable, @tipoEnvase);`;
const consultaModificarProductoByID = 
      `UPDATE Producto SET nombre = ISNULL(@nombre, nombre), cantidadExistencia = ISNULL(@cantidadExistencia,cantidadExistencia), tamanoProducto = ISNULL(@tamanoProducto,tamanoProducto), categoria = ISNULL(@categoria, categoria),
      descripcion = ISNULL(@descripcion, descripcion), marca = ISNULL(@marca, marca), precio = ISNULL(@precio, precio), puntosFidelidad = ISNULL(@puntosFidelidad, puntosFidelidad), 
      rutaImagen = ISNULL(@rutaImagen, rutaImagen), esVotable = ISNULL(@esVotable, esVotable), tipoEnvase = ISNULL(@tipoEnvase, tipoEnvase)
      WHERE Producto.idProducto = @idProducto;`;
const consultaEliminarProductoByID = `DELETE FROM Producto OUTPUT DELETED.* WHERE Producto.idProducto = @idProducto`;

// FIN CONSULTAS CU YASSER

export const productoQuerys = {
    listarTodos : consultaListarTodos,
    listarTodosByCategoria : consultaListarTodosByCategoria,
    ListarTodosByNombre : consultaListarTodosByNombre,
    ListarTodosByCategoriaByNombre : consultaListarTodosByCategoriaByNombre,
    listarTodosExistentes : consultaListarTodosExistentes,
    listarTodosAgotados : consultaListarTodosAgotados,
    ListarByCategoriaEnExistencia : consultaListarByCategoriaEnExistencia,
    ListarByCategoriaAgotados : consultaListarByCategoriaAgotados,
    ListarByNombreEnExistencia : consultaListarByNombreEnExistencia,
    ListarByNombreAgotados : consultaListarByNombreAgotados,
    ListarByCategoriaByNombreEnExistencia : consultaListarByCategoriaByNombreEnExistencia,
    ListarByCategoriaByNombreAgotados : consultaListarByCategoriaByNombreAgotados,
    registrarProducto: consultaRegistrarProducto,
    modificarProductoByID : consultaModificarProductoByID,
    eliminarProductoByID : consultaEliminarProductoByID
};