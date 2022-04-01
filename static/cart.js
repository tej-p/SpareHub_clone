var cartArray = JSON.parse(localStorage.getItem("cartArray")) || [];

console.log({cartArray:cartArray})
document.getElementById("cartIcon").textContent = cartArray.length;

{/* <div class="basket-product">
    <div class="item">
    <div class="product-image">
        <img src="http://placehold.it/120x166" alt="Placholder Image 2" class="product-frame">
    </div>
    <div class="product-details">
        <h1><strong><span class="item-quantity">1</span> x Whistles</strong> Amella Lace Midi Dress</h1>
        <p><strong>Navy, Size 10</strong></p>
        <p>Product Code - 232321939</p>
    </div>
    </div>
    <div class="price">26.00</div>
    <div class="quantity">
    <input type="number" value="1" min="1" class="quantity-field">
    </div>
    <div class="subtotal">26.00</div>
    <div class="remove">
    <button>Remove</button>
    </div>
</div> */}

displayCart(cartArray);


function displayCart(array){
    array.map((elem) => {
        //title
        document.getElementById('proTitle').textContent = elem.title;
      
        //price
        document.getElementById('proPrice').innerHTML = "<i style='font-size:13px' class='fas'>&#xf156; </i>"+elem.price;
        
        var qty = document.getElementById('proQty').value;

        document.getElementById('subtotalPrice').innerHTML = "<i style='font-size:13px' class='fas'>&#xf156; </i>"+elem.price
         //img

        document.getElementById('product-frame').src = elem.img;
        document.getElementById("basket-subtotal").innerHTML = "<i style='font-size:13px' class='fas'>&#xf156; </i>"+elem.price
        document.getElementById("basket-total").innerHTML = "<i style='font-size:13px' class='fas'>&#xf156; </i>"+elem.price

    })

}


let cross = document.getElementById("remove")

cross.onclick=()=>{
    document.getElementById("main").remove();

    var div = document.getElementById("emptyCart");
    // var p = document.createElement("p")
    div.innerHTML = "<p>You have no items in your shopping cart.<br/>Click <a href='index.html'>here</a> to continue shopping.</p>"
    // div.append(p);

    // document.getElementById("basket-subtotal").innerHTML = "0.00"
    // document.getElementById("basket-total").innerHTML = "0.00"

    cartArray = [];
    localStorage.setItem("cartArray",JSON.stringify(cartArray));
    document.getElementById("cartIcon").innerHTML = "0";
    

}


document.getElementById("checkoutPage").addEventListener("click", ()=> {
    window.location.href = "./checkout.html"
})
   

// function calc() 
// {
//   var price = document.getElementById("ticket_price").innerHTML;
//   var noTickets = document.getElementById("num").value;
//   var total = parseFloat(price) * noTickets
//   if (!isNaN(total))
//     document.getElementById("total").innerHTML = total
// }
   
  
  







// /* Set values + misc */
// var promoCode;
// var promoPrice;
// var fadeTime = 300;

// /* Assign actions */
// $('.quantity input').change(function() {
//   updateQuantity(this);
// });

// $('.remove button').click(function() {
//   removeItem(this);
// });

// $(document).ready(function() {
//   updateSumItems();
// });

// $('.promo-code-cta').click(function() {

//   promoCode = $('#promo-code').val();

//   if (promoCode == 'summer20' || promoCode == '10OFF') {
//     //If promoPrice has no value, set it as 10 for the 10OFF promocode
//     if (!promoPrice) {
//       promoPrice = 10;
//     } else if (promoCode) {
//       promoPrice = promoPrice * 1;
//     }
//   } else if (promoCode != '') {
//     alert("Invalid Promo Code");
//     promoPrice = 0;
//   }
//   //If there is a promoPrice that has been set (it means there is a valid promoCode input) show promo
//   if (promoPrice) {
//     $('.summary-promo').removeClass('hide');
//     $('.promo-value').text(promoPrice.toFixed(2));
//     recalculateCart(true);
//   }
// });

// /* Recalculate cart */
// function recalculateCart(onlyTotal) {
//   var subtotal = 0;

//   /* Sum up row totals */
//   $('.basket-product').each(function() {
//     subtotal += parseFloat($(this).children('.subtotal').text());
//   });

//   /* Calculate totals */
//   var total = subtotal;

//   //If there is a valid promoCode, and subtotal < 10 subtract from total
//   var promoPrice = parseFloat($('.promo-value').text());
//   if (promoPrice) {
//     if (subtotal >= 10) {
//       total -= promoPrice;
//     } else {
//       alert('Order must be more than 10 for Promo code to apply.');
//       $('.summary-promo').addClass('hide');
//     }
//   }

//   /*If switch for update only total, update only total display*/
//   if (onlyTotal) {
//     /* Update total display */
//     $('.total-value').fadeOut(fadeTime, function() {
//       $('#basket-total').html(total.toFixed(2));
//       $('.total-value').fadeIn(fadeTime);
//     });
//   } else {
//     /* Update summary display. */
//     $('.final-value').fadeOut(fadeTime, function() {
//       $('#basket-subtotal').html(subtotal.toFixed(2));
//       $('#basket-total').html(total.toFixed(2));
//       if (total == 0) {
//         $('.checkout-cta').fadeOut(fadeTime);
//       } else {
//         $('.checkout-cta').fadeIn(fadeTime);
//       }
//       $('.final-value').fadeIn(fadeTime);
//     });
//   }
// }

// /* Update quantity */
// function updateQuantity(quantityInput) {
//   /* Calculate line price */
//   var productRow = $(quantityInput).parent().parent();
//   var price = parseFloat(productRow.children('.price').text());
//   var quantity = $(quantityInput).val();
//   var linePrice = price * quantity;

//   /* Update line price display and recalc cart totals */
//   productRow.children('.subtotal').each(function() {
//     $(this).fadeOut(fadeTime, function() {
//       $(this).text(linePrice.toFixed(2));
//       recalculateCart();
//       $(this).fadeIn(fadeTime);
//     });
//   });

//   productRow.find('.item-quantity').text(quantity);
//   updateSumItems();
// }

// function updateSumItems() {
//   var sumItems = 0;
//   $('.quantity input').each(function() {
//     sumItems += parseInt($(this).val());
//   });
//   $('.total-items').text(sumItems);
// }

// /* Remove item from cart */
// function removeItem(removeButton) {
//   /* Remove row from DOM and recalc cart total */
//   var productRow = $(removeButton).parent().parent();
//   productRow.slideUp(fadeTime, function() {
//     productRow.remove();
//     recalculateCart();
//     updateSumItems();
//   });
// }