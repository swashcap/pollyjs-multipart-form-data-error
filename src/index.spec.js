import AdapterNodeHTTP from '@pollyjs/adapter-node-http'
import PersisterFS from '@pollyjs/persister-fs'
import { Polly } from '@pollyjs/core'
import path from 'path'
import { setupPolly } from 'setup-polly-jest'

import { uploadFile } from './index'

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
