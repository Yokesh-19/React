const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
app.use(cors());

app.get('/api/restaurants', async (req, res) => {
  try {
    const response = await fetch('https://www.swiggy.com/mapi/restaurants/search/v3?lat=12.9304278&lng=77.678404&str=coffee&trackingId=a9b5e4b8-b1a5-d12e-215f-4b3c197c005e&submitAction=ENTER&queryUniqueId=0876e640-f2eb-c65d-6e2e-f5f90ab0be4b');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/menu/:id', async (req, res) => {
  try {
    const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${req.params.id}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(3001, () => console.log('Proxy server running on port 3001'));
