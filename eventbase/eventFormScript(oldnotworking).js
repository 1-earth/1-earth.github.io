window.onload = function() {
    document.getElementById('eventForm').addEventListener('submit', function(event) {
        event.preventDefault();
    
    const nameEvent = document.getElementById('nameEvent').value;
    const eventDate = document.getElementById('eventDate').value;
    const time = document.getElementById('time').value;
    const address = document.getElementById('address').value;
    const description = document.getElementById('description').value;
    const linkURL = document.getElementById('linkURL').value;
    const primaryImage = document.getElementById('primaryImage').value;
    const secondaryImage = document.getElementById('secondaryImage').value;
    const topicTags = Array.from(document.querySelectorAll('input[name="topicTags"]:checked')).map(el => el.value).join(', ');
    const practiceTags = Array.from(document.querySelectorAll('input[name="practiceTags"]:checked')).map(el => el.value).join(', ');
    const recurrencePattern = document.getElementById('recurrencePattern').value;
    const recurrenceEndDate = document.getElementById('recurrenceEndDate').value;

    if (!nameEvent || !eventDate || !time || !address || !description) {
        alert('Please fill out all required fields.');
        return;
    }

    if (topicTags.length === 0 || practiceTags.length === 0) {
        alert('Please select at least one topic tag and one practice tag.');
        return;
    }

    sendDataToGoogleSheets({
        nameEvent, eventDate, time, address, description, linkURL, primaryImage, secondaryImage,
        topicTags, practiceTags, recurrencePattern, recurrenceEndDate
    });
});
};

function toggleRecurrenceEndDate(select) {
    const endDateContainer = document.getElementById('recurrenceEndDateContainer');
    if (select.value === 'non-recurring') {
        endDateContainer.style.display = 'none';
    } else {
        endDateContainer.style.display = 'block';
    }
}

function sendDataToGoogleSheets(data) {
    const url = 'https://script.google.com/macros/s/AKfycbwa12NxomVAh4goU1A8ty9g70UWsaPT7XD3mQGw22W5QV1Vv4L8tMXpQTD4dnOPpFRy7Q/exec';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Thank you for submitting your event to 1EARTH! Your submission will be reviewed and added ASAP.');
        document.getElementById('eventForm').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error submitting form.');
    });
}
