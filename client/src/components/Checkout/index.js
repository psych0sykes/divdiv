import React from 'react';
import {Elements} from 'react-stripe-elements';

import InjectedCheckoutForm from './CheckoutForm';

class Checkout extends React.Component {

  render() {
    return (
      <Elements>
        <InjectedCheckoutForm canvas_id={this.props.canvas_id} canvas_title={this.props.canvas_title}/>
      </Elements>
    );
  }
}

export default Checkout;