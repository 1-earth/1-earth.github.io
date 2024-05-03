document.getElementById('resourceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Validate data here
    const nameResource = document.getElementById('nameResource').value;
    const authorCreator = document.getElementById('authorCreator').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const linkURL = document.getElementById('linkURL').value;
    const nameUser = document.getElementById('nameUser').value;
    const topicTags = document.querySelectorAll('input[name="topicTags"]:checked');
    const practiceTags = document.querySelectorAll('input[name="practiceTags"]:checked');

    // Check if required fields are empty
    if (!nameResource || !authorCreator || !description || !category || !linkURL || !nameUser) {
        alert('Please fill out all required fields.');
        return;
    }

    // Check if at least one tag is selected
    if (topicTags.length === 0 || practiceTags.length === 0) {
        alert('Please select at least one topic tag and one practice tag.');
        return;
    }

    // Assuming all validations pass, send data to Google Sheets
    sendDataToGoogleSheets();
});

function sendDataToGoogleSheets() {
    const url = 'https://script.google.com/macros/s/AKfycbys73_iUb2xviqSo285E83lqEEL-7ymnwkkXXRUQdIS4vVH6zl8YqWq3fHu1gelovqc/exec';

    // Create a new FormData object
    const formData = new FormData();

    // Manually append text inputs
    formData.append('nameResource', document.getElementById('nameResource').value);
    formData.append('authorCreator', document.getElementById('authorCreator').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('category', document.getElementById('category').value);
    formData.append('linkURL', document.getElementById('linkURL').value);
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
        alert('Thank you for submitting to the 1EARTH Resource Base! 🌐 Your Submission will be reviewed & added ASAP');
        resetForm();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error submitting form.');
    });
}

function resetForm() {
    // Reset text inputs
    document.getElementById('resourceForm').reset();

    // Optionally, explicitly uncheck all checkboxes if needed
    let checkboxes = document.querySelectorAll('input[type=checkbox]');
    for (let checkbox of checkboxes) {
        checkbox.checked = false;
    }
}