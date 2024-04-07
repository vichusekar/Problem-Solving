// Problem Solving Session - 1

// 2. Write a function to find the largest element in an array

let data = [1, 7, 9, 0, 56, 88, 0, 33, 45, 21]

let maxNumber = Math.max(...data)

console.log(maxNumber)

// 3. Write a function to find the second largest element in an array

let arr = [10, 7, 9, 0, 46, 80, 0, 39, 5, 11]

function secondLargestNumber(res){
    let array = res.sort((a, b) => {
        return b-a
    })
    let secondElement = [...new Set(array)]
    return secondElement[1]
}

console.log(secondLargestNumber(arr))

// 4.Write a function to find the nth Fibonacci number using iteration

function fibonacci(n) {
    let a = 0;
    let b = 1;
  
    if (n === 0) {
      return a;
    }
  
    for (let i = 2; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
  
    return b;
  }
  
  console.log(fibonacci(8));
  
// 5.Write a function to calculate the factorial of a number using iteration

function factorial(num){
    if(num < 0){
        return -1
    }
    else if(num == 0){
        return 1
    }
    else{
        return (num * factorial(num - 1))
    }
}
console.log(factorial(5))