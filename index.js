const express = require('express')
const cors = require('cors')
const app = express();
const about = require('./routes/about')

//middleware for server
app.use(express.json());
//to make API publicly accessible
app.use(cors());
//Register router from about
app.use('/about', about)

app.get('/', (req, res) => {
    res.json('Welcome to the API')
})

//Listen for a connection
const port = process.env.PORT || 5500;
app.listen(port, () => console.log(`Listening to Port: ${port}`))