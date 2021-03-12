var wms_layers = [];


        var lyr__0 = new ol.layer.Tile({
            'title': 'แผนที่เส้นทาง',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr__1 = new ol.layer.Tile({
            'title': 'แผนที่ดาวเทียม',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> ป่าชุมชนบ้านเขาดินวังน้ำลัด'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2];
lyr__2.set('fieldAliases', {'ชื่อ': 'ชื่อ', 'ตำบล': 'ตำบล', 'อำเภอ': 'อำเภอ', 'จังหวัด': 'จังหวัด', 'พื้นที่': 'พื้นที่', });
lyr__2.set('fieldImages', {'ชื่อ': 'TextEdit', 'ตำบล': 'TextEdit', 'อำเภอ': 'TextEdit', 'จังหวัด': 'TextEdit', 'พื้นที่': 'TextEdit', });
lyr__2.set('fieldLabels', {'ชื่อ': 'inline label', 'ตำบล': 'inline label', 'อำเภอ': 'inline label', 'จังหวัด': 'inline label', 'พื้นที่': 'inline label', });
lyr__2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});