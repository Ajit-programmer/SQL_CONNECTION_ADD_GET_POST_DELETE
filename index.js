// CJS
const { faker } = require('@faker-js/faker');
//import mysql from 'mysql2/promise';
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodoverride = require("method-override");

app.use(methodoverride("_method"));
app.use(express.urlencoded({ extended : true}));
app.use(express.json());
app.set("view engine" , "ejs");
app.set("views" , path.join(__dirname , "/views"));
// Create the connection to database
const connection =  mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password : 'Ajit@1234',
});

let createRandomUser = () => {
  return [
     faker.string.uuid(),
     faker.internet.username(),
   faker.internet.email(),
   // avatar: faker.image.avatar(),
     faker.internet.password(),    
  ];
};
// let t = "INSERT INTO student (id, username, email, password) VALUES ?";

// let data = [];
// for(let i=1;i<=100;i++){
//   data.push(createRandomUser());
// }


// let q = "SHOW TABLES";
// let student = [
//   ["4","Amil.T" , "Amil.T@gmail.com" , "Amil@1234"],
//   ["5","Sumit.m" , "Sumit.m@gmail.com" , "Sumit@1234"],
// ];
// try {
// connection.query ( t, [data] , (err , result) => {
//     if(err) throw err;
//     console.log(result);
// });
// } catch (err){
//     console.log(err);
// }
// connection.end();

// crud operation
app.listen("8080" , () => {
  console.log("App Listening On 8080");
})


// home route
app.get("/" , (req,res) => {
  let q = `SELECT count(*) from student`;
 try {
connection.query ( q , (err , result) => {
    if(err) throw err;
    let count = result[0]["count(*)"];
    // console.log(result);
    //res.send(result);
    res.render("home.ejs" , {count});
});
} catch (err){
    console.log(err);
    res.send("some error found")
}
});


// get or show route
app.get("/user" , (req,res) => {
  let q = `SELECT * FROM student`;
   try {
connection.query ( q , (err , students) => {
    if(err) throw err;
    res.render("show.ejs"  , {students});
});
} catch (err){
    console.log(err);
    res.send("some error found")
}
});


//edit route just provide form
app.get("/user/:id/edit" , (req,res) => {
  let {id} = req.params;
  let q  = `SELECT * FROM STUDENT WHERE id = '${id}'`;
  try {
connection.query ( q , (err , result) => {
    if(err) throw err;
    let student = result[0];
    console.log(student);
  res.render("edit.ejs" , {student});
});
} catch (err){
    console.log(err);
    res.send("some error found")
}
});



//update route to actually update into database
app.patch("/user/:id" , (req,res) => {
    let {id} = req.params;
    let {password : formPass , username : newUsername} = req.body;
  let q  = `SELECT * FROM student WHERE id = '${id}'`;
  try {
connection.query ( q , (err , result) => {
    if(err) throw err;
    let student = result[0];
    if (formPass != student.password){
     res.send("wrong password");
    } else {
      let q2 = `UPDATE student SET username = '${newUsername}' where id = '${id}'`;
      connection.query(q2 , (err,result) => {
        if(err) throw err;
        res.redirect("/user");
       });
    }
 });
} catch (err){
    console.log(err);
    res.send("some error found")
}
})


app.get("/user/add", (req, res) => {
   res.render("add.ejs"); // make addStudent.ejs form
});

app.post("/user", (req, res) => {
    let { id, username, email, password } = req.body;
    let q = `INSERT INTO student (id, username, email, password) VALUES (?, ?, ?, ?)`;
    connection.query(q, [id, username, email, password], (err, result) => {
        if (err) throw err;
        res.redirect("/user");
    });
});



app.delete("/user/:id", (req, res) => {
    let { id } = req.params;
    let q = `DELETE FROM student WHERE id = ?`;
    connection.query(q, [id], (err, result) => {
        if (err) throw err;
        res.redirect("/user"); // back to list
    });
});
