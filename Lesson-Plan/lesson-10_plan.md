---
title: Lectia 10 - Testarea aplicatiilor
description: Plan de lecție pentru cursul GoIT
tags:
  - plan
  - lesson
  - learn
---

# Lecția 10: Testare - ExpressJS cu Jest 🚀

## Obiective 🏆

Până la sfârșitul acestei lecții, vei putea:

- Înțelege importanța testării automate pentru aplicațiile complexe.
- Distinge între metodologiile TDD și BDD.
- Biblioteci diferite utilizate pentru testarea aplicațiilor.
- Scrie teste unitare de bază pentru o aplicație ExpressJS folosind Jest.
- Utiliza Jest pentru a face mock și a spiona apelurile de funcții.

## Introducere în Testarea Automată 🤖

Testarea automată este crucială pentru dezvoltarea modernă a web-ului deoarece:

- **Asigură Fiabilitatea**: Prinde erorile devreme, făcând aplicațiile mai stabile.
- **Economisește Timp**: Automatizează sarcinile repetitive, permițând dezvoltatorilor să se concentreze pe noi funcționalități.
- **Susține CI/CD**: Permite integrarea frecventă și implementarea automată a modificărilor de cod.
- **Îmbunătățește Calitatea Codului**: Conduce la structuri de cod mai clare și modulare.
- **Crește Încrederea**: Mărește încrederea dezvoltatorilor și a părților interesate în aplicație.
- **Îmbunătățește Satisfacția Utilizatorului**: Oferă un produs mai fiabil utilizatorilor finali.

---

## TDD vs. BDD 🤼

### TDD (Dezvoltare Condusă de Teste)

- Focus: Perspectiva dezvoltatorului.
- Abordare: Scrie teste ➡️ Cod pentru a trece testele ➡️ Refactorizare.
- Beneficii:
  - Cod fără erori.
  - Design de cod atent.
  - Cod ușor de întreținut.

### BDD (Dezvoltare Condusă de Comportament)

- Focus: Perspectiva utilizatorului final.
- Abordare: Definirea comportamentului ➡️ Scrie teste ➡️ Cod pentru a implementa comportamentul.
- Beneficii:
  - Comunicare îmbunătățită în echipă.
  - Focus pe experiența utilizatorului.
  - Teste înțelese de non-dezvoltatori.

### Când să Folosești

- **TDD**: Testare la nivel de unitate, feedback rapid, calitatea codului.
- **BDD**: Importanța colaborării, dezvoltare condusă de utilizator.

---

## Explorarea Ecosistemului de Testare 🌐

Ecosistemul de testare JavaScript este bogat în biblioteci și unelte proiectate pentru diverse nevoi de testare. Iată o prezentare rapidă a unor unelte notabile dincolo de Jest, fiecare servind diferite aspecte ale testării:

### Sinon

- **Scop**: Spionaje, stubs și mocks autonome pentru teste.
- **Caracteristici Cheie**:
  - Fără dependență de vreun cadru de testare.
  - Verificare și simulare detaliată a comportamentului.
- **Cel Mai Bun Pentru**: Scenarii complexe de mock, unde este nevoie de control detaliat asupra apelurilor de funcții, valorilor returnate și comportamentului.

### Mocha

- **Scop**: Cadru de testare flexibil pentru Node.js și testarea în browser.
- **Caracteristici Cheie**:
  - Suportă diverse biblioteci de aserțiuni (e.g., Chai).
  - Foarte personalizabil și extensibil.
- **Cel Mai Bun Pentru**: Proiecte care necesită o configurație specifică sau integrarea cu diverse biblioteci de aserțiuni și mock-uri.

### Istanbul (nyc)

- **Scop**: Unealtă de acoperire a codului JavaScript.
- **Caracteristici Cheie**:
  - Măsoară cât de mult cod este executat în timpul testelor.
  - Generează rapoarte detaliate de acoperire.
- **Cel Mai Bun Pentru**: Obținerea de informații despre acoperirea testelor, identificarea codului netestat și asigurarea unei testări complete a codului.

