var product = JSON.parse(localStorage.getItem("single_product")) || [];
console.log({product: product})
  // var { title, img, price } = product;
  // document.head.title.textContent = title;



const display = ({ title, img, price } = product) => {
  
  //title
  document.getElementById('displayTitle').textContent = title;
  document.getElementById('displayTitle2').textContent = title;

  //price
  document.getElementById('displayPrice').innerHTML = "<i style= 'font-size: 28px' class='fas'>&#xf156;</i>"+price;
  
   //img
   document.getElementById('displayImg').src = img;

   document.getElementById("addCart").addEventListener("click", ()=>{
     addCart(product)
   })
}

display();



//<--------------Add cart---------------->
var cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];

console.log({cartArray:cartArray})
document.getElementById("cartIcon").textContent = cartArray.length;



function addCart(product) {
  console.log({productAdded: product})
    cartArray.push(product);
    // console.log(cartArray);
    document.getElementById("cartIcon").textContent = cartArray.length;
    localStorage.setItem("cartArray",JSON.stringify(cartArray));
}


const goCart = () => {
  window.location.href = "./cart.html"
}
