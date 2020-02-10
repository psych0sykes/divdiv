import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import CardSection from '../CardSection';
import {Row, FlexRow} from "../../Grid";
import API from "../../../utils/API";

class CheckoutForm extends React.Component {

  state = {
    published: "",
    donation: 0,
    divForm: this.props.divForm,
    username: ""
  }

  componentDidMount() {
      API.loggedIn()
      .then((res) => {
        console.log(res.data.username)
        this.setState({username: res.data.username})})
      .catch((err) => console.log(err));
  }

  intent = () => API.createPaymentIntent({amount: this.state.donation})
                  .then((data) => {
                    this.setState({
                      published: data.data.clientSecret
                    })
                  });

  saveDiv = () => {API.saveDiv({
    rgb_color: this.state.divForm.rgb_color,
    message: this.state.divForm.message,
    username: this.state.username,
    donation_amount: this.state.donation,
    canvas_id: this.state.divForm.canvas_id,
    canvas_title: this.state.divForm.canvas_title
    }) 
    .then(console.log("done")
      // window.location.assign("/canvas/" + this.state.divForm.canvas_id)
      )
    .catch(err => console.log(err))}

  handleSubmit = (event) => {
    event.preventDefault();
    this.intent().then(() => {
      console.log("payment")

      // PUT UP A LOADING ICON HERE

    // See our confirmCardPayment documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-confirm-card-payment
    this.props.stripe.confirmCardPayment(this.state.published, {
      payment_method: {
        card: this.props.elements.getElement('card'),
        billing_details: {
          name: this.state.username,
        },
      }
    }).then((res) => { 
      if(res.error)
      {console.log("bad")}
      else{this.saveDiv()}
      })
  })};

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