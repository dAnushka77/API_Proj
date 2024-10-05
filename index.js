const express = require('express');
const app = express()
const PORT = 8080;

// middlewear for express json body for converting the callback body to json format
app.use(express.json())

// tells api to listen on a specific port 8080
app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)  
)

// callback function to define what response one should get after requesting a service like GET (for tshirts)
app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: 'Hello',
        size: 'large'
    })
});

// express needs a middlewear to parse the json body
app.post('/tshirt/:id', (req, res) => {
    const {id} = req.params;
    const {logo} = req.body;

    if (!logo) {
        res.status(418).send({message: 'We need a logo!'})
    }

    res.send({
        tshirt: `Hello with your ${logo} and ID of ${id}`,
    });
});