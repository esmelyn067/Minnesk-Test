//Version #1 with for and condicional

function reverseNotSpecial(arr){
    //Here we keep only all special characters and its positions
    const specialChar= []
    const charPosition = []
   
    // Iterating array elements and separating all special 
    for (let i=0; i<arr.length; i++){
        const index = arr[i]

     if (typeof index !=='number' && typeof index !=='string' ){
        specialChar.push(index);
        charPosition.push(i);
     }
    }

    //Reverse the Array and keep all special chars positions
    arr.reverse();
 
    for (let i =0; i<specialChar; i++){
        const special = specialChar[i];
        const position = charPosition[i];
        array.splice(position, 0, special);
    }

  return arr
}


//Version #2 with ES6 and RegEx
const specialChar = /[^a-zA-Z0-9]/ 

const reverseArrayWithSpecialChars = arr => arr.map(
  (element, index, a) => specialChar.test(element) ? element : a[a.length - 1 - index]
  ); 
  
  // a = copy of the entire array 
  // /[^a-zA-Z0-9]/ = not number or string(special)

