const form=document.getElementById('form');
const fname=document.getElementById('fname');
const lname=document.getElementById('lname');
const username=document.getElementById('username');
const birthdate=document.getElementById('birthdate');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmpassword=document.getElementById('confirmpassword');



form.addEventListener('submit', async e => {
    e.preventDefault();

    validateInputs();

    // This function is for fetching API for making HTTP requests
    try {
        const response = await fetch('/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fname: document.getElementById('fname').value,
                lname: document.getElementById('lname').value,
                username: document.getElementById('username').value, 
                password: document.getElementById('password').value, 
                email: document.getElementById('email').value  
            })
        });

        // Redirect to login page after successful signup
        if (response.ok) {
            window.location.href = '/login'; 
        } else {
            const errorMessage = await response.text();
            console.error('Signup error:', errorMessage);
            alert(errorMessage);
            // Handle error appropriately (e.g., display error message to user)
        }
    } catch (error) {
        console.error('Error:', error);
        // Handle error appropriately (e.g., display error message to user)
    }
});

const Errors = (element, alert) => {
    const inputControl = element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText=alert;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const Success = element => {
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText='';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}
const validateInputs=()=>{
    const fnameValue=fname.value.trim();
    const lnameValue=lname.value.trim();
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();

    //  this condition is to make sure the fname field isn't empty
    if (fnameValue === '' || fnameValue == null){
        Errors(fname, 'Name is required.');  
    } else {Success(fname);}

    //  this condition is to make sure the lname field isn't empty
    if (lnameValue === '' || lnameValue == null){
        Errors(lname, 'Name is required.');  
    } else {Success(lname);}

    //  this condition is to make sure the username field isn't empty
    if (usernameValue === '' || usernameValue == null){
        Errors(username, 'Userame is required.');  
    } else {Success(username);}

    //  this condition is to make sure the password field isn't empty and is more than 8 characters
    if (passwordValue === '' || passwordValue == null){
        Errors(password, 'Password is required.');  
    } else if (passwordValue.length <8){
        Errors(password, 'Password should be at least 8 characters.');
    } else {Success(password);}

    //  this condition is to make sure the email field isn't empty and the email is in the correct format
    if (emailValue === '' || emailValue == null){
        Errors(email, 'E-mail is required.');
    } else if (!validemail(emailValue)){
        Errors(email, 'Invalid E-mail.')
    } else {Success(email)}; 
 

   


}

function showPw(){
    if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
}

// this function is to check whether the email is in the correct format or not
function validemail (email) {
    const format = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    return format.test(email)


}
