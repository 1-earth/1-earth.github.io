document.addEventListener('DOMContentLoaded', function() {
    const API_KEY = 'AIzaSyB5b_wv4yQMDoHTCDDZydcbYxLZ5ISrGbQ';
    const SPREADSHEET_ID = '1Cy2EdQwPH-GErwqtC3tD6QvX40kcyCmhuRg5G7wIw_g';
    const RANGE = 'Resources';

    async function fetchData() {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`);
        const data = await response.json();
        return data.values;
    }

    async function displayData(searchText = '', categoryFilter = '', practiceFilter = '') {
        const data = await fetchData();
        // Clear previous data
        document.getElementById('research-inspiration').innerHTML = '';
        document.getElementById('opportunities-funding').innerHTML = '';
        document.getElementById('other-community-hubs').innerHTML = '';

        data.slice(1).forEach(row => {
            const name = row[0];
            const author = row[1];
            const description = row[2];
            const category = row[3];
            const url = row[4];
            const userName = row[5];
            let imageUrl = row[9]; // Primary image URL

            if (!imageUrl || !isValidUrl(imageUrl)) {
                imageUrl = row[10]; // Fallback to secondary image URL
            }

            const keywordsCategory = row[6].split(',');
            const keywordsAudience = row[7].split(',');

            // Filtering logic
            if (
                (searchText && !name.toLowerCase().includes(searchText.toLowerCase()) &&
                 !author.toLowerCase().includes(searchText.toLowerCase()) &&
                 !description.toLowerCase().includes(searchText.toLowerCase()) &&
                 !keywordsCategory.join(', ').toLowerCase().includes(searchText.toLowerCase()) &&
                 !keywordsAudience.join(', ').toLowerCase().includes(searchText.toLowerCase())) ||
                (categoryFilter && !keywordsCategory.includes(categoryFilter)) ||
                (practiceFilter && !keywordsAudience.includes(practiceFilter))
            ) {
                return;
            }

            let categoryButtonsHtml = keywordsCategory.map(keyword => `<button class="keyword-btn category-btn">${keyword.trim()}</button>`).join('');
            let audienceButtonsHtml = keywordsAudience.map(keyword => `<button class="keyword-btn audience-btn">${keyword.trim()}</button>`).join('');

            const htmlContent = `
            <h2><a href="${url}" class="resourcetitle">${name}</a></h2>

                <p class='authortext'>Author/Creator: ${author}</p>
                <p class='descriptiontext'>${description}</p>
                <div class="resourceimagesection">
                    <img src="${imageUrl}" alt="Image of ${name}" class="rounded resourceimage">
                    <div class="keyword-buttons">
                        <div class="audience-row">${audienceButtonsHtml}</div>
                        <div class="category-row">${categoryButtonsHtml}</div>
                    </div>
                </div>
                <p class='addedbytext'>Added by: ${userName}</p>
                <hr>
            `;

            switch (category) {
                case 'Research & Inspiration':
                    document.getElementById('research-inspiration').innerHTML += htmlContent;
                    break;
                case 'Opportunities & Funding':
                    document.getElementById('opportunities-funding').innerHTML += htmlContent;
                    break;
                case 'Other Community Hubs':
                    document.getElementById('other-community-hubs').innerHTML += htmlContent;
                    break;
            }
        });
    }

    // Event listeners for search and filter inputs
    document.getElementById('search-input').addEventListener('input', function() {
        const searchText = this.value;
        const categoryFilter = document.getElementById('category-dropdown').getAttribute('data-selected') || '';
        
        const practiceFilter = document.getElementById('practice-dropdown').getAttribute('data-selected') || '';
        console.log(practiceFilter);
        displayData(searchText, categoryFilter, practiceFilter);
    });

    document.querySelectorAll('#category-dropdown a, #practice-dropdown a').forEach(item => {
        item.addEventListener('click', function() {
            const dropdownType = this.parentNode.id;
            const filterType = dropdownType === 'category-dropdown' ? 'categoryFilter' : 'practiceFilter';
            document.getElementById(dropdownType).setAttribute('data-selected', this.textContent);
            const searchText = document.getElementById('search-input').value;
            const categoryFilter = document.getElementById('category-dropdown').getAttribute('data-selected') || '';
            const practiceFilter = document.getElementById('practice-dropdown').getAttribute('data-selected') || '';
            console.log("C: "+categoryFilter);
            displayData(searchText, categoryFilter, practiceFilter);
            console.log("P: "+practiceFilter);
        });
    });

    function isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    }

    displayData(); // Initial display
});
