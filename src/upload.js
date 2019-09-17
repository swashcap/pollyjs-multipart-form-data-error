import fs from 'fs'
import mime from 'mime'
import path from 'path'
import request from 'request-promise-native'

export const uploadFile = filename => {
  if (!filename) {
    throw new Error('Expected a `filename` argument')
  }

  const { base, ext } = path.parse(filename)

  /**
   * Add the file to the request:
   * {@link https://github.com/request/request#multipartform-data-multipart-form-uploads}
   */
  const formData = {
    options: {
      contentType: mime.getType(ext),
      filename: base
    },
    value: fs.createReadStream(filename)
  }

  return request('http://localhost:3001', { formData })
}
