const getSleepHours = day =>{
    switch (day){
      case 'Monday' : return 8;
      break;
      case 'Tuesday' : return 5;
      break;
      case 'Wednesday' : return 6;
      break;
      case 'Thursday' : return 7;
      break;
      case 'Friday' : return 5;
      break;
      case 'Saturday' : return 5;
      break;
      default : return 6;
      break;
    }
  }
  
  const getActualSleepHours = () =>
  getSleepHours('Monday')+getSleepHours('Tuesday')+getSleepHours('Wednesday')+getSleepHours('Thursday')+getSleepHours('Friday')+getSleepHours('Saturday')+getSleepHours('Sunday');
  
   const getIdealSleepHours = idealHours =>{
     return idealHours * 7;
   }
  
   const calculateSleepDebt = () =>{
     const actualSleepHours = getActualSleepHours();
     const idealSleepHours = getIdealSleepHours(5);
     if (actualSleepHours===idealSleepHours){
       return 'User got the perfect amount of Sleep.';
     }else if(actualSleepHours > idealSleepHours){
       return `User got ${actualSleepHours - idealSleepHours} hours more sleep than needed.`;
     }else{
       return `User should get ${idealSleepHours - actualSleepHours} hours of rest`;
     }
   }
  
  console.log(calculateSleepDebt());