let array=[1,1]
const start = parseFloat(prompt('Choose start value of fibonacci sequance interval you want to see'))
const stop = parseFloat(prompt('Choose last value of fibonacci sequance interval you want to see'))
fibonacci(stop,start)

function fibonacci (stop,start) {
if (array[array.length-1]>stop) {
    while (array[0]<=start) {
    array.shift()
}
    array.pop()
    for (let i=0;i<array.length;i++) {
        console.log(array[i])
    }
} else {
array.push(array[array.length-1]+array[array.length-2])
fibonacci(stop,start)
}
}



// let num = parseFloat(prompt('Enter number of fibonacci sequance you want to see '))
// alert(fibonacci(num))
// function fibonacci (num) {
//     if (num<=1) {
//         return num
//     }
//     return fibonacci(num-2)+fibonacci(num-1)
    
// }

// const num = parseFloat(prompt('Enter number of fibonacci sequance you want to see'))
// alert(fibonacci(num))
// function fibonacci(num) {
// let firstVal=1
// let secondVal=1
// for (let i=0;i<num-2;i++) {
//     let temp=firstVal+secondVal
//     secondVal=firstVal
//     firstVal=temp
// }
// return firstVal }

// let num = parseFloat(prompt('Enter number of fibonacci sequance you want to see '))
// alert(fibonacci(num))
// function fibonacci(num) {
//   const sq5 = Math.sqrt(5)
//   const a = (1 + sq5) / 2
//   const b = (1 - sq5) / 2
//   return Math.ceil((Math.pow(a, num) - Math.pow(b, num)) / sq5)
// }
