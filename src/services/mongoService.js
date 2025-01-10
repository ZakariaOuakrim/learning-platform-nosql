// Question: Pourquoi créer des services séparés ?
// Réponse:  créer des services séparés permet de construire des applications plus modulaires,
//réutilisables, scalables, maintenables, et sécurisées, tout en facilitant le développement parallèle 
//et l'isolation des pannes.

const { ObjectId } = require('mongodb');
const mongodb = require('../config/db')
// Fonctions utilitaires pour MongoDB
async function findOneById(collection, id) {
  // TODO: Implémenter une fonction générique de recherche par ID

}
async function insertOne(collectionName,document){
  const db=mongodb.getMongoDb();
  const collection= db.collection(collectionName)
  return await collection.insertOne(document)
}

// Export des services
module.exports = {
  // TODO: Exporter les fonctions utilitaires
};