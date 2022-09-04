
let Hello_World_button = document.getElementById('hello_world');
Hello_World_button.addEventListener('click' , message)

function message (){
    alert('Hello world');
}


let hello_name  = document.getElementById('hello_name');
hello_name.addEventListener('click' , input)

function input (){
  let name = prompt('name?')
  hello_name.textContent = 'Hello!  ' + name 
} 






