var page2=document.getElementById('click') ;
var page3=document.getElementById('click') ;
var prod9=document.getElementById('prod9');

let navbar =document.getElementById('navbar')
window.addEventListener("scroll",function(){
    if(window.scrollY > 50){
       navbar.classList.add('new-bg-color')
       navbar.style.transition='1s'
    }
    else{
        navbar.classList.remove('new-bg-color')
        navbar.style.transition='1s'

    }
    
})
page2.onclick=function(event){
event.preventDefault()
    var products={
    prod9:prod9.value,
    }
}