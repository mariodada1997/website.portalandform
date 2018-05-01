Ext.define("mvc.controller.controlPrueba",{
	extend: 'Ext.app.Controller',
    views: ['viewPrueba'],

    refs: [{
            ref: 'viewPrueba',
            selector: 'panel'
        },{
            ref: 'viewClientesForm',
            selector: 'panel'
        }
    ],

    init: function() {
        this.control({
			'viewprueba button[action=agregar]': {
                click: this.Agregar
            },
			'viewprueba button[action=editar]': {
                click: this.Editar
            },
			'viewprueba button[action=eliminar]': {
                click: this.Eliminar
            },
			'viewclientesform button[action=aceptar]': {
                click: this.Aceptar
            }
        });	
    },
	
	Aceptar: function( t, e , eOpts ) {		
		/*var formulario = Ext.getCmp('frmClientesForm');
		if (formulario.isValid()) {
			formulario.submit({
				success: function(form, action) {
				   var grid=Ext.getCmp('gridClientes');
				   var store=grid.getStore();
				   store.load();
				   Ext.MessageBox.show({
						title: 'MVC',
						msg: "Cliente agregado satisfactoriamente.",
						buttons: Ext.MessageBox.OK,
						icon: Ext.MessageBox.ERROR
					});
				},
				failure: function(form, action) {
					Ext.Msg.alert('Failed', action.result.msg);
				}
			});
		}*/
		
    },
	Agregar: function( t, e , eOpts ) {
		var formulario = Ext.create('mvc.view.viewClientesForm');
		formulario.show();
    },
	Editar: function( t, e , eOpts ) {
		var grid=Ext.getCmp('gridClientes');
		var registroSeleccionado = grid.getSelectionModel().getSelection();
		if(registroSeleccionado.length==0)
		{
			Ext.MessageBox.show({
				title: 'MVC',
				msg: "Por favor seleccione el registro que desea editar.",
				buttons: Ext.MessageBox.OK,
				icon: Ext.MessageBox.ERROR
			});
			return;
		}
		var formulario = Ext.create('mvc.view.viewClientesForm');
		formulario.show();
		formulario.down('form').loadRecord(registroSeleccionado[0]);
    },
	Eliminar: function( t, e , eOpts ) {
		var grid=Ext.getCmp('gridClientes');
		var registroSeleccionado = grid.getSelectionModel().getSelection();
		if(registroSeleccionado.length==0)
		{
			Ext.MessageBox.show({
				title: 'MVC',
				msg: "Por favor seleccione el registro que desea eliminar.",
				buttons: Ext.MessageBox.OK,
				icon: Ext.MessageBox.ERROR
			});
			return;
		}
		var IdCliente=registroSeleccionado[0].IdCliente;
		
		Ext.MessageBox.show({
		   title:'Mensaje',
		   msg: "&iquest;Desea realmente eliminar el registro seleccionado?",
		   buttons: Ext.MessageBox.YESNO,
		   fn: function(btn)
		   {
			   if(btn!="no")
				{
					Ext.Ajax.request({
						url: 'app/php/eliminarClientes.php',
						params: {
							IdCliente: IdCliente
						},
						success: function(response)
						{
							if(response.responseText=="0")
							{
								Ext.MessageBox.show({
									title: 'MVC',
									msg: "Error al eliminar. Por favor consulte al Administrador.",
									buttons: Ext.MessageBox.OK,
									icon: Ext.MessageBox.ERROR
								});
							}
							else
							{
								var store=grid.getStore();
								store.remove(registroSeleccionado);
								store.sync();
								grid.getView().refresh();
								Ext.MessageBox.show({
									title: 'MVC',
									msg: "El cliente ha sido eliminado.",
									buttons: Ext.MessageBox.OK,
									icon: Ext.MessageBox.INFO
								});
							}
						},
					   failure: function(response, opts) 
					   {
							Ext.MessageBox.show({
								title: 'MVC',
								msg: "Error al eliminar. Por favor consulte al Administrador.",
								buttons: Ext.MessageBox.OK,
								icon: Ext.MessageBox.ERROR
							});
					   }
					});
				}
		   },
		   animateTarget: "btnEliminar",
		   icon: Ext.MessageBox.QUESTION
	   });
    }
});