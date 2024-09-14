document.addEventListener('DOMContentLoaded', () => {
    const map = L.map('map').setView([40.702, -73.981], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
    }).addTo(map);

    const alMajaz = L.marker([40.702, -73.981], {
        icon: L.icon({ iconUrl: 'mb.png', iconSize: [40, 40] })
    }).addTo(map);

// Add neighborhood markers
const neighborhoods = {
    'Vinegar Hill': [40.702, -73.981],
    'Carroll Gardens': [40.681, -73.998],
    'Sunset Park': [40.681, -73.998],
    'Greenwood Heights': [40.659, -74.000],
    'East Elmhurst': [40.761, -73.865],
    'Grant City': [40.57916667, -74.10805556],
    'Pelham Gardens': [40.861, -73.845],
    'Country Club': [40.839, -73.820],
    'Canarsie': [40.640, -73.902],
    'Lincoln Square': [40.773828, -73.9844722],
    'West New Brighton': [40.635, -74.112],
    'Pelham Bay': [40.851, -73.833],
    'Dongan Hills': [40.589, -74.096],
    'Kingsbridge Heights': [40.872, -73.902],
    'Hollis': [40.710, -73.760],
    'Bergen Beach': [40.620, -73.907],
    'University Heights': [40.860, -73.909],
    'Morris Park': [40.852, -73.853],
    'Crown Heights': [40.673, -73.946],
    'Kips Bay': [40.741, -73.978],
    'East Harlem': [40.795, -73.939],
    'Travis': [40.59361111, -74.18722222],
    'Shore Acres': [40.60972222, -74.06666667],
    'Jamaica Estates': [40.719, -73.774],
    'Concord': [40.60833333, -74.08444444],
    'Woodlawn': [40.898, -73.867],
    'Arrochar': [40.59888889, -74.07222222],
    'Upper West Side': [40.787, -73.975],
    'Richmond Hill': [40.695, -73.830],
    'Charleston': [40.53694444, -74.23722222],
    'Far Rockaway': [40.601, -73.757],
    'Fordham': [40.859, -73.898],
    'Great Kills': [40.55, -74.151],
    'Bronxdale': [40.866, -73.851],
    'Brownsville': [40.662, -73.909],
    'Downtown Brooklyn': [40.694, -73.986],
    'Oakwood': [40.56027778, -74.120],
    'Tremont': [40.85, -73.906],
    'Concourse Village': [40.827, -73.923],
    'West Village': [40.736, -74.004],
    'Murray Hill': [40.748, -73.978],
    'Greenwich Village': [40.734, -74.002],
    'Windsor Terrace': [40.655, -73.979],
    'Manhattan Valley': [40.79935278, -73.96291944],
    'Little Neck': [40.77, -73.750],
    'Kew Gardens': [40.705, -73.825],
    'Gramercy Park': [40.7378, -73.9861],
    'Bulls Head': [40.60722222, -74.1625],
    'Sheepshead Bay': [40.582, -73.942],
    'Oakland Gardens': [40.76, -73.770],
    'Rossville': [40.541, -74.217],
    'Bay Ridge': [40.624, -74.032],
    'Port Morris': [40.802, -73.910],
    'East Village': [40.728, -73.986],
    'Bushwick': [40.697, -73.917],
    'Roosevelt Island': [40.76138889, -73.95083333],
    'Clifton': [40.62, -74.078],
    'South Beach': [40.59, -74.067],
    'Tottenville': [40.506, -74.243],
    'Gerritsen Beach': [40.59138889, -73.92666667],
    'Woodrow': [40.54333333, -74.19722222],
    'Hells Kitchen': [40.764, -73.992],
    'Riverdale': [40.894, -73.913],
    'Jamaica': [40.7, -73.800],
    'Castleton Corners': [40.61305556, -74.1225],
    'Kensington': [40.638528, -73.973167],
    'South Jamaica': [40.68, -73.790],
    'Little Italy': [40.719, -73.997],
    'New Brighton': [40.643, -74.093],
    'Queens Village': [40.715, -73.74],
    'Marine Park': [40.598, -73.920],
    'Sea Gate': [40.57719444, -74.008025],
    'Flatlands': [40.621, -73.935],
    'Brooklyn Heights': [40.696, -73.995],
    'St. Albans': [40.69, -73.765],
    'Midtown East': [40.747, -73.986],
    'Pleasant Plains': [40.52388889, -74.21555556],
    'Glen Oaks': [40.75, -73.71],
    'Laurelton': [40.675, -73.745],
    'Pelham Parkway': [40.858, -73.856],
    'Mariners Harbor': [40.63361111, -74.155],
    'Emerson Hill': [40.60444444, -74.12666667],
    'Sunnyside': [40.61305556, -74.10388889],
    'Beechhurst': [40.79, -73.800],
    'Tompkinsville': [40.63388889, -74.08583333],
    'Hunts Point': [40.813, -73.884],
    'Melrose': [40.825, -73.91],
    'Willowbrook': [40.60333333, -74.13861111],
    'Fresh Meadows': [40.735, -73.78],
    'Arverne': [40.59, -73.795],
    'Clinton Hill': [40.69, -73.960],
    'Ozone Park': [40.68, -73.850],
    'Brighton Beach': [40.58, -73.960],
    'Carnegie Hill': [40.784726, -73.95607],
    'St. George': [40.643, -74.079],
    'Gravesend': [40.598, -73.971],
    'Financial District': [40.708, -74.011],
    'Prospect Heights': [40.67777778, -73.96944444],
    'Fieldston': [40.894, -73.903],
    'Jamaica Hills': [40.71277778, -73.79916667],
    'Prospect Park South': [40.646111, -73.967222],
    'Ridgewood': [40.70, -73.900],
    'Westerleigh': [40.61805556, -74.13694444],
    'Rosebank': [40.61416667, -74.06611111],
    'New Dorp': [40.574, -74.116],
    'Flatiron District': [40.7408, -73.9896],
    'Bayside': [40.76, -73.77],
    'Woodside': [40.745, -73.905],
    'Morrisania': [40.832, -73.904],
    'Alphabet City': [40.726, -73.979],
    'South Ozone Park': [40.676, -73.812],
    'Todt Hill': [40.60222222, -74.11222222],
    'Huguenot': [40.53722222, -74.19444444],
    'Sheepshead Bay': [40.582, -73.942],
    'Springfield Gardens': [40.66, -73.770],
    'Kingsbridge': [40.879, -73.905],
    'Jackson Heights': [40.75138889, -73.88694444],
    'Dyker Heights': [40.62, -74.007],
    'Midwood': [40.623, -73.962],
    'Glendale': [40.701, -73.889],
    'Midwood': [40.623, -73.962]
};
    Object.entries(neighborhoods).forEach(([name, [lat, lng]]) => {
        L.marker([lat, lng], {
            icon: L.divIcon({
                className: 'neighborhood-marker',
                html: `<div style="background-color: ${getColorForScore(randomScore())};">${name}</div>`
            })
        }).addTo(map).on('click', () => {
            alert(`${name}: Crime Score ${randomScore()}`);
        });
    });

    function getColorForScore(score) {
        switch (score) {
            case 1: return 'green';
            case 2: return 'lightgreen';
            case 3: return 'yellow';
            case 4: return 'orange';
            case 5: return 'red';
            default: return 'grey';
        }
    }

    function randomScore() {
        return Math.floor(Math.random() * 5) + 1;
    }

    // Add crime data
    const crimeData = [
        { type: 'Theft', time: '2:30 PM', lat: 25.3266, lng: 55.3854 },
        { type: 'Vandalism', time: '11:45 AM', lat: 25.3270, lng: 55.3850 },
        { type: 'Disturbance', time: '9:15 AM', lat: 25.3260, lng: 55.3860 }
    ];

    const crimeList = document.getElementById('crime-list');
    crimeData.forEach(crime => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${crime.type}</strong> - ${crime.time}`;
        crimeList.appendChild(li);
    });

    // Handle search
    document.getElementById('search').addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            const query = event.target.value.toLowerCase();
            const neighborhood = Object.keys(neighborhoods).find(name => name.toLowerCase() === query);

            if (neighborhood) {
                const [lat, lng] = neighborhoods[neighborhood];
                map.setView([lat, lng], 14);
                L.marker([lat, lng], {
                    icon: L.icon({ iconUrl: 'mr.png', iconSize: [40, 40] })
                }).addTo(map);
            } else {
                alert('Neighborhood not found.');
            }
        }
    });

    // Handle get directions button
    document.getElementById('get-directions').addEventListener('click', () => {
        const searchInput = document.getElementById('search').value.toLowerCase();
        const destination = Object.keys(neighborhoods).find(name => name.toLowerCase() === searchInput);

        if (destination) {
            const [destLat, destLng] = neighborhoods[destination];
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const { latitude, longitude } = position.coords;
                    L.Routing.control({
                        waypoints: [
                            L.latLng(40.702, -73.981),
                            L.latLng(destLat, destLng)
                        ],
                        routeWhileDragging: true,
                        geocoder: L.Control.Geocoder.nominatim()
                    }).addTo(map);
                }, () => {
                    alert('Unable to retrieve your location.');
                });
            } else {
                alert('Geolocation is not supported by this browser.');
            }
        } else {
            alert('Destination not found.');
        }
    });

    document.getElementById('emergency').addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;

                // Show red marker at user's location
                L.marker([latitude, longitude], {
                    icon: L.icon({
                        iconUrl: 'mr.png', // Red emergency icon
                        iconSize: [50, 50]
                    })
                }).addTo(map);

                alert('Authorites have been alerted the are arriving at your location!!');

            }, () => {
                alert('Unable to retrieve your location.');
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    });
});
