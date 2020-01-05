const validatePropertyType = function(data){
    let validData = false;
    try {
        let type = getPropertyTypeFormValue(data);
        if(type){
            validData = true
        }
    } catch (err) {
        console.error(err);
    }
    return validData;
}

const dataCheck = function(data){
    if(!data){
        throw new Error('Empty data found');
    }
    return true;
}

const validateBathroom = function(data){
    let validData = false;
    try {
        validData = dataCheck(data);
        
    } catch (err) {
        console.error(err+' Batroom');
    }
    return validData ;
}

const validYearBuild = function(data){
    let validData = false;
    try {
        validData = dataCheck(data);
        
    } catch (err) {
        console.error(err +' YearBuild');
    }
    return validData;
}

const validAgeOfRoof = function(data){
    let validData = false;
    try {
        validData = dataCheck(data);
    } catch (err) {
        console.error(err);
    }
    return validData;
}

const validGarageData = function(data){
    let validData = false;
    try {
        if(validateGarageAndReturnFormValue(data)){
            validData = true;
        }
    } catch (err) {
        console.error(err);
    }
    return validData;
}

const validSqFoot = function(data){
    let validData = false;
    try {
        if(getSqFootValue(data)){
            validData = true;
        }
    } catch (err) {
        console.error(err);
    }
    return validData;
}

const validStories = function(data){
    let validData = false;
    try {
        if(getStoriesFormValue(data)){
            validData = true;
        }
    } catch (err) {
        console.error(err);
    }
    return validData;
}

const validOwnedOrRented = function(data){
    let validData = false;
    try {
        if(getOwnedOrRentedValue(data)){
            validData = true;
        }
    } catch (err) {
        console.error(err);
    }
    return validData;
}

const validBedRooms = function(data){
    let validData = false;
    try {
        validData = dataCheck(data);
    } catch (err) {
        console.error(err);
    }
    return validData;
}

const validCoverageTermValue = function(data){
    let validData = false;
    try {
        validData = dataCheck(getcoverageTermValue(data));
    } catch (err) {
        console.error(err);
    }
    return validData;
}

const validCoverageAmt = function(data){
    let validData = false;
    try {
        validData = dataCheck(getcoverageAmtOnTermValue(data));
    } catch (err) {
        console.error(err);
    }
    return validData;
}

const validaDeductible = function(data){
    let validData = false;
    try {
        validData = dataCheck(getDeductibleOnTermValue(data));
    } catch (err) {
        console.error(err);
    }
    return validData;
}

const validLiability = function(data){
    let validData = false;
    try {
        validData = dataCheck(getLiabilityOnTermValue(data));
    } catch (err) {
        console.error(err);
    }
    return validData;
}