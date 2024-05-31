document.addEventListener("DOMContentLoaded", function () {
  const API_KEY = "AIzaSyB5b_wv4yQMDoHTCDDZydcbYxLZ5ISrGbQ";
  const SPREADSHEET_ID = "1Cy2EdQwPH-GErwqtC3tD6QvX40kcyCmhuRg5G7wIw_g";
  const RANGE = "Events";
  let openInfoWindow = null;

  async function fetchData() {
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
      );
      const data = await response.json();
      return data.values;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  }

  const mapStyles = [
    { featureType: "poi", stylers: [{ visibility: "off" }] },
    { featureType: "administrative", stylers: [{ visibility: "off" }] },
    { featureType: "transit", stylers: [{ visibility: "off" }] },
    { featureType: "road.local", stylers: [{ visibility: "off" }] },
    { featureType: "road", elementType: "labels", stylers: [{ visibility: "off" }] },
  ];

  function createInfoWindowContent(event) {
    const { name, community, time, day, monthYear, address, description, imageUrl, url, eventorinit } = event;
    const eventType = eventorinit === 'I' ? 'Initiative' : 'Event';

    // Conditional content for EVENT INFO
    const eventInfoContent = eventorinit === 'E' ? `<p class="event-description topmargin"><strong>EVENT INFO: </strong><br>${description}</p>` : '';

    return `
      <div id="content">
        <p class='event-type f10 purebold'>${eventType}</p>
        <h3 class="eventtitle purebold f23">${name}</h3>
        <p class='datgreen bold f12'>${community}</p>
        <p class='f12 black'>${time}, ${day}/${monthYear}</p>
        <p class='f12 black italic'>${address}</p>
        <div class="description-container">
          <img src="${imageUrl}" alt="${name}" class="event-image">
          <p class="event-description"><strong>ABOUT: </strong><br>${description}</p>
          
        </div>
        <p class="event-description topmargin "> ${eventInfoContent}</p>
        <a href="${url}" class="f14 purebold detaillink" target="_blank">details</a>
      </div>
    `;
}

  

  function parseDate(date) {
    const day = date.slice(8, 10);
    const year = date.slice(2, 4);
    const monthIndex = parseInt(date.slice(5, 7), 10) - 1;
    const monthNames = [
      "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST",
      "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER",
    ];
    const monthYear = `${monthNames[monthIndex]}/${year}`;
    return { day, monthYear };
  }

  async function displayData() {
    const data = await fetchData();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: { lat: 51.53124, lng: -0.116063 },
      streetViewControl: false,
      styles: mapStyles,
    });
  
    const markers = [];
  
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
              url: "static/images/icons/person.png",
              scaledSize: new google.maps.Size(18, 20),
            },
          });
        } else {
          window.userMarker.setPosition(userLocation);
        }
      });
    }
  
    data.slice(1).forEach((row) => {
      const [
        name, community, date, time, address, , description, , url, imageUrl,
        , keywordsCategory, keywordsAudience, , , , , latitude, longitude, eventorinit
      ] = row;
  
      const { day, monthYear } = parseDate(date);
      const categoryButtonsHtml = keywordsCategory.split(",").map(keyword => `<button class="keyword-btn category-btn">${keyword.trim()}</button>`).join("");
      const audienceButtonsHtml = keywordsAudience.split(",").map(keyword => `<button class="keyword-btn audience-btn">${keyword.trim()}</button>`).join("");
  
      const event = { name, community, time, day, monthYear, address, description, imageUrl, url, eventorinit };
  
      if (eventorinit === 'E') {
        const htmlContent = `
          <div class="upcomingEvent">
              <div class="upcomingeventimage">
                  <img src="${imageUrl}" alt="Image of ${name}" class=" eventimage ">
              </div>
              <div class="upcomingeventtext w69">
                  <div class=upcomingeventtextcontainer">
                      <p><a class=" f23 bold eventtitle purebold">${name}</a></p>
                      <p class='f12 datgreen bold'>${community}</p>
                      <p class='f10 '>${description}</p>
                      <p class='f10'>${time}</p>
                  </div>
              </div>
              <div class="upcomingeventdate">
                <p class='f34'>${day}</p>
                <p class='f10'>${monthYear}</p>
              </div>
          </div>
          <div class="full-width-line"></div>
        `;
        document.getElementById("upcoming-events").innerHTML += htmlContent;
      } else if (eventorinit === 'I') {
        const htmlContent3 = `
          <div class="grid-item3">
              <div class="upcomingeventimage3">
                  <img src="${imageUrl}" alt="Image of ${name}" class="upcomingeventimageinner">
              </div>
              <div class="top-event-info">
                  <div class="community-tag f12">COMMUNITY</div>
              </div>
              <div class="upcomingeventtext">
                  <div class=upcomingeventtextcontainer"
                      <h2><a class="eventtitle purebold">${community}</a></h2>
                      <p class='f14 datgreen purebold'> @${community}</p>
                      <p class='f14 descriptioninit'>${description}</p>
                  </div>
              </div>
              <div class="upcomingeventtext">
                <a href="${url}" class="f14 purebold detaillink" target="_blank">details</a>
              </div>
              <div class="keyword-buttons3">
                  <div class="audience-row3">${audienceButtonsHtml}</div>
                  <div class="category-row3">${categoryButtonsHtml}</div>
              </div>
          </div>
        `;
        document.getElementById("upcoming-events3").innerHTML += htmlContent3;
      }
  
      const infowindow = new google.maps.InfoWindow({
        content: createInfoWindowContent(event),
        ariaLabel: name,
      });
  
      const iconimage = eventorinit === 'E' ? "static/images/icons/custompin.png" : "static/images/icons/custompin2.png";
  
      const marker = new google.maps.Marker({
        position: { lat: parseFloat(latitude), lng: parseFloat(longitude) },
        map: map,
        title: name,
        icon: {
          url: iconimage,
          scaledSize: new google.maps.Size(18, 30),
        },
      });
  
      markers.push(marker);
  
      marker.addListener("click", () => {
        if (openInfoWindow) {
          openInfoWindow.close();
        }
        infowindow.open({ anchor: marker, map });
        openInfoWindow = infowindow;
      });
    });
  
    const addEventListeners = (elements, markers) => {
      elements.forEach((event, index) => {
        event.addEventListener("click", () => {
          google.maps.event.trigger(markers[index], "click");
          const targetSection = document.getElementById("map-target-section");
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
          }
        });
      });
    };
  
    addEventListeners(document.querySelectorAll(".upcomingEvent"), markers);
    addEventListeners(document.querySelectorAll(".grid-item3"), markers);
  
    map.addListener("click", () => {
      if (openInfoWindow) {
        openInfoWindow.close();
        openInfoWindow = null;
      }
    });
  }
  

  displayData();

  google.maps.event.addListenerOnce(map, "tilesloaded", function () {
    const logo = document.querySelector('.gm-style > a[href="d"]');
    if (logo) {
      logo.parentElement.parentElement.removeChild(logo.parentElement);
    }
  });
});
