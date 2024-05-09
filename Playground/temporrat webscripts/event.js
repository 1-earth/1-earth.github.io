function doPost(e) {
    var ss = SpreadsheetApp.openById('1Cy2EdQwPH-GErwqtC3tD6QvX40kcyCmhuRg5G7wIw_g');
    var sheet = ss.getSheetByName('Events');

    var currentDate = new Date();
    var date = Utilities.formatDate(currentDate, "GMT", "dd/MM/yyyy");

    var formData = {
        nameEvent: e.parameter.nameEvent,
        eventDate: e.parameter.eventDate,
        time: e.parameter.time,
        address: e.parameter.address,
        description: e.parameter.description,
        linkURL: e.parameter.linkURL,
        primaryImage: e.parameter.primaryImage,
        secondaryImage: e.parameter.secondaryImage,
        topicTags: e.parameter.topicTags,
        practiceTags: e.parameter.practiceTags,
        recurrencePattern: e.parameter.recurrencePattern,
        recurrenceEndDate: e.parameter.recurrenceEndDate,
        dateSubmitted: date
    };



    // var formData = JSON.parse(e.postData.contents);
 
    sheet.appendRow([
        formData.nameEvent, 
        formData.eventDate, 
        formData.time, 
        formData.address, 
        formData.description, 
        "Social Network", 
        formData.linkURL, 
        "", 
        formData.primaryImage, 
        formData.secondaryImage, 
        formData.topicTags,
        formData.practiceTags, 
        formData.recurrencePattern, 
        formData.recurrenceEndDate, 
        formData.dateSubmitted,
        "", ""
    ]);

    return ContentService.createTextOutput(JSON.stringify({status: 'success', })).setMimeType(ContentService.MimeType.JSON);
}
