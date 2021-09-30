const fastify = require('fastify')({
    logger: true,
});
const productsRoutes = require('./Routes/products.routes');

const swagger = require("./Utils/swagger");

require('./Utils/mongoose');

fastify.register(require('fastify-swagger'), swagger.options);

//Routes
fastify.get('/', (_, res) => {
    res.send({ hello: "World" });
});

productsRoutes.forEach((route) => {
    fastify.route(route);
});     //Es un arreglo de rutas entonces hacemos que funcione cada una mediante el map y la función route que viene con fastify

const start = async () => {
    await fastify.listen(3000);
    fastify.log.info(`server listening on ${fastify.server.address().port}`);
};


start();