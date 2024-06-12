const form=document.getElementById('form');
const card=document.getElementById('card');
const plan=document.getElementsByName('plan');
const pay1=document.getElementsByName('pay1');



form.addEventListener('submit', async e => {
    e.preventDefault();

    validateInputs();

    const username = document.getElementById('username').value;
    const card = document.getElementById('card').value;

    try {
        const response = await fetch('/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                card: card
            })
        });

        if (response.ok) {
             // Redirect to articles page after successful subscription process
            window.location.href = '/Articles';
        } else {
            const errorMessage = await response.text();
            console.error('Subscription error:', errorMessage);
            alert(errorMessage);
        }
    } catch (error) {
        // Handle error appropriately 
        console.error('Error:', error);
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


function validnum (number) {
    const format = /^[0-9]+$/;
    return format.test(number);

}

function validateRadioButton(radiob) {
    const radioButtons = document.getElementsByName(radiob);
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            return true; 
        }
    }
    return false;

}

const validateInputs=()=>{
    const cardValue=card.value.trim();
    
    if (cardValue === '' || cardValue == null){
        Errors(card, 'Card number is required.');
    } else if (!validnum(cardValue)){
        Errors(card, 'Invalid card number.')
    } else if (cardValue.length < 16){
        Errors(card, 'Invalid card number')
    }else {Success(card)}; 

    console.log('Plan radio buttons:', plan);
    console.log('Payment radio buttons:', pay1);

    if (!validateRadioButton('plan')){
        Errors(plan[0], 'Please choose a plan.')
    }else {Success(plan[0])};

    if (!validateRadioButton('pay1')){
        Errors(pay1[0], 'Please choose a payment method.')
    }else {Success(pay1[0])};
   
}

