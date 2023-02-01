import express from 'express'
import { router } from './routes'

const app = express()
app.use(router);
const port = 3000;
app.listen(port, () => {
  console.log(`server run in port ${port}`);
})
