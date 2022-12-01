
let btn = document.getElementById('increment_btn')


let input = document.getElementById('input')
let btn_2 = document.getElementById('btn_2')
let display = document.getElementById('display')


let todo = []
btn_2.addEventListener('click', () => {
    console.log(input.value)
    todo.push(input.value)
      let span1 = document.createElement('span')
      let span2 = document.createElement('span')
    let contentwrap  = document.createElement('div')
    
  contentwrap.insertAdjacentHTML(
    `afterbegin`,
    `<span > ${input.value}</span>`
  )
  contentwrap.insertAdjacentHTML(
    'beforeend',
    '<span style="margin:10px; border: 2px solid red; cursor: pointer; padding: 0.5rem; padding-buttom:-1rem; border-radius: 0.6rem; align-self: center; "><img src="/images/download (2).png" alt=""  width="22px"></span>'
  )
  contentwrap.style.margin = "18px 10px"
  contentwrap.style.paddingLeft = "6rem"
  contentwrap.style.textDecoration = 'underline'
   contentwrap.style.fontFamily = 'sans-serif'
  contentwrap.style.fontWeight = '600'
  contentwrap.style.fontSize = '1.1rem'
  contentwrap.style.border = '0.1rem solid black'
  contentwrap.style.maxWidth = '150%'
  contentwrap.style.borderRadius = '0.7rem'
  contentwrap.style.padding = '0.3rem 1rem'
  contentwrap.style.display= 'flex'
  contentwrap.style.flexWrap = 'wrap'
  contentwrap.style.wordBreak= 'break-word'
  contentwrap.style.justifyContent = 'space-between'
  contentwrap.style.alignItems = 'center'
  input.value = ''

      

    display.appendChild(contentwrap)
   nextItem.style.border = "1px solid black"
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

