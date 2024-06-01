---
title: Lectia 7 - JWT
description: Plan de lecție pentru cursul GoIT
tags:
  - plan
  - lesson
  - learn
---
# Lectia 7 - Securizarea Aplicațiilor Web cu JSON Web Tokens (JWT) 🔐

## Obiective de Învățare

*   Studenții vor înțelege conceptul de JWT și rolul său în autentificarea și autorizarea utilizatorilor. 🤓
*   Vor putea identifica și explica structura unui JWT (header, payload, signature). 🧩
*   Vor putea implementa un flux de autentificare simplu folosind JWT într-o aplicație web de exemplu. 🛠️

## Planul Lecției:

1.  **Introducere (15 minute)**
    *   Ce este autentificarea și autorizarea? 🤔
        *   Importanța securității în aplicațiile web 🔒
        *   Metode tradiționale de autentificare (sesiuni, cookie-uri) 🍪
    *   De ce JWT? 🚀
        *   Avantaje față de metodele tradiționale (stateless, scalabilitate, securitate) 💪
        *   Cazul de utilizare principal: autentificarea și autorizarea API-urilor 🌐

2.  **Structura unui JWT (20 minute)**
    *   Cele trei părți ale unui JWT:
        *   **Header:** Algoritmul de criptare și tipul token-ului (JWT) 🔐
        *   **Payload:** Datele utilizatorului (de exemplu, ID, nume, rol) – **ATENȚIE:** nu stocați parole sau date sensibile! 🚫
        *   **Signature:** Semnătura digitală pentru verificarea autenticității token-ului ✍️
    *   Demonstrație vizuală a structurii (diagramă sau exemplu de JWT decodat) 📊

3.  **Cum funcționează JWT în autentificare (30 minute)**
    *   Fluxul de autentificare:
        1.  Utilizatorul se autentifică (introduce credențialele). 👤
        2.  Serverul verifică credențialele și generează un JWT. ⚙️
        3.  JWT-ul este trimis clientului (de obicei în header-ul `Authorization`). 📬
        4.  Clientul trimite JWT-ul la fiecare cerere ulterioară către server. 🔁
        5.  Serverul validează JWT-ul și acordă acces la resurse. ✅
    *   Implementare practică (dacă timpul permite):
        *   Folosiți o librărie JWT (de exemplu, `jsonwebtoken` pentru Node.js) 🧰
        *   Creați un endpoint de autentificare și unul protejat 🚧
        *   Demonstrați cum să generați și să validați JWT-uri 🔍

4.  **Autorizare cu JWT (15 minute)**
    *   Cum să utilizați informațiile din payload pentru a controla accesul la resurse 🚦
    *   Conceptul de "role" sau "permisiuni" 👥
    *   Exemplu de cum să verificați rolul utilizatorului înainte de a permite o acțiune 🚫✅

5.  **Considerații de Securitate (10 minute)**
    *   JWT-urile nu sunt infailibile! ⚠️
    *   Importanța secretului folosit pentru semnătură 🤫
    *   Timpul de expirare a JWT-urilor (pentru a limita riscul în cazul în care un token este compromis) ⏱️
    *   Alte măsuri de securitate (HTTPS, refresh tokens) 🛡️

6.  **Rezumat și Concluzii (5 minute)**
    *   Recapitulați principalele puncte ale lecției ✅
    *   Subliniați importanța JWT-urilor în securitatea aplicațiilor web moderne 🌟
