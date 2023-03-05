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

let signup_btn = document.getElementById('signup');
let signin_btn = document.getElementById('signin')
signup_btn.addEventListener('click', signup);
signin_btn.addEventListener('click', signin);

function signup() {

    let username = document.getElementById('username_signup').value;
    let password = document.getElementById('password_signup').value;
    let first_name = document.getElementById('first_signup').value;
    let last_name = document.getElementById('last_signup').value;

    let data = new FormData();
    data.append('username', username);
    data.append('password', password);
    data.append('first_name', first_name);
    data.append('last_name', last_name);

    
    axios({
        "method": "post",
        "url": "http://localhost/foodex_backend/signup.php",
        "data": data
    }).then((result) => {
        console.log(result)
        if (result.data.status == "success") {
            alert("signed up")
        }
    }).catch((err) => {
        console.error(err)
    });

    // axios.post("http://localhost/foodex_backend/signup.php",data).then(function(res){
    //     console.log(res)
    // }).catch(function(err){
    //     console.error(err)
    // })
}

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