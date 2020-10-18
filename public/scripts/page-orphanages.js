//create map

const map = L.map('mapid').setView([-22.2635347, -45.6965906], 15);

//create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create popup overlay

function addMarker({ name, id, lat, lng }) {
  const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240,
  }).setContent(
    `${name} <a href="orphanage?id=${id}"> <img src="/images/arrow-white.svg"> </a>`
  );

  L.marker([lat, lng], { icon: icon }).addTo(map).bindPopup(popup);
}

const orphanagesSpan = document.querySelectorAll('.orphanages span');

orphanagesSpan.forEach((orphanageElement) => {
  const orphanage = {
    id: orphanageElement.dataset.id,
    name: orphanageElement.dataset.name,
    lat: orphanageElement.dataset.lat,
    lng: orphanageElement.dataset.lng,
  };
  addMarker(orphanage);
});
