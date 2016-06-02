var size = 0;
var categories_objektai = {"FINISH": [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size, fill: new ol.style.Fill({color: "rgba(197,143,175,1.0)"})})
    })],
"START": [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size, fill: new ol.style.Fill({color: "rgba(138,163,189,1.0)"})})
    })],
"STOP": [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size, fill: new ol.style.Fill({color: "rgba(222,196,91,1.0)"})})
    })]};
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
              textAlign: "left",
              offsetX: 11,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(95, 95, 95, 255)"
              }),
            });
        styleCache_objektai[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_objektai[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};