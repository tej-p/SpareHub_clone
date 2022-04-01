var cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];

console.log({cartArray:cartArray})
document.getElementById("cartIcon").textContent = cartArray.length;

displayCart(cartArray);


function displayCart(array){
    array.map((elem) => {
        //title
        document.getElementById('sumTitle').textContent = elem.title;
      
        //price
        document.getElementById('sumPrice').innerHTML = "<i style='font-size:13px' class='fas'>&#xf156; </i>"+elem.price;
        
        //img

        document.getElementById('sumImg').src = elem.img;
        

    })

}

document.getElementById("confirm").onclick = () => {
    alert("Thank You For Shopping");
    document.getElementById("newCust").innerHTML = "<p id='alert'>Order placed Successfully!</p>";
    
    cartArray = [];
    localStorage.setItem("cartArray",JSON.stringify(cartArray));
    document.getElementById("cartIcon").innerHTML = "0";
};

// cross.onclick=()=>{
//     document.getElementById("main").remove();

//     var div = document.getElementById("emptyCart");
//     // var p = document.createElement("p")
//     div.innerHTML = "<p>You have no items in your shopping cart.<br/>Click <a href='index.html'>here</a> to continue shopping.</p>"
//     // div.append(p);

//     // document.getElementById("basket-subtotal").innerHTML = "0.00"
//     // document.getElementById("basket-total").innerHTML = "0.00"

//     cartArray = [];
//     localStorage.setItem("cartArray",JSON.stringify(cartArray));
//     document.getElementById("cartIcon").innerHTML = "0";
    

// }