Ext.define('mvc.model.modelPrueba', {
    extend: 'Ext.data.Model',
	//Crear los campos que servir�n como dataIndex en el store
    fields: ['id','nombre','direccion','telefono','correo', 'genero']
});