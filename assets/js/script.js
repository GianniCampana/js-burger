var priceEl = document.getElementById('price')
var button = document.getElementById('button')
var nameUser = document.getElementById('name')
var ingredients = document.getElementsByClassName("ingredient-checkbox");
var coupon = document.getElementById('coupon')


var defaultPrice = 50;
var coupons = ['sconto2021', 'sconto-bool'];
var discount = 0.2;
writePrice(defaultPrice, priceEl);




button.addEventListener('click', function(){
    /* controllo nome */
    var nomeInserito = nameUser.value.trim();

      if(nomeInserito.lenght === 0){
          alert("inserisci il nome");
      }else{ 
          
          /* somma elementi */
          var priceIngredient = 0;
          for(var i=0; i< ingredients.length; i++){
              var ingredient = ingredients[i];
              if(ingredient.checked === true){
                  priceIngredient += parseInt(ingredient.value);
              }
          }
          
          var totalPrice = defaultPrice + priceIngredient;

          if(coupons.includes(coupon.value) === true){
                totalPrice -= totalPrice * discount;
          }

          writePrice(totalPrice, priceEl);

      }
    
   
    
});





function writePrice(value, target){
    target.innerHTml = value.toFixed(2);
}
