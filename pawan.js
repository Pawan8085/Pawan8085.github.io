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
        document.getElementById("sskillheading").style.color="#444444";
        document.getElementById("staticheading").style.color="#444444";
        document.getElementById('myheader').style.backgroundColor="#ffffff";
        bool=false;
        
    }
    else{
        document.body.style.backgroundColor = " #23283e";
        document.getElementById("hi").style.color="#cdcdff";
        document.getElementById("developer").style.color="#cdcdff";
        document.getElementById('tskill').style.color="#cdcdff";
        document.getElementById('ttool').style.color="#cdcdff";
        document.getElementById('prjtitle').style.color="#cdcdff";
        document.getElementById('sskillheading').style.color="#cdcdff";
        document.getElementById('staticheading').style.color="#cdcdff";
        document.getElementById('myheader').style.backgroundColor="#23283e";
        bool=true;
       
    }

}

document.getElementById("resume").addEventListener('click',resume);
function resume() {
    window.location.href="https://drive.google.com/file/d/1q-OXB0o1eUY9oYk5yeAfnyNVXXX2b5OV/view";
}
document.getElementById("git").addEventListener('click',git);
function git() {
    // window.location.href="https://github.com/Pawan8085";
    window.open("https://github.com/Pawan8085",'_blank');
}
document.getElementById("linkedin").addEventListener('click',linkedin);
function linkedin() {
   let url="https://linkedin.com/in/pawan-kumar-8589b3232";
    window.open(url,'_blank');
}
document.getElementById('d1').addEventListener('click', d1);
function d1(){
    let url='https://inquisitive-kashata-a201b3.netlify.app/index.html'; 
    window.open(url,'_blank');
}

document.getElementById('d2').addEventListener('click', d2);
function d2(){
    
   let url='https://marvelous-fairy-b620d4.netlify.app/';
   window.open(url,'_blank');
}

document.getElementById('d3').addEventListener('click', d3);
function d3(){
    
   let url='https://funny-sorbet-d9b71d.netlify.app/';
   window.open(url,'_blank');
}

document.getElementById('d4').addEventListener('click', d4);
function d4(){
    
   let url='https://resplendent-scone-4001e5.netlify.app/';
   window.open(url,'_blank');
}

document.getElementById('s1').addEventListener('click', s1);
function s1(){
    let url='https://github.com/sumitraghavwork/bashful-form-6526';
    window.open(url,'_blank');
}

document.getElementById('s2').addEventListener('click', s2);
function s2(){
    let url='https://github.com/Pawan8085/Pawan-Kumar/tree/main/yt';
    window.open(url,'_blank');
}

document.getElementById('s3').addEventListener('click', s3);
function s3(){
    let url='https://github.com/Pawan8085/WeatherApplication';
    window.open(url,'_blank');
}

document.getElementById('s4').addEventListener('click', s4);
function s4(){
    let url='https://github.com/masai-course/Pawan_fw18_1190/tree/master/unit-3/sprint-4/evaluation/U3__c4_';
    window.open(url,'_blank');
}

document.querySelector('#contactlink>a+a+img').addEventListener('click',linkedinContact);
function linkedinContact(){
   let url='https://www.linkedin.com/in/pawan-kumar-8589b3232';
    window.open(url,'_blank');
}
