const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//GET
router.get('/empleados', (req, res) => {
    mysqlConnection.query('SELECT * FROM users', (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }    
    });
});

//GET - ID
router.get('/empleados/:id', (req, res)=>{
    const {id} = req.params;//console.log(id);
    mysqlConnection.query('SELECT * FROM users WHERE user_id = ?', [id], (err, rows, fields)=>{
        if(!err){
            res.json(rows[0]);
        }else{
            console.log(err);
        }    
    });
});

//AGREGAR
router.post('/empleados', (req, res) => {
    const {unique_id,fname,lname,email,password,img,status} = req.body;
    console.log(unique_id,fname,lname,email,password,img,status);
    const query = `INSERT INTO users (unique_id,fname,lname,email,password,img,status) VALUES ('${unique_id}','${fname}','${lname}','${email}','${password}','${img}','${status}');`;
    mysqlConnection.query(query, (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Empleado Guardado'});
      } else {
        console.log(err);
      }
    });
});

//EDITAR
router.put('/empleados/:id', (req, res) => {
    const {unique_id,fname,lname,email,password,img,status} = req.body;
    const {id} = req.params;
    console.log(id,unique_id,fname,lname,email,password,img,status);
    const query = `UPDATE users SET unique_id='${unique_id}',fname='${fname}',lname='${lname}',email='${email}',password='${password}',img='${img}',status='${status}' WHERE user_id='${id}';`;
    mysqlConnection.query(query, (err, rows, fields) => {
      if(!err) {
        res.json({status: 'Empleado Actualizado'});
      } else {
        console.log(err);
      }
    });
});

//BORRAR
router.delete('/empleados/:id', (req, res) => {
    const {id} = req.params;//console.log(id);
    mysqlConnection.query('DELETE FROM users WHERE user_id = ?', [id], (err, rows, fields)=>{
        if(!err){
            res.json({msj: "El usuario ha sido eliminado"});
        }else{
            console.log(err);
        }    
    });
});


module.exports = router;