<?php
include('connection.php');

// Get the ID of the item to delete from the request body
$id = $_POST['id'];

// Check if the connection was successful
if (!$mysqli) {
  die('Error connecting to the database: ' . mysqli_connect_error());
}

// Prepare the SQL query to delete the item with the given ID
$sql = "DELETE FROM products WHERE id = $id";

// Execute the SQL query
if (mysqli_query($mysqli, $sql)) {
  // If the query was successful, return a success message
  $response = array('status' => 'success', 'message' => 'Item deleted successfully');
  echo json_encode($response);
} else {
  // If the query failed, return an error message
  $response = array('status' => 'error', 'message' => 'Error deleting item: ' . mysqli_error($mysqli));
  echo json_encode($response);
}

// Close the database connection
mysqli_close($mysqli);
?>
