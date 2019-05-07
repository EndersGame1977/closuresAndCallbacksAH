const {inventory} = require("./cars");

const filterBy = car => {
    if (car.car_year > 2000){
        return true;
    }
    return false;
} 

const filter = (arrayBeingPassedIn) => {
    const filteredArray = [];
    arrayBeingPassedIn.forEach(element => {
        let keep = filterBy(element);
        if (keep){
            filteredArray.push(element);
        }
    });

    return filteredArray;
}

const filteredArray = filter(inventory);

filteredArray.forEach(car => {
    console.log(car);
})

