import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

import config from './utils/config'
import logger from './utils/logger'

const app = express()

app.use(logger.middleware)
app.use(helmet())
app.use(
  cors({
    origin: config.origin,
  }),
)

app.get('/', (req, res) => {
  logger.log.success('Calling Root')
  res.send({ msg: 'Hello There Part 2' })
})

app.listen(config.port)
