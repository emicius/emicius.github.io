var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'CARTO',
    'type': 'gray',
     source: new ol.source.XYZ({
        url: 'http://{a-c}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
    })
})
]
});
var format_trasa = new ol.format.GeoJSON();
var features_trasa = format_trasa.readFeatures(geojson_trasa, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_trasa = new ol.source.Vector();
jsonSource_trasa.addFeatures(features_trasa);var lyr_trasa = new ol.layer.Vector({
                source:jsonSource_trasa, 
                style: style_trasa,
                title: "trasa"
            });var format_objektai = new ol.format.GeoJSON();
var features_objektai = format_objektai.readFeatures(geojson_objektai, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_objektai = new ol.source.Vector();
jsonSource_objektai.addFeatures(features_objektai);var lyr_objektai = new ol.layer.Vector({
                source:jsonSource_objektai, 
                style: style_objektai,
                title: "objektai"
            });

lyr_trasa.setVisible(true);lyr_objektai.setVisible(true);
var layersList = [baseLayer,lyr_trasa,lyr_objektai];
