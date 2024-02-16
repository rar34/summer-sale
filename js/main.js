const makePurchaseButton = document.getElementById('btn-make-purchase');
const button = document.getElementById('btn-coupon');
makePurchaseButton.setAttribute('disabled', true);
button.setAttribute('disabled', true);
const cards = document.querySelectorAll('.card');

let totalPrice = 0;
for (const card of cards) {
    // console.log(card);
    card.addEventListener('click', function () {
        // console.log('clicked')
        const display = document.getElementById('list-container');
        const title = card.querySelector('h2').innerText;
        const li = document.createElement('li');
        li.innerText = title;
        display.appendChild(li);

        const getPrice = card.querySelector('span').innerText;
        const price = parseFloat(getPrice);
        // console.log(price)
        totalPrice += price;
        console.log(totalPrice)
        const currentPriceElement = document.getElementById('current-price');
        const payablePriceField = document.getElementById('payable-price');
        currentPriceElement.innerText = totalPrice.toFixed(2);
        payablePriceField.innerText = totalPrice.toFixed(2);

        // const currentPriceText = currentPriceElement.innerText;
        // const currentPrice = parseFloat(currentPriceText);
        // console.log(currentPrice)
        // const totalPrice = currentPrice + price;
        // currentPriceElement.innerText = totalPrice;
        if(totalPrice > 0){
            makePurchaseButton.removeAttribute('disabled');
        }
        if(totalPrice >=200){
            button.removeAttribute('disabled');
        }

    });
}


// get discount
// const button = document.getElementById('btn-coupon');
button.addEventListener('click', function () {
    const inputField = document.getElementById('coupon-field');
    const couponValue = inputField.value;
    const couponCode = couponValue.split(" ").join("").toUpperCase();
    const discountField = document.getElementById('discount-price');
    const payablePriceField = document.getElementById('payable-price');
    if(totalPrice >= 200){
        if(couponCode === 'SELL200'){
            // const remainingPrice =  totalPrice - 200;
            const discount = totalPrice * 20/100;
            discountField.innerText = discount.toFixed(2);
            const payablePrice = totalPrice - discount;
            payablePriceField.innerText = payablePrice.toFixed(2);
            inputField.value = '';
        }
        else{
            alert("Invalid coupon code")
        }
    }
    else{
        alert("shop more");
    }
})


// makePurchaseButton.setAttribute('disabled', true)
makePurchaseButton.addEventListener('click', function(){
    if(totalPrice > 0){
        console.log(totalPrice)
    }
})


// go home

document.getElementById('btn-go-home').addEventListener('click', function(){
    window.location.href = 'index.html'
})