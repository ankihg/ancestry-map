const map = L.map('map').setView([38.929790, -97.757200], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// var marker = L.marker([34.167817, -117.755587]).addTo(map);

const markers = [];

const myFunction = () => {
    const year = document.getElementById('date-slider').value

    document.getElementById('year').innerHTML = year;

    while (markers.length) {
        const marker = markers.pop();
        marker.remove();
    }

    households.filter(h => h.year == year).forEach(h => {
        const address = addresses.find((a) => a.id === h.addressId);
        const ancestorNames = h.ancestorIds.map(aId => ancestors.find(a => a.id == aId)).map(a => a.name);

        const marker = L.marker([address.coordinates.lat, address.coordinates.lon], { }).addTo(map);
        marker.bindTooltip(address.address + ': ' + ancestorNames.join(', '));
        // marker.bindPopup("Long description with extra formatting ...");

        markers.push(marker);
    })
}
