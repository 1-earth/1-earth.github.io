function doPost(e) {
    var ss = SpreadsheetApp.openById('1Cy2EdQwPH-GErwqtC3tD6QvX40kcyCmhuRg5G7wIw_g');
    var sheet = ss.getSheetByName('Sheet1');
    
    var currentDate = new Date();
    var date = Utilities.formatDate(currentDate, "GMT", "dd/MM/yyyy");
    
    var formData = {
        nameResource: e.parameter.nameResource,
        authorCreator: e.parameter.authorCreator,
        description: e.parameter.description,
        category: e.parameter.category,
        linkURL: e.parameter.linkURL,
        nameUser: e.parameter.nameUser,
        topicTags: e.parameter.topicTags,
        practiceTags: e.parameter.practiceTags,
        dateSubmitted: date
    };

    var imageUrls = getImageUrls(formData.linkURL);

    sheet.appendRow([
        formData.nameResource, 
        formData.authorCreator, 
        formData.description, 
        formData.category, 
        formData.linkURL, 
        formData.nameUser, 
        formData.topicTags, 
        formData.practiceTags, 
        formData.dateSubmitted,
        imageUrls.firstImageUrl,
        imageUrls.mainImageUrl
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({status: 'success', imageUrls: imageUrls})).setMimeType(ContentService.MimeType.JSON);
}

function getImageUrls(pageUrl) {
    var images = { firstImageUrl: '', mainImageUrl: '' };
    try {
        var html = UrlFetchApp.fetch(pageUrl).getContentText();
        var imgRegex = /<img[^>]+src="([^">]+)"/gi; // General regex to capture any image source.
        var largestImg = '';
        var firstImg = '';
        var match;
        var count = 0;
        
        while ((match = imgRegex.exec(html)) !== null) {
            var src = match[1]; // Get the src attribute value

            // Capture the first image irrespective of file type
            if (count === 0) {
                firstImg = src;
            }

            // Exclude SVG and WEBP files when considering for main image
            if (!src.toLowerCase().includes(".svg") && !src.toLowerCase().includes(".webp")) {
                largestImg = src; // Using the last non-SVG, non-WEBP image as the "largest"
            }

            count++;
        }

        images.firstImageUrl = firstImg;
        images.mainImageUrl = largestImg;
    } catch (error) {
        Logger.log('Error fetching image URLs: ' + error.toString());
    }
    return images;
}
