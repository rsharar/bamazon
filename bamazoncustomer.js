var inq  = require('inquirer')
var mysql = require("mysql");


// establish mysql connection to products db
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon"
});

// test connection to bamazon
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

// use inq.prompt to give ask user 2 things
// 1. what is the ID of the product you want to buy?
// 2. how many units of the product do you want to buy?
// function checkQuantity(){

//}