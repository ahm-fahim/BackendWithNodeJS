# BackendWithNodeJS

## Server installation
```
npm init -y
```

```
 npm i express cors mongodb dotenv
```

```
"scripts": {
   "start":"node index.js",
   "test": "echo \"Error: no test specified\" && exit 1"
 },
```

## Client installation
```
npm create vite@latest client -- --template react
``


## BASIC SETTINGS

```
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

```