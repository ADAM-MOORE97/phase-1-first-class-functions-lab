const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = () => {

    return drivers.slice(0, 2)
}

const returnLastTwoDrivers = () => {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(para) {
    let fareMultiplier = () => {
        return para * para
    };
    return fareMultiplier;

};

const fareDoubler = (para) => {
    return para*2}

const fareTripler = (para) => {
    return para*3
}
 
selectDifferentDrivers = (drivers, returnLastTwoDrivers) => {
        return returnLastTwoDrivers();
}
