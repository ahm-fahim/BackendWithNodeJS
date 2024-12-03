const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;


// middleware 
app.use(cors());
app.use(express.json());

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