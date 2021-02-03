const loggerOps = require('../services/logger');

module.exports = objectOperations = {
    filterbjects: (objectArray, searchValue) => {
        return objectArray.jewels.filter(object => object.category === searchValue || object.desciption.includes(searchValue));
    },
    getSingleObject: (objectArray, id) => {
        return objectArray.jewels.find(object => object.id === id);
    },
    deleteObjects: (objectArray, id) => {
        objectArray.jewels.splice(objectArray.jewels.indexOf(objectArray.jewels.find(object => object.id === id)), 1);
        loggerOps.log(`Jewel with id ${id} was deleted`)
        return objectArray;
    },
    addObject: (objectArray, object) => {
        objectArray.jewels.push(object);
        loggerOps.log(`Jewel with id ${object.id} was created`);
        return objectArray;
    },
    updateObject: (objectArray, object) => {
        objectArray.jewels[objectArray.jewels.indexOf(objectArray.jewels.find(objectInArray => objectInArray.id === object.id))] = object;
        loggerOps.log(`Jewel with id ${object.id} was updated`);
        return objectArray;
    }
}
