
let mainPage = document.getElementById('main_page')
let input = document.getElementById('input')
let btn_2 = document.getElementById('btn_2')
let display = document.getElementById('display')
let deleteButton = document.getElementById('display')

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
    '<span style="margin:3px; border: 2px solid red; cursor: pointer; padding: 0.2rem; padding-buttom:-1rem; border-radius: 0.6rem; align-self: center; "><img src="/images/download (2).png" alt="" width="22px" " ></span>'
  )
  
  contentwrap.style.margin = "12px 10px"
  contentwrap.style.paddingLeft = "6rem"
  contentwrap.style.textDecoration = 'underline'
   contentwrap.style.fontFamily = 'sans-serif' 
  contentwrap.style.fontWeight = '700' 
  contentwrap.style.fontSize = '1.1rem'
  contentwrap.style.border = '0.1rem solid black'
  contentwrap.style.maxWidth = '150%'
  contentwrap.style.height = '52px'
  contentwrap.style.borderRadius = '0.7rem'
  contentwrap.style.padding = '1px 0.3rem'
  contentwrap.style.display= 'flex'
  contentwrap.style.flexWrap = 'wrap'
  contentwrap.style.wordBreak= 'break-word'
  contentwrap.style.justifyContent = 'space-between'
  contentwrap.style.alignItems = 'center'
  contentwrap.style.backgroundColor = 'white'
  input.value = ''

    display.appendChild(contentwrap)
/* nextItem.style.border = "1px solid brown" */
 display.innerHTML += input.value + '<br />'

input.value = ''
console.log(todo)

 deleteButton.classList.add('deleteButton')

 
});

deleteButton.addEventListener('click',function(takeItAway){
  let target = takeItAway.target;

  target.parentElement.remove();
})

let arr = []
arr.forEach((element) => {
  console.log(element)
});

