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


// function validateForm() {
//     var name = document.getElementById("firstName").value;
//     var add = document.getElementById("add").value;
//     var city = document.getElementById("city").value;
//     var post = document.getElementById("post").value;
//     if (name== "" || name == null || add== "" || add == null || city== "" || city == null || post== "" || post == null) {
//       alert("All fields must be filled out, Add the total address.");
//       return false;
//     }
//     else{
//         alert("Adress Added Successfully. click on 'next' to continue payment")
//         window.location.href = "./payment.html"
//     }
//   }

document.getElementById("makePayment").addEventListener("click", ()=> {
    window.location.href = "./payment.html"
})  



$(function () {
    $('#submit').attr('disabled', true);
    $('#post').change(function () {
        if ($('#firstName').val() != '' && $('#add').val() != '' && $('#city').val() != '' && $('#post').val() != '' ) {
            $('#submit').attr('disabled', false);

            alert("Shipping Adress Added Successfully! Click on 'Next' to confirm Order!");

            // setTimeout(function () {
                
            // }, 2000);
            
        } else {
            $('#submit').attr('disabled', true);
               
        }
    });
 });







 

//  $(function () {
//     $('#submits').attr('disabled', true);
//     $('#initial_5').change(function () {
//         if ($('#initial_1').val() != '' && $('#initial_2').val() != '' && $('#initial_3').val() != '' && $('#initial_4').val() != '' && $('#initial_5').val() != '') {
//             $('#submits').attr('disabled', false);
//         } else {
//             $('#submits').attr('disabled', true);
//         }
//     });
//  });