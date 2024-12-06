
const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('portifolio')
    if(mode.classList.contains('fa-sun')){
        mode.classList.remove('fa-sun');
        mode.classList.remove('fa-sun');
        mode.classList.add('fa-moon');

        form.classList.add('dark');
        return;
    }

    mode.classList.add('fa-sun');
    mode.classList.remove('fa-moon');
    form.classList.remove('dark');
});

function menuShow() {
    let menu = document.querySelector('.list');
    if(menu.classList.contains('open')){
        menu.classList.remove('open');
        
    }else {
        menu.classList.add('open');
        
    }
}

function toggle(el){
    var display = document.getElementById(el).style.display;
    if(display == "none"){
        document.getElementById(el).style.display ="block";
        
    }else{
        document.getElementById(el).style.display ="none";
    }
}


