var format_sienos = new ol.format.GeoJSON();
var features_sienos = format_sienos.readFeatures(geojson_sienos, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3346'});
var jsonSource_sienos = new ol.source.Vector();
jsonSource_sienos.addFeatures(features_sienos);var lyr_sienos = new ol.layer.Vector({
                source:jsonSource_sienos, 
                style: style_sienos,
                title: "sienos"
            });var format_patalpos = new ol.format.GeoJSON();
var features_patalpos = format_patalpos.readFeatures(geojson_patalpos, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3346'});
var jsonSource_patalpos = new ol.source.Vector();
jsonSource_patalpos.addFeatures(features_patalpos);var lyr_patalpos = new ol.layer.Vector({
                source:jsonSource_patalpos, 
                style: style_patalpos,
                title: "patalpos"
            });

lyr_sienos.setVisible(true);lyr_patalpos.setVisible(true);
var layersList = [lyr_sienos,lyr_patalpos];
