import React from 'react';
import {injectStripe} from 'react-stripe-elements';
import { CompactPicker } from 'react-color';
import CardSection from '../CardSection';
import {Row, FlexRow, Container} from "../../Grid";
import {Spacer} from "../../Section";
import API from "../../../utils/API";

class CheckoutForm extends React.Component {

  state = {
    published: "",
    donation: 0,
    username: "",
    color: "#ff0000",
    canvas_id: this.props.canvas_id,
    canvas_title: this.props.canvas_title
  }

  componentDidMount() {
      console.log(this.state)
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
    rgb_color: this.state.color,
    message: this.state.message,
    username: this.state.username,
    donation_amount: this.state.donation,
    canvas_id: this.state.canvas_id,
    canvas_title: this.state.canvas_title
    }) 
    .then(window.location.assign("/canvas/" + this.state.canvas_id))
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
      else{
        console.log("good")
        this.saveDiv()}
      })
  })};

  render() {
    return (
      <Container>
            <form onSubmit={this.handleSubmit}>
              <Row>
                  <div className="col-md-6 justify-content-end d-flex">
                      <div>
                      <Row>
                          <input value={this.state.color} onChange={event => this.setState({color: event.target.value})}/>
                      </Row>
                      <Spacer space="20px"/>
                      <Row>
                          <div>
                            <CompactPicker className="colorPicker" color={this.state.color} onChangeComplete={newColor => this.setState({color: newColor.hex})}/>
                          </div>
                      </Row>
                      </div>
                  </div>
                  <div className="col-md-6 justify-content-start d-flex">
                      <div className="formHelp">
                          <h4>
                              div color
                          </h4>
                          <p>
                              Pick your color
                          </p>
                      </div>
                      <div className="checkTheDiv" style={{backgroundColor: this.state.color}}/>
                  </div>
              </Row>
              <Spacer space="20px"/>
              <Row>
                  <div className="col-md-6 justify-content-end d-flex">
                      <textarea onChange={event => this.setState({message: event.target.value})} name="message" placeholder="message"/>
                  </div>
                  <div className="col-md-6 justify-content-start d-flex">
                      <div className="formHelp">
                          <h4>
                              message
                          </h4>
                          <p>
                              Give your div a message
                          </p>
                      </div>
                  </div>
              </Row>
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
    </Container>
    );
  }
}

export default injectStripe(CheckoutForm);