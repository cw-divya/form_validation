const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

var user,mail,pwd,pwd2=false;

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } 
    else if((usernameValue.length<3) || (usernameValue.length>25)){
        setError(username,'Username length should be between 3 and 25');
    }
    else {
        setSuccess(username);
        user=true;
    }

    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (emailValue.includes('@')&&emailValue.includes('.')&&emailValue.length>10){
        setSuccess(email); 
        mail=true;
    } else {
        setError(email, 'Provide a valid email address');
    }
    function validatePassword(password) {
        var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
        return passwordPattern.test(password);
      }
      var isValid = validatePassword(passwordValue);
      console.log(isValid); 


    if(passwordValue === '') {
        setError(password, 'Password is required');
    } else if (passwordValue.length < 8  )  {
        setError(password, 'Password must be at least 8 character.')
    } 
    else if (isValid==true)  {
        setSuccess(password);
        pwd=true;
    }else {
        setError(password, 'Password must be contain special character,upper case,lower case and a number.');
    }
    

    if(password2Value === '') {
        setError(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords doesn't match");
    } else {
        setSuccess(password2);
        pwd2=true;
    }

};

function show_password(){
    document.getElementById("password").setAttribute('type','text');
    document.getElementById("togglePassword").setAttribute('class', 'fa fa-eye-slash');
}
function hide_password(){
    document.getElementById("password").setAttribute('type','password');
    document.getElementById("togglePassword").setAttribute('class', 'fa fa-eye');
}

function alertbox(){
    if(user && mail && pwd && pwd2==true){
        alert("Sign up successfully!!")
    }
}



