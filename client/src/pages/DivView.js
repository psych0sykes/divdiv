import React, { Component } from "react";
import {Container, FlexRow } from "../components/Grid";
import {Slogan} from "../components/Section";
import Icon from "../components/Icon";
import DivDiv from "../components/DivDiv";
import API from "../utils/API";



class DivView extends Component {

    state = {
        rgb_color: "",
        username: "",
        donation_amount: "",
        canvas_title: "",
        message: "", 
        canvas_id: ""  
    }

    componentDidMount() {
        this.getDiv();
    }

    getDiv = () => {
        API.getDivById(this.props.match.params.id)
        .then((res) => {
            console.log("DIV")
            console.log(res.data)
            this.setState({
                rgb_color: res.data.rgb_color,
                username: res.data.username,
                donation_amount: this.formatMoney(res.data.donation_amount,0,".",","),
                canvas_title: res.data.canvas_title,
                message: res.data.message,
                canvas_id: res.data.canvas_id
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
    
    toCanvas = () => {
        window.location.assign("/canvas/" + this.state.canvas_id)
    }

    render() {
        return(
            <Container>
                <FlexRow wrap="nowrap">
                    <Icon size="25"/>
                    <Slogan>{this.state.username}'s div from {this.state.canvas_title}</Slogan>
                    <Icon size="25"/>
                </FlexRow>
                <FlexRow wrap="noWrap">
                    <div className="col-md-6 justify-content-end d-flex">
                        <DivDiv RgbColor={this.state.rgb_color} divStyle={{width: "175px", height: "175px"}}/>
                    </div>
                    <div className="col-md-6 justify-content-start d-flex">
                        <table>
                                <tr>
                                    <td>
                                        username: {this.state.username}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        message: {this.state.message}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        donation amount: ${this.state.donation_amount}
                                    </td>
                                </tr>
                        </table>
                    </div>
                </FlexRow>
                <FlexRow>
                <button onClick={this.toCanvas}>go to canvas</button>
                </FlexRow>
            </Container>
        )
    }
}

export default DivView