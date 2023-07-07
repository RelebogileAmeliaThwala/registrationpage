const formOpenBtn = document.querySelector("#form_open"),
home= document.querySelector(".home"),
formContainer= document.querySelector(".form_container"),
formClose= document.querySelector(".form_close"),
signUpBtn= document.querySelector("#signup"),
loginBtn= document.querySelector("#login"),
password_hide= document.querySelectorAll(".pwhide");
//opening and closing tyhe login form 
formOpenBtn.addEventListener("click", () => home.classList.add("show"))
formClose.addEventListener("click", () => home.classList.remove("show"))

signUpBtn.addEventListener("click", (e) => {
e.preventDefault();
formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

//password show
password_hide.forEach(icon=>{
icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if(getPwInput.type === "password"){
        getPwInput.type="type";
        icon.classList.replace("uil-eye-slash","uil-eye");
    }
    else
    {
        getPwInput.type="password";
        icon.classList.replace("uil-eye","uil-eye-slash");
    }
});
});


