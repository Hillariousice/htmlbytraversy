// Single element
//  console.log( document.getElementById('my-form'))
//  console.log(document.querySelector('.container'))

//multiple elements
// console.log(document.querySelectorAll('.item'))
// console.log(document.getElementsByClassName('item'))
// console.log(document.getElementsByTagName('li'))

// const items = document.querySelectorAll('.item')

const ul = document.querySelector('.items')

// ul.remove();
// ul.lastElementChild.remove()
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML='<h1>Hello</h1>'

// const btn = document.querySelector('.btn');
// btn.style.background = 'purple'


// const btn = document.querySelector('.btn');
// btn.addEventListener('mouseout',(e)=>{
//    e.preventDefault();
//    console.log(e.target.id)
//    document.querySelector('#my-form')
//    .getElementsByClassName.background = '#ccc'
//    document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('body').classList.add('bg-dark')
//     document.querySelector('.items').lastElementChild.innerHtML = '<h2>Hello</h2>'
// })

const myForm = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg= document.querySelector('#msg')
const userList= document.querySelector('#users')

myForm.addEventListener('submit',onSubmit)

function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error')
        msg.innerHTML = 'Please enter all fields'
        setTimeout(()=>msg.remove(),3000)
}else{
   const li = document.createElement('li')
   li.appendChild(document.createTextNode(`${nameInput}: ${emailInput}`))
 userList.appendChild(li)
 nameInput.valu = ''
 emailInput.value =''
}
}
