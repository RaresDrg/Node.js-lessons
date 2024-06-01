---
title: Exercitiu - Modulul 4
description: Exercitiu pentru Autentificare / Autorizare cu JWT
tags:
  - exercise
  - nodejs
  - learning
---
## Crearea unui REST API cu Autentificare/Autorizare JWT

Creează un REST API pentru a lucra cu o colecție de produse. Adaugă logica de autentificare/autorizare a utilizatorului folosind JWT.

### Pasul 1: Modele pentru Utilizator și Produs

```javascript
// user.js
import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  role: {
    type: String,
    enum: ["buyer", "seller"],
    default: "buyer"
  },
  token: {
    type: String,
    default: null,
  },
});

export const User = mongoose.model("User", userSchema);
```

### Pasul 2: Înregistrare și Logare

#### Înregistrare:

```
POST /users/signup
Content-Type: application/json
```

**RequestBody:**

```json
{
  "email": "example@example.com",
  "password": "examplepassword"
}
```

**Răspunsuri posibile:**

* **Eroare de validare:**
    * Status: 400 Bad Request
    * Content-Type: application/json
    * ResponseBody: (Eroare de la librăria de validare)
* **Eroare de conflict (email existent):**
    * Status: 409 Conflict
    * Content-Type: application/json
    * ResponseBody: { "message": "Email in use" }
* **Succes:**
    * Status: 201 Created
    * Content-Type: application/json
    * ResponseBody: { "user": { "email": "example@example.com", "subscription": "starter" } }

#### Logare:

```
POST /users/login
Content-Type: application/json
```

**RequestBody:**

```json
{
  "email": "example@example.com",
  "password": "examplepassword"
}
```

**Răspunsuri posibile:**

* **Eroare de validare:**
    * Status: 400 Bad Request
    * Content-Type: application/json
    * ResponseBody: (Eroare de la librăria de validare)
* **Succes:**
    * Status: 200 OK
    * Content-Type: application/json
    * ResponseBody: { "token": "exampletoken", "user": { "email": "example@example.com", "subscription": "starter" } }
* **Eroare de autentificare:**
    * Status: 401 Unauthorized
    * ResponseBody: { "message": "Email or password is wrong" }

### Pasul 3: Verificarea Token-ului (Middleware)

```javascript
// middleware.js
import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  // ... (Implementare conform descrierii)
};
```

**Răspuns în caz de eroare:**

* Status: 401 Unauthorized
* Content-Type: application/json
* ResponseBody: { "message": "Not authorized" }

### Pasul 4: Logout

```
GET /users/logout
Authorization: "Bearer {{token}}"
```

**Răspunsuri posibile:**

* **Eroare de autorizare:**
    * Status: 401 Unauthorized
    * Content-Type: application/json
    * ResponseBody: { "message": "Not authorized" }
* **Succes:**
    * Status: 204 No Content

### Pasul 5: Current User (Obținerea datelor utilizatorului)

```
GET /users/current
Authorization: "Bearer {{token}}"
```

**Răspunsuri posibile:**

* **Eroare de autorizare:**
    * Status: 401 Unauthorized
    * Content-Type: application/json
    * ResponseBody: { "message": "Not authorized" }
* **Succes:**
    * Status: 200 OK
    * Content-Type: application/json
    * ResponseBody: { "email": "example@example.com", "subscription": "starter" }
