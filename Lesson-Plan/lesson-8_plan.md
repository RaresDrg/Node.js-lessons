---
title: Lectia 8 - Login, Register in expressJS
description: Plan de lecție pentru cursul GoIT
tags:
  - plan
  - lesson
  - learn
---
# Lecția 8: Strategii Avansate JWT🔒

#### Obiectiv:

Explorăm mai profund strategiile JWT, inclusiv stocarea și gestionarea token-urilor, și implementarea unei rute de înregistrare și a accesului securizat la rute.

---

## Partea 1: 🛡 Strategia JWT pentru Autentificare

Astăzi, vom aprofunda modul în care putem stoca și gestiona în siguranță JSON Web Tokens (JWTs) 🗝 în aplicațiile noastre client. Înțelegerea implicațiilor diferitelor strategii de stocare și a modului de a gestiona eficient expirarea token-urilor este crucială.

### Stocarea JWT-urilor într-o Aplicație Client

Când stocăm JWT-uri, avem două opțiuni comune: **LocalStorage** și **Cookies**. Să le comparăm:

#### LocalStorage 📦

- **Pro:**
 - Simplu de implementat. Acces ușor prin JavaScript pe același domeniu.

- **Contra:**
 - Vulnerabil la atacuri Cross-Site Scripting (XSS) 🕸. Dacă un atacator execută JavaScript pe site-ul dvs., poate accesa token-urile.

#### Cookies 🍪

- **Pro:**
 - Pot fi setate ca `HTTPOnly`, inaccesibile prin JavaScript, reducând riscurile XSS.
 - Pot fi marcate ca `Secure`, asigurând transmiterea doar prin HTTPS.

- **Contra:**
 - Trebuie protejate împotriva atacurilor Cross-Site Request Forgery (CSRF) 🛡.
 - Necesită o configurare atentă pentru gestionare sigură.

### Gestionarea Expirării și Reînnoirii JWT ⏳

- **Expirare**: Setați o expirare pentru token-uri pentru a minimiza impactul compromiterii. Preferă token-uri cu durată scurtă de viață pentru securitate.
- **Reînnoire**: Utilizați token-uri de reîmprospătare stocate în siguranță pe partea clientului. Acestea ajută la obținerea de noi JWT-uri la expirarea celor actuale, asigurând sesiuni de utilizator neîntrerupte.

## Considerații de Securitate

Securitatea în gestionarea JWT-urilor este primordială. Să acoperim capcanele comune și cele mai bune practici esențiale.

### Capcane Comune de Securitate

- **Neutilizarea HTTPS 🔒**: Criptați întotdeauna datele în tranzit pentru a le proteja de interceptare.
- **Expunerea la Atacuri XSS 🕸**: Stocarea JWT-urilor în LocalStorage crește riscul. Dezinfectați intrările/ieșirile pentru a atenua aceste amenințări.

### Cele mai Bune Practici pentru Utilizarea Sigură a JWT

1. **Impuneți HTTPS 🔒**: Asigurați-vă că toate transmisiile de date sunt criptate.
2. **Utilizați Cookie-uri `HTTPOnly` și `Secure` 🍪**: Protejați token-urile de accesul JavaScript și asigurați transmiterea sigură.
3. **Implementați Token-uri cu Durată Scurtă de Viață ⌛**: Limitează fereastra de utilizare a token-urilor compromise.
4. **Dezinfectați Datele 🧹**: Preveniți atât atacurile de injecție, cât și cele XSS.
5. **Politică CORS Strictă 🚧**: Controlați ce domenii pot accesa resursele dvs.
6. **Rotirea Token-urilor de Reîmprospătare 🔁**: Schimbați token-urile de reîmprospătare la fiecare utilizare pentru a limita daunele în caz de compromitere.

---
## Partea 2: Token-uri de Reîmprospătare

### Înțelegerea Token-urilor de Reîmprospătare 🤔

În dezvoltarea web modernă, menținerea sesiunilor utilizatorilor sigure și eficiente este esențială. Aici intră în joc **Token-urile de Reîmprospătare**.

#### Ce Sunt Token-urile de Reîmprospătare? 🧩

