function getUsers() {
    // Make a GET request to the API using fetch
    fetch('http://localhost/fullstack-ecommerce-project/getusers.php')
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
            <td>${user.first_name}</td>
            <td>${user.last_name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
          `;
          tbody.appendChild(row);
        });
      })
      
  }
  
  // Define an onclick event for the button
  document.getElementById('my-button').onclick = getUsers;
  