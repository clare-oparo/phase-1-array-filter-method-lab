// Code your solution here
findMatching = (driverNames, hyeKyo) => {
    return driverNames.filter((song) => song.toLowerCase() === hyeKyo.toLowerCase());

}

fuzzyMatch = (driverNames, shishi) => {
    return driverNames.filter(
      (firstLetters) =>
        firstLetters.toLowerCase().indexOf(shishi.toLowerCase()) === 0
    );
}
  
matchName = (driver, jolie) => {
    return driver.filter((origin) => origin.name === jolie);
}
