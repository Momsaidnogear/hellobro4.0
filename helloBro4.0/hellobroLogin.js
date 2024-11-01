const userId = document.getElementById("inputEmail3");
const passkey = document.getElementById("inputPassword3");
const form = document.getElementById("form");
const errorElement = document.getElementById('error')
//getting stuff towork
document.getElementById('signInBtn').onclick = function (){
form.addEventListener('signInBtn', (e) => {
    let messages = []
    if (userId.value === '' || userId.value == null){
        messages.push('name is required')
    }
    if (messages.lenght > 0){    
    e.preventDefault()
errorElement.innerText = messages.join(', ')}
})
function handleIt(){
    alert('hello')
}
//emails and passwords
console.log("clicked");
if(userId.value == "madelynsingletary@icloud.com" && (passkey.value == "hellobro")){
document.location.href = "./hellobro.html";
console.log("works");}
if(userId.value == "nathangonzalezkuan@gmail.com" && (passkey.value == "helloVro")){
    document.location.href ="./hellobro.html";
}

}
