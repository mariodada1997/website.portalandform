 <?php
	//Recepción de los valores dados en el formulario de Login con el método POST
	$usr=$_POST['usr'];
	$pwd=$_POST['pwd'];
	
	//Conectar a la base de datos (host, usuario, contraseña, base)
	$conexion = mysqli_connect("sql3.freemysqlhosting.net", "sql3235424", "E1nTtsmm8W", "sql3235424");
	//Checar si la conexión es válida
	if (!$conexion) 
	{
		echo json_encode(array(
			"success" => false,
			"msg" => "Error al conectar: ". mysqli_connect_error()
		));
		exit();
	}
	
	//Antes que nada, ejecutar la sentencia que permita mostrar correctamente acentos
	mysqli_query($conexion,"SET NAMES UTF8");
	
	//Primero se busca en la base de datos que coincida el nombre de usuario
	$sql="SELECT IdUsuario FROM usuarios WHERE usuario='".$usr."'";
	$sentencia = $conexion->query($sql);
	if($registro = $sentencia->fetch_row())
	{
		//Cmo el usuario es correcto, ahora se valida la contraseña correcta
		$sql="SELECT IdUsuario FROM usuarios WHERE password='".$pwd."'";
		$sentencia = $conexion->query($sql);
		if($registro = $sentencia->fetch_row())
		{
			echo json_encode(array(
				"success" => true,
				"msg" => "OK"
			));
		}
		else//Contraseña incorrecta se muestar el mensaje correspondiente
		{
			echo json_encode(array(
				"success" => false,
				"msg" => "Password incorrecto"
			));
		}
	}
	else//Si no es corecto se muestra el mensaje correspondiente
	{
		echo json_encode(array(
			"success" => false,
			"msg" => "Usuario incorrecto"
		));
	}

	//Cerrar la conexión actual
	mysqli_close($conexion);
?>