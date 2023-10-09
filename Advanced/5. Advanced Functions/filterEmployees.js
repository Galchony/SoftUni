function filterEmployees(data, criteria) {
    let inputArr = JSON.parse(data);
    let [keyCriteria, valueCriteria] = criteria.split('-');
    let counter = 0;
    if (criteria === 'all') {
        inputArr.forEach(x => {
            console.log(`${counter}. ${x['first_name']} ${x['last_name']} - ${x['email']}`);
            counter++;
        });
    } else {
        let outputArr = inputArr.filter(x => x[keyCriteria] === valueCriteria);
        outputArr.forEach(x => {
            console.log(`${counter}. ${x['first_name']} ${x['last_name']} - ${x['email']}`);
            counter++;
        });
    }

}


filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
    }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
    },
   {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
    }]`,
    'gender-Female'
)