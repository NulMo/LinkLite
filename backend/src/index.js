import generateId from './generateId.js'
import { databaseImport, databaseExport } from './database.js'
import { isValid, fixUrl } from './urlCheck.js'
import express from 'express'
import cors from 'cors'


const app = express()
app.use(cors())

const port = process.env.PORT || 4000

app.get('/:id', async (req, res) => {
  const id = req.params.id;
  const url = await databaseExport(id)
  res.redirect(url)
})

app.use(express.json());

app.post('/submit', async(req, res) => {
  console.log(req.body.url)
  const userInput = req.body.url
  console.log(`User entered input: ${userInput}`)
  let userUrl = userInput
  if (!isValid(userUrl)) {
    userUrl = fixUrl(userUrl)
  }
  const id = generateId()
  await databaseImport(id, userUrl)
  res.send(id)
})

app.listen(port, () => {
  console.log('Server listening on port :4000')
})