---
title: NodeJS - Lecția 12
description: Plan de lecție pentru cursul GoIT
tags:
  - plan
  - lesson
  - learn
---

# Lecția 12: WebSockets și Socket.io 🔌

## Obiective 🎯

- Înțelegeți **WebSockets** și rolul lor în comunicarea în timp real.
- Explorați **biblioteca `ws`** pentru comunicarea WebSocket.
- Învățați să implementați comunicarea în timp real într-o aplicație Express folosind **Socket.io**.
- Construiți o **aplicație de chat în timp real** de bază.

## Partea 1: Introducere în WebSockets 🌐

### Ce sunt WebSockets? 💡

Un WebSocket este un protocol de comunicare care oferă canale de comunicare bidirecționale complete printr-o singură conexiune TCP. Acesta permite o conexiune în timp real, bazată pe evenimente, între un client și un server.

![FullDuplex](https://cdn.everythingrf.com/live/1679566744825_638151635411310923.png)

### Bazele protocolului WebSocket 🔄

Spre deosebire de software-ul tradițional HTTP, care urmează un model de solicitare-răspuns, WebSockets permit comunicarea bidirecțională. Aceasta înseamnă că clientul și serverul pot trimite date unul către celălalt în orice moment, fără solicitări continue.

![Websockets](https://scaler.com/topics/images/websocket-image1.webp)

### Unde folosim acest lucru? 🌍

1. **Aplicații de chat:** Trimiterea instantanee a mesajelor în chat-urile de grup 💬.
2. **Jocuri online:** Sincronizarea mișcărilor de joc cu prietenii 🎮.
3. **Tranzacționarea acțiunilor:** Obținerea actualizărilor live ale prețurilor acțiunilor 💹.
4. **Colaborare pe documente:** Lucrul simultan la același document 📝.
5. **Actualizări sportive:** Vizionarea scorurilor live ale jocurilor preferate 🏈.
6. **Dispozitive inteligente pentru casă:** Controlul luminilor sau termostatului de la distanță 🏠.

---

## Partea 2: Explorarea bibliotecii `ws` 📡

Crearea unei aplicații server/client de chat WebSocket implică configurarea unui server WebSocket care poate gestiona comunicarea bidirecțională în timp real cu clienții. Pentru acest ghid, vom folosi biblioteca `ws` în Node.js pentru server și JavaScript simplu pentru client.

### Pasul 1: Configurați proiectul

1. **Inițializați un nou proiect Node.js:**

   - Creați un nou director pentru proiectul vostru și navigați în acesta.
   - Rulați `npm init -y` pentru a genera un fișier `package.json`.

2. **Instalați `ws`:**
   - Instalați biblioteca WebSocket `ws` rulând `npm install ws`.

### Pasul 2: Creați serverul WebSocket

1. **Creați un fișier de server:**

   - În directorul proiectului, creați un fișier numit `server.js`.

2. **Configurați serverul WebSocket:**
   - Deschideți `server.js` și adăugați următorul cod pentru a crea un server WebSocket care ascultă conexiuni și mesaje:

```javascript
import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

console.log("WS Server started");
wss.on("connection", function connection(ws) {
  console.log("A new client connected!");
  ws.on("message", function incoming(message) {
    console.log("received: %s", message);

    // Broadcast incoming message to all clients
    wss.clients.forEach(function each(client) {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.send("Welcome to the chat!");
});
```

3. **Rulați serverul:**
   - Porniți serverul WebSocket rulând `node server.js` în terminal. Serverul vostru va asculta pe portul 8080.

### Pasul 3: Creați clientul WebSocket

1. **Creați un fișier HTML pentru client:**

   - În directorul proiectului, creați un fișier HTML numit `index.html`.

2. **Configurați interfața clientului și conexiunea WebSocket:**
   - Editați `index.html` pentru a include o interfață simplă de chat și JavaScript pentru a se conecta la serverul WebSocket:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>WebSocket Chat</title>
  </head>
  <body>
    <h2>WebSocket Chat</h2>
    <div id="chat"></div>
    <input type="text" id="messageInput" placeholder="Type a message..." />
    <button onclick="sendMessage()">Send</button>

    <script>
      var ws = new WebSocket("ws://localhost:8080");
      ws.binaryType = "blob";

      var chat = document.getElementById("chat");

      ws.onmessage = function (event) {
        var messageParagraph = document.createElement("p");

        if (event.data instanceof Blob) {
          reader = new FileReader();
          reader.onload = () => {
            messageParagraph.innerHTML = reader.result;
            chat.appendChild(messageParagraph);
          };
          reader.readAsText(event.data);
        } else {
          console.log("Result2: " + event.data);
          messageParagraph.innerHTML = event.data;
          chat.appendChild(messageParagraph);
        }
      };

      function sendMessage() {
        var input = document.getElementById("messageInput");
        ws.send(input.value);
        input.value = "";
      }
    </script>
  </body>
</html>
```

Acest cod stabilește o conexiune WebSocket la serverul care rulează pe `localhost:8080` și definește o interfață simplă pentru trimiterea și afișarea mesajelor.

### Pasul 4: Testați aplicația de chat

1. **Deschideți clientul într-un browser:**

   - Deschideți `index.html` în browser. Ar trebui să vedeți interfața de chat.

2. **Conectați mai mulți clienți:**

   - Deschideți `index.html` în mai multe ferestre sau tab-uri de browser pentru a simula mai mulți clienți.

3. **Trimiteți mesaje:**
   - Tastați un mesaj în câmpul de introducere și faceți clic pe "Send". Mesajul ar trebui să apară la toți clienții conectați, inclusiv cel care a trimis mesajul.

Felicitări! 🎉 Ați creat o aplicație de chat de bază folosind WebSockets cu biblioteca `ws`. Această configurare permite comunicarea în timp real între un server și clienți, permițând trimiterea și primirea instantanee a mesajelor.

---

## Partea 3: Început cu Socket.io 🚀

Socket.IO este o bibliotecă bazată pe evenimente pentru aplicații web în timp real. Permite comunicarea bidirecțională în timp real între clienți web și servere. Este formată din două componente: un client și un server.

| Caracteristică                | `ws`                                                                                                                                   | Socket.io                                                                                                                                                                 |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Ușurința de utilizare**     | - Abstracție minimă necesită gestionarea manuală a multor aspecte ale comunicării WebSocket.                                           | - Abstracție la nivel înalt cu funcții încorporate precum reconectare automată, namespaces și rooms.                                                                      |
| **Flexibilitate**             | - Oferă mai mult control și flexibilitate datorită abordării minimaliste.                                                              | - Mai puțină flexibilitate în gestionarea la nivel inferior datorită abstracției, dar foarte personalizabilă prin evenimente și middleware.                               |
| **Scalabilitate**             | - Ușor, dar necesită implementare manuală pentru funcții precum broadcast și scalarea pe mai multe servere.                            | - Suportă scalabilitatea prin adaptoare (ex. Redis) pentru o scalare ușoară pe mai multe procese sau servere.                                                             |
| **Compatibilitate**           | - Focalizat pe protocolul WebSocket fără opțiuni de fallback încorporate pentru browsere mai vechi sau condiții de rețea problematice. | - Gestionează automat fallback-urile la long-polling sau alte metode de transport atunci când WebSocket-urile nu sunt disponibile, asigurând o compatibilitate mai largă. |
| **Bogăția caracteristicilor** | - Oferă o API curată, la nivel scăzut pentru comunicarea WebSocket, lăsând caracteristicile suplimentare dezvoltatorului.              | - Set bogat de caracteristici încorporate precum reconectare automată, comunicare bazată pe evenimente, rooms și namespaces.                                              |

| \*\*

Performanță** | - Performanță brută ușor mai bună datorită simplității și aderenței mai stricte la protocolul WebSocket. | - Caracteristicile suplimentare și suprastructura pot afecta performanța, deși diferențele sunt adesea neglijabile pentru majoritatea aplicațiilor. |
| **Caz de utilizare\*\* | - Potrivit pentru proiecte în care este necesar controlul complet asupra comunicării WebSocket sau când suportul WebSocket este singura cerință. | - Ideal pentru aplicații în timp real care necesită caracteristici robuste din start, cum ar fi aplicațiile de chat, analizele în timp real și jocurile interactive. |

### Recomandare pentru o aplicație de chat

Pentru o **aplicație de chat**, **Socket.io** este în general recomandat datorită ușurinței de utilizare, setului cuprinzător de caracteristici (inclusiv reconectare automată, rooms și namespaces) și suportului încorporat pentru scalabilitate și compatibilitate în diverse medii.

Aceste caracteristici reduc semnificativ timpul de dezvoltare și complexitatea, făcând mai ușoară implementarea cerințelor tipice pentru aplicațiile de chat, cum ar fi mesajele directe, chat-urile de grup și actualizările în timp real.

### Configurare 🛠

Asigurați-vă că aveți instalate Node.js și npm. Inițializați un nou proiect Node.js și instalați Express și Socket.io:

```bash
mkdir websocket-chat && cd websocket-chat
npm init -y
npm install express socket.io
```

### Configurarea Socket.io 🔧

Socket.io abstractizează comunicațiile WebSocket, oferind caracteristici suplimentare și fallback-uri pentru compatibilitate. Pentru a integra Socket.io într-o aplicație Express, urmați această configurare:

**server.js:**

```javascript
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(3000, () => {
  console.log("Listening on *:3000");
});
```

### Comunicare simplă cu Socket.io 💬

Creați un fișier HTML pe partea clientului pentru a se conecta și a comunica cu serverul Socket.io.

**Partea clientului (public/index.html):**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Socket.io Chat</title>
  </head>
  <body>
    <script
      src="https://cdn.socket.io/4.7.5/socket.io.min.js"
      integrity="sha384-2huaZvOR9iDzHqslqwpR87isEmrfxqyWOF7hr7BY6KG0+hVKLoEXMPUJw3ynWuhO"
      crossorigin="anonymous"
    ></script>
    <script>
      const socket = io();
    </script>
  </body>
</html>
```

---

## Concluzie 🌟

Am explorat bazele WebSockets, puterea Socket.io, simplitatea bibliotecii `ws` și am trecut prin construirea unei aplicații de chat de bază. Această fundație vă va ajuta să implementați comunicarea în timp real în aplicațiile voastre web.

## Lecturi suplimentare 🔍

- [Documentația Socket.io](https://socket.io/docs/)
- [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API)
- [Documentația Express](https://expressjs.com/)
