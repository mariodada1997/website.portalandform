Ext.define('mvc.view.viewClientesForm', {
    extend: 'Ext.window.Window',
	alias : 'widget.viewclientesform',
	layout: 'fit',
	icon:'recursos/images/agregar.png',
	title: 'Adici&oacute;n de Clientes',
	modal:true,
	id:'frmClientesForm',
    items: {
        xtype: 'form',
        bodyPadding: 5,
		width: 350,
		layout: 'anchor',
		defaults: {
			anchor: '100%'
		},
		url: 'app/php/agregarClientes.php',
		defaultType: 'textfield',
		items: [{
			fieldLabel: 'Noooombre',
			name: 'nombre',
			allowBlank: false
		},{
			fieldLabel: 'Direcci&oacute;n',
			name: 'direccion',
			allowBlank: false
		},{
			fieldLabel: 'Tel&eacute;fono',
			name: 'telefono',
			allowBlank: false
		},{
			fieldLabel: 'Correo',
			name: 'correo',
			allowBlank: false
		},{
			fieldLabel: 'G&eacute;nero',
			name: 'genero',
			allowBlank: false
		}],
		buttons: [{
			  text: 'Aceptar',
			  action: 'aceptar',
			  icon:'recursos/images/aceptar.ico'
			},{
			  text: 'Cancelar',
			  action: 'cancelar',
			  icon:'recursos/images/cancelar.ico'
			}
		]
    }
});