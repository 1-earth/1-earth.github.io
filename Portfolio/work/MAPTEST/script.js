function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: 51.531240, lng:  -0.116063 },
    mapTypeId: "satellite",
  });

  map.setTilt(50);

  // Array of marker positions (latitude, longitude pairs)
  const markerPositions = [
    { lat: 51.561551, lng: -0.119062 },
    { lat: 51.515611, lng:  -0.076061 },
    { lat: 51.536810, lng: -0.125533 },
    
  ];

  markerPositions.forEach((position, index) => {
    const infowindow = new google.maps.InfoWindow({
      content: `<div id="content">Marker ${index + 1}</div>`+
      '<p>body</p>'
      ,
      ariaLabel: `Marker ${index + 1}`,
    });

    const marker = new google.maps.Marker({
      position: position,
      map: map,
      title: `Marker ${index + 1}`,
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
      });
    });
  });
}

window.initMap = initMap;