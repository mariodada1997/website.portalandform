Ext.define('mvc.view.viewPrueba', {
    extend: 'Ext.window.Window',
	alias : 'widget.viewprueba',
	layout: 'fit',
    autoShow: true,
	maximized:true,
	//maximizable:true,
	title: 'Listado de clientes',
    items: {
        xtype: 'grid',
        border: true,
		id:'gridClientes',
		store: 'storePrueba',
        columns: [
			{header: 'Nombre', dataIndex: 'nombre', flex:1},
			{header: 'Direcci&oacute;n', dataIndex: 'direccion', flex:1},
			{header: 'Tel&eacute;fono', dataIndex: 'telefono', flex:1},
			{header: 'Correo electr&oacute;nico', dataIndex: 'correo', flex:1},
			{header: 'G&eacute;nero', dataIndex: 'genero', flex:1},
		],
		buttons: [{
			  text: 'Agregar',
			  action: 'agregar',
			  icon:'recursos/images/agregar.png'
			},{
			  text: 'Editar',
			  action: 'editar',
			  icon:'recursos/images/editar.png'
			},{
			  text: 'Eliminar',
			  action: 'eliminar',
			  id:'btnEliminar',
			  icon:'recursos/images/eliminar.jpeg'
			}
		]
    }
});