### Cypress

- **Scop**: Testare end-to-end pentru aplicațiile web.
- **Caracteristici Cheie**:
  - Runner interactiv de teste în timp real.
  - Simulează acțiuni reale ale utilizatorilor într-un browser.
- **Cel Mai Bun Pentru**: Testarea interacțiunilor utilizatorilor, solicitărilor de rețea și fluxurilor complete de utilizator într-o aplicație web modernă.

### Playwright

- **Scop**: Bibliotecă de automatizare pentru testarea cross-browser.
- **Caracteristici Cheie**:
  - Suportă testarea pe Chromium, Firefox și WebKit.
  - Permite testarea pe versiunile mobile ale browserelor.
- **Cel Mai Bun Pentru**: Asigurarea că aplicațiile web funcționează fără probleme pe toate browserele și platformele majore.

### Înțelegerea Acoperirii Codului 🎯

Acoperirea codului este o metrică crucială care ajută la menținerea unor aplicații de înaltă calitate, bine testate. Iată cum diverse unelte ajută cu acoperirea:

- **Istanbul/nyc**: Integrează cu cadrele de testare precum Mocha și Jest pentru a furniza metrici de acoperire, inclusiv acoperirea liniilor, declarațiilor, ramurilor și funcțiilor.
- **Scop**: Identifică părțile netestate ale codului tău, asigurând o acoperire cuprinzătoare a testelor.

### Alegerea Uneltei Potrivite 🛠️

Selectarea uneltei potrivite de testare depinde de:

- **Nevoile Proiectului**: Tipul de testare necesar (unitate, integrare, end-to-end).
- **Preferințele Echipei**: Familiaritatea și experiența cu uneltele.
- **Capacități de Integrare**: Compatibilitatea cu alte unelte din stack-ul tău de dezvoltare.

Combinația acestor unelte poate crea un mediu de testare robust care asigură că aplicațiile tale sunt testate amănunțit, de la unități individuale la interacțiunile utilizatorilor în diferite browsere.

---

## Începerea cu Jest în ExpressJS (20 minute) 🛠

Integrarea Jest în proiectul tău ExpressJS simplifică testarea, de la teste unitare la teste de integrare. Iată un ghid rapid cu exemple de cod pentru a începe.

### Pasul 1: Instalează Jest, supertest, mockingoose

```bash
npm install jest  => pachet pentru testare
npm install supertest => pachet pentru testare rute (api-uri)
npm install mockingoose => pachet pentru a pacali (mock), la operatiuniile care implica mongoose
```

### Pasul 2: Configurează package.json

Modifică package.json pentru a include un script pentru rularea Jest:

```javascript
"scripts": {
  "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
  "test:dev": "node --experimental-vm-modules node_modules/jest/bin/jest.js --watch"
},
"jest": {
  "transform": {} // Ca sa functioneze cu import/export
}
```

### Pasul 3: Configurează .eslintrc

Adaugam in fiser, pentru a nu primi erori:

```javascript
  "env": {
    "jest": true
  },
```

### Pasul 4: Configurează arhitectura proiectului

Cream folderul: \__tests_ , in care adaugam testele noaste, cu extensia: text.js
Spre exemplu: users.test.js

### Pasul 5: Configurarea testele

### Pasul 6: Rularea Testelor

Execută testele cu:

```bash
npm run test
```

Jest va găsi și va rula automat fișierele care se termină în .test.js, raportând rezultatele în terminal.

### Sfaturi Suplimentare:

- **Testarea Codului Asincron**: Utilizează `async/await` pentru a gestiona operațiunile asincrone în testele tale.
- **Mocking**: Jest oferă funcții încorporate pentru a face mock modulelor externe și API-urilor, îmbunătățind izolarea și viteza testelor.
- **Testarea de Integrare**: Dincolo de testele unitare, utilizează `supertest` cu Jest pentru a testa rutele Express, asigurându-te că API-ul răspunde
