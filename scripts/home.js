if (localStorage.username) {
    document.getElementsByTagName("form")[0].style.display="none";
    document.getElementsByClassName("success")[1].style.display ="flex";    
    document.getElementById("gs1").textContent = "Pay Fee";
    document.getElementById("gs2").textContent = "Pay Fee";
    document.getElementById("gs2").parentElement.setAttribute("href","#aboutus");
    document.getElementById("gshead").innerHTML = `Welcome Back<span class = "disp_rev"> ${localStorage.username.split(" ")[0]}! </span>`;
    document.getElementById("logout").style.display = "inline-block";
    document.getElementById("logout").addEventListener("click",()=>{
    localStorage.username = "";
    location.reload(); 
    })
}
else {

document.getElementById("logout").style.display = "none";
document.getElementsByClassName("success")[0].style.display ="none";
document.getElementsByClassName("success")[1].style.display ="none";
}
const username = document.getElementById("username");
const mobile = document.getElementById("pno");
const errormsg = document.getElementById("errormsg");
const email = document.getElementById("email");
const clas = document.getElementById("class");
const select = document.getElementById("class");
const reg = document.getElementById("Register");
reset();
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let validRegexu =  /^[A-Za-z\s]*$/ ;
let p1=0;
select.addEventListener("change",(e)=>{
    if (e.target.value == "def") {
    e.target.style.color = "rgba(255, 255, 255, 0.539)";    
    }
if(e.target.value!="def") {
    e.target.parentNode.style.outline = "none";
    e.target.style.color = "#fff";
    ok(e);
    errormsg.style.display = "none";

}
else {
    error(e);
}
})
username.addEventListener("change", (e)=>{
    
    if (e.target.value) {
    ok(e);
    errormsg.style.display = "none";
    if (e.target.value.length>=3 && e.target.value.match(validRegexu)) {
       
        ok(e);
        
    } 
    else {
        error(e)    
    }
}
else {
    error(e)  
}
})
email.addEventListener("change", (e)=>{
   if(e.target.value.match(validRegex)) {
    ok(e);
    errormsg.style.display = "none";
   }
   else {
    error(e);
    errormsg.style.display = "block";
   };
})
mobile.addEventListener("change", (e)=>{

if ((Number.isInteger(+e.target.value)) && (e.target.value.length==10)){
    ok(e);
    errormsg.style.display = "none";
}
else {
    error(e);
}
}) 
reg.addEventListener("click", (e)=>{
    e.preventDefault();
    register();
});
function error(who) {
    who.target.style.outline = "1px solid red";
    reg.style.opacity = "0.3";
    reg.style.cursor = "not-allowed";
    p1=0;
}
function ok(e) {
    e.target.style.outline = "none";
    reg.style.opacity = "1";
    reg.style.cursor = "pointer";
    p1=1;
}

function register() {
if (p1 && username.value && email.value && clas.value!="def" && mobile.value) {
submit(username.value,email.value,mobile.value,clas.value) 
}
else {
    errormsg.style.display="block";
}
}
function submit(name,email,mobile,clas) {
    
    reset();
    reg.style.pointerEvents = "none";
    reg.style.opacity = "0.3";
    const obj = {};
    obj.Name = name;
    obj.Email = email;
    obj.Mobile = mobile;
    obj.Class = clas; 
    console.log(obj);
    fetch('https://sheetdb.io/api/v1/r94300oxzuus3', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
                obj
        ]
    })
})
  .then((response) => response.json())
  .then((data) => {
    reg.style.opacity = "1";
    reg.value = "Successful!"
    localStorage.setItem("username", name);
    setTimeout(sucess,400);
  })
  .catch((error)=>{
    reg.value = error;
  });
}

function reset() {
    select.style.color = "rgba(255, 255, 255, 0.539)";    
    select.value="def";
username.value="";
mobile.value="";
email.value="";
}

function sucess(){
    document.getElementsByTagName("form")[0].style.display="none";
    document.getElementsByClassName("success")[0].style.display ="flex";
}
