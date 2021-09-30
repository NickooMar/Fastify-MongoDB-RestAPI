const Product = require("../Models/product.model");

const getProducts = async (req, reply) => {
  const products = await Product.find();
  return products;
};

const getSingleProduct = async (request, reply) => {
  const product = await Product.findById(request.params.id);
  return reply.code(200).send(product);
};

const createProduct = async (request, reply) => {
  const newProduct = new Product(request.body);
  await newProduct.save();
  reply.code(201).send(newProduct);
};

const deleteProduct = async (request, reply) => {
  await Product.findByIdAndDelete(request.params.id);
  reply.code(204).send();
};

const updateProduct = async (request, reply) => {
  try {
    const deletedProduct = await Product.findByIdAndUpdate(request.params.id, request.body, {new: true});
    reply.code(200).send(deletedProduct);
  } catch (error) {
      reply.code(500).send(error);
  }
};

module.exports = {
  getProducts,
  getSingleProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
