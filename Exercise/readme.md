### Comenzi:

- `npm start` &mdash; pornește serverul în modul production.
- `npm run start:dev` &mdash; pornește serverul în modul dezvoltare (development).
- `npm run lint` &mdash; rulează verificarea codului cu ESLint, este necesar să se ruleze înaintea fiecărui PR și să se corecteze toate erorile linterului.
- `npm run lint:fix` &mdash; aceeași verificare, dar cu corecții automate pentru erorile simple.
- `npm run create-env` &mdash; creaza fiserul: .env, in folderul: environment
- `npm run test` &mdash; porneste testarea cu jest
- `npm run test:dev` &mdash; porneste testarea automat cand se schimva ceva, (ca nodemon).

### Important:

- `fiserul: .env` &mdash; dupa ce a fost generat cu comanda de mai sus, trebuie completat: cu valoarea uri-ului de la baza de date, cu o valoare pentru jwt secret key, si cu email si password pentru conectare la outlook

### Configurare pentru testare:

- `Instalare dependinte (pachete)`: jest, supertest, mockingoose

  ```bash
  npm install jest  => pachet pentru testare
  npm install supertest => pachet pentru testare rute (api-uri)
  npm install mockingoose => pachet pentru a pacali (mock), la operatiuniile care implica mongoose
  ```

- `package.json`: configurarea fiserului: se adauga scripturile, si proprietatea jest

  ```javascript
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js",
    "test:dev": "node --experimental-vm-modules node_modules/jest/bin/jest.js --watch"
  },
  "jest": {
    "transform": {} // Ca sa functioneze cu import/export
  }
  ```

- `.eslintrc`: configurarea fiserului

  ```javascript
    "env": {
      "jest": true
    },
  ```

- `arhitectura folderului`: se creaza folderul: **tests**, la care se adauga testele (cu extensia test.js)
