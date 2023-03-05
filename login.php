<?php
include('connection.php');

$username = $_POST['username'];
$password = $_POST['password'];

$query = $mysqli->prepare('select id,username,password,first_name,last_name from users where username=?');
$query->bind_param('s', $username);
$query->execute();

$query->store_result();
$num_rows = $query->num_rows();
$query->bind_result($id, $username, $hashed_password, $first_name, $last_name);
$query->fetch();
$response = [];
if ($num_rows == 0) {
    $response['response'] = "user not found";
} else {
    
    if (password_verify($password, $hashed_password)) {
        $response['response'] = "logged in";
       
    } else {
        $response["response"] = "Incorrect password";
    }
}

echo json_encode($response);

