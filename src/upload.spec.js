const AdapterNodeHTTP = require('@pollyjs/adapter-node-http')
const PersisterFS = require('@pollyjs/persister-fs')
const path = require('path')
const { Polly } = require('@pollyjs/core')
const { setupPolly } = require('setup-polly-jest')

const { app } = require('./server')
const { uploadFile } = require('./upload')

Polly.register(AdapterNodeHTTP)
Polly.register(PersisterFS)

let server

beforeAll(
  () =>
    new Promise(resolve => {
      server = app.listen(3001, resolve)
    })
)

afterAll(() => new Promise(resolve => server.close(resolve)))

process.on('exit', () => server && server.kill())

describe('multipart/form-data request', () => {
  const context = setupPolly({
    adapters: ['node-http'],
    persister: 'fs'
  })

  it('should upload a file', () =>
    uploadFile(path.join(__dirname, 'fixtures/kittens.jpg')).then(response => {
      expect(response).toBeTruthy()
    }))
})
