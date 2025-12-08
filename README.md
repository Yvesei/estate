# Estate

Une application web pour gérer, consulter et modifier des annonces immobilières.

## Lancer le Projet

### Prérequis
- Node.js 18+ 
- Docker & Docker Compose (optionnel)
- npm ou yarn

### Installation Locale

**1. Backend**
```bash
cd backend
npm install
npm run dev
```
Le serveur démarre sur `http://localhost:3000`

**2. Frontend**
```bash
cd frontend
cp .env.example .env 
npm install
npm start
```
Vous peuvez modifier le fichier `.env` avec vos propres valeurs:
```
# where the frontend runs
PORT=3900
# backend API URL
REACT_APP_BACKEND_API_URL=http://localhost:3000
```

L'application démarre sur `http://localhost:3900`

### Avec Docker Compose

```bash
docker-compose up -d --build
```

Frontend: `http://localhost:3900`  
Backend: `http://localhost:3000`
