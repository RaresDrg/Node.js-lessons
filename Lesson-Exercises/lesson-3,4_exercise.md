---
title: Exercitiu - Modulul 2
description: Exercitii pentru Express.js;
tags:
  - exercise
  - nodejs
  - learning
---

# Exercitiu - Modulul 2 ✏️

Creează un fork al repozitoriului în contul tău de GitHub: [https://github.com/goit-i18n/nodejs-homework-template](https://github.com/goit-i18n/nodejs-homework-template)

## Pasul 1

Creează un branch separat din master.

Instalează toate modulele folosind comanda:

```bash
npm i
```

Următoarele module sunt deja în proiect:

- express
- morgan
- cors

## Pasul 2

În app.js, un server web în Express, sunt adăugate modulele morgan și cors. Începe să configurezi rutarea pentru a lucra cu o colectie de produse.

**REST API** trebuie să suporte următoarele rute:

### @ GET /api/products

- Nu primește nimic.
- Apelează funcția listProducts pentru a lucra cu fișierul json products.json.
- Returnează o matrice cu toate produsele în format json cu status code 200.

### @ GET /api/products/:id

- Nu primește body.
- Primește parametrul id.
- Apelează funcția getById pentru a lucra cu fișierul json products.json.
- Dacă există un astfel de id, se returnează obiectul product în format json cu status code 200.
- Dacă nu există un astfel de id, se returnează un json cu cheia "message": "Not found" și status code 404.

### @ POST /api/products

- Primește body în formatul {name, email, phone}, unde toate câmpurile sunt obligatorii.
- Dacă în body nu există vreun câmp ce este obligatoriu, atunci se returnează un json cu cheia {"message": "missing required name field"} și status code 400.
- Dacă toate datele din body sunt în regulă, atunci se adaugă un identificator unic la obiectul de product.
- Apelează funcția addProduct(body) pentru a salva produsul în fișierul products.json.
- Ca rezultat al funcției, se returnează un obiect cu un id: {id, name, email, phone} și status code 201.

### @ DELETE /api/products/:id

- Nu primește body.
- Primește parametrul id.
- Apelează funcția removeProduct pentru a lucra cu fișierul json products.json.
- Dacă există un astfel de id, se returnează un json în formatul {"message": "Product deleted"} și status code 200.
- Dacă nu există un astfel de id, se returnează un json cu cheia "message": "Not found" și status code 404.

### @ PUT /api/products/:id

- Primește parametrul id.
- Primește body în format json cu valoarea actualizată a oricăror dintre câmpurile name, email și phone.
- Dacă body nu există, se returnează un json cu cheia {"message": "missing fields"} și status code 400.
- Dacă datele din body sunt valide, apelează funcția updateProduct(productId, body) (scrie-o) pentru a actualiza produsele din fișierul products.json.
- Ca rezultat al funcției, se returnează obiectul actualizat și status code 200. În caz contrar, se returnează un json cu cheia "message": "Not found" și status code 404.

## Pasul 3

Pentru rutele care acceptă date (POST și PUT), ia în considerare și validarea datelor primite. Pentru a face aceasta, folosește pachetul joi.
