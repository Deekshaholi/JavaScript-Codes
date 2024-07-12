// store object
const store = {
    name: "Tech Store",
    location: "Main Street",
    products: [
        { name: "Laptop", price: 1000, inStock: true },
        { name: "Phone", price: 500, inStock: false }
    ],

    // method to list all products
    listProducts: function () {
        console.log("Available products:");
        this.products.forEach(product => {
            console.log(`${product.name} - $${product.price} - ${product.inStock ? 'In Stock' : 'Out of Stock'}`);
        });
    },

    // method to find a product by name
    findProduct: function (name) {
        const product = this.products.find(product => product.name === name);
        if (product) {
            console.log(`${product.name} costs $${product.price} and is ${product.inStock ? 'in stock' : 'out of stock'}`);
        } else {
            console.log(`Product "${name}" not found.`);
        }
    }
};

// List all products
store.listProducts();

// Find a specific product by name
store.findProduct("Phone");


