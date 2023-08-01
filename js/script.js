let profile = document.getElementById("profile");
profile.onclick = function(){
    if(this.nextElementSibling.classList.contains("menu")){
        this.nextElementSibling.classList.toggle("active");
    }
}
document.addEventListener("click",function(e){
    console.log();
    if(!e.target.parentElement.classList.contains("profile") && !e.target.parentElement.classList.contains("menu")){
        profile.nextElementSibling.classList.remove("active");
    }
})