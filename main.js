
let btn = document.getElementById('increment_btn')


let input = document.getElementById('input')
let btn_2 = document.getElementById('btn_2')
let display = document.getElementById('display')


let todo = []
btn_2.addEventListener('click', () => {
    console.log(input.value)
    todo.push(input.value)
    let nextItem  = document.createElement('p')
    display.appendChild(nextItem)
   nextItem.style.border = "1px solid green"
 display.innerHTML += input.value + '<br />'
input.value = ''
console.log(todo)
display.style.border = "3px solid black"
display.style.maxWidth = "50%"
display.style.marginTop = "2rem"
display.style.padding= "1rem"
})

let arr = [1,3,4,5,6,6,7,78,]
arr.forEach((element) => {
  console.log(element)
})

