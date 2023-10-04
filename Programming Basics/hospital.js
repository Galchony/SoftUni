function hospital(args) {
    let days = parseInt(args[0]);
    let patient = 0;
    let returnedPatient = 0;
    let doctors = 7;

    let sumOfPatient = 0;
    let sumOfREturnedPatient = 0;


    for (let row = 1; row <= days; row++) {
        patient = parseInt(args[row]);

        if (row % 3 === 0 && (sumOfREturnedPatient > sumOfPatient)) {
            doctors += 1;
        }
        if (patient > doctors) {
            returnedPatient = patient - doctors;
            sumOfPatient += doctors;
            sumOfREturnedPatient += returnedPatient;
        }
        else {
            sumOfPatient += patient;
        }


    }
    console.log(`Treated patients: ${sumOfPatient}.`);
    console.log(`Untreated patients: ${sumOfREturnedPatient}.`);

}
hospital(["4", "7", "27", "9", "1"]);
hospital(["3", "7", "7", "7"]);
hospital(["6", "25", "25", "25", "25", "25", "2"]);