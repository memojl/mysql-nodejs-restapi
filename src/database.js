const mysql = require('mysql');

const mysqlConecction = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'phponixdev'
});


mysqlConecction.connect(function(err){
    if(err){
        console.log(err); 
        return       
    }else{
        console.log('La DB esta conectada');   
    }
});

module.exports = mysqlConecction;