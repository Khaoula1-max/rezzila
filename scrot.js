const menu = document.getElementById("menu");
const navbar = document.getElementById("navbar");
menu.addEventListener('click', () =>{
    console.log(navbar.style.display);
    if(navbar.style.display !== 'block'){
        navbar.style.display ='block';
     
    }else{
        navbar.style.display ='none';
       
    };
})
