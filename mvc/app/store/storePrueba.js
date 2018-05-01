Ext.define('mvc.store.storePrueba',{
	extend: 'Ext.data.Store',
	autoLoad: true,
	queryMode: 'local',
	model: 'mvc.model.modelPrueba',//Jalar la configuraci�n echa en dicho modelo
	//Configurar la comunicaci�n con el servidor
	proxy: {
            type: 'ajax',
            url: 'app/php/phpPrueba.php',//Alimentar de informaci�n a partir de este archivo
            reader: {
                type: 'json',
                totalProperty: 'total',//Esta propiedad guardar� el total de reigstros devueltos
                root: 'clientes',//Bajo este nombre viajan los resultados para ser entregados
				idProperty		: 'IdCliente'//La propiedad id se configura el campo llave
            }
		}
		
});