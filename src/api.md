# API Documentation

> API documentation

- Admin token
  - [GET] /api/v1/token
  - query
    ``` query
      ?admin=admin
    ```
- Phone numbers
  - [POST] /api/v1/phone-numbers
  - [HEADERS] `x-access-token: token`

- Counts
  - [GET] /api/v1/counts
  - [HEADERS] `x-access-token: token`
