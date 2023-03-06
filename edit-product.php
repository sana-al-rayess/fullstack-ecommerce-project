<?php
include('connection.php');

// Get form data
$id = $_POST["id"];
$name = $_POST["name"];
$price = $_POST["price"];
$quantity = $_POST["quantity"];
$description = $_POST["description"];

// Prepare a SQL query to update data in the products table
$sql = "UPDATE products SET name='$name', price='$price', quantity='$quantity', description='$description' WHERE id=$id";

// Execute the query
if ($mysqli->query($sql) === TRUE) {
    echo "Product updated successfully";
} else {
    echo "Error updating product: " . $mysqli->error;
}

$mysqli->close();
?>