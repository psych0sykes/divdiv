import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import CardSection from '../CardSection';
import API from "../../../utils/API";

class CheckoutForm extends React.Component {


  state = {
    published: ""
  }

  // fetch("/create-payment-intent", {
  //   method: "POST",
  //   body: JSON.stringify(orderData)
  // })
  //   .then(function(result) {
  //     return result.json();
  //   })
  //   .then(function(data) {
  //     return setupElements(data);
  //   })

  intent = () => API.createPaymentIntent({})
                  .then((data) => {
                    this.setState({
                      published: data.data.clientSecret
                    })
                  });



  handleSubmit = async (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();
    await this.intent().then(() => {
    // See our confirmCardPayment documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-confirm-card-payment
    this.props.stripe.confirmCardPayment(this.state.published, {
      payment_method: {
        card: this.props.elements.getElement('card'),
        billing_details: {
          name: 'Jenny Rosen',
        },
      }
    })});
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardSection />
        <button>Confirm order</button>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);