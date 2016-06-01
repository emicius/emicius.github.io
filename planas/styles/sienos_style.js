var size = 0;
var categories_sienos = {"Išorinės": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(31,31,31,1.0)"})
    })],
"Laikančios": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(205,87,104,1.0)"})
    })],
"Langai": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(159,159,159,1.0)"})
    })],
"Pertvaros": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(144,125,19,1.0)"})
    })],
"Durys": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(255,1,9,1.0)"})
    })],
"Šachtos": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(115,133,223,1.0)"})
    })],
"Stiklo pertvaros": [ new ol.style.Style({
         fill: new ol.style.Fill({color: "rgba(156,191,118,1.0)"})
    })]};
var styleCache_sienos={}
var style_sienos = function(feature, resolution){
    var value = feature.get("TIPAS");
    var style = categories_sienos[value];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_sienos[key]){
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
        styleCache_sienos[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_sienos[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};