var size = 0;
var categories_patalpos = {"Kabinetas": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(27,158,119,1.0)"})
    })],
"Koridorius": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(217,95,2,1.0)"})
    })],
"Laiptinė": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(117,112,179,1.0)"})
    })],
"Posėdžių salė": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(231,41,138,1.0)"})
    })],
"Tualetas": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(102,166,30,1.0)"})
    })],
"Virtuvė": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(255,255,0,1.0)"})
    })],
"Spausdintuvai": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(150,7,239,1.0)"})
    })],
"Rūbinė": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(0,160,160,1.0)"})
    })],
"Kita": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(160,160,160,1.0)"})
    })]};
var styleCache_patalpos={}
var style_patalpos = function(feature, resolution){
    var value = feature.get("TIPAS");
    var style = categories_patalpos[value];
    if (feature.get("NR") !== null) {
        var labelText = String(feature.get("NR"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_patalpos[key]){
        var text = new ol.style.Text({
              font: '18.2px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_patalpos[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_patalpos[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};