import React, { Component } from "react";
import { Col, Row, Container, FlexRow } from "../components/Grid";
import {Slogan} from "../components/Section";
import Icon from "../components/Icon";
import Canvas from "../components/Canvas";
import CanvasBio from "../components/Canvas/CanvasBio";
import API from "../utils/API";



class DivView extends Component {

    state = {
        username: "",
        
    }

    componentDidMount() {
        this.status();
        this.getDiv();
    }

    getDiv = () => {
        API.getDivById(this.props.match.params.id)
        .then((res) => {
            console.log(res.data)
            this.setState({
                username: res.data.username,
                canvas_title: res.data.canvas_title,
                message: res.data.message,
                donation_amount: this.formatMoney(res.data.donation_amount,0,".",",")
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
            <div></div>
        )
    }
}

export default DivView