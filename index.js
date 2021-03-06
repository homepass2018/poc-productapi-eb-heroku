const app = require('fastify')()
const db = require('./db')
const productMapper = require('./productMapper');


// Declare a route
app.get('/api/products', async (request, reply) => {
  const cursor = await db.products.find({}, { rawCursor: true });
  const products = await cursor.limit(50).toArray();
  return products.map((product) => productMapper.map(product));
})

app.get('/api/products/:id', async (req, res) => {
  const product = await db.products.findOne({ _id: req.params.id });
  res.send(productMapper.map(product));
});

// Run the server!
const port = process.env.PORT || 3000;
const host = process.env.HOST || '0.0.0.0';

const start = async () => {
  try {
    db.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/shop').then(() =>  {
      console.log('connected')
    })
    db.bind('products')
    await app.listen(port, host)
    console.info(`server listening on ${app.server.address().port}: ${port}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

console.log('start the server')
start()