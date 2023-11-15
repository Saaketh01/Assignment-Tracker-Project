let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect with assignment model
let Assignment = require('../models/assignment');

//Controller for assignment 
let AssignmentController = require('../controllers/assignment')

/* Get route for Assignment Tracker list */
// Read Operation
router.get('/', AssignmentController.DisplayAssignmentList);
/* Get route for Add Book page --> Create */
router.get('/add', AssignmentController.AddAssignment); 
/* Post route for Add Book page --> Create */
router.post('/add', AssignmentController.ProcessAssignment);
/* Get route for displaying the Edit Book page --> Update */
router.get('/edit/:id', AssignmentController.EditAssignment);
/* Post route for processing the Edit Book page --> Update */
router.post('/edit/:id', AssignmentController.ProcessEditAssignment);
/* Get to perform Delete Operation --> Delete Operation */
router.get('/delete/:id', AssignmentController.DeleteAssignment);
module.exports = router;