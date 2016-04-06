var size = 0;
var categories_trasa = {"DT": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(138,163,189,1.0)", lineDash: null, lineCap: 'square', lineJoin: 'miter', width: 4})
    })],
"K": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(138,163,189,1.0)", lineDash: [8,8], lineCap: 'flat', lineJoin: 'miter', width: 4})
    })],
"S": [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(138,163,189,1.0)", lineDash: [1,7], lineCap: 'flat', lineJoin: 'miter', width: 4})
    })]};
var styleCache_trasa={}
var style_trasa = function(feature, resolution){
    var value = feature.get("TIPAS");
    var style = categories_trasa[value];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_trasa[key]){
        var text = new ol.style.Text({
              font: '10.725px Calibri,sans-serif',
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