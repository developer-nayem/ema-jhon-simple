import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    //const totalPrice = cart.reduce( (total, prd) => total + prd.price, 0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

    let shipping = 0;
    if(total > 50){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }else if(total > 0){
        shipping = 12.99;
    };

    const tax = (total / 10).toFixed(2);
    const totalPrice = total + shipping + Number(tax);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items ordered: {cart.length}</p>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping Cost: {formatNumber(shipping)}</small></p>
            <p><small>Tex: {tax}</small></p>
            <p>Total Price: $ {formatNumber(totalPrice)}</p>
        </div>
    );
};

export default Cart;