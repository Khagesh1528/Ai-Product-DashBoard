const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;

const app = express();
const port = 8000;

// Call The Apis

app.get('/api/metrics', async (req, res) => {
    try {
        const metricsData = await fs.readFile('./data/metrics.json', 'utf-8');
        res.json(JSON.parse(metricsData));
    } catch (error) {
        res.status(500).json({ error: 'Error fetching metrics data' });
    }
});


app.get('/api/predictions', async (req, res) => {
    try {
        const predictionsData = await fs.readFile('./data/predictions.json');
        res.json(JSON.parse(predictionsData));
    } catch (error) {
        res.status(500).json({ error: 'Error fetching predictions data' });
    }
});


// Start The Sever
app.listen(port,function(err){
    if(err){
        console.log('Error in Starting Server',err);
    }
    console.log('Server is runnning on port ::>> ',port);
})