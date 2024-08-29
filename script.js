let students = ["Farxod", "Azim", "Davlat", "Jasur", "Daler", "doni",];
let longestName = "";

students.forEach((name) => {
    if (name.length > longestName.length) {
        longestName = name;
    }
});

console.log(longestName); 




 let numbers = [1,16,4,31,11,8,28,2,3,6,4,7,5]
let length =  numbers.sort((a,b) => a-b)
let max = Math.max(...length)
 console.log(
     numbers,
   max
 );
 
