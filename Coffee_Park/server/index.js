    //Header
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 5001;
    
    // Middleware 
app.use(cors());
app.use(express.json());
    
// MongoDB 
    
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.mcdqy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
      await client.connect();

      const foodsItemCollections = client.db("foodsItemDB").collection('coffee');
      
      //POST MENU
      app.post('/foodsItem',async (req, res) => {
          const newItem = req.body;
          console.log(newItem);
          const result = await foodsItemCollections.insertOne(newItem);
          res.send(result);
      })

      //GET MENU ITEMS
      app.get('/foodsItem', async(req, res) => {
          const cursor = foodsItemCollections.find();
          const result = await cursor.toArray();
          res.send(result);
      })





    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




//---------------------------------------------------
// Footer 
//___________________________________________________
    
app.get('/', (req, res) => {
    res.send('Server Running...');
})
    
app.listen(port, () => {
    console.log(`Server Running...${port}`);
})