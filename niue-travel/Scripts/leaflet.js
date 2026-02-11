function initMap() {
  const map = document.getElementById("niue-map");
  if (!map || typeof L === "undefined") {
    return;
  }

  const niueCoords = [-19.0544, -169.8672];
  const alofiCoords = [-19.0553, -169.9206];

  const Leafletmap = L.map("niue-map").setView(niueCoords, 11);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 15,
  }).addTo(Leafletmap);

  const customIcon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const alofiMarker = L.marker(alofiCoords, { icon: customIcon }).addTo(
    Leafletmap,
  );

  alofiMarker.bindPopup(`
      <div style="font-family: 'Red Hat Display', sans-serif;">
        <h3 style="margin: 0 0 8px; color: #088395; font-size: 16px;">Alofi</h3>
        <p style="margin: 0; font-size: 14px; color: #4b5563;">
          The capital of Niue, home to government buildings, shops, and the main port.
        </p>
      </div>
    `);

  alofiMarker.openPopup();
}
