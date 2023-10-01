function flightSchedule(input) {
    let allFlights = input[0];
    let changedFlights = input[1];
    let flightsToCheck = input[2];
    let flightsObj = {};
    for (const flights of allFlights) {
        let [flight, ...destination] = flights.split(" ");
        flightsObj[destination.join(" ")] = flight;
    }
    for (const flights of changedFlights) {
        let [flight, status] = flights.split(" ");
        for (const key in flightsObj) {
            if (flightsObj[key] === flight) {
                flightsObj[key] = status;
            }
        }
    }
    for (let key in flightsObj) {
        if (flightsObj[key] !== 'Cancelled') {
            flightsObj[key] = 'Ready to fly';
        }
    }
    for (const key in flightsObj) {
        if (flightsObj[key] === flightsToCheck[0]) {
            console.log(`{ Destination: '${key}', Status: '${flightsObj[key]}' }`);
        }
    }
}
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],
['Ready to fly']
]
)
console.log(`-----------------`);
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]
)