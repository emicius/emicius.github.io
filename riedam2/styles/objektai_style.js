var size = 0;
var categories_objektai = {"FINISH": [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size, fill: new ol.style.Fill({color: "#C58FAF"})})
    })],
"START": [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size, fill: new ol.style.Fill({color: "#C58FAF"})})
    })],
"STOP": [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size, fill: new ol.style.Fill({color: "#DEC45B"})})
    })],
"PARK": [ new ol.style.Style(
    {
        
        text: new ol.style.Text({
              font: '12px SwecoSansMedium,sans-serif',
              text: "P",
              textBaseline: "center",
              textAlign: "center",
              offsetX: 0,
              offsetY: 3,
              fill: new ol.style.Fill({ color: "#FFFFFF"
              }),
            }),
        image: new ol.style.Circle({radius: 10 + size, fill: new ol.style.Stroke({color: "#708EAE"})}),
    })],
};
var styleCache_objektai={}
var style_objektai = function(feature, resolution){
    var value = feature.get("OBJEKTAS");
    var style = categories_objektai[value];
    if (feature.get("PAVAD") !== null) {
        var labelText = String(feature.get("PAVAD"));
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_objektai[key]){
        var text = new ol.style.Text({
              font: '12px SwecoSansMedium,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "right",
              offsetX: -11,
              offsetY: 5,
              fill: new ol.style.Fill({
                color: "#555555"
              }),
            });
        styleCache_objektai[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_objektai[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};