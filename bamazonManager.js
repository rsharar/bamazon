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

// function init(){}
// use inq.prompt to give ask user 2 things
// 1. View products for sale
// 2. View low inventory
// 3. Add to Inventory
// 4. Add New Product
// function viewProducts(){
    
//}
  