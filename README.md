# welcome
## Getting Started

### Clone or download this repository

```sh
git clone https://github.com/abhaybhatia01/environmentsProject
```

### Install dependencies

```sh
npm install
```


### start the server 
for production environment
```sh
NODE_ENV=production node index.js
```
for testing environment
```sh
NODE_ENV=testing node index.js
```
default environment is development but you can pass development alse
```sh
NODE_ENV=development node index.js
```


## API Endpoints 
 
### Get All Books 
 
Retrieve all books. 
 
- Method: GET 
- Endpoint:  /books  
- Response: 
  - Status Code: 200 (OK) 
  - Body:
{
      "done": true,
      "books": [
        {
          "id": "string",
          "title": "string",
          "author": "string",
          "publicationDate": "string",
          "genre": "string",
          "language": "string",
          "pages": number
        },
        ...
      ]
    }
### Create a Book 
 
Create a new book. 
 
- Method: POST 
- Endpoint:  /books  
- Request Body:
{
    "title": "string",
    "author": "string",
    "publicationDate": "string",
    "genre": "string",
    "language": "string",
    "pages": number
  }
- Response: 
  - Status Code: 200 (OK) 
  - Body:
{
      "done": true,
      "book": {
        "id": "string",
        "title": "string",
        "author": "string",
        "publicationDate": "string",
        "genre": "string",
        "language": "string",
        "pages": number
      }
    }
### Get a Book 
 
Retrieve a single book by its ID. 
 
- Method: GET 
- Endpoint:  /books/:id  
- Parameters: 
  -  id : The ID of the book 
- Response: 
  - Status Code: 200 (OK) 
  - Body:
{
      "done": true,
      "book": {
        "id": "string",
        "title": "string",
        "author": "string",
        "publicationDate": "string",
        "genre": "string",
        "language": "string",
        "pages": number
      }
    }
### Update a Book 
 
Update an existing book by its ID. 
 
- Method: PUT 
- Endpoint:  /books/:id  
- Parameters: 
  -  id : The ID of the book 
- Request Body:
{
    "title": "string",
    "author": "string",
    "publicationDate": "string",
    "genre": "string",
    "language": "string",
    "pages": number
  }
- Response: 
  - Status Code: 200 (OK) 
  - Body:
{
      "done": true,
      "book": {
        "id": "string",
        "title": "string",
        "author": "string",
        "publicationDate": "string",
        "genre": "string",
        "language": "string",
        "pages": number
      }
    }
### Delete a Book 
 
Delete a book by its ID. 
 
- Method: DELETE 
- Endpoint:  /books/:id  
- Parameters: 
  -  id : The ID of the book 
- Response: 
  - Status Code: 200 (OK) 
  - Body:
{
      "done": true,
      "book": {
        "id": "string",
        "title": "string",
        "author": "string",
        "publicationDate": "string",
        "genre": "string",
        "language": "string",
        "pages": number
      }
    }
## Conclusion 
 
This API documentation provides an overview of the available endpoints for managing books. 
For any further assistance or questions, please contact abhaybhatia01.
