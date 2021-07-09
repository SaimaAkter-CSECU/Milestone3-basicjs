// Problem 1 : Convert kilometer to meter. 
function kilomoterToMeter(convertToMeter) {
    if (convertToMeter <0) {
        var meter = 'Invalid'; 
        console.log('Distance cannot be negative'); 
    }
    else{
        var meter = convertToMeter * 1000; 
    }
    return meter;
}
var kilometer = 150; 
var findMeter = kilomoterToMeter(kilometer); 
console.log(kilometer, 'Kilometer = ', findMeter, 'Meter'); 

// Problem 2 : Calculate total budget. 
function budgetCalculator(watch, phone,laptop){
    if(watch<0 || phone<0 || laptop<0){
        console.log("Invalid Amount of Devices"); 
    }
    else{
        var total_budget = watch* 50 + phone*100 + laptop*500; 
        return total_budget; 
    }
}
var total_watch = 3; 
var total_phone = 3; 
var total_laptop = 3; 
var total = budgetCalculator(total_watch, total_phone, total_laptop);
console.log('Toal Budget: ', total); 


// Problem 3 : Calculate total hotel cost. 
function hotelCost(no_of_days){
    if(no_of_days <1){
        console.log('Invalid Number of Days'); 
    }
    else if(no_of_days<=10){
        var hotel_cost = no_of_days * 100; 
        return hotel_cost; 
    }
    else if(no_of_days>10 && no_of_days<=20){
        var hotel_cost = 10*100 + (no_of_days-10) * 80; 
        return hotel_cost; 
    }
    else if(no_of_days>20){
        var hotel_cost = 10*100 + 10*80 + (no_of_days-20) * 50; 
        return hotel_cost; 
    }
}
var day_stay = 27; 
var total_hotel_cost = hotelCost(day_stay);
console.log('Toal hotel cost: ', total_hotel_cost); 

// Problem 4 : Findout Megafriend. 
var friendsName = ['Saima', 'Muntasha Shagufta Hafza Uchchala', 'Nishana', '', 'Purna', 'Pri', 'Fariba', ' ', 'Sa']; 
var maxName = friendsName[0]; 
function megaFriend(nameArray){
    if(nameArray.length == 0){
        console.log('Invalid Array');
    }
    else{
        for (var i = 0; i < nameArray.length; i++) {
            var element = nameArray[i];
            if (element.length > maxName.length && element.length != 0 && element != ' ') {
                maxName = element;
            } 
        }
        return maxName;
    }
}
var largestName = megaFriend(friendsName);
console.log('Largest Name among friends: ', largestName);
