document.querySelector('.cross1').style.display='none';
document.querySelector('.hamburger').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('.sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('.sidebarGo')){
        document.querySelector('.ham1').style.display='inline';
        document.querySelector('.cross1').style.display='none';
}
else{
    document.querySelector('.cross1').style.display='inline';
        document.querySelector('.ham1').style.display='none';

}
})