

#### Description
This is a Typescript app built with Nest, a Node.js framework.

#### Note: Don't forget to add your API_KEY to the environment!
```bash
set API_KEY=your_api_key_here
```

```bash
# To run the tests
$ npm run test
```

```bash
# To run the tests
$ npm run test:e2e
```

```bash
# To run the app
$ npm run start
```

```bash
Use curl to test the endpoint from your cli. 
Or use Postman or Insomnia if you prefer a GUI.

- - - - - -

# curl example to GET the payload for lat=42.278046&lon=-83.738220 
> $ curl http://localhost:3000/weather/42.278046,-83.738220

JSON response example: 
{ message: { fahrenheit: temp, condition: condition } }   
```

```bash
# To build the app
$ npm run build
```

#### Dependencies
1. [Nest](https://github.com/nestjs/nest) official repository.
2. [Node.js](https://nodejs.org/en) is required, installation includes npm.
3. [npm](https://pnpm.io/installation) is included with NodeJS install.

<p align="left">
  This app is built with Nest. Nest is a progressive Node.js framework.
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="30" alt="Nest Logo" /></a>
</p>
