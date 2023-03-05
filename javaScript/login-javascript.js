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
        alert("please enter password.");
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


let signin_btn = document.getElementById('signin')

signin_btn.addEventListener('click', signin);



function signin() {
    let username = document.getElementById('login-user-name').value;
    let password = document.getElementById('login-password').value;
    let data = new FormData();
    data.append('username', username);
    data.append('password', password);
    axios.post('http://localhost/jewellery_backend/login.php', data).then(function (res) {
        console.log(res.data)
        // window.localStorage.setItem('user_id', res.data.user_id)
        // window.sessionStorage.setItem('user_id', res.data.user_id)
        console.log(window.sessionStorage.getItem('user_id'))

    }).catch(function (err) {
        console.log(err);
    })

}