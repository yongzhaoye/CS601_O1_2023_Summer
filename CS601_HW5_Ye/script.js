// Add an event listener to the button that will run this function when the button is clicked
document.getElementById('fetchButton').addEventListener('click', function() {
    // Fetch the JSON data from the specified URL
    fetch('my_degrees.json')
        .then(function(response) {
            // If the response status is not ok (200), throw an error
            if (!response.ok) {
                throw new Error('HTTP error, status = ' + response.status);
            }
            // Otherwise, parse the response data as JSON
            return response.json();
        })
        .then(function(jsonData) {
            // Get a reference to the div where the data will be displayed
            let degreesDataDiv = document.getElementById('degreesData');
            // Make the div visible
            degreesDataDiv.style.display = 'block';
            // Clear any previous data from the div
            degreesDataDiv.innerHTML = '';
            // For each degree in the data, add a paragraph to the div
            jsonData.degrees.forEach(degree => {
                degreesDataDiv.innerHTML += `
                <p><strong>School:</strong> ${degree.school}</p>
                <p><strong>Program:</strong> ${degree.program}</p>
                <p><strong>Type:</strong> ${degree.type}</p>
                <p><strong>Year Conferred:</strong> ${degree.yearConferred}</p>
                <hr/>
                `;
            });
        })
        // If there was an error anywhere in the fetch or processing, log it to the console
        .catch(function(error) {
            console.log(error);
        });
});
