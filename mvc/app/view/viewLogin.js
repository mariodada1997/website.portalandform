Ext.define('mvc.view.viewLogin', {
    extend: 'Ext.window.Window',
	alias : 'widget.viewlogin',
	id:'idVentanaLogin',
	layout: 'fit',
    autoShow: true,
	title: 'Acceso',
    items: {
        xtype: 'form',
		bodyPadding: 5,
		width: 350,
		url: '../mvc/app/php/login.php',// Script PHP a donde se enviará la información de esta ventana
		layout: 'anchor',
		defaults: {
			anchor: '100%'
		},
		// Los campos
		defaultType: 'textfield',
		items: [{
			fieldLabel: 'Usuario',
			name: 'usr',
			allowBlank: false
		},{
			fieldLabel: 'Contrase&ntilde;a',
			name: 'pwd',
			inputType: 'password',
			allowBlank: false
		}],
		buttons: [
		{
			text: 'Limpiar',
			action:'limpiar'
		},{
			text: 'Entrar',
			formBind: true, //Para asegurar que el formulario está validado
			disabled: true,
			action:'entrar'
		}]
    }
});