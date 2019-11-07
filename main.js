const phoneDOM = document.querySelector(".mobiles");
const cartDOM = document.querySelector(".cart img");
const counter = document.querySelector(".counter");
let cart = [];
let DOMbutton = [];

class Phone{
   async getPhones(){
       try{
           let result = await fetch("products.json");
           let data = await result.json();           
           return data;
       }
       catch(error){
           console.log(error);
       }
    }
}

class Display{
   
    displayPhones(phones){
        let result =" ";
        let style = {
            border: "none",
            borderBottom: "1px solid #F5F5F5",
            textAlign: "center",
            background: "ffffff",
            fontSize:"bold",
            bgcolor:"#F5F5F5"
        };
        
        
        cartDOM.addEventListener('click', () =>{
            cartDisplay();
        });

        function cartDisplay(){
            
           let finalCart =  Storage.getSaveCart();
            
           result =' ';
           console.log(finalCart);
            


             let div1Cart = document.createElement("div"); 
             div1Cart.className= "container mt-lg-5 text-center"; 
             let h2Cart = document.createElement("h2");
             h2Cart.className= "text-center"; 
             h2Cart.innerHTML ="Customer Cart";
             div1Cart.appendChild(h2Cart);
             let div2Cart = document.createElement("div");
             div2Cart.setAttribute("class", "row text-center justify-content-center");
             div1Cart.appendChild(div2Cart); 
             for(let i = 0; i <finalCart.length ;i++){
                var div3Cart = document.createElement("div");
                div3Cart.className= "col-lg-2 col-md-6"; 
                div3Cart.setAttribute("id",finalCart[i].id);
                var h3Cart = document.createElement("h3");
                h3Cart.innerHTML =finalCart[i].title;
                var h4Cart = document.createElement("h3");
                h4Cart.innerHTML =finalCart[i].price + " Kr";
                var removeButton = document.createElement("button");
                removeButton.data = i
                removeButton.className= "btn btn-danger btn-remove"; 

                removeButton.onclick = function() {
                    console.log(finalCart[i].id)
                    var itemToRemove = document.getElementById(finalCart[i].id);
                    div3Cart.parentNode.removeChild(itemToRemove);
                    var cartFromStorage = JSON.parse(localStorage.getItem("cartItems"));
                    cartFromStorage.splice(this.data, 1)
                    localStorage.setItem("cartItems", JSON.stringify(cartFromStorage))

                    let itemsTotalCount = 0;
                    let itemsTotalAmount = 0;

                    cartFromStorage.map(item => {
                      itemsTotalCount += item.amount;
                      itemsTotalAmount += item.price;
                      counter.innerText = itemsTotalCount;
                    })
                    Storage.saveTotalAmount(itemsTotalAmount); 

                    document.getElementById("totalPriceText").innerHTML = "Total Price: " + Storage.getTotalAmount() + " Kr";
                }
                var textButton = document.createTextNode("Remove");
                removeButton.appendChild(textButton);
                div3Cart.appendChild(h3Cart);
                div3Cart.appendChild(h4Cart);
                div3Cart.appendChild(removeButton);
                div2Cart.appendChild(div3Cart);
                }
                let outerh4Cart = document.createElement("h4");
                outerh4Cart.id = "totalPriceText"
                outerh4Cart.innerHTML = "Total Price: " + Storage.getTotalAmount() + " Kr";
                div1Cart.appendChild(outerh4Cart); 
                var finishShoping = document.createElement("button");
                finishShoping.className= "btn btn-primary btn-lg finishShoping"; 
                finishShoping.setAttribute("data-toggle","modal");
                finishShoping.dataset.target="#myModal";
                finishShoping.setAttribute("type","button");
                var finishShopingtext = document.createTextNode("Finish Shoping");
                finishShoping.appendChild(finishShopingtext);
                div1Cart.appendChild(finishShoping); 

            result = div1Cart;
            console.log(phoneDOM);
            phoneDOM.innerHTML =  '' ;
            phoneDOM.appendChild(result);
          
           console.log(phoneDOM);
            
         }


        console.log(cartDOM);
        phones.forEach(phone => {
    result +=`
    <div class="card bgcolor" style="border:${style.border}; border-bottom:${style.borderBottom};text-align:${style.textAlign}; background:${(phone.id === 102 || phone.id === 104)? style.bgcolor : style.background}">
    <div class="card-body">
        <h1 class="card-title" style="font-weight:${style.fontSize}">${phone.title}</h1>
        <p class="card-text" style="font-weight:${style.fontSize}">${phone.description}</p>
        <img  src="${phone.image}" width="200px" hight="200px">
        <div class="card-text " style="font-weight:${style.fontSize}">${phone.price} kr</div>
        <button type="button" class="btn btn-add-to-cart  btn-lg btn-primary mt-4 mb-5" data-id=${phone.id} ><span style="color: #ffffff;"> <i class="fa fa-cart-arrow-down mr-2"></i> </span>Add in Cart</button>
      </div>
    </div>         
`;
        });
        
        phoneDOM.innerHTML = result;     
    } 