const form=document.getElementById('form');
const username=document.getElementById('username');
const password=document.getElementById('password');
const email=document.getElementById('email');

form.addEventListener('submit', async e => {
    e.preventDefault();

    validateInputs();

    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: document.getElementById('username').value,
                password: document.getElementById('password').value,
                email: document.getElementById('email').value
            })
        });

        if (response.ok) {
            window.location.href = '/Home'; // Redirect to home page after successful login
        } else {
            const errorMessage = await response.text();
            console.error('Login error:', errorMessage);
            alert(errorMessage);
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

// this function is to check whether the email is in the correct format or not
function validemail (email) {
    const format = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    return format.test(email)

}

//  this function is to validate all the inputs
const validateInputs=()=>{
    
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    


    
    if (usernameValue === '' || usernameValue == null){
        Errors(username, 'Userame is required.');  
    } else {Success(username);}

    if (passwordValue === '' || passwordValue == null){
        Errors(password, 'Password is required.');  
    } else if (passwordValue.length <8){
        Errors(password, 'Password should be at least 8 characters.');
    } else {Success(password);}

    if (emailValue === '' || emailValue == null){
        Errors(email, 'E-mail is required.');
    } else if (!validemail(emailValue)){
        Errors(email, 'Invalid E-mail.')
    }else {Success(email)}; 
 

   


}




