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
// 1. what is the ID of the product you want to buy?
// 2. how many units of the product do you want to buy?
// check if the quantity of a product is available to buy
// function checkQuantity(){
    // sql query to products table in bamazon DB to return stockquantity based on itemid
    // if (stockQuantity < unitsRequested){
        // console.log("Insufficient quantity!")
    //}
    // else{
        // function updateStockQuantity(){
            // sql query (SELECT stockQuantity FROM products WHERE id = ?) to pull stockQuantity
            // var newQuantity = stockQuantity - unitsRequested
            // sql query (UPDATE products SET stockQUANTITY = newQuantity)
            // init();
        //}
        // function fulfillOrder(){
            // console.log(cost of purchase)
        //}
    //}
//}