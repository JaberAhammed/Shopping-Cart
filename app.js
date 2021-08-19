function updateProductNumber(product, price,isIncreasing){
    const producInput = document.getElementById(product+ '-number');
    let producNumber = producInput.value;
    
    if (isIncreasing==true){
        producNumber = parseInt (producNumber) +1;
    }
    else if(producNumber >0){
        producNumber = parseInt (producNumber)-1; 
    }
    producInput.value=producNumber;

    //update  total
  const producTotal = document.getElementById(product+'-total');
  producTotal.innerText = producNumber * price;
   
  //calculet total 
  calculateTotal();
}

function getInputValue(product){
    const productInput  = document.getElementById( product+'-number');
    const productNumber = parseInt (productInput.value);
    return productNumber;
}

function calculateTotal(){
 
  const phoneTotal = getInputValue('phone')*1219;
  const caseTotal =getInputValue('case')*59;
   const sunTotal = phoneTotal + caseTotal;
   const tax = sunTotal / 10; 
   const totalPrice = sunTotal + tax ;

    document.getElementById('sub-total').innerText = sunTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}



//phone increase decrewase event
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone',1219,true); 

});
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber( 'phone',1219,false);
})



//handle case increase decrewase event
document.getElementById('cade-plus').addEventListener('click',function(){
    updateProductNumber('case',59,true);
   
   
})
document.getElementById('case-minus').addEventListener('click',function(){
    updateProductNumber( 'case',59,false);
})
