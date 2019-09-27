module.exports = function generateServerData(productsAmount) {
    const productsArray = [];

    for (let i = 1; i < productsAmount + 1; i++) {
        let product = {};

        product.id = `prod${i}`;
        product.title = `Product ${i}`;
        product.image = "https://picsum.photos/300/300?image=0&&blur";
        product.price = Math.ceil(Math.random() * 1000);

        productsArray.push(product);
    }

    return productsArray;
}
