var map = L.map('map').setView([0,0], 13);

L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=9ZiXT0fRQ3z1N2BTubZx', {
    maxZoom: 19,
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);

var popup = L.popup();
var marker = L.marker();

var markerShown = false;

function onMapClick(e) {
    let lat = Math.round((Number(e.latlng.lat) + Number.EPSILON) * 10000) / 10000
    let lng = Math.round((Number(e.latlng.lng) + Number.EPSILON) * 10000) / 10000
    let posx = Math.round(18432 * (e.latlng.lng / 180))
    let posz = Math.round(-18432 * (e.latlng.lat / 180))
    document.getElementById("lat").value = lat;
    document.getElementById("long").value = lng;
    document.getElementById("xpos").value = posx;
    document.getElementById("zpos").value = posz;
    popup
        .setLatLng(e.latlng)
        .setContent("This is the coordinates: "+ lat +", "+ lng+"; MC COORDS: x="+posx+" z="+posz)
        .openOn(map);
}

function removeMarker() {
    marker.removeFrom(map);
    markerShown = false;
}

function tolatlong() {
    let lat = document.getElementById("zpos").value / -18432 * 180
    let lng = document.getElementById("xpos").value / 18432 * 180
    document.getElementById("lat").value = lat;
    document.getElementById("long").value = lng;
    marker
        .setLatLng([lat,lng])
        .addTo(map);
    map.flyTo([lat,lng],map.getZoom())
    marker.on('click',removeMarker)
}

function tomccoords() {
    let posx = Math.round(18432 * (document.getElementById("long").value / 180))
    let posz = Math.round(-18432 * (document.getElementById("lat").value / 180))
    document.getElementById("xpos").value = posx;
    document.getElementById("zpos").value = posz;
    marker
        .setLatLng([document.getElementById("lat").value,document.getElementById("long").value])
        .addTo(map);
    markerShown = true;
    map.flyTo([document.getElementById("lat").value,document.getElementById("long").value],map.getZoom())
    marker.on('click',removeMarker)
}

map.on('click', onMapClick);

document.addEventListener('keydown', function(event) {
    if (event.defaultPrevented) {
        return; // Do nothing if the event was already processed
    }
    switch (event.key) {
        case "Enter":
          map.flyTo([0,0],map.getZoom())
          break;
        case "m":
          if (markerShown) {
            map.flyTo([marker.getLatLng().lat,marker.getLatLng().lng],map.getZoom())
            break; 
          }
          map.flyTo([0,0],map.getZoom())
          break;
        case "M":
            if (markerShown) {
              map.flyTo([marker.getLatLng().lat,marker.getLatLng().lng],map.getZoom())
              break; 
            }
            map.flyTo([0,0],map.getZoom())
            break;
        default:
          return; // Quit when this doesn't handle the key event.
      }

    event.preventDefault();

});