const express = require('express');
const app = express();

// PORT env variable for heroku || locally 5000
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('API Running'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
