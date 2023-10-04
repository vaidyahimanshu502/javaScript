/**                               // Switches //
 *  Expression------
 *        switch(expression) {
 * 
 *              case a:
 *                 break;
 *              case b:
 *                 break;
 *              default:
 * 
 *         }
 */

const fruits = ["Apple", "Banana", "Grapes", "Guava", "Papaya"];

for(let fruit of fruits) {
    switch(fruit) {
        case 'Apple': 
           console.log('Hey, you have selected Apple!');
           break;
        case 'Banana': 
           console.log('Hey, you have selected Banana!');
           break;
        case 'Grapes': 
           console.log('Hey, you have selected Grapes!');
           break;
        case 'Guava': 
           console.log('Hey, you have selected Guava!');
           break;
        case 'Papaya': 
           console.log('Hey, you have selected Papaya!');
           break;
        default:
            console.log("None of the fruits Selected");
    }
}

// for booleans
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];

    switch(true) {
        case "Sunday":
            console.log("Hey, you have selected a holiday!");
           
        case "Monday":
            console.log("It's Mahadeva's day!");
           
        case "Tuesday":
            console.log("It's Hanumana's day!");
           
        default:
            console.log("Working days!");
           
    }


