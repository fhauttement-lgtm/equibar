# Utilise une image Node.js légère
FROM node:18-alpine

# Définis le répertoire de travail
WORKDIR /app

# Copie package.json et package-lock.json (ou yarn.lock)
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie le reste des fichiers
COPY . .

# Génère les artefacts Prisma
RUN npx prisma generate

# Build l'application
RUN npm run build

# Expose le port
EXPOSE 5000

# Démarre l'application
CMD ["npm", "start"]