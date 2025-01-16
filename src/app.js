// Question: Comment organiser le point d'entrée de l'application ?
// Question: Quelle est la meilleure façon de gérer le démarrage de l'application ?

const express = require('express');
const db = require('./config/db');
const config = require('./config/env');
const db = require('./config/db');

const courseRoutes = require('./routes/courseRoutes');
const studentRoutes = require('./routes/studentRoutes');

const app = express();


async function startServer() {
  try {
    // TODO: Initialiser les connexions aux bases de données
    await db.connectMongo()
    await db.connectRedis()
    // TODO: Configurer les middlewares Express
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    // TODO: Monter les routes
    app.use('/api', courseRoutes);
    // TODO: Démarrer le serveur
    app.listen(config.port, () => {
      console.log(`Server started on port ${config.port}`);
    });
  
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

// Gestion propre de l'arrêt
process.on('SIGTERM', async () => {
  // TODO: Implémenter la fermeture propre des connexions
});

startServer();