const productCtrl = require("../Controllers/product.controller");

const routes = [
  {
    url: "/products",
    method: "GET",
    handler: productCtrl.getProducts,
  },

  {
    url: "/products/:id",
    method: "GET",
    handler: productCtrl.getSingleProduct,
  },

  {
    url: "/products",
    method: "POST",
    handler: productCtrl.createProduct,
  },

  {
    url: "/products/:id",
    method: "DELETE",
    handler: productCtrl.deleteProduct,
  },

  {
    url: "/products/:id",
    method: "PUT",
    handler: productCtrl.updateProduct,
  },

];

module.exports = routes;
