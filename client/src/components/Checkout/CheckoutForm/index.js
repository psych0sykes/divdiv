import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import CardSection from '../CardSection';
import {Row, FlexRow} from "../../Grid";
import API from "../../../utils/API";

class CheckoutForm extends React.Component {

  state = {
    published: "",
    donation: 0
  }

  componentDidMount() {
    console.log(this.props.username)
  }

  intent = () => API.createPaymentIntent({amount: this.state.donation})
                  .then((data) => {
                    this.setState({
                      published: data.data.clientSecret
                    })
                  });

  handleSubmit = (event) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    event.preventDefault();
    this.intent().then(() => {
      console.log("payment")
    // See our confirmCardPayment documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-confirm-card-payment
    this.props.stripe.confirmCardPayment(this.state.published, {
      payment_method: {
        card: this.props.elements.getElement('card'),
        billing_details: {
          name: 'Jenny Rosen',
        },
      }
    }).then((res) => { res.error ? console.log("bad") : console.log("good")
    })
  })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Row>
                        <div className="col-md-6 justify-content-end d-flex">
                            <div>$</div>
                            <input style={{width: "125px"}} onChange={event => this.setState({donation: event.target.value})} name="donation" placeholder="donation"/>
                        </div>
                        <div className="col-md-6 justify-content-start d-flex">
                            <div className="formHelp">
                                <h4>
                                    donation
                                </h4>
                                <p>
                                    How much would you like to donate?
                                </p>
                            </div>
                        </div>
                    </Row>
        <FlexRow>
          <CardSection />
        </FlexRow>
        <FlexRow>
          <button>Confirm ${this.state.donation} donation</button>
        </FlexRow>
      </form>
    );
  }
}

export default injectStripe(CheckoutForm);