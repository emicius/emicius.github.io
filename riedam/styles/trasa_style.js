var size = 0;

var styleCache_trasa ={}
var style_trasa = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(181,204,239,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'miter', width: 4})
    })];
    if (feature.get("ILGIS") !== null) {
        var labelText = String(feature.get("ILGIS"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_trasa[key]){
        var text = new ol.style.Text({
              font: '10.725px SwecoSans,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_trasa[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_trasa[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};