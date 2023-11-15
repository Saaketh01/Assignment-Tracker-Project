let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connection with assignment model
let Assignment = require('../models/assignment');

/*CRUD Operation---> Create, Update, Read, Delete */

/* Read Operation */

/* Get route for the assignment list */
module.exports.DisplayAssignmentList = async (req, res, next) => {
    try {
        const AssignList = await Assignment.find();
        res.render('assignment/list', { AssignList }); // Updated view name to 'list'
    } catch (err) {
        console.error(err);
        res.render('assignment/list', {
            title: 'Tracker',
            error: 'Error on server'
        });
    }
};

/*Create Operation */

/* Get route for Add Assignment page */
module.exports.AddAssignment = async (req, res, next) => {
    try{
        res.render('assignment/add',{
        title:'Add Assignment'
    })
    }
    catch(err){
        console.error(err)
        res.render('assignment/list',
        {
            error:'Error on the server'
        });
    }
};

/* Post route for Add Assignment page */
module.exports.ProcessAssignment = async (req, res, next) => {
    try{
        let newAssignment = Assignment({
            "CourseName":req.body.CourseName,
            "AssignmentName":req.body.AssignmentName,
            "Duedate":req.body.DueDate,
            "Status":req.body.Status,
        });
        Assignment.create(newAssignment).then(()=>{
            res.redirect('/assignmentlist')
        })
    }
    catch(err){
        console.error(err)
        res.render('assignment/list',
        {
            error:'Error on the server'
        });
    }
};

/*Update Operation */

/* Get route for displaying the Edit Assignment page ----> update */
module.exports.EditAssignment = async (req, res, next) => {
    try{
        const id = req.params.id;
        const assignmentToEdit = await Assignment.findById(id);
        res.render('assignment/edit',{
            title: 'Edit Assignment',
            Assignment:assignmentToEdit
        })
    }
    catch(err){
        console.error(err)
        res.render('assignment/list',
        {
            error:'Error on the server'
        });
    }
};

/* Post route for processing the Edit Assignment page ----> update */
module.exports.ProcessEditAssignment = async (req, res, next) => {
    try{
        const id = req.params.id;
        let updatedAssignment = Assignment({
            "_id":id,   
            "CourseName":req.body.CourseName,
            "AssignmentName":req.body.AssignmentName,
            "Duedate":req.body.DueDate,
            "Status":req.body.Status,
        });
        Assignment.findByIdAndUpdate(id,updatedAssignment).then(()=>
            res.redirect('/assignmentlist')
        )
    }
    catch(err){
        console.error(err)
        res.render('assignment/list',
        {
            error:'Error on the server'
        });
    }
};

/* Delete Operation */
module.exports.DeleteAssignment = async (req, res, next) => {
    try{
        let id = req.params.id;
        Assignment.deleteOne({_id:id}).then(()=>{
            res.redirect('/assignmentlist')
        })
    }
    catch(err){
        console.error(err)
        res.render('assignment/list',
        {
            error:'Error on the server'
        });
    }
};


