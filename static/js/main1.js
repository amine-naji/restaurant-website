var removeButton = document.getElementsByClassName("btn-danger");
    for( i=0; i<removeButton.length; i++){
        removeButton[i].addEventListener("click",removeItem)
    }
var quantityInput = document.getElementsByClassName("cart-quantity-input")
    for( i=0; i<quantityInput.length; i++){
        quantityInput[i].addEventListener("change",quantityChange)
    }
function removeItem(e){
    e.target.parentElement.parentElement.remove()
    updateTotal()
}
function quantityChange(e){
    if(isNaN(e.target.value) || e.target.value <= 0 ){
        e.target.value = 1
    }
    updateTotal()
}   
var addButton = document.querySelectorAll(".btn-primary")
    for(i=0; i<addButton.length; i++){
        addButton[i].addEventListener("click",function(e){
            var shopItem = e.target.parentElement.parentElement
            var shopTitle = shopItem.getElementsByClassName("shop_title")[0].innerText
            var shopPrice = shopItem.getElementsByClassName("card-title")[0].innerText
            var shopImg = shopItem.getElementsByClassName("card-img-top")[0].src
            addItemsToCart(shopTitle,shopPrice,shopImg)
            updateTotal()
        })
    }
function addItemsToCart(title,price,img){
    var cartRow = document.createElement("div")
        cartRow.classList.add("cart-row")
    var cartItems = document.getElementsByClassName("cart-items")[0]
    var cartName = document.getElementsByClassName("cart-item-title")
        for(i=0; i<cartName.length; i++){
            if(cartName[i].innerText == title){
                swal({
                    title: "This item is already added to the carte",
                    icon: "error",
                    button: "OK",
                  });
                  return
            }
        }
    var contentOfCartRow = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${img}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
    </div>
    <span class="cart-price cart-column">${price}</span>
    <div class="cart-quantity cart-column">
        <input class="cart-quantity-input" type="number" value="1">
        <button class="btn btn-danger" type="button">REMOVE</button>
    </div>`   
    cartRow.innerHTML = contentOfCartRow
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChange)
}
function updateTotal(){
    var carItems = document.getElementsByClassName("cart-items")[0];
    var cartRws = carItems.getElementsByClassName("cart-row");
    var total = 0;
    for( i=0; i<cartRws.length; i++){
        var priceElement = cartRws[i].getElementsByClassName("cart-price")[0];
        var quantityElement = cartRws[i].getElementsByClassName("cart-quantity-input")[0];
        var price = parseFloat(priceElement.textContent.replace('DHS' , ''))
        var quantity = quantityElement.value ;
        total = total + (price * quantity)
    }
    total = total.toFixed(2)
    document.getElementsByClassName('cart-total-price')[0].innerText = total + ' DHS'
}
document.getElementsByClassName("btn-purchase")[0].addEventListener("click",function(){
    var carItems = document.getElementsByClassName("cart-items")[0]
    if( carItems.hasChildNodes()){
        swal({
            title: "Request Sent Successfully ! Your order was confirm ",
            icon: "success",
            button: "OK",
          });
          carItems.innerHTML = ""
    }else{
        swal({
            title: "The cart is empty ! Try again",
            icon: "error",
            button: "OK",
          });
    }
    updateTotal()
})