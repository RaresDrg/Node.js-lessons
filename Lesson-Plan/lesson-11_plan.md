---
title: Lectia 11 - Email si Docker
description: Plan de lecție pentru cursul GoIT
tags:
  - plan
  - lesson
  - learn
---
# Lecția 11 - Integrarea NodeMailer, SendGrid și Dockerizarea aplicațiilor Express 📬🐳

## Obiectiv 🎯

Până la sfârșitul acestei lecții ar trebui să știți cum să:

1. Implementați NodeMailer pentru trimiterea emailurilor în aplicațiile Express.
2. Utilizați SendGrid pentru o livrare îmbunătățită a emailurilor.
3. Containerizați aplicația Express cu Docker pentru implementare.

## Partea 1: Introducere în NodeMailer 📧

### Concepte cheie

- **NodeMailer**: Un modul pentru Node.js care simplifică trimiterea emailurilor.
- **SMTP**: Protocolul pe care NodeMailer îl folosește pentru a trimite emailuri.

### Cum se trimite un email

![Imagine](https://sendgrid.com/content/dam/sendgrid/legacy/2019/07/Screen-Shot-2021-02-05-at-2.23.04-PM.png)

### Exemplu de cod

```javascript
const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@gmail.com",
    pass: "yourpassword",
  },
});

let mailOptions = {
  from: "youremail@gmail.com",
  to: "recipient@example.com",
  subject: "Test Email",
  text: "Hello from NodeMailer!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
```

### Sfaturi

- Importanța utilizării variabilelor de mediu pentru informații sensibile, cum ar fi datele de autentificare ale emailului.

## Partea 2: Îmbunătățirea livrării cu SendGrid 🚀

### Concepte cheie

- **SendGrid**: Un serviciu bazat pe cloud care oferă livrare de emailuri de încredere, scalabilitate și analize detaliate.
- **Cheie API**: O modalitate sigură de a autentifica utilizarea API-ului SendGrid.

### Exemplu de cod

Mai întâi, instalați biblioteca client SendGrid pentru Node.js: `npm install @sendgrid/mail`

```javascript
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: "recipient@example.com",
  from: "youremail@example.com",
  subject: "Using SendGrid with NodeMailer",
  text: "Hello, this is a test email sent using SendGrid.",
};

sgMail
  .send(msg)
  .then(() => {
    console.log("Email sent");
  })
  .catch((error) => {
    console.error(error);
  });
```

### Sfaturi

- Subliniați tranziția de la SMTP la utilizarea SendGrid pentru fiabilitate și scalabilitate.
- Discutați procesul de configurare pentru SendGrid și generarea cheilor API.

## Partea 3: Dockerizarea aplicației 🐳

### Concepte cheie

- **Docker**: O platformă pentru dezvoltarea, livrarea și rularea aplicațiilor în containere.
- **Dockerfile**: Un document text care conține toate comenzile pentru asamblarea unei imagini.

### Exemplu Dockerfile

```Dockerfile
FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "app.js"]
```

### Sfaturi

- Beneficiile Docker, cum ar fi medii consistente și implementare simplificată.
- Demonstrați procesul de construire și rulare a unui container Docker.
