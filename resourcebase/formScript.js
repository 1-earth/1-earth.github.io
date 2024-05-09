function toggleTag(button) {
    button.classList.toggle('active');
}


document.getElementById('resourceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve values from input fields
    const nameResource = document.getElementById('nameResource').value;
    const authorCreator = document.getElementById('authorCreator').value;
    const description = document.getElementById('description').value;
    const linkURL = document.getElementById('linkURL').value;
    const nameUser = document.getElementById('nameUser').value;

    // Retrieve checked categories and tags as arrays
    const categories = Array.from(document.querySelectorAll('input[name="category"]:checked'));
    const topicTags = Array.from(document.querySelectorAll('.topic-tag-button.active')).map(btn => btn.getAttribute('data-value'));
    // console.log(topicTags)
    const practiceTags = Array.from(document.querySelectorAll('.practice-tag-button.active')).map(btn => btn.getAttribute('data-value'));
    console.log(practiceTags)
    // Check if required fields are empty
    if (!nameResource || !authorCreator || !description || !linkURL || !nameUser) {
        alert('Please fill out all required fields.');
        return;
    }

    // Check if at least one category and one tag are selected
    if (categories.length === 0 || topicTags.length === 0 || practiceTags.length === 0) {
        alert('Please select at least one category, one topic tag, and one practice tag.');
        return;
    }

    // Append selected category and tags to FormData
    const formData = new FormData();
    formData.append('category', categories.map(cat => cat.value).join(', '));
    formData.append('topicTags', topicTags.join(', '));
    formData.append('practiceTags', practiceTags.join(', '));

    // Continue with form submission and data handling
    sendDataToGoogleSheets(formData);
});

function sendDataToGoogleSheets(formData) {
    const url = 'https://script.google.com/macros/s/AKfycbyrKL-s4Mfj1cohwITmkNTT4aczTYzq3tqjR9mUXcsYpsLAEAyuwxWR1eL6nPKbK9E91g/exec';
    
    // Add other form fields to formData
    formData.append('nameResource', document.getElementById('nameResource').value);
    formData.append('authorCreator', document.getElementById('authorCreator').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('linkURL', document.getElementById('linkURL').value);
    formData.append('nameUser', document.getElementById('nameUser').value);

    // Perform POST request
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Thank you for submitting to the 1EARTH Resource Base! Your Submission will be reviewed & added ASAP');
        resetForm();
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error submitting form.');
    });
}

function resetForm() {
    document.getElementById('resourceForm').reset();
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
