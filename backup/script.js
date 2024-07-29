document.addEventListener('DOMContentLoaded', function() {
    // Get the map container element
    const mapContainer = document.getElementById('map-container');
  
    // Load the SVG file using an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'sc.svg', true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Insert the SVG code into the map container
        mapContainer.innerHTML = xhr.responseText;
  
        // Get the SVG map element
        const map = document.querySelector('svg');
  
        // Add click event listener to the map
        map.addEventListener('click', function(event) {
          // Get the clicked path element
          const clickedPath = event.target;

          // Toggle the CSS class to change the color
          clickedPath.classList.toggle('clicked');
  
          // Log the ID of the clicked municipality
          console.log('Clicked municipality:', clickedPath.id);
        });
      }
    };
    xhr.send();
  });