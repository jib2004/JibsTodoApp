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
   // check = document.querySelector(".can") 
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
    li.appendChild(check).classList.add('can')
    // check.addEventListener('click', ()=>{
    //     if(check.checked == false){
    //         check.checked = true
    //         console.log('Check')
    //      }//else{
    //     //      check.checked = false
    //     //  }
    // })
  

    let p = document.createElement('p')
    p.innerText = task
    li.appendChild(p).classList.add('p_remind')
     let img = document.createElement('img')
     img.classList.add("close-img")
     li.appendChild(img).src = 'images/icon-cross.svg'
     img.style.display = 'block'
    
     
    let arr = Array.from(ulAdd.children)
    arr.shift()
    let all = document.getElementById('all-number')
    //console.log(arr)
    //  arr.length++
    all.innerText = Number(arr.length) 
    img.addEventListener('click',(e)=>{
        let n = arr.length.
        li.style.display = 'none'    
        li.remove()
           if(arr.length > 0){
             
             console.log(arr)
            
            if(all.innerText == 0){
                return liToRemove.style.display = 'flex'
            }
           }
          
            
         //}
        // all.innerText = Number(arr.length) - 1
         //let clickedElement = e.target;
         
        // if (clickedElement.classList.contains("can")) {
        //     arr = arr.filter(x => x !== Number(clickedElement.innerText));
        //     clickedElement.remove();
        // }




   })   

    textBox.value = ""


    impotantDetails(li,check,arr)
   
    return false;
}

let check =document.querySelectorAll('.can')
check.forEach(i =>{
    i.addEventListener('click',()=>{
        console.log('Clicked')
    })
})

//  const tick = () =>{
//     let check =document.querySelectorAll('.can')
//     check.forEach(t=>{
//         if(t.checked === true){
//             console.log('clicked')
//         }
//     })
//      impotantDetails(check)
//  }

//  tick();

// RemoveLi.forEach(t=>{
//     t.addEventListener('click' ,()=>{
//         console.log('Clicked')
//     })
// })