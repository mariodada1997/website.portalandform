Ext.require ('Ext.container.Viewport');
Ext.application({
    name: 'mvc',
	title: 'Colegio Las Hayas',
    appFolder: 'app',
	controllers: ['controlPrueba','controlLogin'],
	models: ['modelPrueba'],
	views: ['viewPrueba','viewLogin','viewClientesForm'],
	stores: ['storePrueba'],
    launch: function() {
		Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [{
					bodyStyle: 'background:#CEF6F5; padding:10px;',
					xtype: 'viewlogin'
				}]
        });
    }
});