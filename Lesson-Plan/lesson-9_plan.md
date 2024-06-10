---
title: Lectia 9 - Lucrul cu fisiere
description: Plan de lecție pentru cursul GoIT
tags:
  - plan
  - lesson
  - learn
---
# Lecția 9: Gestionarea Încărcărilor de Fișiere cu Node.js 🚀

## Introducere 🌟

Bun venit la o incursiune în gestionarea încărcărilor de fișiere dintr-un formular HTML către un server, concentrându-ne pe tipurile de codificare și mediul Node.js folosind Express. Pregătiți-vă să deblocați puterea încărcărilor de fișiere în aplicațiile dvs. web!

## Importanța Încărcărilor de Fișiere 🗂

Încărcările de fișiere îmbogățesc aplicațiile web permițând utilizatorilor să partajeze conținut precum imagini, documente și videoclipuri, făcând interacțiunile mai dinamice și personalizate.

## Tipuri de Codificare Explicate 🔍

Formularele HTML utilizează diferite tipuri de codificare pentru transmiterea datelor:

- **`application/x-www-form-urlencoded`**: Tipul implicit, excelent pentru text, dar nu pentru fișiere.
- **`multipart/form-data`**: Tipul preferat pentru încărcarea fișierelor datorită capacității sale de a gestiona date binare alături de text.

## Express și `multipart/form-data` 🛠

Express nu gestionează nativ `multipart/form-data`. Pentru încărcările de fișiere, apelăm la instrumente suplimentare precum Multer și Formidable.

## Abordări de Încărcare a Fișierelor 📤

După încărcare, alegeți între:
1. **Răspuns Direct**: Feedback imediat HTML sau JSON.
2. **Redirecționare**: Utilizarea codurilor de stare precum 303 pentru o experiență de utilizator mai fluidă.

---

### Implementarea Încărcărilor de Fișiere cu Multer 🚚

Multer este un middleware Express care simplifică gestionarea `multipart/form-data`, ideal pentru încărcarea fișierelor în cadrul aplicațiilor Express.

### Instalare 📦

```bash
npm install multer
```

### Configurarea Multer într-o Aplicație Express 🛠

#### Partea client
```html
<form action="/profile" method="post" enctype="multipart/form-data">
 <input type="file" name="avatar" />
</form>
```

#### Partea server
```javascript
const express = require('express')
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const app = express()

app.post('/profile', upload.single('avatar'), function (req, res, next) {
 // req.file este fișierul `avatar`
 // req.body va conține câmpurile de text, dacă ar fi existat
})

app.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
 // req.files este un array de fișiere `photos`
 // req.body va conține câmpurile de text, dacă ar fi existat
})

const cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
app.post('/cool-profile', cpUpload, function (req, res, next) {
 // req.files este un obiect (String -> Array) unde numele câmpului este cheia, iar valoarea este un array de fișiere
 //
 // de exemplu
 // req.files['avatar'][0] -> File
 // req.files['gallery'] -> Array
 //
 // req.body va conține câmpurile de text, dacă ar fi existat
})
```

### Flexibilitatea Multer 🌟

Multer oferă mai multe funcții pentru a controla modul în care sunt stocate fișierele, inclusiv `multer.diskStorage` pentru stocarea pe disc și `multer.memoryStorage` pentru stocarea fișierelor în memorie. De asemenea, acceptă filtrarea fișierelor prin opțiunea `fileFilter`, permițându-vă să specificați ce fișiere ar trebui acceptate.

### Testarea Implementării 🧪

Puteți testa funcționalitatea de încărcare a fișierelor folosind instrumente precum Postman sau creând un formular HTML simplu care trimite date către endpoint-ul dvs. `/upload`. Asigurați-vă că `enctype` formularului este setat la `multipart/form-data`.


