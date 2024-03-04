import express from 'express';
const app = express();
const port = 3000;

import router from './controller';
app.use(router);


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

