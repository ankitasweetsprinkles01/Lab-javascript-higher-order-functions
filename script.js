//Function 1
const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll']

let modifiedFood = []
modifiedFood = foods.slice(1,4)
console.log(modifiedFood)

 //Function 2
 modifiedFood = foods.slice()
 modifiedFood.splice(2,0,'noodles','ice cream')
 console.log(modifiedFood)

 //Function 3
const numberArray = [12,324,213,4,2,3,45,4234]
let isEven = numberArray.filter(ele => ele%2 == 0 )
console.log(isEven)

let isPrime = numberArray.filter(ele =>{
     for (let index = 2; index <ele; index++) {
           if(ele%index == 0){
                return false
           }
     }
     return ele !== 1
})
console.log(isPrime)
//Function 4

let nonPrime = numberArray.filter(ele => !(isPrime.includes(ele)) )
console.log(nonPrime)

//Function 5

//Function 6
const myArray = [14, 26, 40, 5, 3, 2];
let findSquareOfNumbers = myArray.map(ele => ele**2) 
console.log(findSquareOfNumbers)
//Function 7
const multiply = myArray.reduce((mul,ele) => mul*ele,1)
console.log(multiply)



