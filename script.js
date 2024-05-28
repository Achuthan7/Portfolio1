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