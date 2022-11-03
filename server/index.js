require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express = require('express');
const cors = require('cors');
const { query } = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.qosb6d0.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const run = async () => {
  try {
    const servicesCollection = client.db('geniusCar').collection('services');
    const ordersCollection = client.db('geniusCar').collection('orders');

    // all service api
    app.get('/services', async (req, res) => {
      const cursor = servicesCollection.find({});
      const services = await cursor.toArray();
      res.send(services);
    });

    // single service api
    app.get('/services/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const service = await servicesCollection.findOne(query);
      res.send(service);
    });

    // get all orders
    app.get('/orders', async (req, res) => {
      let query = {};
      if (req.query.email) {
        query = { email: req.query.email };
      }
      const cursor = ordersCollection.find(query);
      const orders = await cursor.toArray();
      res.send(orders);
    });

    // order post api
    app.post('/orders', async (req, res) => {
      const order = req.body;
      const result = await ordersCollection.insertOne(order);
      res.send(result);
    });

    app.patch('/orders/:id', async (req, res) => {
      const id = req.params.id;
      const status = req.body;
      const query = { _id: ObjectId(id) };

      const updatedDoc = {
        $set: {
          status,
        },
      };

      const result = await ordersCollection.updateOne(query, updatedDoc);
      res.send(result);
    });

    app.delete('/orders/:id', async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await ordersCollection.deleteOne(query);
      res.send(result);
    });
  } finally {
  }
};

run().catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('server is running');
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
