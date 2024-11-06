var id = "1c1XUl-m_pP2oRzQM0aakHDgKsfud2G0ab-1WMilg06w";
var sheet_name = "ABOUT";
var key = "AIzaSyB5b_wv4yQMDoHTCDDZydcbYxLZ5ISrGbQ";
var url =
  "https://sheets.googleapis.com/v4/spreadsheets/" +
  id +
  "/values/" +
  sheet_name +
  "?alt=json&key=" +
  key;

function processData(rows) {
  console.log("Fetched rows:", rows);

  var landingcontent = document.getElementById("landingcontent");
  var keypoint1content = document.getElementById("keypoint1content");
  var description1content = document.getElementById("keypoint1content");

  // Mapping URLs to row indexes
  var pageToRowMap = {
    "about.html": 1, // Row 1 in the spreadsheet (second row in data)
  };

  var pageName = window.location.pathname.split("/").pop();
  var rowIndex = pageToRowMap[pageName];

  if (rowIndex !== undefined && rows[rowIndex]) {
    var row = rows[rowIndex];

    // Assuming the title is in the second column (index 1)
    landingcontent.innerHTML = `<p>${row[0]}</p>`;

    keypoint1content.innerHTML = `<h1>${row[1]}</h1>`;

    description1content.innerHTML = `<p style="font-size:35px">${row[2]}</p>`;

    console.log("Updated landing content:", landingcontent);
  } else {
    console.error("No data for the specified page:", pageName);
  }
}

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    if (data.values && data.values.length > 0) {
      processData(data.values);
    } else {
      console.error("No data returned from the spreadsheet.");
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
