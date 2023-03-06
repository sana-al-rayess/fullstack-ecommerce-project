let deleteForm = document.getElementById('delete-form');
    let deleteButton = document.getElementById('delete-button');

    deleteForm.addEventListener('submit', function(event) {
      event.preventDefault();
      let idInput = document.getElementById('id-input');
      let id = idInput.value.trim();

      if (!id) {
        console.error('No ID provided for product deletion');
        return;
      }

      fetch('http://localhost/fullstack-ecommerce-project/remove-product.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'id=' + encodeURIComponent(id)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to delete product');
          }
          return response.json();
        })
        .then(data => {
          if (data.status === 'success') {
        
            alert('Product deleted successfully');
            
             } else {
            
          }
        })
        
    });

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