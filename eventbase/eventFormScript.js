console.log(document.getElementById('eventForm')+"found"); 

document.getElementById('eventForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nameEvent = document.getElementById('nameEvent').value;
    const nameCommunity = document.getElementById('nameCommunity').value;
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
    const nameUser = document.getElementById('nameUser').value;

    if (!nameEvent || !nameCommunity || !eventDate || !time || !address || !description || !linkURL || !primaryImage || !secondaryImage || !recurrencePattern  || !nameUser  ) {
        alert('Please fill out all required fields.');
        return;
    }

    if (topicTags.length === 0 || practiceTags.length === 0) {
        alert('Please select at least one topic tag and one practice tag.');
        return;
    }

    sendDataToGoogleSheets(
        // {nameEvent, eventDate, time, address, description, linkURL, primaryImage, secondaryImage,
        // topicTags, practiceTags, recurrencePattern, recurrenceEndDate}
        );
});


function toggleRecurrenceEndDate(select) {
    const endDateContainer = document.getElementById('recurrenceEndDateContainer');
    if (select.value === 'non-recurring') {
        endDateContainer.style.display = 'none';
    } else {
        endDateContainer.style.display = 'block';
    }
}

function sendDataToGoogleSheets(data) {
    const url = 'https://script.google.com/macros/s/AKfycbyrKL-s4Mfj1cohwITmkNTT4aczTYzq3tqjR9mUXcsYpsLAEAyuwxWR1eL6nPKbK9E91g/exec';

    const formData = new FormData();

    formData.append('nameEvent', document.getElementById('nameEvent').value);
    formData.append('nameCommunity', document.getElementById('nameCommunity').value);
    formData.append('eventDate', document.getElementById('eventDate').value);
    formData.append('time', document.getElementById('time').value);
    formData.append('address', document.getElementById('address').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('linkURL', document.getElementById('linkURL').value);
    formData.append('primaryImage', document.getElementById('primaryImage').value);
    formData.append('secondaryImage', document.getElementById('secondaryImage').value);
    formData.append('recurrencePattern', document.getElementById('recurrencePattern').value);
    formData.append('recurrenceEndDate', document.getElementById('recurrenceEndDate').value);
    formData.append('nameUser', document.getElementById('nameUser').value);



    // Handle checkboxes for topicTags
    let topicTags = Array.from(document.querySelectorAll('input[name="topicTags"]:checked')).map(el => el.value).join(', ');
    formData.append('topicTags', topicTags);

    // Handle checkboxes for practiceTags
    let practiceTags = Array.from(document.querySelectorAll('input[name="practiceTags"]:checked')).map(el => el.value).join(', ');
    formData.append('practiceTags', practiceTags);



    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Thank you for submitting to the 1EARTH Network! 🌐 Your Submission will be reviewed & added ASAP');
        resetForm();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error submitting form.');
    });
}

function resetForm() {
    // Reset text inputs
    document.getElementById('eventForm').reset();

    // Optionally, explicitly uncheck all checkboxes if needed
    let checkboxes = document.querySelectorAll('input[type=checkbox]');
    for (let checkbox of checkboxes) {
        checkbox.checked = false;
    }
}