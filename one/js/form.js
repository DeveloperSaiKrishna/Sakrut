form = document.getElementById('contact-form');
formName = document.getElementById('name')
formEmail = document.getElementById('email')
formPhone = document.getElementById('phone')
nameValid = document.getElementById('name-valid')
emailValid = document.getElementById('email-valid')
phoneValid = document.getElementById('phone-valid')
formValid = document.getElementById('form-valid')
const submit = document.getElementById('submit')

form.addEventListener('submit', (e) => {
    // Name Validation
    if(formName.value === '' || formName.value === null){
        nameValid.innerHTML = "Please Enter Your Name";
        e.preventDefault()
        console.log(e.target)
    }
    else if(formName.value.length <= 5){
        nameValid.innerHTML = "Enter Valid Name";
        e.preventDefault()
    }
    else{
        nameValid.innerHTML = "";
    }
    // Email Validation
    if(formEmail.value === '' || formEmail.value === null){
        emailValid.innerHTML = "Please Enter Your Email";
        e.preventDefault()
    }
    else if(formEmail.value.length <= 5){
        emailValid.innerHTML = "Enter Valid Email";
        e.preventDefault()
    }
    else{
        emailValid.innerHTML = "";
    }
    // Phone Validation
    if(formPhone.value === '' || formPhone.value === null){
        phoneValid.innerHTML = "Please Enter Your Phone";
        e.preventDefault()
    }
    else if(formPhone.value.length <= 5){
        phoneValid.innerHTML = "Enter Valid Phone";
        e.preventDefault()
    }
    else{
        phoneValid.innerHTML = "";
        // Else
        e.preventDefault()

        params = "name="+formName&"email+"+formEmail&"phone="+formPhone;

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function(){
                if(this.readyState == 4 && this.status == 200){ 
                }
            }
            
            // xhttp.open("POST", "https://script.google.com/macros/s/AKfycbwCAlX3X5Mzw1YaLnmo66S4vkSCok64V5hCW106FQ/exec", true)
            xhttp.open('POST', 'js/contact-form.php', true)
            xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
            xhttp.send(params);

            formValid.innerHTML = "Form Successfully Submitted";
            console.log(xhttp)
    }
    
    
})