'use strict'

let allH2 = document.querySelectorAll('h2')

console.log(allH2.length)

let allUl = document.querySelectorAll('ul')

console.log(allUl.length)

let allLi = document.querySelectorAll('li')

console.log(allLi.length)

console.dir(allLi)

function even(arr){
    let arr1 = []
    for(let i = 1 ; i < arr.length ; i = i + 2){
      arr1[i] = arr[i]
    }
     
    return arr1
}

console.log(even(allLi))

even(allLi).forEach(element => {
    element.style.backgroundColor = 'red'
});




console.log(allLi[0].clientHeight)
console.log(allLi[0].clientWidth)


allH2[ 0 ].style.color = 'red' 
allH2[ 1 ].style.color = 'red' 


allLi.forEach(element => {
    element.style.border = 'none'
});

allLi.forEach(element => {
    element.style.borderRadius = '50% '
    
});