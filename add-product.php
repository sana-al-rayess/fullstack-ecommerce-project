<?php
include('connection.php');

    // Get form data
    
    $name = $_POST["name"];
    $price = $_POST["price"];
    $quantity = $_POST["quantity"];
    $description = $_POST["description"];

  //Prepare a SQL query to insert data into the products table
    $sql = "INSERT INTO products (name, price, quantity, description) VALUES ('$name', '$price', '$quantity', '$description')";

    // Execute the query
    if ($mysqli->query($sql) === TRUE) {
        echo "New product added successfully";
    } else {
        echo "Error: item not added";
    }

$mysqli->close();
  
?>
