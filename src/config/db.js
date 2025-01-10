// Question : Pourquoi créer un module séparé pour les connexions aux bases de données ?
// Réponse :  Séparation des préoccupations et réutilisation : Code de connexion regroupé en un seul endroit, facilitant la maintenance et la réutilisation.
// Question : Comment gérer proprement la fermeture des connexions ?
// Réponse : Pour gérer proprement la fermeture des connexions, il faut utiliser un mécanisme de gestion automatique comme un try-with-resources (en Java) ou un finally block, garantissant la fermeture des connexions même en cas d'erreur.

const { MongoClient } = require('mongodb');
const redis = require('redis');
const config = require('./env');

let mongoClient, redisClient, db;

async function connectMongo() {
  // TODO: Implémenter la connexion MongoDB
  const maxRetries=8;
  let retryCount=0
  while(retryCount<maxRetries){
    try{
      mongoClient = new MongoClient(config.mongodb.uri);
      await mongoClient.connect()
      db=mongoClient.db(config.mongodb.dbName)
      console.log("Connection with success")
      break;
    }catch(err){
      console.error("Error in the connection with MongoDB ",err)
      retryCount +=1;
      // Gérer les erreurs et les retries
      if(retryCount==7){
        console.error("Connection with MongoDB not working please try later !!")
        throw err;
      }
    }
  }
}

async function connectRedis() {
  // TODO: Implémenter la connexion Redis
  // Gérer les erreurs et les retries
  const maxRetries=8;
  let retryCount=0
  while(retryCount<maxRetries){
    try{
      redisClient=redis.createClient({url:config.redis.uri})
      redisClient.on('error', (err) => {
        throw err;
      });
      await redisClient.connect();
      break;
    }catch(err){
      console.error('Error in Connection with Redis ',err)
      retryCount+=1
      if(retryCount==7){
        console.error('Connection with Redis not working please try later !!');
        throw err;
      }
    }
  }
}

// Export des fonctions et clients
module.exports = {
  // TODO: Exporter les clients et fonctions utiles
};