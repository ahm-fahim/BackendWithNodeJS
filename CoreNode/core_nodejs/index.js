const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5001;

// middleware 
app.use(cors());
app.use(express.json());


const users = [
    {id: 1, name: "John Wick"},
    {id: 2, name:"Dhon Wick"},
    {id: 3, name:"Abul Wick"},
    {id: 4, name:"Moga Wick"},
]

app.get('/', (req, res) => {
    res.send('Server running');
});

app.get('/users', (req, res) => {
    res.send(users);
})

app.post('/users', (req, res) => {
    console.log(req.body);

    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})



app.listen(port, (err) => {
    if (err) {
        console.error('Error starting server:', err);
    } else {
        console.log(`Server is running on port ${port}`);
    }
});
