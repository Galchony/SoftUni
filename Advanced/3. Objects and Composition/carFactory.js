function carFactory(car) {
    let newCar = { model: car.model }
    if (car.power <= 90) {
        newCar.engine = { power: 90, volume: 1800 };
    } else if (car.power <= 120) {
        newCar.engine = { power: 120, volume: 2400 };
    } else if (car.power <= 200) {
        newCar.engine = { power: 200, volume: 3500 };
    }

    if (car.carriage === 'hatchback') {
        newCar.carriage = { type: 'hatchback', color: car.color };
    } else if (car.carriage === 'coupe') {
        newCar.carriage = { type: 'coupe', color: car.color };
    }

    if (car.wheelsize % 2 !== 0) {
        newCar.wheels = new Array(4);
        newCar.wheels.fill(car.wheelsize);

    } else {
        newCar.wheels = new Array(4);
        newCar.wheels.fill(car.wheelsize-1);
    }


    return newCar;
}

carFactory({
    model: 'Ferrari',
    power: 200,
    color: 'red',
    carriage: 'coupe',
    wheelsize: 21
}
)