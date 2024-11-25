var id = "1c1XUl-m_pP2oRzQM0aakHDgKsfud2G0ab-1WMilg06w";
var sheet_name = "WORK";
var key = "AIzaSyB5b_wv4yQMDoHTCDDZydcbYxLZ5ISrGbQ";
var url =
  "https://sheets.googleapis.com/v4/spreadsheets/" +
  id +
  "/values/" +
  sheet_name +
  "?alt=json&key=" +
  key;

function processData(rows) {
  var titlecontent = document.getElementById("titlecontent");
  var header1content = document.getElementById("header1content");
  var description1content = document.getElementById("description1content");
  var header2content = document.getElementById("header2content");
  var description2content = document.getElementById("description2content");
  var relatedheader1content = document.getElementById("relatedheader1content");
  var relatedartist1content = document.getElementById("relatedartist1content");
  var relatedheader2content = document.getElementById("relatedheader2content");
  var relatedartist2content = document.getElementById("relatedartist2content");
  var youtubeembedcontent = document.getElementById("youtubeembedcontent");

  // Mapping URLs to row indexes (e.g., row 1 for 'summerwhining.html', row 2 for 'grateful.html')
  var pageToRowMap = {
    "summerwhining.html": 1, // Row 1 in the spreadsheet
    "grateful.html": 2, // Row 2 in the spreadsheet
    "completethemission.html": 3,
    "badwayspt2.html": 4,
    "aboveanxiety.html": 5,
    "greatness.html": 6,
    "wiferiddem.html": 7,
    "frenzy.html": 8,
    "paranoia.html": 9,
    "vision.html": 10,
    "sounddiscovery.html": 11,
    "cap1talalive.html": 12,
    "1036campaign.html": 13,
  };

  // Get the current page name from the URL
  var pageName = window.location.pathname.split("/").pop();

  // Determine the row index based on the page name
  var rowIndex = pageToRowMap[pageName];

  if (rowIndex !== undefined && rows[rowIndex]) {
    // If the rowIndex is defined in the map and the row exists, display the row
    var row = rows[rowIndex];

    // Display content for the specified row
    titlecontent.innerHTML = `<h1>${row[1]}</h1>`;

    youtubeembedcontent.innerHTML = `
      <figure class="carousel-slide aspect-ratio-container aspect-ratio-landscape">
        <iframe width="560" height="315" src="${row[2]}"
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </figure>`;

    header1content.innerHTML = `<h2>${row[3]}</h2>`;
    description1content.innerHTML = `<p dir="ltr">${row[4]}</p>`;
    header2content.innerHTML = `<h2>${row[8]}</h2>`;
    description2content.innerHTML = `<p dir="ltr">${row[9]}</p>`;
    relatedheader1content.innerHTML = `<h3>${row[13]}</h3>`;
    relatedartist1content.innerHTML = `<p>${row[14]}</p>`;
    relatedheader2content.innerHTML = `<h3>${row[16]}</h3>`;
    relatedartist2content.innerHTML = `<p>${row[17]}</p>`;

    // Get all <img> elements in the gallery
    var images = document.querySelectorAll(".gallery-row img");

    // List of columns containing image URLs (5, 6, 7, 10, 11, 12, 15, 16)
    var imageColumns = [5, 6, 7, 10, 11, 12, 15, 18];

    // Replace the src attribute of the images with URLs from the specified columns
    if (images.length > 0) {
      images.forEach(function (image, index) {
        if (imageColumns[index] && row[imageColumns[index]]) {
          image.src = row[imageColumns[index]]; // Replace src with the value from the corresponding column
        }
      });
    }
  } else {
    console.log("No content available for this page.");
  }
}

fetch(url)
  .then((response) => response.json())
  .then((data) => processData(data.values));
