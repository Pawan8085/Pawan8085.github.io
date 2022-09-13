let dm=document.getElementById("darkmode");
dm.addEventListener("click", func);
document.body.style.backgroundColor = "white";
let bool=false;
function func(){
    
    if(bool){
        document.body.style.backgroundColor = "white";
        document.getElementById('tskill').style.color="#444444";
        document.getElementById("hi").style.color="#444444";
        document.getElementById("developer").style.color="#444444";
        bool=false;
        
    }
    else{
        document.body.style.backgroundColor = " #23283e";
        document.getElementById("hi").style.color="#cdcdff";
        document.getElementById("developer").style.color="#cdcdff";
        document.getElementById('tskill').style.color="#cdcdff";
        bool=true;
       
    }

}

document.getElementById("resume").addEventListener('click',resume);
function resume() {
    window.location.href="https://drive.google.com/file/d/1q-OXB0o1eUY9oYk5yeAfnyNVXXX2b5OV/view";
}
document.getElementById("git").addEventListener('click',git);
function git() {
    window.location.href="https://github.com/Pawan8085";
}
document.getElementById("linkedin").addEventListener('click',linkedin);
function linkedin() {
    window.location.href="https://linkedin.com/in/pawan-kumar-8589b3232";
}
