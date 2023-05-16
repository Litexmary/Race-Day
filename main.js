let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 30;
if(registeredEarly && runnersAge > 18){
raceNumber += 1000;
}
if(runnersAge > 18 && registeredEarly ){
  console.log(`Race number ${raceNumber} will run the race at 9:30am.`); 
} else if(runnersAge > 18 && !registeredEarly){
  console.log(`raceNumber ${raceNumber} will run the race at 11:00am.`);
} else if (runnersAge < 18){
  console.log(`Race number ${raceNumber} will run the race at 12:30pm.`);
} else {
console.log(`Race number ${raceNumber} should see the registration desk!`);
}

