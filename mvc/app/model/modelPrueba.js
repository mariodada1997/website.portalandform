Ext.define('mvc.model.modelPrueba', {
    extend: 'Ext.data.Model',
	//Crear los campos que servirán como dataIndex en el store
    fields: ['id','nombre','direccion','telefono','correo', 'genero']
});