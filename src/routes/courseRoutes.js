// Question: Pourquoi séparer les routes dans différents fichiers ?
// Réponse : En séparant les routes dans différents fichiers, vous pouvez améliorer l'organisation,
//la maintenabilité, la collaboration, la réutilisabilité, la scalabilité et l'isolation des composants
// de votre application. Cela rend le développement plus efficace et le code plus propre et plus facile à gérer.
// Question : Comment organiser les routes de manière cohérente ?
// Réponse: Séparer les Routes par Fonctionnalité ,Utiliser une Convention de Nommage Consistante,
//Structurer les Routes de Manière Hiérarchique 

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Routes pour les cours
router.post('/', courseController.createCourse);
router.get('/:id', courseController.getCourse);
router.get('/stats', courseController.getCourseStats);

module.exports = router;