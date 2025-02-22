function toggleTag(button) {
    button.classList.toggle('active');
}

console.log(document.getElementById('initiativeForm')+"found"); 

document.getElementById('initiativeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // const nameEvent = document.getElementById('nameEvent').value;
    const nameCommunity = document.getElementById('nameCommunity').value;
    // const eventDate = document.getElementById('eventDate').value;
    // const time = document.getElementById('time').value;
    const address = document.getElementById('address').value;
    const description = document.getElementById('description').value;
    const linkURL = document.getElementById('linkURL').value;
    const primaryImage = document.getElementById('primaryImage').value;
    // const secondaryImage = document.getElementById('secondaryImage').value;
    // const recurrencePattern = document.getElementById('recurrencePattern').value;
    // const recurrenceEndDate = document.getElementById('recurrenceEndDate').value;
    const nameUser = document.getElementById('nameUser').value;


    const topicTags = Array.from(document.querySelectorAll('.topic-tag-button.active')).map(btn => btn.getAttribute('data-value'));
    const practiceTags = Array.from(document.querySelectorAll('.practice-tag-button.active')).map(btn => btn.getAttribute('data-value'));
    console.log(topicTags+', '+practiceTags);

    if ( !nameCommunity || !address || !description || !linkURL || !primaryImage || !nameUser  ) {
        alert('Please fill out all required fields.');
        return;
    }

    if (topicTags.length === 0 || practiceTags.length === 0) {
        alert('Please select at least one topic tag and one practice tag.');
        return;
    }

    // Append selected category and tags to FormData
    const formData = new FormData();
    formData.append('topicTags', topicTags.join(', '));
    formData.append('practiceTags', practiceTags.join(', '));


    // Continue 
    sendDataToGoogleSheets(formData);
});

function sendDataToGoogleSheets(formData) {
    const url = 'https://script.google.com/macros/s/AKfycby62O21YEycXAzQws7O3Ay6CAfi5yNQ-DofltDMBCs5E1T2coNv0kmnyTE9W7h7d8xX3w/exec';

     // Add other form fields to formData
    // formData.append('nameEvent', document.getElementById('nameEvent').value);
    formData.append('nameCommunity', document.getElementById('nameCommunity').value);
    // formData.append('eventDate', document.getElementById('eventDate').value);
    // formData.append('time', document.getElementById('time').value);
    formData.append('address', document.getElementById('address').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('linkURL', document.getElementById('linkURL').value);
    formData.append('primaryImage', document.getElementById('primaryImage').value);
    // formData.append('secondaryImage', document.getElementById('secondaryImage').value);
    // formData.append('recurrencePattern', document.getElementById('recurrencePattern').value);
    // formData.append('recurrenceEndDate', document.getElementById('recurrenceEndDate').value);
    formData.append('nameUser', document.getElementById('nameUser').value);
    formData.append('eventorinit', 'I'); //  "I"




    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Thank you for submitting to the 1EARTH Network! 🌐 Your Submission will be reviewed & added ASAP');
        resetForm();
        console.log(formData)
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error submitting form.');
    });
}

function resetForm() {
    // Reset text inputs
    document.getElementById('initiativeForm').reset();

    // Optionally, explicitly uncheck all checkboxes if needed
    let checkboxes = document.querySelectorAll('input[type=checkbox]');
    for (let checkbox of checkboxes) {
        checkbox.checked = false;
    }

    // Reset all toggle buttons (used in place of checkboxes)
    let toggleButtons = document.querySelectorAll('.topic-tag-button, .practice-tag-button');
    for (let button of toggleButtons) {
        button.classList.remove('active');
    }
}