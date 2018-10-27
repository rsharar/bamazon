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

//
function init(){
    inq.prompt([
        {
            message: "Hello Manager! What do you need to do today?",
            name: "choosetask",
            type: "list",
            choices: ["View products for sale","View low inventory","Add to Inventory","Add New Product"]
        }
    ]).then(function(res){
        switch(res.choosetask){
            case "View products for sale":
            viewProducts();
            break;
            case "View low inventory":
            viewLowInventory();
            break;
            case "Add to Inventory":
            addInventory();
            break;
            case "Add New Product":
            addNewProdut();
            break;
        }
    })
}

function viewProducts(){
    connection.query(
        "SELECT * FROM products", function(err,results){
            if (err) throw err;
            for (i in results){
                console.log("Item: " + results[i].productname + ", Price: " + results[i].price + ", Available Quantity: " + results[i].stockQuantity)
            }
            connection.end();
            init();
        }
    )
}

function viewLowInventory(){
    connection.query(
        "SELECT * FROM products WHERE stockquantity < 5", function(err, results){
            if (err) throw err;
            for (i in results){
                console.log("Item: " + results[i].productname + ", Price: " + results[i].price + ", Available Quantity: " + results[i].stockquantity)
            }
            connection.end();
        }
    )
}

function addInventory(){
    connection.query("SELECT * FROM products", function(err,results){
        if (err) throw err;
    inq.prompt([
        {
            type: "list",
            name: "itemlist",
            message: "Which item do you need to update?",
            choices: function(){
                var itemList = [];
                        for (var i = 0; i < results.length; i++){
                        itemList.push(results[i].productname);
                        }
                        return itemList;
                    }
        },
        {
            type: "input",
            name: "inventorynum",
            message: "How many items would you like to add to the inventory for this item?",
            validate: function(value) {
                if (isNaN(value) === false) {
                  return true;
                }
                return false;
            }
        }
        ]).then(function(res){
            console.log("Number to add: " + res.inventorynum);
            connection.query(
                "UPDATE products SET stockQuantity = stockQuantity + " + res.inventorynum + " WHERE productname = '" + res.itemlist + "'", function(err,results){
                if (err) throw err;
                console.log("Inventory updated!");
            })
        })
    })
}

init();
    // function addInventory(){
        // allow manager to update stockQuantity of an item
        // inquirer.prompt("which item would you like to update?")
        // console.log('current stockQuantity')
        // inquirer.prompt("how much would you like to add?")
        // console.log('new stockQuantity = #)
    //}
    // function addNewProduct(){
        // SQL query (INSERT INTO products (name, price, stockQuantity) VALUES (res.name, res.price,res.StockQuantity)
    //}
  