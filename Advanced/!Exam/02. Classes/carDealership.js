class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }
    addCar(model, horsepower, price, mileage) {
        if (model === '' || horsepower  < 0 || !Number.isInteger(horsepower) || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }
        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
    }

    sellCar(model, desiredMileage) {
        let carToCell = this.availableCars.find(x => x.model === model);
        if (carToCell === undefined) {
            throw new Error(`${model} was not found!`)
        }
        let soldPrice = 0;
        let difference = Number((carToCell.mileage - desiredMileage).toFixed(3));
        if (carToCell.mileage <= desiredMileage) {
            soldPrice = carToCell.price;
        } else if (difference <= 40000) {
            soldPrice = carToCell.price * 0.95;
        } else {
            soldPrice = carToCell.price * 0.90;
        }

        this.availableCars = this.availableCars.filter(x => x !== carToCell);
        this.soldCars.push({ model, horsepower: carToCell.horsepower, soldPrice });
        this.totalIncome += soldPrice;
        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return `There are no available cars`;
        }
        let output = `-Available cars:\n${this.availableCars.map(x => `---${x.model} - ${x.horsepower} HP - ${x.mileage.toFixed(2)} km - ${x.price.toFixed(2)}$`).join('\n')}`;
        return output;
    }

    salesReport(criteria) {
        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }
        let soldCarsCount = this.soldCars.length;
        let sorted = criteria === "horsepower" ? this.soldCars.sort((a, b) => b.horsepower - a.horsepower) : this.soldCars.sort((a, b) => (a.model).localeCompare(b.model));
        let output = [`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`];
        output.push(`-${soldCarsCount} cars sold:`)
        if (soldCarsCount !== 0) {
            output.push(`${sorted.map(x => `---${x.model} - ${x.horsepower} HP - ${x.soldPrice.toFixed(2)}$`).join('\n')}`);
        }
        return output.join('\n');
    }
}


// let dealership = new CarDealership('SoftAuto');
// console.log(dealership.addCar('Toyota Corolla', 100, 3500, 190000));
// console.log(dealership.addCar('Mercedes C63', 300, 29000, 187000));
// console.log(dealership.addCar('', 120, 4900, 240000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.sellCar('Toyota Corolla', 230000));
// console.log(dealership.sellCar('Mercedes C63', 110000));

// let dealership = new CarDealership('SoftAuto');
// dealership.addCar('Toyota Corolla', 100, 3500, 190000);
// dealership.addCar('Mercedes C63', 300, 29000, 187000);
// dealership.addCar('Audi A3', 120, 4900, 240000);
// console.log(dealership.currentCar());

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 10000, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000.0003, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));
console.log(dealership.currentCar());

