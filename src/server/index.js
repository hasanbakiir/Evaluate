const dotenv = require('dotenv');

dotenv.config();

var path = require('path')
const express = require('express')   // Require Express to run server and routes
const app = express()   // Start up an instance of app
const mockAPIResponse = require('./mockAPI.js')
const axios = require ('axios')
const fetch = require('node-fetch')

//configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors')
app.use(cors());
const cookieParser = require('cookie-parser')
app.use(cookieParser());

// Initialize the main project folder
app.use(express.static('dist'))

//console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// sends post request with the typed url from the user to the server and get the article data then post it to the client lib.
app.post('/test', async function (req, res) {
    const url = req.body.url;
    const API_KEY = "3c4f370dc7f2c98d7319c54ef9ff5161";
    let response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${API_KEY}&url=${url}&lang=en`, { method: "POST" })

    let myArticleData = await response.json()
    {console.log("my article data")}
    {console.log(myArticleData)}
    if (myArticleData && myArticleData.status.code == 0)
        res.send(myArticleData)
    else res.status(500).send({ message: 'error' , error: error })
})


