// Callback function

//Goal: Mess around with callback pattern
//1. Define add function that accepts the corrects arguments.
//2. Use setTimeOut to simulate 2 seconds delay.
//3. After the 2 seconds are up. Call the callback function with the sum.
//4. Test your work


const add = (num1, num2, callback) => {
    setTimeout(() => {
        console.log('Two seconds are up')
        const sum = num1 + num2
        callback(sum)
        
    }, 2000)
    
}

//sumArg is the argument that represents the callback
add(1, 4, (sumArg) => {
    console.log(sumArg)
})