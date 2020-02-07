import React, { Component } from "react";
import { Container, FlexRow } from "../components/Grid";
import {Slogan} from "../components/Section";
import Icon from "../components/Icon";
import Canvas from "../components/Canvas";
import CanvasBio from "../components/Canvas/CanvasBio";
import API from "../utils/API";



class CanvasCreate extends Component {

    state = {
        username: "",
        canvas_title: "",
        bio: "",
        support_total: "",
        donation_total: ""
    }

    componentDidMount() {
        this.status();
        this.title();
    }
    
    status = () => {
        API.loggedIn()
        .then((res) => {
        //   console.log(res.data.username)
          this.setState({username: res.data.username})})
        .catch((err) => console.log(err));
    }

    title = () => {
        API.getCanvasById(this.props.match.params.id)
        .then((res) => {
            console.log(res.data)
            this.setState({
                canvas_title: res.data.canvas_title,
                bio: res.data.bio,
                })
        }).catch((err) => console.log(err));
    }

    formatMoney = (amount, decimalCount, decimal, thousands) => {
        try {
          decimalCount = Math.abs(decimalCount);
          decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
      
          const negativeSign = amount < 0 ? "-" : "";
      
          let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
          let j = (i.length > 3) ? i.length % 3 : 0;
      
          return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
        } catch (e) {
          console.log(e)
        }
      };
    
    divForm = (id) => {
        window.location.assign("/div/create/canvas/" + this.state.canvas_title + "/" + id)
    }

    donation_total = (value) => {
        this.setState({donation_total: value})
    }

    support_total = (value) => {
        this.setState({support_total: value})
    }

    render() {
        return(
            <div>
                <Container>
                    <FlexRow wrap="nowrap">
                        <Icon size="25"/>
                            <Slogan>{this.state.canvas_title}</Slogan>
                        <Icon size="25"/>
                    </FlexRow>
                    <FlexRow>
                        <div className="col-md-6">
                            <CanvasBio bio={this.state.bio}/>
                        </div>
                        <div className="col-md-6">
                            <div className="scorecardWrapper">
                                <div className="canvasScorecard">
                                    <h1>{this.state.support_total}</h1>
                                    <p>supporters</p>
                                </div>
                                <div className="canvasScorecard">
                                    <h1>${this.formatMoney(this.state.donation_total,0,".",",")}</h1>
                                    <p>funds raised</p>
                                </div>
                            </div>
                            <FlexRow>
                                <div className="bioButtonLabel">
                                    <button className="createDivButton" onClick={() => this.divForm(this.props.match.params.id)}>
                                        add a div
                                    </button>
                                </div>
                                <p>help support this canvas</p>
                            </FlexRow>
                        </div>
                    </FlexRow>
                    <Canvas canvasId={this.props.match.params.id} divSize="75px" border="none" click={true} donationTotal={this.donation_total} supportTotal={this.support_total}/>
                </Container>
            </div>
        );
    }
}

export default CanvasCreate;