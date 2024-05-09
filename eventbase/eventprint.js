document.addEventListener('DOMContentLoaded', function() {
    const API_KEY = 'AIzaSyB5b_wv4yQMDoHTCDDZydcbYxLZ5ISrGbQ';
    const SPREADSHEET_ID = '1Cy2EdQwPH-GErwqtC3tD6QvX40kcyCmhuRg5G7wIw_g';
    const RANGE = 'Events';

    async function fetchData() {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`);
        const data = await response.json();
        return data.values;
    }

    async function displayData(searchText = '', categoryFilter = '', practiceFilter = '') {
        const data = await fetchData();
        // Clear previous data
        document.getElementById('upcoming-events').innerHTML = '';
        document.getElementById('upcoming-events3').innerHTML = '';
        // document.getElementById('other-community-hubs').innerHTML = '';

        data.slice(1).forEach(row => {
            const name = row[0];
            console.log(name);
            // const author = row[1];
            // const description = row[2];
            // const category = row[3];
            const url = row[4];
            const time = row[3];
            const date = row[2];
            const description = row[5];
            // const userName = row[5];
            //let imageUrl = row[9]; // Primary image URL

            // if (!imageUrl || !isValidUrl(imageUrl)) {
                imageUrl = row[9]; // Fallback to secondary image URL
            // }

            // const keywordsCategory = row[6].split(',');
            // const keywordsAudience = row[7].split(',');

            // Filtering logic
            // if (
            //     (searchText && !name.toLowerCase().includes(searchText.toLowerCase()) &&
            //      !author.toLowerCase().includes(searchText.toLowerCase()) &&
            //      !description.toLowerCase().includes(searchText.toLowerCase()) &&
            //      !keywordsCategory.join(', ').toLowerCase().includes(searchText.toLowerCase()) &&
            //      !keywordsAudience.join(', ').toLowerCase().includes(searchText.toLowerCase())) ||
            //     (categoryFilter && !keywordsCategory.includes(categoryFilter)) ||
            //     (practiceFilter && !keywordsAudience.includes(practiceFilter))
            // ) {
            //     return;
            // }

            // let categoryButtonsHtml = keywordsCategory.map(keyword => `<button class="keyword-btn category-btn">${keyword.trim()}</button>`).join('');
            // let audienceButtonsHtml = keywordsAudience.map(keyword => `<button class="keyword-btn audience-btn">${keyword.trim()}</button>`).join('');

            const htmlContent = `
            <div class="upcomingEvent">
                <div class="upcomingeventimage">
                    <img src="${imageUrl}" alt="Image of ${name}" class=" eventimage ">
                </div>
                <div class="upcomingeventtext">
                    <div class=upcomingeventtextcontainer"
                        <h2><a href="${url}" class="eventtitle purebold">${name}</a></h2>
                        <p class='f14'>${time}</p>
                        <p class='f14'>${description}</p>
                    </div>
                </div>
                <div class="upcomingeventdate"><p>${date}</p></div>
            </div>
            <div class="full-width-line"></div>

                
            `;

            const htmlContent3 = `
            
               
                    
            <div class="grid-item3">
                <div class="upcomingeventimage3">
                    <img src="${imageUrl}" alt="Image of ${name}" class="upcomingeventimage3">
                </div>
                <div class="top-event-info">
                    <div class="event-tag f12">EVENT</div>
                    <div class="event-date f14 purebold">${date}</div>
                </div>
                <div class="upcomingeventtext">
                    <div class=upcomingeventtextcontainer"
                        <h2><a href="${url}" class="eventtitle purebold">${name}</a></h2>
                        <p class='f14'>${time}</p>
                        <p class='f14'>${description}</p>
                    </div>
                </div>
            
            
            </div>
           
                
            
            

                
            `;

            // place this back in innerhtmllater
            // <p class='authortext'>Author/Creator: ${author}</p>
            //     <p class='descriptiontext'>${description}</p>
            //     <div class="resourceimagesection">
            //         <img src="${imageUrl}" alt="Image of ${name}" class="rounded resourceimage">
            //         <div class="keyword-buttons">
            //             <div class="audience-row">${audienceButtonsHtml}</div>
            //             <div class="category-row">${categoryButtonsHtml}</div>
            //         </div>
            //     </div>
            //     <p class='addedbytext'>Added by: ${userName}</p>
            //     <hr></hr>

            // switch (category) {
            //     case 'Research & Inspiration':
                    document.getElementById('upcoming-events').innerHTML += htmlContent;
            //         break;
            //     case 'Opportunities & Funding':
                    document.getElementById('upcoming-events3').innerHTML += htmlContent3;
            //         break;
            //     case 'Other Community Hubs':
            //         document.getElementById('other-community-hubs').innerHTML += htmlContent;
            //         break;
            // }
        });
    }

    

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
