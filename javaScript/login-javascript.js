const userNameInput = document.querySelector('#login-user-name');
const passwordInput = document.querySelector('#login-password');
const loginButton = document.querySelector('#login-button');

loginButton.addEventListener('click',(event)=>{
    event.preventDefault();
    if(userNameInput.value.trim()===''){
        alert("please enter  correct name.");
        return;
    }
    if(passwordInput.value.trim()===''){
        alert("please enter  correct password.");
        return;
    }
    const arr =passwordInput.value.split('')
    if (arr.length <8 ) {
      alert('password must be at least 8 characters.');
      return;
    }
const loginData ={
    userName :userNameInput.value,
    password : passwordInput.value
};
const data = JSON.stringify(loginData);
console.log(data);

});