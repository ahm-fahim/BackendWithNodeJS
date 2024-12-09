    //Header
    const express = require('express');
    const cors = require('cors');
    const app = express();
    const port = process.env.PORT || 5001;
    
        // Middleware 
    app.use(cors());
    app.use(express.json());
    
    



    //---------------------------------------------------
    // Footer 
    //___________________________________________________
    
    app.get('/', (req, res) => {
        res.send('Server Running...');
    })
    
    app.listen(port, () => {
        console.log(`Server Running...${port}`);
    })