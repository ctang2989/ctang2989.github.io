function myFunction(){
	alert('Congratulations! You just got a virus!');
}


function switcheroo(){
	document.getElementById("types").innerHTML = "Random Pandas";
}

function initMap() {
        var mapDiv = document.getElementById('map');
        var map = new google.maps.Map(mapDiv, {
            center: {lat: 44.540, lng: -78.546},
            zoom: 8
        });
}