require('hard-rejection/register')

const cors = require('cors')
const express = require('express')
const fs = require('fs')
const morgan = require('morgan')
const multer = require('multer')

const app = express()
const port = process.env.PORT || 3001
const upload = multer({
  storage: {
    _handleFile(req, file, cb) {
      const write = fs.createWriteStream('/dev/null')

      write.on('error', cb)
      write.on('finish', () => cb(null))

      file.stream.pipe(write)
    },
    _removeFile(req, file, cb) {
      cb(null)
    }
  }
})

app.use(cors())

if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'))
}

app.post('/upload', upload.single('upload'), (req, res, next) => {
  if (
    !req.headers['content-type'] ||
    !/^multipart\/form-data/.test(req.headers['content-type']) ||
    !req.file
  ) {
    return res.sendStatus(400)
  }

  return res.sendStatus(201)
})

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server listening on ${port}`)
  })
}

module.exports.app = app
