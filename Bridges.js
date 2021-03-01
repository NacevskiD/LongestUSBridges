bridges = [
    { name: 'Verrazano-Narrows Bridge', city: 'New York', state: 'NY', span: 1298.4, location: [40.6066,-74.0447] },
    { name: 'Golden Gate Bridge', city: 'San Francisco', state: 'CA', span: 1280.2, location: [37.8199, -122.4783] },
    { name: 'Mackinac Bridge', city: 'Mackinaw and St Ignacek', state: 'MI', span: 1158.0 , location: [45.8174, -84.7278] },
    { name: 'George Washington Bridge ', city: 'New York, NY and New Jersey', state: 'NJ', span: 1067.0, location: [40.8517, -73.9527] },
    { name: 'Tacoma Narrows Bridge', city: 'Tacoma and Kitsap', state: 'WA', span: 853.44, location: [47.2690, -122.5517] },
]
let centralArea = [41.47292, -97.55104]  // Array of latitude and longitude
let zoomLevel = 4   // 1 = whole world, 10 = large city, 20 = city blocks

// Create the map
let map = L.map('bridge-map').setView(centralArea, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
}).addTo(map)

bridges.forEach(function (bridges){
    let popup = `${bridges.name}<br>Span ${bridges.span}m`
    L.marker(bridges.location).bindPopup(popup).addTo(map)
})

