function initMap() {
	// Create a new map object centered on a specific location
	let myLatLng = {lat: 37.7749, lng: -122.4194};
	let map = new google.maps.Map(document.getElementById('map'), {
		center: myLatLng,
		zoom: 5,
        mapId: '20be348d5b4ef73b'
	});
    
    // Ask the user for their location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
        // Set the center of the map to the user's location
        let userLatLng = {lat: position.coords.latitude, lng: position.coords.longitude};
        map.setCenter(userLatLng);

        // Add a marker to the map at the user's location
        let marker = new google.maps.Marker({
            position: userLatLng,
            map: map,
            title: 'Your Location'
        });
        }, function() {
        // If the user denies permission or the location cannot be determined, use a default location
        alert('Unable to determine your location.');
        let defaultLatLng = {lat: 40.090203, lng: -95.999859};
        map.setCenter(defaultLatLng);
        });
    } else {
        // If geolocation is not supported by the browser, use a default location
        alert('Geolocation is not supported by your browser.');
        let defaultLatLng = {lat: 37.0902, lng: 95.7129};
        map.setCenter(defaultLatLng);
    }
}