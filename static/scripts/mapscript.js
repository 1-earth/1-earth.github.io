document.addEventListener("DOMContentLoaded", function () {
    const API_KEY = "AIzaSyB5b_wv4yQMDoHTCDDZydcbYxLZ5ISrGbQ"; // Replace 'YOUR_API_KEY' with your Google Sheets API key
    const SPREADSHEET_ID = "1Cy2EdQwPH-GErwqtC3tD6QvX40kcyCmhuRg5G7wIw_g";
    const RANGE = "Events";
    let openInfoWindow = null; // Variable to store the currently open info window
  
    async function fetchData() {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
      );
      const data = await response.json();
      return data.values;
    }
  
    const mapStyles = [
        {
          featureType: "poi",
          stylers: [
            {
              visibility: "off", // Hide points of interest
            },
          ],
        },
        
      ];

    async function displayData() {
      const data = await fetchData();
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: 51.53124, lng: -0.116063 },
        mapTypeId: "satellite",
        streetViewControl: false, //no srteetvw
        styles: mapStyles, // Apply custom map styles
      });
  
      map.setTilt(50);
  
      // Create an array to hold marker objects
      const markers = [];
  
      // Get user's current location and continuously watch for changes
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function (position) {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
  
          if (!window.userMarker) {
            window.userMarker = new google.maps.Marker({
              position: userLocation,
              map: map,
              title: "Your Location",
              icon: {
                url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              },
            });
          } else {
            window.userMarker.setPosition(userLocation);
          }
        });
      }
  
      data.slice(1).forEach((row) => {
        const name = row[0];
        const url = row[4];
        const time = row[3];
        const date = row[2];
        const description = row[5];
        const imageUrl = row[9];
        const latitude = parseFloat(row[17]);
        const longitude = parseFloat(row[18]);
        const keywordsCategory = row[11].split(",");
        const keywordsAudience = row[12].split(",");
        let categoryButtonsHtml = keywordsCategory
          .map(
            (keyword) =>
              `<button class="keyword-btn category-btn">${keyword.trim()}</button>`
          )
          .join("");
        let audienceButtonsHtml = keywordsAudience
          .map(
            (keyword) =>
              `<button class="keyword-btn audience-btn">${keyword.trim()}</button>`
          )
          .join("");
  
        const htmlContent = `
          <div class="upcomingEvent">
              <div class="upcomingeventimage">
                  <img src="${imageUrl}" alt="Image of ${name}" class=" eventimage ">
              </div>
              <div class="upcomingeventtext">
                  <div class=upcomingeventtextcontainer"
                      <h2><a class="eventtitle purebold">${name}</a></h2>
                      <p class='f14'>${time}</p>
                      <p class='f14'>${description}</p>
                  </div>
              </div>
              <div class="upcomingeventdate"><p>${date}</p></div>
          </div>
          <div class="full-width-line"></div>
        `;
  
        const htmlContent3 = `
          <div class="grid-item3">
              <div class="upcomingeventimage3">
                  <img src="${imageUrl}" alt="Image of ${name}" class="upcomingeventimage3">
              </div>
              <div class="top-event-info">
                  <div class="event-tag f12">EVENT</div>
                  <div class="event-date f14 purebold">${date}</div>
              </div>
              <div class="upcomingeventtext">
                  <div class=upcomingeventtextcontainer"
                      <h2><a class="eventtitle purebold">${name}</a></h2>
                      <p class='f14'>${time}</p>
                      <p class='f14'>${description}</p>
                  </div>
              </div>
              <div class="keyword-buttons3">
                  <div class="audience-row3">${audienceButtonsHtml}</div>
                  <div class="category-row3">${categoryButtonsHtml}</div>
              </div>
          </div>
        `;
  
        document.getElementById("upcoming-events").innerHTML += htmlContent;
        document.getElementById("upcoming-events3").innerHTML += htmlContent3;
  
        const infowindow = new google.maps.InfoWindow({
          content: `<div id="content"><h3>${name}</h3><p>${description}</p><img src="${imageUrl}" alt="${name}" style="max-width: 200px;"></div>`,
          ariaLabel: name,
        });
        const iconimage = "static/images/icons/custompin.png";
  
        const marker = new google.maps.Marker({
          position: { lat: latitude, lng: longitude },
          map: map,
          title: name,
          icon: iconimage,
          
        });
  
        markers.push(marker); // Push the created marker into the markers array
  
        marker.addListener("click", () => {
          if (openInfoWindow) {
            openInfoWindow.close(); // Close previously open info window
          }
          infowindow.open({
            anchor: marker,
            map,
          });
          openInfoWindow = infowindow; // Set the currently open info window
        });
      });
  
      const upcomingEvents = document.querySelectorAll(".upcomingEvent");
      const upcomingEvents3 = document.querySelectorAll(".grid-item3");
  
      upcomingEvents.forEach((event, index) => {
        event.addEventListener("click", () => {
          google.maps.event.trigger(markers[index], "click");
        });
      });
  
      upcomingEvents3.forEach((event, index) => {
        event.addEventListener("click", () => {
          google.maps.event.trigger(markers[index], "click");
        });
      });
  
      // Add a click event listener to the map to close the info window
      map.addListener("click", () => {
        if (openInfoWindow) {
          openInfoWindow.close();
          openInfoWindow = null; // Reset the currently open info window
        }
      });
    }
  
    displayData(); // Initial display
  });
  
  function isValidUrl(string) {
    try {
      new URL(string);
      return true;
    } catch (_) {
      return false;
    }
  }
  