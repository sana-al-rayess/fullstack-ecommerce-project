const productData = {};

const itemImages = document.querySelectorAll('.icon_fav');

itemImages.forEach(itemImage => {
    const product = JSON.parse(itemImage.dataset.product);

    productData[product.id] = product;

    itemImage.addEventListener('click', () => {
        const productId = product.id;

        const productDataItem = productData[productId];

        console.log(productDataItem);
    });
});

const productDataJSON = JSON.stringify(productData);
window.productData =productDataJSON;