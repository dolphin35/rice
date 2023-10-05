

let priceElements = document.querySelectorAll(".price");
priceElements.forEach(element => {
    let price = element.textContent;
    let formattedPrice = parseFloat(price.replace(',', ''));
    let formattedPriceString = formattedPrice.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        currencyDisplay:  'symbol' // Dolar simgesi ile bir boşluk ekler
    });
    element.textContent = formattedPriceString;
});