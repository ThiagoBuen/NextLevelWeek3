const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};
//create map
const lat = document.querySelector('[data-lat]').dataset.lat;
const lng = document.querySelector('[data-lng]').dataset.lng;

const map = L.map('mapid', options).setView([lat, lng], 15);

//create and add tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

L.marker([lat, lng], { icon: icon }).addTo(map);

function selectImage(event) {
  const button = event.currentTarget;

  const buttons = document.querySelectorAll('.images button');

  buttons.forEach((currentButton) => {
    currentButton.classList.remove('active');
  });

  const image = button.children[0];
  const imageContainer = document.querySelector('.orphanage-details > img');

  imageContainer.src = image.src;

  button.classList.add('active');
}
