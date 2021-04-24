var wms_layers = [];


        var lyr_googleimagery_0 = new ol.layer.Tile({
            'title': 'google imagery',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Jalan_1 = new ol.format.GeoJSON();
var features_Jalan_1 = format_Jalan_1.readFeatures(json_Jalan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_1.addFeatures(features_Jalan_1);
var lyr_Jalan_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_1, 
                style: style_Jalan_1,
                interactive: true,
                title: '<img src="styles/legend/Jalan_1.png" /> Jalan'
            });
var format_Bangunan_2 = new ol.format.GeoJSON();
var features_Bangunan_2 = format_Bangunan_2.readFeatures(json_Bangunan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_2.addFeatures(features_Bangunan_2);
var lyr_Bangunan_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bangunan_2, 
                style: style_Bangunan_2,
                interactive: true,
                title: '<img src="styles/legend/Bangunan_2.png" /> Bangunan'
            });

lyr_googleimagery_0.setVisible(true);lyr_Jalan_1.setVisible(true);lyr_Bangunan_2.setVisible(true);
var layersList = [lyr_googleimagery_0,lyr_Jalan_1,lyr_Bangunan_2];
lyr_Jalan_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'KETERANGAN': 'KETERANGAN', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Bangunan_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'keterangan': 'keterangan', 'luas': 'luas', 'Nama_APS': 'Nama_APS', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Jalan_1.set('fieldImages', {'OBJECTID': '', 'SHAPE_Leng': '', 'KETERANGAN': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_Bangunan_2.set('fieldImages', {'OBJECTID': '', 'keterangan': '', 'luas': '', 'Nama_APS': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Jalan_1.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'KETERANGAN': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Bangunan_2.set('fieldLabels', {'OBJECTID': 'no label', 'keterangan': 'no label', 'luas': 'no label', 'Nama_APS': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Bangunan_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});