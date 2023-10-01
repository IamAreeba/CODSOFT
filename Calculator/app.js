

let buttons = document.querySelector(".buttons");
let btn = document.querySelectorAll('span');
let value = document.getElementById('value');
let toggleBtn = document.querySelector('.toggleBtn');
let body = document.querySelector('body');


for(let i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function(){
        if(this.innerHTML == "="){
            value.innerHTML = eval(value.innerHTML);
        }

        else{

            if(this.innerHTML == "Clear"){
                value.innerHTML = "";
            }
            else{
                value.innerHTML += this.innerHTML;
            }
        }
    })
}




if(localStorage.getItem("mode") === "Dark Mode"){
    // Add dark class to body and set modeSwitch text to Light Mode
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}
 
// Add a click event listner to mode switch
toggleBtn.addEventListener("click", ()=> {
    // Toggle the "dark class" on the body element
    body.classList.toggle("dark");

    // Check if the "dark" class is currently on body element
    const isDarkMode = body.classList.contains("dark");
    // console.log(isDarkMode);

    // set modeSwitch text based on "dark" class presence
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";

    // Set the local storage "mode" item based on "dark" class presence
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");


})
