# Amazing Microservices with NestJS

Example of microservices built with NestJS

## Quick Start

Just open each service and execute the following:

```
npm i && npm run start:dev
```

## Requests

### Get accounts

```bash
curl http://localhost:3000/accounts | jq
```

### Create account

```bash
curl -X POST http:/localhost:3000/accounts \
  -H "accept: application/json" -H "Content-Type: application/json" \
  --data '{"id": "3", "login": "jack", "name": "Jack"}' -i
```
