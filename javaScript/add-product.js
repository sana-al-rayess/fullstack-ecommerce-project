
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

