function findMatching(driversNameArray, nameSearchedString){
    return driversNameArray.filter(driverName => driverName.toLowerCase() == nameSearchedString.toLowerCase() );
}

findMatching(drivers,'Bobby')