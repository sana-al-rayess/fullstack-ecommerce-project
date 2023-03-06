const userNameInput = document.querySelector('#admin-user-name');
const passwordInput = document.querySelector('#admin-login-password');
const loginButton = document.querySelector('#admin-login-button');

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


let signin_btn = document.getElementById('admin-login-button')

signin_btn.addEventListener('click', signin);




  
function signin() {
    let username = document.getElementById('admin-user-name').value;
    let password = document.getElementById('admin-login-password').value;
    let data = new FormData();
    data.append('username', username);
    data.append('password', password);
    axios.post('http://localhost/fullstack-ecommerce-project/admin-login.php', data)
    .then(function (res) {
      console.log(res.data)
      if (res.data.response === "logged in") {
        // Save user ID in sessionStorage
        window.sessionStorage.setItem('admin_id', res.data.id);
        
        window.location.href = '../frontend/admin-panel.html';
      } else if (res.data.response === "user not found") {
        
        alert("User not found.");
      } else if (res.data.response === "Incorrect password") {
       
        alert("Incorrect password.");
      }
    }).catch(function (err) {
      console.log(err);
    });
  }
  