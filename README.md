# SUA Connectify
This is a web application that helps with the logistics of placing orders for products and transporting them to the desired destination in a seamless manner. With this app, users can post their delivery order and have it picked up by trusted dispatch riders to be conveyed in no time to the waiting customers.

## Technologies
-Node.js
-Express
-MongoDB & Mongoose
-jsonwebtoken Authentication
-BCrypt Hashing

### Required Features
1. User can sign up.
2. User can login.
3. Admin can create different user types.
4. A partner can post a delivery order.
5. A rider can pick a delivery order.
6. A rider can mark delivery order as delivered.
7. A user can mark delivery order as received.
8. A user can track all deliveries made.



### API Routes
Test api endpoints with curl or postman

S/N | Verb   | Endpoint         | Description                    |
---:| -------|------------------|--------------------------------|
  1 | Post   | /signup          | Create a user account          |
  2 | Post   | /login           | Login to application           |
  3 | Post   | /admin/create    | Admin create user account      |
  4 | Post   | /order           | Partner Create order           |
  5 | Get    | /order           | Rider gets order               |
  6 | Put    | /order/rider     | Rider marks order as delivered |
  7 | Put    | /user/order      | User marks order as received   |
  8 | Get    | /user/all        | User gets all delivery record  |

### Usage
#### Installation
Install the dependencies

$ npm install
Run app

$ npm start