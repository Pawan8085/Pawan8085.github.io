let dm=document.getElementById("darkmode");
dm.addEventListener("click", func);
document.body.style.backgroundColor = "white";
let bool=false;
function func(){
    
    if(bool){
        document.body.style.backgroundColor = "white";
        document.getElementById('tskill').style.color="#444444";
        document.getElementById('ttool').style.color="#444444";
        document.getElementById('prjtitle').style.color="#444444";
        document.getElementById("hi").style.color="#444444";
        document.getElementById("developer").style.color="#444444";
        bool=false;
        
    }
    else{
        document.body.style.backgroundColor = " #23283e";
        document.getElementById("hi").style.color="#cdcdff";
        document.getElementById("developer").style.color="#cdcdff";
        document.getElementById('tskill').style.color="#cdcdff";
        document.getElementById('ttool').style.color="#cdcdff";
        document.getElementById('prjtitle').style.color="#cdcdff";
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
document.getElementById('d1').addEventListener('click', d1);
function d1(){
    window.location.href='https://marvelous-fairy-b620d4.netlify.app/';
}

document.getElementById('d2').addEventListener('click', d2);
function d2(){
    window.location.href='https://inquisitive-kashata-a201b3.netlify.app/index.html';
}

document.getElementById('s1').addEventListener('click', s1);
function s1(){
    window.location.href='https://github.com/sumitraghavwork/bashful-form-6526';
}

document.getElementById('s2').addEventListener('click', s2);
function s2(){
    window.location.href='https://github.com/Pawan8085/Pawan-Kumar/tree/main/yt';
}

