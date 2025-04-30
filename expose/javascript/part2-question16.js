function propertyStartsWithRorValueOdd(obj) {
    for (let property in obj) {
        if (property.startsWith('r') || obj[property] % 2 !== 0) {
            console.log(property);
        }
    }
}
let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
};

propertyStartsWithRorValueOdd(statistics);