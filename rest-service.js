const express = require('express');

const app = express();
const port = 3000;

let pingCount = 10;
const cors = require('cors');
app.use(cors());
app.get('/fetch',(req, res) => {
  pingCount += 10;
  res.json({processed: pingCount});
  if ( pingCount >= 100) {
    pingCount = 0;
  }
});


app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))
