// Question: Quelle est la différence entre un contrôleur et une route ?
// Réponse: Un contrôleur est responsable de la logique métier de l'application, tandis qu'une route
//est responsable de l'acheminement des requêtes HTTP vers les contrôleurs appropriés.
// Question : Pourquoi séparer la logique métier des routes ?
// Réponse : Séparer la logique métier des routes permet de rendre le code plus modulaire, plus facile 
//à maintenir et à tester, et de faciliter la réutilisation de la logique métier dans différentes
// parties de l'application.

const { ObjectId } = require('mongodb');
const db = require('../config/db');
const mongoService = require('../services/mongoService');
const redisService = require('../services/redisService');

async function createCourse(req, res) {
  // TODO: Implémenter la création d'un cours
  // Utiliser les services pour la logique réutilisable
  try{
    const course=req.body;
    const result=await mongoService.insertOne('course',course)
    res.status(201).json(result)
  }catch(err){
    res.status(500).json({ error: 'Failed to create course' });
    console.error("Failed to create course")
  }
}

async function getCourse(req,res){
  const { id } = req.params;
  try{
    let course = await redisService.getCachedData(id);
    if(!course){
      course = await mongoService.findOneById('course',id)
      if(course){
        await redisService.cacheData(id,course,3600)
      }
    }
    res.status(200).json(course)
  }catch(err){
    res.status(500).json({error:'Faild to load course'});
  }
}
async function getCourseStats(req,res){
  try{
    let stats=await mongoService.getCoursesStats();
    res.stats(200).json(stats)
  }catch(err){
    console.error(err)
  }
}

// Export des contrôleurs
module.exports = {
  // TODO: Exporter les fonctions du contrôleur
  createCourse,
  getCourse,
};