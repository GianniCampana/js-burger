var priceEl = document.getElementById('price');
var button = document.getElementById('button');
var nameUser = document.getElementById('name');
var ingredients = document.getElementsByClassName("ingredient-checkbox");
var coupon = document.getElementById('coupon');


var defaultPrice = 50;
var coupons = ['sconto2021', 'sconto-bool'];
var discount = 0.2;

writePrice(defaultPrice, priceEl);




button.addEventListener('click', function(){
    /* controllo nome */
     var nomeInserito = nameUser.value.trim();

      if(nomeInserito.length === 0){
          alert("inserisci il nome");
      }else{ 
         
        stampaprezzo(defaultPrice);
          

      }
    
});


function stampaprezzo(value){
    var prezzoTot = calcoloPrezzo(value);
    var cou_pon = coupon.value;
    if(coupons.includes(cou_pon)){
        prezzoTot = dis_count(prezzoTot, discount)
    }
    writePrice(prezzoTot, priceEl);
}

function dis_count(prezzoDisc, disc){
    return prezzoDisc * (1 - disc);
}

function calcoloPrezzo(value){
    var priceIngredient = 0;

    for(var i=0; i< ingredients.length; i++){
        var ingredient = ingredients[i];

        if(ingredient.checked === true){
            priceIngredient += parseInt(ingredient.value);
        }
    }
    return value + priceIngredient;
}






function writePrice(value, target){
    target.innerHTML = value.toFixed(2);
    
}
