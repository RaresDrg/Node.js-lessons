---
title: Lectia 5 - Baza de date MongoDB
description: Plan de lecție pentru cursul GoIT
tags:
  - plan
  - lesson
  - learn
---
# Plan de lecție: Baza de date MongoDB

## Obiective

La sfârșitul acestei lecții, participanții vor putea:

* Înțelege conceptele de bază ale bazelor de date NoSQL și MongoDB.
* Lucra cu colecții și documente în MongoDB.
* Utiliza interfața grafică MongoDB Compass sau Robo 3T.
* Executa comenzi de bază în MongoDB (inserare, căutare, actualizare, ștergere).
* Înțelege și utiliza operatori de interogare și proiecție.
* Lucra cu cursori și manipula rezultatele interogărilor.

## Desfășurarea lecției

### Introducere

* **Ce sunt bazele de date NoSQL?**
    * Avantajele și dezavantajele față de bazele de date SQL.
    * Când să alegeți o bază de date NoSQL.
* **Ce este MongoDB?**
    * O prezentare generală a MongoDB și a caracteristicilor sale cheie.
    * De ce MongoDB este popular.
* **MongoDB Atlas:**
    * Ce este MongoDB Atlas și de ce îl folosim.
    * Cum să creați un cluster gratuit în MongoDB Atlas.

### Colecții și documente

* **Structura datelor în MongoDB:**
    * Colecții și documente.
    * Tipuri de date BSON.
    * Chei primare (`_id`).
* **Interfața grafică MongoDB Compass sau Robo 3T:**
    * Conectarea la baza de date MongoDB Atlas.
    * Vizualizarea și manipularea colecțiilor și documentelor.

### Comenzi de bază în MongoDB

* **Inserarea documentelor:**
    * `insertOne`, `insertMany`, `insert`.
    * Exemple practice de inserare a documentelor.
* **Căutarea în colecții:**
    * `find`.
    * Operatori de comparație (`$eq`, `$gt`, `$lt`, etc.).
    * Proiecția (selectarea câmpurilor).
    * Interogarea obiectelor imbricate.
* **Actualizarea documentelor:**
    * `save`, `update`, `updateOne`, `updateMany`.
    * Operatori de actualizare (`$set`, `$unset`).
* **Ștergerea documentelor:**
    * `remove`.

### Setări suplimentare pentru interogare

* **Cursori:**
    * Ce sunt cursorii și cum funcționează.
    * Iterarea prin rezultatele interogărilor.
* **Limitarea și sortarea rezultatelor:**
    * `limit`, `skip`, `sort`.
* **Numărarea documentelor:**
    * `count`.
* **Operatori suplimentari:**
    * `$exists`, `$type`, `$regex`, `$or`, `$and`.

### Exerciții practice

* **Exercițiu 1:** Creați o colecție de produse și inserați câteva documente.
* **Exercițiu 2:** Căutați produse după anumite criterii (preț, categorie, etc.).
* **Exercițiu 3:** Actualizați prețul unui produs.
* **Exercițiu 4:** Ștergeți un produs.