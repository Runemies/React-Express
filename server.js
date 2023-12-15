const express = require('express');
const app = express();
const port = process.env.PORT || 5000; 
const url = 'https://api.porssisahko.net/v1/latest-prices.json';
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

app.use(express.json());

app.get('/get_prices', async (req, res,) => { 
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'ei vissii käy '});
  }
}); 

