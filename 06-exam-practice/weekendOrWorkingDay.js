function weekendOrWorkingDay(input) {
    let day = input[0];

    switch(day) {
        case "Monday": console.log("Working day"); break;
        case "Tuesday": console.log("Working day"); break;
        case "Wednesday": console.log("Working day"); break;
        case "Thursday": console.log("Working day"); break;
        case "Friday": console.log("Working day"); break;
        case "Saturday": console.log("Weekend"); break;
        case "Sunday": console.log("Weekend"); break;
        default: console.log("Error"); break;
    }

}

weekendOrWorkingDay(["Friday"]);


// switch(day) {
//     case "Monday": 
//     case "Tuesday": 
//     case "Wednesday": 
//     case "Thursday":  
//     case "Friday": console.log("Working day"); break;                  --> Taka koda sushto raboti i e edin vid po optimizirano.
//     case "Saturday": 
//     case "Sunday": console.log("Weekend"); break;
//     default: console.log("Error"); break;
// }
