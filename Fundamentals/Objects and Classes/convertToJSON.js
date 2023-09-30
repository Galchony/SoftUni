function convertToJSON(firstName, lastName, hair) {
    let obj ={};
    obj.name = firstName;
    obj.lastName = lastName;
    obj.hairColor = hair;
    console.log(JSON.stringify(obj));
}
convertToJSON('George', 'Jones', 'Brown')