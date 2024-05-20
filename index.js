document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.querySelector('.search-btn');
    const searchInput = document.querySelector('.search-input');

    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim(); // Get the search term

        if (searchTerm !== '') {
            // Perform your search functionality here
            console.log('Searching for:', searchTerm);
            
            // Clear the input field after searching (optional)
            searchInput.value = '';
        } else {
            // If the search term is empty, you can handle it here
            console.log('Please enter a search term.');
        }
    });
});
