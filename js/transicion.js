let box=document.getElementById('box3');
let boton=document.getElementById('toggle');

box.addEventListener('click', function() {
    if(box.classList.contains("box3-old")) {
        box.classList.add("box3-new");
        box.classList.remove("box3-old")
    } else {
        box.classList.remove("box3-new");
        box.classList.add("box3-old");
    }
})

/* box4.addEventListener("click",function(){
    if (box4_1.classList.contains("box4off")){
        box4_1.classList.add("box-4-on");
        box4_1.classList.remove("box4off")
        box4.classList.add("box-4-green");
        box4.classList.remove("box-4-grey");
    } else {
        box4_1.classList.remove("box-4-on");
        box4_1.classList.add("box4off")
        box4.classList.remove("box-4-green");
        box4.classList.add("box-4-grey");
    }
}) */

let box5 = document.getElementById('box5');
let box4 = document.getElementById('box4');

box4.addEventListener('click', function(){

    if(box4.classList.contains('boxoff')){
        box4.classList.add('box4on')
        box4.classList.remove('boxoff')
    }else{
        box4.classList.add('boxoff')
        box4.classList.remove('box4on')
    }
    if(box5.classList.contains('boxoff')){
        box5.classList.add('boxon')
        box5.classList.remove('boxoff')
    }else{
        box5.classList.add('boxoff')
        box5.classList.remove('boxon')
}
})