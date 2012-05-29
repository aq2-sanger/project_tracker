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
            },
            {
                name: 'not_targeted_date',
                type: 'date'
            },
            {
                name: 'targeting_in_progress_date',
                type: 'date'
            },
            {
                name: 'targeting_complete_date',
                type: 'date'
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
                    format: 'json',
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
                        text: 'ID',
                        dataIndex: 'id'
                    },
                    {
                        text: 'Marker Symbol',
                        dataIndex: 'marker_symbol'
                    },
                    {
                        text: 'Not Targeted Date',
                        dataIndex: 'not_targeted_date',
                        xtype: 'datecolumn',
                        format: 'd/m/Y'
                    },
                    {
                        text: 'Targeting In Progress Date',
                        dataIndex: 'targeting_in_progress_date',
                        xtype: 'datecolumn',
                        format: 'd/m/Y'
                    },
                    {
                        text: 'Targeting Complete Date',
                        dataIndex: 'targeting_complete_date',
                        xtype: 'datecolumn',
                        format: 'd/m/Y'
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
