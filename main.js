let loggedIn = false;

// 登录
function login(){

    loggedIn=true;

    updateAuthUI()
}

// 登出
function logOut(){

    loggedIn=false;

    updateAuthUI()
}

const contactBtn=document.getElementById("contactBtn");

const contactSidebar=document.getElementById("contactSidebar");

const contactArrow=document.getElementById("contact-arrow");

contactBtn.addEventListener("click",()=>{

    contactSidebar.classList.toggle("show");

    contactArrow.classList.toggle("active");
});

// 更新UI
function updateAuthUI(){

const authArea=document.getElementById("authArea");

const userArea=document.getElementById("userArea");

if(loggedIn){

    authArea.style.display="none";

    userArea.style.display="flex";
}else{

    authArea.style.display="flex";

    userArea.style.display="none";
}

}

function toggleProfileMenu(){

    const menu=document.getElementById("profileMenu");

    menu.classList.toggle("show");
}

updateAuthUI();

function trackAuthClick(type){
    gtag('event', 'auth_click',{
        event_category:'auth',
        event_label:type
    });
}

function trackNav(page){
    gtag('event', 'nav_click',{
        event_category:'navigation',
        event_label:page
    });
}

function trackSocial(platform){
    gtag('event', 'social_click',{
        event_category:'social',
        event_label:platform
    });
}
