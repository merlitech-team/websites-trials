const menu=document.getElementById('dropmenu');
const heading=document.getElementById('headss');
function show(){
    menu.classList.toggle('show');
}
window.addEventListener("scroll", ()=>{
    if(window.screenY >5)
        heading.classList.add('heading');
    else
        heading.classList.remove('heading');
});