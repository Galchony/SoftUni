function autoEngineeringCompany(input) {
    let obj = {};
  
    for (const line of input) {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        if (!obj[carBrand]) {
            obj[carBrand]= {[carModel]: Number(producedCars) } ;
        } else {
            if (!obj[carBrand][carModel]) {
                obj[carBrand][carModel] = producedCars;
            } else {
                obj[carBrand][carModel] += Number(producedCars);
            }
        }
    }
    let outout  = ''
    for (const brand in obj) {
        outout+= `${brand}\n${Object.keys(obj[brand]).map(model=>`###${model} -> ${obj[brand][model]}`).join('\n')}`;
       outout+=`\n`
    }
    console.log(outout) ;
}

autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']
)