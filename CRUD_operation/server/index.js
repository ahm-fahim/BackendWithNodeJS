const express = require('express');
const cors = require('cors');


const app = express();
const port = process.env.PORT || 5001;

// QnZaICXye6QNeu01
//contactahmfahim

// middleware 
app.use(cors());
app.use(express.json());

//-----------------------------------------------
// CONNECT MONGODB 
//-----------------------------------------------
 

const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://contactahmfahim:QnZaICXye6QNeu01@cluster0.kkdci.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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

        const database = client.db('notesDB');
        const notesCollections = database.collection('notes');

            //GET
        app.get('/notes', async (req, res) => {
            const cursor = notesCollections.find();
            const result = await cursor.toArray();
            res.send(result);

        })
            //POST
        app.post('/notes', async(req, res) => {
            const notes = req.body;
            console.log("notes", notes);
            
            const result = await notesCollections.insertOne(notes);
            res.send(result);  
        })

        //DELETE 
        app.delete('/notes/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id:new ObjectId(id)}
            const result = await notesCollections.deleteOne(query)
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
run().catch (console.dir);



//---------------------------------------------------
// GET
//___________________________________________________

app.get('/', (req, res) => {
    res.send('Server Running...');
})

//---------------------------------------------------
// Footer 
//___________________________________________________
app.listen(port, () => {
    console.log(`Server Running...${port}`);
})