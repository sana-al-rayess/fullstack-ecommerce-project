<?php

// Connect to the database
$host = "localhost";
$db_user = "root";
$db_pass = null;
$db_name = "jewellery_db";

$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);

// Check connection
if (!$mysqli) {
  die("Connection failed: " . mysqli_connect_error());
}

// Query the database to get all prod
$sql = "SELECT * FROM products";
$result = mysqli_query($mysqli, $sql);

// Create an array to hold the prod
$users = array();

// Loop through each row in the result set and add it to the prod array
while ($row = mysqli_fetch_assoc($result)) {
  $users[] = $row;
}

// Close the database connection
mysqli_close($mysqli);

// Set the Content-Type header to application/json
header('Content-Type: application/json');

// Return the users as a JSON object
echo json_encode($users);
?>
