


const {Client} = require('pg') //this connects between client(this code) to postgres , client is a package in pg module


const client = new Client ({
    host :  "localhost",
    user : "postgres", 
    port : 5432,
    password : "Fahim@12345",
    database : "sampleDB"

})   //assigning client to new variable called "client" , to run qurey and modify db

client.connect();


client.query(`select * from person`, (err,results)=>{
    if(!err){
        console.log(results.rows)
    }else{
        console.log(err.message)
    }
    client.end;
})



