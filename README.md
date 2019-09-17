# pollyjs-multipart-form-data-error

A example demonstrating a multipart/form-data error with Polly.JS

## Setup

Ensure [Node.js](https://nodejs.org/en/) `>= 10.x.x` and
[yarn](https://yarnpkg.com/lang/en/) are installed.

1. Clone the project
2. Install the dependencies:

    ```shell
    yarn
    ```

## Running

Run the tests with yarn:

```shell
yarn test
```

## Output

The tests currently fail:

```shell
$ yarn --silent test
 FAIL  src/upload.spec.js
  multipart/form-data request
    ✕ should upload a file (132ms)

  ● multipart/form-data request › should upload a file

    StatusCodeError: 400 - ""

      at new StatusCodeError (node_modules/request-promise-core/lib/errors.js:32:15)
      at Request.plumbing.callback (node_modules/request-promise-core/lib/plumbing.js:104:33)
      at Request.RP$callback [as _callback] (node_modules/request-promise-core/lib/plumbing.js:46:31)
      at Request.self.callback (node_modules/request/request.js:185:22)
      at Request.<anonymous> (node_modules/request/request.js:1161:10)
      at IncomingMessage.<anonymous> (node_modules/request/request.js:1083:12)

  ● multipart/form-data request › should upload a file

    PollyError: [Polly] [persister:fs] Cannot persist response for [POST] http://localhost:3001/upload because the status code was 400 and `recordFailedRequests` is `false`

      at Object.assert (node_modules/@pollyjs/utils/src/utils/assert.js:5:11)
      at FSPersister.assert (node_modules/@pollyjs/persister/src/index.js:175:5)
      at FSPersister.assert [as persist] (node_modules/@pollyjs/persister/src/index.js:73:14)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        1.009s, estimated 2s
Ran all test suites.
error Command failed with exit code 1.
```