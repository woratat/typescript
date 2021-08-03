function calDiscount(price:number,rate:number,){
    let discount = price * rate
    return discount
}

function calDiscountWithDefaultParam(price:number,rate:number = 0.5,){  //set default parameter
    let discount = price * rate
    return discount
}

console.log(calDiscountWithDefaultParam(1800,0.15))