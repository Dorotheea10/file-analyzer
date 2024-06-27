# Usa un'immagine di Node.js versione 14 dal Docker Hub
FROM node:14

# Imposta il working directory all'interno del container
WORKDIR /app

# Copia i file package.json e package-lock.json
COPY package*.json ./

# Installa le dipendenze del progetto
RUN npm install

# Copia tutto il codice sorgente nella directory corrente del container
COPY . .

# Esponi la porta 3000 (opzionale, se necessario)
EXPOSE 3000

# Comando per avviare l'applicazione
CMD ["npm", "start"]
