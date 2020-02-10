import React from 'react';
import {Elements} from 'react-stripe-elements';

import InjectedCheckoutForm from './CheckoutForm';

class Checkout extends React.Component {
  render() {
    return (
      <Elements>
        <InjectedCheckoutForm divForm={this.props.divForm}/>
      </Elements>
    );
  }
}

export default Checkout;