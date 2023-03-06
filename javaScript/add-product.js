
let submit_btn = document.getElementById('submit-button');
submit_btn.addEventListener('click', addProduct);


function addProduct() {

    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let quantity = document.getElementById('quantity').value;
    let description = document.getElementById('description').value;
    
    let data = new FormData();
    data.append('name', name);
    data.append('price', price);
    data.append('quantity', quantity);
    data.append('description', description);
        
    axios({
        "method": "post",
        "url": "http://localhost/fullstack-ecommerce-project/add-product.php",
        "data": data
    }).then((result) => {
        console.log(result)
        alert("You have added a product successfully!")
        document.getElementById('name').value = "";
        
    }).catch((err) => {
        console.error(err)
    });

   }

   function getProducts() {
    // Make a GET request to the API using fetch
    fetch('http://localhost/fullstack-ecommerce-project/getproducts.php')
      .then(response => response.json())
      .then(data => {
        // Select the table body element
        const tbody = document.querySelector('#users-table tbody');
        
        // Clear the table body
        tbody.innerHTML = '';
        
        // Loop through each user and add a row to the table
        data.forEach(user => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.price}</td>
            <td>${user.quantity}</td>
            <td>${user.description}</td>
          `;
          tbody.appendChild(row);
        });
      })
      
  }
  
  // Define an onclick event for the button
  document.getElementById('my-button').onclick = getProducts;
