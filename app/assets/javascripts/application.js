//= require_tree .

(function() {
    Ext.define('Project', {
        extend: 'Ext.data.Model',
        fields: [
            {
                name: 'id',
                type: 'int',
                readOnly: true,
                persist: false
            },
            {
                name: 'marker_symbol',
                type: 'string'
            }
        ]
    });

    Ext.application({
        name: 'Project Tracker',
        launch: function() {
            var store = Ext.create('Ext.data.Store', {
                autoLoad: true,
                autoSync: true,
                model: 'Project',
                proxy: {
                    type: 'rest',
                    url: 'projects',
                    reader: {
                        type: 'json',
                        root: null
                    },
                    writer: {
                        type: 'json'
                    }
                }
            });

            var grid = Ext.create('Ext.grid.Panel', {
                title: 'Projects',
                store: store,
                columns: [
                    {
                        text: 'Marker Symbol',
                        dataIndex: 'marker_symbol'
                    }
                ]
            });

            Ext.create('Ext.container.Viewport', {
                layout: 'fit',
                items: [
                    grid
                ]
            });
        }
    });
})();
