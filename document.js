document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const searchInput = document.getElementById('search-input').value;
        // Perform your search action here, for example, redirect to search results page
        // window.location.href = '/search?q=' + encodeURIComponent(searchInput);
        console.log('Search query:', searchInput);
    });
});
