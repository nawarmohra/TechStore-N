# TechStore
Project Grupp 6
# Shopping cart using JS

## Introduction:
	This project is created using Html5, Css, ES6 (Javascript) and Local storage.
We have stored our initial data in json file. Fetch API has been used to retrieve data from json file.
We have used OO concepts to develop this cart system. Project is divided into three classes named Phone, Display and Storage.
(Mohsin control the work and he's who created the class and Nawar worked with hem on class)
Style & layouting Amir fix it with giving each class name then add the appropriate style in one file. 

### Phone:
In Phone Class,  we have used fetch API to retrieve data from json file.

### Display:
Display class is mainly focusing on display the phones(image, title. price) on interface. displayPhones, addToCart and setCartValues are the main functions that we have created to perform certain operations.
### Storage:
Storage Class is used to store, receive and update  data in local database. To perform these operations we have created 6 different functions. Name of these functions are db, getUserItem, saveCart, getSaveCart, saveTotalAmount, getTotalAmount.

#### loginForm:

(username == "Mohsin" && pass == "root")

##### Fetch API: 
Fetch Api is a one of the method to fetch resources from DB.There were other possible ways e.g JQuery and Axios to perform fetching task.

## Difficulties to develop the Project: 
There were a couple of difficulties during the development process.
1: It was difficult to decide the architecture of the whole system e.g how many classes should we have? What will be the methods or functions should we have?
2: Data flow was another thing that took time to understand?
3: It was difficult to delete the items from the shop page, the amount still saved in the storage.
4: we had an issue with Amir computer he could not push anything from his computer to Github so He send file to Nawar and   she did instead of him , We had collaboration.
5: We faced an issue with updating the number of items in the cart after the reloading we fixed by just add a single line
      document.getElementsByClassName("counter")[0].innerHTML = (JSON.parse(localStorage.getItem("cartItems"))).length;
below phoneDOM.style.opacity = "1"; in DOMContentLoader 

## Tools & technologies:

Below is a list of tools and technologies that we have used for development:
Html/CSS
Flex/Bootstrap
Javascript
Git/Github



