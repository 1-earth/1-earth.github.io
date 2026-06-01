function doPost(e) {
    var ss = SpreadsheetApp.openById('1Cy2EdQwPH-GErwqtC3tD6QvX40kcyCmhuRg5G7wIw_g');
    var sheet = ss.getSheetByName('Sheet1');
    
    // Get the current date in DD/MM/YYYY format
    var currentDate = new Date();
    var date = Utilities.formatDate(currentDate, "GMT", "dd/MM/yyyy"); // Change "GMT" to your timezone if needed
    
    // Get data from the form submission
    var formData = {
        nameResource: e.parameter.nameResource,
        authorCreator: e.parameter.authorCreator,
        description: e.parameter.description,
        category: e.parameter.category,
        linkURL: e.parameter.linkURL,
        nameUser: e.parameter.nameUser,
        topicTags: e.parameter.topicTags,
        practiceTags: e.parameter.practiceTags,
        dateSubmitted: date  // This holds the formatted current date
    };

    // Append a new row with the collected data including the current date
    sheet.appendRow([
        formData.nameResource, 
        formData.authorCreator, 
        formData.description, 
        formData.category, 
        formData.linkURL, 
        formData.nameUser, 
        formData.topicTags, 
        formData.practiceTags, 
        formData.dateSubmitted  // Appending the date to the row
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({status: 'success'})).setMimeType(ContentService.MimeType.JSON);
}
