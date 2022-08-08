

const TEST={
    count:0,
    openMenu:function(){

    }
}

let password = '1234';
window.addEventListener('DOMContentLoaded',()=>{
    TEST.openMenu();

    let count=0;
    let menu = document.querySelector(".menu");
    let contentcontainer = document.querySelector(".content_container");

    window.openMenu=function(){
        console.log("Clicked");
        if(count % 2 === 0){
            menu.style.display="block";
        }
        else{
            menu.style.display="none";
        }
        count++;
    }
})


