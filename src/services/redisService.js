// Question : Comment gérer efficacement le cache avec Redis ?
// Réponse : Définissez des stratégies pour invalider le cache lorsque les données sous-jacentes changent.
//Pour des données volumineuses, envisagez de compresser les données avant de les stocker.
//Mettez en cache uniquement les données qui sont fréquemment accédées ou coûteuses à calculer.

// Question: Quelles sont les bonnes pratiques pour les clés Redis ?
// Réponse : Utiliser des noms de clés explicites , Adopter une convention de nommage cohérente,
//Limiter la longueur des clés, Utiliser des TTL (Time-to-Live) appropriés
const {redisClient}=require('../config/db')
// Fonctions utilitaires pour Redis
async function cacheData(key, data, ttl) {
    // TODO: Implémenter une fonction générique de cache
    await redisClient.set(key, JSON.stringify(data), 'EX', ttl);
  }
  
  module.exports = {
    // TODO: Exporter les fonctions utilitaires
    cacheData
  };