//  Question # 1



// function maxProduct(nums) {
//     const n = nums.length;
//     let maxProduct = Number.MIN_SAFE_INTEGER;

//     for (let i = 0; i < n; i++) {
//         let currentProduct = 1;
//         for (let j = i; j < n; j++) {
//             currentProduct *= nums[j];
//             maxProduct = Math.max(maxProduct, currentProduct);
//         }
//     }

//     return maxProduct;
// }

// const nums = [2, 3, -2, 4];
// console.log(maxProduct(nums));


// Question # 2

// function twoSum(nums, target) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return null; 
// }


// const nums = [2, 7, 11, 15];
// const target = 9;
// console.log(twoSum(nums, target));



// Question # 3


// function reverse(input) {
//     return input.split(" ").map(word => word.split("").reverse().join("")).join(" ");
// }

// const inputString = "ASSALAM WALAIKUM";
// console.log(reverse(inputString));



// Question # 4

// const library = [ 
//     {
//         title: 'Bill Gates',
//         author: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         title: 'Steve Jobs',
//         author: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         title: 'Mockingjay: The Final Book of The Hunger Games',
//         author: 'Suzanne Collins',
//         readingStatus: false
//     }];

// for (var i = 0; i < library.length; i++) 
//    {
//     const book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
//     if (library[i].readingStatus) {
//       console.log("Already read " + book);
//     } else
//     {
//      console.log("Need to read " + book);
//     }
//    }




// Question # 5

// function amountTocoins(amount, coins) {

//     if (amount === 0) {
//       return [];
//     } else {

//       if (amount >= coins[0]) {

//         left = (amount - coins[0]);
        
       
//         return [coins[0]].concat(amountTocoins(left, coins));
//       } else {
        
//         coins.shift();
//         return amountTocoins(amount, coins);
//       }
//     }
//   }
  
//   console.log(amountTocoins(46, [25, 10, 5, 2, 1]));