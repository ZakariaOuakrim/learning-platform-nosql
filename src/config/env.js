// Question: Pourquoi est-il important de valider les variables d'environnement au démarrage ?
// Réponse : Valider les variables d'environnement au démarrage permet donc d'améliorer la sécurité, 
//la fiabilité et la maintenabilité de l'application en garantissant que toutes les configurations
// nécessaires sont correctement définies avant l'exécution.

// Question: Que se passe-t-il si une variable requise est manquante ?
// Réponse : Si une variable requise est manquante, l'application risque de ne pas fonctionner correctement. 
//Cela peut entraîner des erreurs au démarrage ou pendant l'exécution, comme l'incapacité de se connecter 
//à une base de données, de contacter des services externes, ou de charger des configurations critiques.

const dotenv = require('dotenv');
dotenv.config();

const requiredEnvVars = [
  'MONGODB_URI',
  'MONGODB_DB_NAME',
  'REDIS_URI'
];

// Validation des variables d'environnement
function validateEnv() {
  // TODO: Implémenter la validation
  // Si une variable manque, lever une erreur explicative
  requiredEnvVars.forEach((varname)=>{
    if(!process.env[varname]){
      throw new Error(`Missing required environment variable: ${varName}`);
    }
  })
}

module.exports = {
  mongodb: {
    uri: process.env.MONGODB_URI,
    dbName: process.env.MONGODB_DB_NAME
  },
  redis: {
    uri: process.env.REDIS_URI
  },
  port: process.env.PORT || 3000
};