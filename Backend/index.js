import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'
const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.send({message:"app started successfully!"})
})

const API = "https://api.tvmaze.com/search/shows?q=all";

app.get("/getmovies", async (req, res) => {
    const resp = await fetch(API, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const response = await resp.json();
    res.send(response);
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
