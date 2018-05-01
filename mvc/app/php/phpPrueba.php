 <?php
	//Conectar a la base de datos (host, usuario, contraseña, base)
	$conexion = mysqli_connect("sql3.freemysqlhosting.net", "sql3235424", "E1nTtsmm8W", "sql3235424");
	//Checar si la conexión es válida
	if (!$conexion) 
	{
		echo "Error al conectar: ". mysqli_connect_error();
		exit();
	}
	
	//Antes que nada, ejecutar la sentencia que permita mostrar correctamente acentos
	mysqli_query($conexion,"SET NAMES UTF8");
	
	//Preparar la consulta a la Base de Datos
	$sql="SELECT id,nombre,direccion,telefono,correo,genero FROM clientes2 ORDER BY id";
	//Ejecutar la sentencia y guardar los resultados en una variable
	$resultado = mysqli_query($conexion, $sql);
	//Recorrer todos los registros encontrados con esa consulta
	while($fila = mysqli_fetch_assoc($resultado))
	{
		$arrayFilas[] = $fila;//Guardar en un arreglo los valores de cada fila
	}
	
	//encode para formato JSON
	echo json_encode(array(
		"success" => true,
		"total" => mysqli_affected_rows($conexion),
		"clientes" => $arrayFilas
	));
	
	//Cerrar la conexión actual
	mysqli_close($conexion);
?>