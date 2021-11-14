// import React from 'react'
// import StripeCheckout from 'react-stripe-checkout';

// const StripeCheckoutButton = ({ price }) => {
//     const priceForStripe = price * 100
//     const publishableKey = 'pk_test_51JtMaqE94xanVntseAoq96IsPempg5ts0AveAsBUuMheRpTFkXUR119cokn7dsNbeZMmQL7dIpAmovIWmZ4Fh8Oz00Nrs16a1I'

//     const onToken = token => {
//         console.log(token);
//         alert('Payment Successful')
//     }
//     return ( 
//         <StripeCheckout
//             label="Pay Now"
//             name="ProgramingKicks"
//             billingAddress
//             shippingAddress
//             image='https://sendeyo.com/updownload/file/script/d/f3eb2117da'
//             description={'Your total is $${price}'}
//             amount={priceForStripe}
//             panelLabel='Pay Now'
//             token={onToken}
//             stripeKey={publishableKey}
//         />
//     );
// };

// export default StripeCheckoutButton;