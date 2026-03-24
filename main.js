// Check 
function calculateHeatIndex() {
    let temp = Number(document.getElementById('temp').value);
    let humidity = Number(document.getElementById('humidity').value);
    let heatIndex = temp + (0.33 * humidity) - 4;

    switch (true) {        
        case (heatIndex <= 27):
            window.alert('Heat Index: ' + heatIndex.toFixed(1) + '°C\nComfortable / Cool'); 
            break;
        case (heatIndex >= 28 && heatIndex <= 32):
            window.alert('Heat Index: ' + heatIndex.toFixed(1) + '°C\nWarm'); 
            break;
        case (heatIndex >= 33 && heatIndex <= 37):
            window.alert('Heat Index: ' + heatIndex.toFixed(1) + '°C\nHot'); 
            break;
        case (heatIndex >= 38 && heatIndex <= 41):
            window.alert('Heat Index: ' + heatIndex.toFixed(1) + '°C\nVery Hot / Caution'); 
            break;
        case (heatIndex >= 42):
            window.alert('Heat Index: ' + heatIndex.toFixed(1) + '°C\nExtreme Heat / Danger'); 
            break;
        case (heatIndex < 0):
            window.alert('Please input a valid positive value'); 
            break;
    }
}