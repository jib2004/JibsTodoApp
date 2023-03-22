const backgroundDisplay = document.querySelector('.background-display')
const iconDisplay = document.getElementById('icon-display')
const textBox = document.getElementById('text-box')
const checkBox = document.querySelectorAll('checkbox')
const checkDiv = document.querySelectorAll('.check-div')
const addButton = document.getElementById('add-button')
const checkTopBox = document.getElementById('checkbox-top')
const checkTopDiv = document.getElementById('check-div-top')
const ulAdd = document.getElementById('todo-reminder').firstElementChild;
const RemoveLi = document.querySelectorAll('.close-img')

// let todo = JSON.parse(localStorage.getItem('todo')) || []


//console.log(ulAdd)

backgroundDisplay.addEventListener('click', ()=>{
    change()
})

const  change= () =>{
    let myImage = iconDisplay.getAttribute('src');
    let li;
   if(myImage === 'images/icon-sun.svg'){
    console.log('welcome')
    iconDisplay.setAttribute("src", 'images/icon-moon.svg')
    document.querySelector('header').style.backgroundImage =  'url(images/bg-desktop-light.jpg)'
    document.querySelector('body').style.backgroundColor =  ' hsl(233, 11%, 84%)'// 
    textBox.style.backgroundColor = 'hsl(0, 0%, 98%)' 
    textBox.style.borderTopRightRadius = '5px'
    textBox.style.borderBottomRightRadius = '5px'
    checkTopDiv.style.backgroundColor = 'hsl(0, 0%, 98%)' 
    //document.getElementById('adtoit').style.backgroundColor = 'hsl(0, 0%, 98%)'; 
   // checkBox.style.border = 'hsl(236, 33%, 92%)'
  // checkDiv.forEach(c=> c.style.backgroundColor = 'hsl(0, 0%, 98%)')
    checkDiv.forEach(li=>{
        li.style.backgroundColor =  'hsl(0, 0%, 98%)'
        li.style.color = 'black'
    })
    document.getElementById('nav-actions').style.backgroundColor = 'hsl(0, 0%, 98%)'
    document.getElementById('nav-actions').style.color = 'black'

   // impotantDetails(li)
    
    }else{
        iconDisplay.setAttribute('src', 'images/icon-sun.svg')
    document.querySelector('header').style.backgroundImage =  'url(images/bg-desktop-dark.jpg)'
    document.querySelector('body').style.backgroundColor =  'hsl(235, 19%, 35%)'
    textBox.style.backgroundColor = 'hsl(235, 19%, 35%)'
    textBox.style.borderTopRightRadius = '5px'
    textBox.style.borderBottomRightRadius = '5px' 
    checkTopDiv.style.backgroundColor = 'hsl(235, 19%, 35%)' 
    checkDiv.forEach(li=>{
        li.style.backgroundColor = 'hsl(235, 19%, 35%)'
        li.style.color = 'hsl(236, 33%, 92%)'
    })
    document.getElementById('adtoit').style.backgroundColor = 'hsl(235, 19%, 35%)' ; 
    document.getElementById('nav-actions').style.backgroundColor = 'hsl(235, 19%, 35%)'
    document.getElementById('nav-actions').style.color = 'hsl(236, 33%, 92%)'
   
   // impotantDetails(li,check,arr)
}

} 

checkTopDiv.onclick = () =>{
    const checkboxImage = document.getElementById('checkbox-image-top')
    let Image =   checkboxImage.getAttribute('src')
    if (Image === ""){
    
     checkboxImage.setAttribute('src', 'images/icon-check.svg')
     checkTopBox.style.padding = '5px';
    //  checkTopBox.style.background = '';

 }  else{
     checkboxImage.setAttribute('src', '')
     checkTopBox.style.background = 'none';
    
} 
}


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

    if(check.type === 'text'){
        check.type = 'checkbox'
        
    }
    arr = Array.from(ulAdd.children)
    if(arr.length === 20){
        alert('First complete the following quests')
        return false;
    }
}

document.querySelector('form').onsubmit = (e) =>{
    e.preventDefault();


    
    let liToRemove = document.querySelector('.liT')
    liToRemove.style.display = 'none';  
   

 
    ulAdd.classList.remove('check-div')
   let task = textBox.value;
    if(!task){
        alert('Input a task')
        return false;
    }else{
        console.log('Success')
    }


    const li = document.createElement('li')

    li.classList.add('check-div')
    ulAdd.appendChild(li)
    let  check = document.createElement('input')
    li.appendChild(check).classList.add('can')
    let p = document.createElement('p')
    p.innerText = task
    li.appendChild(p).classList.add('p_remind')
     let img = document.createElement('img')
     img.classList.add("close-img")
     li.appendChild(img).src = 'images/icon-cross.svg'
     img.style.display = 'block'
    
    
    let arr = Array.from(ulAdd.children)
   arr.shift()//It removes the first element of an array// Do not remove this from your code it will affect the items
    let all = document.getElementById('all-number')
    
   all.innerText = Number(arr.length) ;
     
    console.log(ulAdd)

    img.addEventListener('click',(e)=>{
       e.preventDefault();
        ulAdd.removeChild(li);
        
        
        console.log( arr.indexOf(li))
        
        if( arr.indexOf(li) > -1){
            arr.splice(arr.indexOf(li), 1)
            console.log(arr)
        //    all.innerText = Number(arr.length)
        }
       


   })   

    textBox.value = ""


    impotantDetails(li,check,arr)
   
   // return false;
}

