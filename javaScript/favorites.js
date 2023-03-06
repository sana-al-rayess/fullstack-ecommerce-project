const productData = {};

// Get all the item images
const itemImages = document.querySelectorAll('.icon_fav');

// Loop through each item image
itemImages.forEach(itemImage => {
    // Get the product data as a JavaScript object
    const product = JSON.parse(itemImage.dataset.product);

    // Add the product data to the dictionary using the product ID as the key
    productData[product.id] = product;

    // Add a click event listener to the item image
    itemImage.addEventListener('click', () => {
        // Get the product ID from the data-product attribute of the image
        const productId = product.id;

        // Get the product data from the dictionary using the product ID as the key
        const productDescription = productData[productId].description;

        // Do something with the product description, such as display it in a modal
        showModal(productDescription);
    });
});