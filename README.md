# Pay on Demand for Digital Inclusion

This project contains a mono repo of Node.js projects that showcase a reference implementation for Pay on Demand for Digital Inclusion API.

## Table of Contents

- [Project List](#project-list)
- [Financier Server & Web Portal](#financier-server-web-portal)
  - [Configure MCAPI and Install Dependencies](#configure-mcapi-and-install-dependencies)
  - [Run dev server](#run-dev-server)
- [Quickstart](#quickstart)
  - [Create Financier](#create-financier)
  - [Configure the Gateway](#configure-the-gateway)
  - [Create a Sample Contract](#create-a-sample-contract)
  - [Manage Card](#manage-card)
- [Consumer Reference App Backend](#consumer-reference-app-backend)
  - [Configure MCAPI](#configure-mcapi)
  - [Run](#run)
- [OpenAPI Client](#openapi-client)
- [Test](#test)
- [Coverage](#coverage)
- [Linting](#linting)

## Project List

* pod-api-client - Node.js client auto generated from the swagger file for Pay on Demand for Digital Inclusion from Mastercard Developer Zone.
* pod-smartphone-api - Express.js route implementation for common API entities, configurable with Mastercard Developer Zone authentication and utilize the auto-generated OpenAPI client.
* pod-consumer-backend - Express.js backend for consumer smartphone app.
* pod-financier-app - React app and Express.js backend for financier server & web portal.

## Financier Server & Web Portal

### Configure MCAPI and Install Dependencies

Copy your Mastercard API p12 file to `pod-financier-app` directory and create .env file containing your Mastercard API authentication details in the same directory. Sample file with placeholders denoted by `<placeholder>` below,

```text
MCAPI_KEY=<../../pod-financier-app/PoD-Test-sandbox.p12>
MCAPI_KEY_PASSWORD=<keystorepassword>
MACPI_KEY_ALIAS=<keyalias>
MCAPI_CONSUMER_KEY=<6vJZBZwTq4F8XKOKXp1iBPDBo6HJxPvqCEAjSvKt73396f44!f4901a71c3f54fe0a935f9f65beaf0eb0000000000000000>
MCAPI_BASE_PATH=https://stage.api.mastercard.com/pods
MCAPI_AUTH=true
```

- `MCAPI_KEY` - the path (relative to src directory of pod-smartphone-api) for P12 file downloaded from Mastercard developer portal
- `MCAPI_KEY_PASSWORD` - the keystore password of the P12 file
- `MCAPI_KEY_ALIAS` - the alias of the key within the keystore
- `MCAPI_CONSUMER_KEY` - the consumer key generated in the developer portal for your project
- `MCAPI_BASE_PATH` - the URL you're targeting (based on the environment -  Sandbox/ Stage/ Production)
- `MCAPI_AUTH` - boolean value to enable/ disable the OAuth1a authentication

Then install dependencies using yarn,

```shell
yarn
```

### Run dev server

This project uses yarn workspaces to maintain monorepo. It also uses concurrently to run both server as well as client app. To start the dev server and launch the reference app,

```shell
yarn workspace pod-financier-app dev
```

## Quickstart

Make sure you have setup the Reference server application with your Mastercard developer keys as per instructions above.

### Create Financier

Once you launch the financier app (<http://localhost:3000> for the dev server), it will prompt you to on-board yourself with a financier name as well as external reference of your choice.

### Configure the Gateway

After on-boarding is complete, click on the Gateway Configuration in the financier reference app to create your gateway configuration. You can use the following JSON object as an example for the configuration

```Json
{
  "baseUrl": "https://mtf.gateway.mastercard.com", "currency": "UGX",
  "merchantId": "TESTPHONES",
  "password": "<password>",
  "version": "53"
 }
```

### Create a Sample Contract

Use the Contracts section of the financier app to create a sample contract. Please key in the following information:

- Device
  - OEM
  - Model
  - IMEI
- Currency
  - Total Amount
  - Type
  - Duration
  - Downpayment
- Amount

### Manage Card

Install and launch the Consumer Reference App as well as [Consumer Reference Backend](#consumer-reference-app-backend) to explore device control and payment management features.

## Consumer Reference App Backend

### Configure MCAPI

Similar to the Financier app, copy your Mastercard API p12 file to `pod-consumer-backend` directory and create .env file containing your Mastercard API authentication deatils in the same directory. Sample file with placeholders denoted by `<placeholder>` below,

```text
MCAPI_KEY=<../../pod-consumer-backend/PoD-Test-sandbox.p12>
MCAPI_KEY_PASSWORD=<keystorepassword>
MACPI_KEY_ALIAS=<keyalias>
MCAPI_CONSUMER_KEY=<6vJZBZwTq4F8XKOKXp1iBPDBo6HJxPvqCEAjSvKt73396f44!f4901a71c3f54fe0a935f9f65beaf0eb0000000000000000>
MCAPI_BASE_PATH=https://stage.api.mastercard.com/pods
MCAPI_AUTH=true
```

### Run

This project uses yarn workspaces to maintain monorepo. To start the dev server and launch the reference app,

```shell
yarn workspace pod-consumer-backend dev
```

## OpenAPI Client

The project pod-api-client contains MCAPI client auto generated from swagger file.

When there is an API change you may want to re-generate the client as per the steps below,  

1. Install OpenAPI Generator for your platform from [here](https://openapi-generator.tech/),
2. Copy the latest OpenAPI yml file (`swagger_api_gateway.yml`) in pod-api-client,
3. Run `build.sh` from a bash shell or if running from Windows modify to the format of your generator command to use the `config.json`.

```shell
cd pod-api-client
./build.sh
```

## Test

The `jest` library is used for unit tests in all projects except `pod-api-client`, which uses `mocha`. However instructions to run the test script for all project is same,

```shell
$ yarn workspace pod-smartphone-api test

yarn workspace v1.22.4
yarn run v1.22.4
$ jest
 PASS  src/authUtils.test.js
  ✓ setup mastercard authentication to api client (131ms)
  ✓ apply mastercard authentication in api client (87ms)

  console.log
    Request  {
      url: 'https://test-url.co.nz',
      method: 'POST',
      _data: '[]',
      req: { setHeader: [Function: setHeader] },
      _end: [Function (anonymous)]
    }

      at Object.call (src/authUtils.test.js:27:40)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        0.995s, estimated 1s
Ran all test suites.
✨  Done in 1.72s.
✨  Done in 1.93s.
```

You can use `yarn workspaces` to run test script for all projects at once.

```shell
$ yarn workspaces run test

yarn workspaces v1.22.4

> pod-api-client
yarn run v1.22.4
$ mocha --recursive


  ContractsApi
    addContract
      ✓ should call addContract successfully

...

  TransactionsAllOf
    ✓ should create an instance of TransactionsAllOf
    ✓ should have the property items (base name: "items")


  231 passing (134ms)

✨  Done in 0.38s.

> pod-smartphone-api
yarn run v1.22.4
$ jest
 PASS  src/__tests__/financier.spec.js
  ● Console

    console.log src/financier.js:7
      Creating financier for  undefined
    console.log src/financier.js:12
      ***** error *****
       Server error
    console.log src/financier.js:7
      Creating financier for  undefined
    console.log src/financier.js:18
      ***** response *****
       Invalid data
    console.log src/financier.js:7
      Creating financier for  undefined

...

Test Suites: 7 passed, 7 total
Tests:       44 passed, 44 total
Snapshots:   0 total
Time:        1.372s
Ran all test suites.
✨  Done in 1.92s.

> pod-financier-app
yarn run v1.22.4
$ react-scripts test --watchAll=false
 PASS  src/server/server.test.js
  ✓ server (90ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.274s
Ran all test suites.
✨  Done in 1.96s.

> pod-consumer-backend
yarn run v1.22.4
$ jest
 PASS  ./app.test.js
  load on startup
    financier
      ✓ error from server (24ms)
      ✓ invalid response from server (17ms)
    contract
      ✓ error from server (23ms)
      ✓ invalid response from server (18ms)
    financier and contract
      ✓ loaded successfully (18ms)
  api
    contract
      ✓ return from cache (23ms)
      ✓ error from server (20ms)
      ✓ no contract from server (21ms)
      ✓ contract successfully loaded (19ms)
      payment
        ✓ error from server (19ms)
        ✓ invalid response from server (21ms)
        ✓ load successful session (2228ms)

...

Test Suites: 1 passed, 1 total
Tests:       12 passed, 12 total
Snapshots:   0 total
Time:        3.821s, estimated 4s
Ran all test suites.
✨  Done in 4.52s.
✨  Done in 9.90s.
```

## Coverage

Only `pod-api-client` project uses `istanbul` for code coverage, all other use `jest`. A convenience script `coverage` has been provided and can be executed by yarn on individual projects or all projects via `workspaces` to get code coverage information,

```shell
$ yarn workspace pod-smartphone-api coverage
yarn workspace v1.22.4
yarn run v1.22.4
$ jest --coverage
 PASS  src/__tests__/financier.spec.js
  ● Console

    console.log src/financier.js:7
      Creating financier for  undefined
    console.log src/financier.js:12
      ***** error *****
       Server error
    console.log src/financier.js:7
      Creating financier for  undefined
    console.log src/financier.js:18
      ***** response *****
       Invalid data
    console.log src/financier.js:7
      Creating financier for  undefined
    console.log src/financier.js:29
      ***** error *****
       Server error
    console.log src/financier.js:35
      ***** response *****
       Invalid data

 PASS  src/__tests__/authUtils.spec.js
  ● Console

    console.log src/__tests__/authUtils.spec.js:27
      Request  {
        url: 'https://test-url.co.nz',
        method: 'POST',
        _data: '[]',
        req: { setHeader: [Function: setHeader] },
        _end: [Function (anonymous)]
      }

 PASS  src/__tests__/gatewayConfiguration.spec.js
  ● Console

    console.log src/gatewayConfiguration.js:7
      Creating gateway config for  undefined
    console.log src/gatewayConfiguration.js:14
      ***** error *****
       Server error
    console.log src/gatewayConfiguration.js:7
      Creating gateway config for  undefined
    console.log src/gatewayConfiguration.js:20
      ***** response *****
       Invalid data
    console.log src/gatewayConfiguration.js:7
      Creating gateway config for  undefined
    console.log src/gatewayConfiguration.js:28
      Retrieve gateway configs for financier undefined
    console.log src/gatewayConfiguration.js:34
      ***** error *****
       Server error
    console.log src/gatewayConfiguration.js:28
      Retrieve gateway configs for financier undefined
    console.log src/gatewayConfiguration.js:40
      ***** response *****
       Invalid data
    console.log src/gatewayConfiguration.js:28
      Retrieve gateway configs for financier undefined
    console.log src/gatewayConfiguration.js:50
      Updating gateway config for  undefined  with id  undefined
    console.log src/gatewayConfiguration.js:58
      ***** error *****
       Server error
    console.log src/gatewayConfiguration.js:50
      Updating gateway config for  undefined  with id  undefined
    console.log src/gatewayConfiguration.js:64
      ***** response *****
       Invalid data
    console.log src/gatewayConfiguration.js:50
      Updating gateway config for  undefined  with id  undefined
    console.log src/gatewayConfiguration.js:72
      Deleting gateway config for  undefined
    console.log src/gatewayConfiguration.js:75
      ***** error *****
       Server error
    console.log src/gatewayConfiguration.js:72
      Deleting gateway config for  undefined
    console.log src/gatewayConfiguration.js:81
      ***** response *****
       Invalid data
    console.log src/gatewayConfiguration.js:72
      Deleting gateway config for  undefined

 PASS  src/__tests__/contract.spec.js
  ● Console

    console.log src/contract.js:7
      Creating contract  undefined
    console.log src/contract.js:14
      ***** error *****
       Server error
    console.log src/contract.js:7
      Creating contract  undefined
    console.log src/contract.js:20
      ***** response *****
       Invalid data
    console.log src/contract.js:7
      Creating contract  undefined
    console.log src/contract.js:28
      Retrieve contracts for financier undefined
    console.log src/contract.js:34
      ***** error *****
       Server error
    console.log src/contract.js:28
      Retrieve contracts for financier undefined
    console.log src/contract.js:40
      ***** response *****
       Invalid data
    console.log src/contract.js:28
      Retrieve contracts for financier undefined
    console.log src/contract.js:49
      Retrieving contract config for id  undefined
    console.log src/contract.js:57
      ***** error *****
       Server error
    console.log src/contract.js:49
      Retrieving contract config for id  undefined
    console.log src/contract.js:63
      ***** response *****
       Invalid data
    console.log src/contract.js:49
      Retrieving contract config for id  test-contract-id
    console.log src/contract.js:72
      Updating contract for  undefined  with id  test-contract-id
    console.log src/contract.js:85
      ***** error *****
       Server error
    console.log src/contract.js:72
      Updating contract for  undefined  with id  test-contract-id
    console.log src/contract.js:91
      ***** response *****
       Invalid data
    console.log src/contract.js:72
      Updating contract for  undefined  with id  test-contract-id

 PASS  src/__tests__/transaction.spec.js
  ● Console

    console.log src/transaction.js:7
      Creating transaction  undefined
    console.log src/transaction.js:14
      ***** error *****
       Server error
    console.log src/transaction.js:7
      Creating transaction  undefined
    console.log src/transaction.js:20
      ***** response *****
       Invalid data
    console.log src/transaction.js:7
      Creating transaction  undefined
    console.log src/transaction.js:28
      Retrieve transactions for financier and contract undefined undefined
    console.log src/transaction.js:38
      ***** error *****
       Server error
    console.log src/transaction.js:28
      Retrieve transactions for financier and contract undefined undefined
    console.log src/transaction.js:44
      ***** response *****
       Invalid data
    console.log src/transaction.js:28
      Retrieve transactions for financier and contract undefined undefined
    console.log src/transaction.js:54
      Updating Contract config for  undefined  with id  test-transaction-id
    console.log src/transaction.js:67
      ***** error *****
       Server error
    console.log src/transaction.js:54
      Updating Contract config for  undefined  with id  test-transaction-id
    console.log src/transaction.js:73
      ***** response *****
       Invalid data
    console.log src/transaction.js:54
      Updating Contract config for  undefined  with id  test-transaction-id

 PASS  src/__tests__/device.spec.js
  ● Console

    console.log src/device.js:7
      Retrieve devices for financier undefined
    console.log src/device.js:13
      ***** error *****
       Server error
    console.log src/device.js:7
      Retrieve devices for financier undefined
    console.log src/device.js:19
      ***** response *****
       Invalid data
    console.log src/device.js:7
      Retrieve devices for financier undefined

 PASS  src/__tests__/gateway.spec.js
  ● Console

    console.log src/gateway.js:9
      ***** error *****
       Server error
    console.log src/gateway.js:15
      ***** response *****
       Invalid data

-------------------------|----------|----------|----------|----------|-------------------|
File                     |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-------------------------|----------|----------|----------|----------|-------------------|
All files                |      100 |      100 |      100 |      100 |                   |
 authUtils.js            |      100 |      100 |      100 |      100 |                   |
 contract.js             |      100 |      100 |      100 |      100 |                   |
 device.js               |      100 |      100 |      100 |      100 |                   |
 financier.js            |      100 |      100 |      100 |      100 |                   |
 gateway.js              |      100 |      100 |      100 |      100 |                   |
 gatewayConfiguration.js |      100 |      100 |      100 |      100 |                   |
 transaction.js          |      100 |      100 |      100 |      100 |                   |
-------------------------|----------|----------|----------|----------|-------------------|

Test Suites: 7 passed, 7 total
Tests:       47 passed, 47 total
Snapshots:   0 total
Time:        1.637s
Ran all test suites.
✨  Done in 2.51s.
✨  Done in 2.72s.
```

To view coverage for projects using `jest` you can also add the `--coverage` parameter while running the test script.

## Linting

All the projects are configured to use `eslint` for linting. They can be run via yarn,

```shell
$ yarn workspace pod-consumer-backend lint
yarn workspace v1.22.4
yarn run v1.22.4
$ eslint .
✨  Done in 1.19s.
✨  Done in 1.50s.
```

You can also use `yarn workspaces run lint` to perform linting on all projects.
