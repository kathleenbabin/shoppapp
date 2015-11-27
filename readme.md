##ENDPOINT INFORMATION


**api/routes/product_routes.js

GET /products -  no parameters required, returns all products
GET /products/:productId - requires an integer, returns product that matches that id and looks like:
				{
					id:INT
					name:STRING,
					description: STRING,
					category:STRING,
					image: STRING,
					price:INT,
					quantity:INT
				} 

POST /products/:productId - requires a product Id and object that looks like:
				{
					name:STRING,
					description: STRING,
					category:STRING,
					image: STRING,
					price:INT,
					quantity:INT
				}

PUT /products - create a new product, requires object to look like:
				{
					name:STRING,
					description: STRING,
					category:STRING,
					image: STRING,
					price:INT,
					quantity:INT
				}
DEL /products/:productId - delete product that matches the id passed





##TASKS
=========

STEP 1 TO DO:
app.js - Write admin state

​
STEP 2 TO DO:
auth.ctrl.js : SAVE token from response in localStorage.authToken

​
STEP 3 TO DO:
admin.ctrl.js : Write a logout function that removes the authToken from local storage and sends you back to the auth state (refer to top of admin.ctrl.js for guidance)

​
STEP 4 TO DO:
product.ctrl.js : Write api call that sends data to product.srv.js (check the addProduct function in the service, and use the updateProduct function in product.ctrl.js as guidance)

​
STEP 5 TO DO:
product.ctr.js: create the product object in updateProduct() function, look at partials/admin-edit-product.html to see the model names for each field

​ 
STEP 6 TO DO:
product.ctrl.js: write the statement that makes that passes the product id to the productService deleteProduct function

​ 
STEP 7 TO DO:
product.srv.js:  INSIDE the promise, call the removeProduct function in the service, look at updateProduct inside of product.srv.js to see how to call a function  inside a service (** note _this vrs this**)

​ 
STEP 8 TO DO:
product.srv.js: loop over the products  array (initialized at the top of the file) and remove the product that as the id which matches the id of the product you are deleting
 
STEP 9 TO DO:
shop-main.html: write an ng-repeat to loop over and draw all the products in the view