document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Gather and validate data
    const eventName = document.getElementById('eventName').value;
    const communityName = document.getElementById('communityName').value;
    const description = document.getElementById('description').value;
    const eventLink = document.getElementById('eventLink').value;
    const eventType = document.querySelector('input[name="eventType"]:checked').value;
    const eventDate = document.getElementById('eventDate').value;
    const eventTime = document.getElementById('eventTime').value;
    const userName = document.getElementById('userName').value;
    const recurrencePattern = document.getElementById('recurring').checked ? document.getElementById('recurrencePattern').value : '';
    const recurrenceDetails = document.getElementById('recurring').checked ? document.getElementById('recurrenceDetails').value : '';

    // Check if required fields are empty
    if (!eventName || !communityName || !description || !eventDate || !eventTime || !userName) {
        alert('Please fill out all required fields.');
        return;
    }

    // Assuming all validations pass, send data to Google Sheets
    sendDataToGoogleSheets(eventName, communityName, description, eventLink, eventType, eventDate, eventTime, userName, recurrencePattern, recurrenceDetails);
});

function sendDataToGoogleSheets(eventName, communityName, description, eventLink, eventType, eventDate, eventTime, userName, recurrencePattern, recurrenceDetails) {
    const url = 'https://script.google.com/macros/s/AKfycbw8tgYs2l7e-88D0hQ-xneJ3cQGTxjBjH3__NSwR-siTMh6ePKakiusZNJ2--CBaGEA-A/exec';

    const formData = new FormData();
    formData.append('eventName', eventName);
    formData.append('communityName', communityName);
    formData.append('description', description);
    formData.append('eventLink', eventLink);
    formData.append('eventType', eventType);
    formData.append('eventDate', eventDate);
    formData.append('eventTime', eventTime);
    formData.append('userName', userName);
    formData.append('recurrencePattern', recurrencePattern);
    formData.append('recurrenceDetails', recurrenceDetails);

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Thank you for submitting your event! Your submission will be reviewed and added ASAP.');
        resetForm();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error submitting form.');
    });
}

function resetForm() {
    document.getElementById('eventForm').reset();
}
