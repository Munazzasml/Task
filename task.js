//Question # 01


// function maxProductArrays(nums) {
//     if (nums.length === 0) return 0;
    
//     let maxProd = nums[0];
//     let minProd = nums[0];
//     let result = nums[0];
    
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] < 0) {
            
//             [maxProd, minProd] = [minProd, maxProd];
//         }
        
//         maxProd = Math.max(nums[i], maxProd * nums[i]);
//         minProd = Math.min(nums[i], minProd * nums[i]);
        
//         result = Math.max(result, maxProd);
//     }
    
//     return result;
// }
// const numbers = [2, 3, -2, 4];
// console.log(maxProductArrays(numbers))


// Question # 02

// function twoSum(nums, target) {
//     const numMap = new Map(); 
    
//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
        
//         if (numMap.has(complement)) {
            
//             return [numMap.get(complement), i];
//         }
        
//         numMap.set(nums[i], i);
//     }
    
//     return [];
// }


// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target)); 



//Question # 03



function reverseWords(input) {
    return input.split(" ").map(word => word.split("").reverse().join("")).join(" ");
}

const inputString = "Hello world";
console.log(reverseWords(inputString));



//Question # 04

// const books = [
//     { 
//         name: "Bill Gates", 
//         author: "The Road Ahead", 
//         Readingstatus: "true" 
//     },
//     { 
//         name: "To Kill a Mockingbird", 
//         author: "Harper Lee", 
//         status: "true" 
//     },
//     {  
//         name: "1984", 
//         author: "George Orwell", 
//         status: "reading" 
//     },
//     { 
//         name: "Pride and Prejudice", 
//         author: "Jane Austen", 
//         status: "finished" 
//     }
// ];

// function displayReadingStatus(books) {
//     console.log("Reading Status:");
//     books.forEach(book => {
//         console.log(`Book Name: ${book.name}, Author: ${book.author}, Status: ${book.status}`);
//     });
// }


// displayReadingStatus(books);



//Question # 05


// function amountToCoins(amount, coins) {
//     const result = [];
    
//     for (const coin of coins) {
//         while (amount >= coin) {
//             amount -= coin;
   
//             result.push(coin);
//         }
//     }
    
//     return result;
// }


// const amount = 46;
// const coins = [25, 10, 5, 2, 1];
// console.log(amountToCoins(amount, coins));




















