Ext.define("mvc.controller.controlLogin",{
	extend: 'Ext.app.Controller',
    views: ['viewLogin'],

    refs: [{
            ref: 'viewLogin',
            selector: 'panel'
        }
    ],

    init: function() {
        this.control({
			'viewlogin button[action=limpiar]': {
                click: this.Limpiar
            },
			'viewlogin button[action=entrar]': {
                click: this.Entrar
            }
        });	
    },
	
	Limpiar: function( t, e , eOpts ) {
		//Limpiar el formulario
		var form = t.up('form').getForm();
		form.reset();
    },
	Entrar: function( t, e , eOpts ) {
		//Obtener los valores introducidos
		var form = t.up('form').getForm();
		if (form.isValid()) 
		{
			//Mensaje de espera
			var mensaje = new Ext.LoadMask(Ext.getBody(), {msg:"Validando..."});
			mensaje.show();
			//Envío de la info. al scrip de PHP definifo
			form.submit({
				//Si el proceso en PHP es exitoso
				success: function(form, action) 
				{
					mensaje.hide();//Se esconde el mensaje de espera
					Ext.getCmp("idVentanaLogin").close();//Se cierra la ventana de Login
					Ext.create("mvc.view.viewPrueba").show();//Se muestra el listado de clientes
				},
				//Si elproceso falla
				failure: function(form, action) 
				{
					//Mostrar mensaje respectivo y ocultar el mensaje de espera
					Ext.MessageBox.show({
						title: 'Fallo',
						msg: action.result.msg,
						buttons: Ext.MessageBox.OK,
						icon: Ext.MessageBox.ERROR
					});
					mensaje.hide();
				}
			});
		}
    }
});