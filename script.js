const scroll=ScrollReveal({
    reset: true,
    duration:3000,
    distance:'60px',
})
scroll.reveal('.image-transform',{delay:500,origin:'top'})
scroll.reveal('.text-transform',{delay:300, origin:'left'})
function clicker(){
    var menu=document.getElementById('dropmenu');
    var bt=document.getElementById('btn');
   
    if(menu.classList.contains('hidden')){
       
        menu.classList.remove('hidden');
        bt.classList.add('border');
    }
    else{
       
        menu.classList.add('hidden');
        bt.classList.remove('border')
    }
}
