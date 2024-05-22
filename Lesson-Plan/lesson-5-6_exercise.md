---
title: Exercitiu - Modulul 3
description: Exercitiu pentru MongoDB / Mongoose;
tags:
  - exercise
  - nodejs
  - learning
---

# Exercitiu - Modulul 3 ✏️

Continuă crearea unui API REST pentru lucrul cu o colecție de produse.

---
## Pasul 1
Creează un cont pe MongoDB Atlas. După aceea, în contul tău, creează un nou proiect și configurează un free cluster. În timpul configurării clusterul-ui, selectează provider-ul și regiunea ca în screenshot-ul de mai jos. Dacă selectezi o regiune prea îndepărtată, timpul de răspuns al serverului va fi mai mare.
![Atlas](https://textbook.edu.goit.global/lms-nodejs-homework/v1/ro/img/03/atlas-cluster.jpg)

## Pasul 2
Instalează MongoDB Compass pentru a lucra mai ușor cu baza de date MongoDB. Configurează conexiunea bazei de date din cloud folosind Compass. În MongoDB Atlas, nu uita să creezi un utilizator cu drepturi de administrator.

## Pasul 3
Folosind Compass, creează o bază de date db-products și în interiorul ei o colecție products. Ia link-ul către fișierul json și folosește Compass, pentru a importa conținutul fișierului în colecția products:

![import-json](https://textbook.edu.goit.global/lms-nodejs-homework/v1/ro/img/03/json-data.png)

Datele ar trebui să apară în baza ta de date în colecția products.

---
*Pasii de mai jos ar trebui realizati in cadrul lectiei #6*

## Pasul 4 
Folosește codul sursă de la exercitiul pentru modulul #2 și înlocuiește stocarea produselor din fișierul json cu baza ta de date.

- Scrie codul necesar pentru a crea o conexiune la MongoDB folosind Mongoose.
- Dacă conexiunea e cu succes, afișează mesajul "Database connection successful".
- Asigură-te că tratezi erorile de conectare, afișând un mesaj de eroare în consolă și încheind procesul folosind process.exit(1).
- În funcțiile de gestionare a cererilor, înlocuiește codul pentru operațiile CRUD pe fișiere cu metodele Mongoose pentru a lucra cu colecția products în baza ta de date.

## Pasul 5
În produsele noastre a apărut un câmp suplimentar pentru starea favorite, care poate lua valoarea logică true sau false. Acesta indică dacă produsul respectiv este sau nu în lista de favorite. Trebuie să implementezi un nou router pentru actualizarea stării contactului.

**@ PATCH /api/products/:productId/favorite**
- Primește parametrul contactId.
- Primește body în format json cu câmpul favorite actualizat.
- Dacă body nu există, se returnează un json cu cheia {"message": "missing field favorite"} și status code 400.
- Dacă datele din body sunt valide, se apelează funcția updateStatusContact(contactId, body) (scrie-o) pentru a actualiza contactul favorite în baza de date.
- Ca rezultat al funcției, se returnează obiectul actualizat și status code 200. În caz contrar, se returnează un json cu cheia "message": "Not found" și status code 404.