În timp ce **Token-urile de Acces** sunt de scurtă durată și acordă acces la resurse, **Token-urile de Reîmprospătare** sunt de lungă durată și sunt folosite pentru a obține noi Token-uri de Acces atunci când acestea expiră. Această abordare ajută la îmbunătățirea securității și a experienței utilizatorului prin reducerea nevoii de logări frecvente.

### Strategia Dual-Token 🛡

1. **Access Token**: Expiră rapid pentru a minimiza riscul în cazul în care este compromis.
2. **Refresh Token**: Durează mai mult și este folosit pentru a solicita noi Access Tokens. Este mai sigur și poate fi invalidat dacă este necesar.

### Implementarea Fluxului de Token-uri de Reîmprospătare 🏗

Să integrăm un flux de token-uri de reîmprospătare într-o aplicație Express, presupunând că aveți deja o configurație de autentificare de bază.

#### Pasul 1: Emiterea Token-urilor 🎟

Când utilizatorii se loghează, dați-le atât un Access Token, cât și un Refresh Token:

```javascript
const accessToken = generateAccessToken(user); // Expirare scurtă
const refreshToken = generateRefreshToken(user); // Expirare mai lungă
```

**Unde să Stocați Refresh Token-ul?**

Stocați Refresh Token-ul în baza dvs. de date legat de utilizator. Acest lucru este crucial pentru validarea token-ului ulterior și emiterea de noi Access Tokens atunci când este necesar.

#### Pasul 2: Utilizarea Token-urilor de Reîmprospătare 🔁

Când Access Token-ul este pe cale să expire, clientul solicită unul nou folosind Refresh Token-ul:

```javascript
app.post('/token', (req, res) => {
 const { token } = req.body;
 if (!token) return res.sendStatus(401);

 const storedToken = findRefreshToken(token); // Funcție pentru a găsi token-ul în DB
 if (!storedToken) return res.sendStatus(403);

 jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
  if (err) return res.sendStatus(403);
  const accessToken = generateAccessToken({ name: user.name });
  res.json({ accessToken });
 });
});
```

#### Pasul 3: Expirarea și Revocarea Token-urilor 🚫

- **Expirare**: Refresh Token-urile ar trebui să aibă o expirare sau să fie rotite regulat pentru o mai bună securitate.
- **Revocare**: Permiteți revocarea Refresh Token-urilor atunci când utilizatorii se deconectează sau își schimbă parolele.

#### Considerații de Securitate 🔒

- Stocați Refresh Token-urile în siguranță în baza dvs. de date.
- Utilizați cookie-uri HTTPOnly pentru stocarea Refresh Token-urilor dacă le trimiteți prin browser pentru a proteja împotriva atacurilor XSS.
- Protejați împotriva atacurilor CSRF atunci când utilizați cookie-uri pentru a stoca token-uri.

### Exemplu din Lumea Reală: Rotația Token-urilor 🔄

Cu rotația token-urilor, emiteți un nou Refresh Token de fiecare dată când un Access Token este reîmprospătat, invalidând vechiul Refresh Token. Acest lucru limitează durata de viață a oricărui token, îmbunătățind securitatea.

```javascript
app.post('/token', (req, res) => {
 // Verificați vechiul refresh token...
  
 // Dacă este valid, generați token-uri noi...
 const newAccessToken = generateAccessToken(user);
 const newRefreshToken = generateRefreshToken(user);
  
 // Înlocuiți vechiul refresh token cu cel nou în DB...
  
 // Trimiteți înapoi token-urile noi...
});
```

---

## Partea 3: Implementarea unei Rute de Înregistrare

În această secțiune, vom aborda crearea unei rute de înregistrare a utilizatorilor într-o aplicație Express, un pas crucial în securizarea aplicației noastre și în furnizarea unei experiențe de utilizator fără probleme. 

Punctul central va fi nu doar pe crearea utilizatorului, ci și pe gestionarea sigură a acreditărilor utilizatorului și pe emiterea unui JWT la înregistrarea cu succes. Să ne adâncim în detalii.

### Înregistrarea Utilizatorului și Emiterea Token-urilor 🚀

#### Cod Live: Implementați o Rută de Înregistrare

- **Obiectiv**: Creați o rută care permite noilor utilizatori să se înregistreze. La înregistrarea cu succes, utilizatorul ar trebui