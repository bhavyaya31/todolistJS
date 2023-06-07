let addtodobutton = document.getElementById("addtodo");
let todocontainer=document.getElementById("todocontainer");
let inputfield = document.getElementById("inputfield");

addtodobutton.addEventListener('click',function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputfield.value;
    inputfield.value=" ";
    todocontainer.appendChild(paragraph);
  
  
    paragraph.addEventListener('click',function(){
    paragraph.style.textDecoration = "line-through";
   })

   paragraph.addEventListener('dblclick',function(){
    todocontainer.removeChild(paragraph);
   })
})