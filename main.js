const backgroundDisplay = document.querySelector('.background-display')
const iconDisplay = document.getElementById('icon-display')
const textBox = document.getElementById('text-box')
const checkBox = document.querySelectorAll('checkbox')
const checkDiv = document.querySelectorAll('.check-div')
const addButton = document.getElementById('add-button')
const checkTopBox = document.getElementById('checkbox-top')
const checkTopDiv = document.getElementById('check-div-top')
const ulAdd = document.getElementById('todo-reminder').firstElementChild;

//console.log(ulAdd)
backgroundDisplay.addEventListener('click', ()=>{
    change()
})

const  change= () =>{
    let myImage = iconDisplay.getAttribute('src')
   if(myImage === 'images/icon-sun.svg'){
    console.log('welcome')
        iconDisplay.setAttribute("src", 'images/icon-moon.svg')
    document.querySelector('header').style.backgroundImage =  'url(images/bg-desktop-light.jpg)'
    document.querySelector('body').style.backgroundColor =  ' hsl(233, 11%, 84%)'// 
    textBox.style.backgroundColor = 'hsl(0, 0%, 98%)' 
    document.querySelectorAll('.check-div').style.backgroundColor = 'hsl(0, 0%, 98%)' 
   // checkBox.style.border = 'hsl(236, 33%, 92%)'
    }else{
        iconDisplay.setAttribute('src', 'images/icon-sun.svg')
    document.querySelector('header').style.backgroundImage =  'url(images/bg-desktop-dark.jpg)'
    document.querySelector('body').style.backgroundColor =  'hsl(235, 19%, 35%)'
    textBox.style.backgroundColor = 'hsl(235, 19%, 35%)' 
    document.querySelector('.check-div').style.backgroundColor = 'hsl(235, 19%, 35%)' 
    //checkBox.style.border = '1px solid hsl(235, 19%, 35%)'
    }

} 

checkTopDiv.onclick = () =>{
    const checkboxImage = document.getElementById('checkbox-image-top')
    let Image =   checkboxImage.getAttribute('src')
    if (Image === ""){
        console.log('cacs')
     checkboxImage.setAttribute('src', 'images/icon-check.svg')
     checkTopBox.style.padding = '5px';
    //  checkTopBox.style.background = '';

 }  else{
     checkboxImage.setAttribute('src', '')
     checkTopBox.style.background = 'none';
    
} 
}

//Code to be able to click on the div

// checkDiv.forEach(check => {
//     check.addEventListener('click', ()=>{
//        const checkboxImage = document.querySelectorAll('.checkbox-image')

//        checkboxImage.forEach(Image =>{
//          let callImage =   Image.getAttribute('src')
//      if (callImage === ""){
//         console.log('cacs')
//      Image.setAttribute('src', 'images/icon-check.svg')
//      checkBox.forEach(adjust =>{
//         adjust.setAttribute('padding', '5px');
//      })
//  }  else{
//      Image.setAttribute('src', '')

// } 
//        })
     
//     })
// })

//Disables the button
document.querySelector("#add").disabled = true;
//Disables the button until you click
textBox.onkeyup = () =>{
    if(textBox.value.length > 0 ){
        document.querySelector("#add").disabled = false;

    }else{
        document.querySelector("#add").disabled = true;

    }

}

const impotantDetails = (li,check,arr) =>{
    li = document.querySelectorAll('li')
    
    if(check.type === 'text'){
        check.type = 'checkbox'
        
    }
    arr = Array.from(ulAdd.children)
    if(arr.length === 20){
        alert('First complete the following quests')
        return
      
    }
}

document.querySelector('form').onsubmit = () =>{
    let liToRemove = document.querySelector('.check-div')
    liToRemove.style.display = 'none';  

    const input = document.querySelectorAll('input')

    //ulAdd.classList.remove('check-div')
    let task = textBox.value;
    const li = document.createElement('li')
    ulAdd.append(li)
    let  check = document.createElement('input')
    li.appendChild(check)
    let p = document.createElement('p')
    p.innerText = task
    li.appendChild(p)
    let arr = Array.from(ulAdd.children)
    let all = document.getElementById('all-number')
//    console.log(arr)
    all.innerText = Number(arr.length) - 1
    input.forEach(i=>{
        i.classList.add('can')
    })

    textBox.value = ""


    impotantDetails(li,check,arr)
   
    return false;
}



 const tick = () =>{
    let check =document.querySelectorAll('.can')
    check.forEach(t=>{
        if(t.checked === true){
            console.log('clicked')
        }
    })
     impotantDetails(li,check,arr)
 }

 tick();
