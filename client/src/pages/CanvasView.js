import React, { Component } from "react";
import { Col, Row, Container, FlexRow } from "../components/Grid";
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
                support_total: res.data.support_total,
                donation_total: this.formatMoney(res.data.donation_total,0,".",",")
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
                                    <h1>${this.state.donation_total}</h1>
                                    <p>funds raised</p>
                                </div>
                            </div>
                            <FlexRow>
                                <div className="bioButtonLabel">
                                    <button className="createDivButton">
                                        add a div
                                    </button>
                                </div>
                                <p>help support this canvas</p>
                            </FlexRow>
                        </div>
                    </FlexRow>
                    <Canvas canvasId={this.props.match.params.id} divSize="75px" border="none" click={true}/>
                </Container>
            </div>
        );
    }
}

export default CanvasCreate;