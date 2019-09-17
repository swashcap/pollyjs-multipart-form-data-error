const AdapterNodeHTTP = require('@pollyjs/adapter-node-http')
const PersisterFS = require('@pollyjs/persister-fs')
const { Polly } = require('@pollyjs/core')
const path = require('path')
const { setupPolly } = require('setup-polly-jest')

const { uploadFile } = require('./upload')

Polly.register(AdapterNodeHTTP)
Polly.register(PersisterFS)

describe('multipart/form-data request', () => {
  const context = setupPolly({
    adapters: ['node-http'],
    persister: 'fs'
  })

  it('should upload a file', () => {
    const response = uploadFile(path.join(__dirname, 'fixtures/kittens.jpg'))

    expect(response).resolves.toBeTruthy()
  })
})
